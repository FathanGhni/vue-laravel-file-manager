import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import _ from 'lodash'; // Membawa seluruh library lodash (besar)
import debounce from 'lodash/debounce'; // Hanya membawa fungsi debounce (lebih kecil)
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
    plugins: [
        vue(),
        viteCompression({ algorithm: 'gzip' }), // atau 'brotliCompress' untuk Brotli compression
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                },
            },
        },
    },


    css: { 
        preprocessorOptions: { 
            scss: { 
                charset: false // Menghilangkan charset dari file SCSS
            } 
        } 
    },
});
