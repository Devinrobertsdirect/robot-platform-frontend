import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import child_process from 'child_process';
import { env } from 'process';

const baseFolder =
    env.APPDATA !== undefined && env.APPDATA !== ''
        ? `${env.APPDATA}/ASP.NET/https`
        : `${env.HOME}/.aspnet/https`;

const certificateName = "react-platform-frontend";
const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

let httpsConfig = false; // Default to HTTP if certificates can't be loaded

try {
    // Check if the certificate and key files exist
    if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
        // Attempt to generate certificates using `dotnet dev-certs`
        const result = child_process.spawnSync(
            'dotnet',
            [
                'dev-certs',
                'https',
                '--export-path',
                certFilePath,
                '--format',
                'Pem',
                '--no-password',
            ],
            { stdio: 'inherit' }
        );

        if (result.status !== 0) {
            console.warn('Failed to generate HTTPS certificates. Falling back to HTTP.');
        }
    }

    // If the certificate files exist, set the HTTPS config
    if (fs.existsSync(certFilePath) && fs.existsSync(keyFilePath)) {
        httpsConfig = {
            key: fs.readFileSync(keyFilePath),
            cert: fs.readFileSync(certFilePath),
        };
    } else {
        console.warn('HTTPS certificates not found. Falling back to HTTP.');
    }
} catch (error) {
    console.error('Error while handling HTTPS certificates:', error);
    console.warn('Falling back to HTTP.');
}

// Define the proxy target (backend URL)
const target = env.ASPNETCORE_HTTPS_PORT
    ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
    : env.ASPNETCORE_URLS
        ? env.ASPNETCORE_URLS.split(';')[0]
        : 'https://localhost:5001';

// Vite configuration
export default defineConfig({
    plugins: [plugin()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        proxy: {
            '^/weatherforecast': {
                target,
                secure: false, // Don't validate SSL for the proxy
            },
        },
        port: 5173,
        https: httpsConfig, // Use HTTPS if certificates are available
    },
});
