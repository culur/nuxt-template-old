import { NuxtConfig } from '@nuxt/types';
import { dev } from './app/env';

const config: NuxtConfig = {
    dev,
    ssr: false,
    target: 'static',
    head: {
        title: 'Nuxt Template',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
        ],
        link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
    loading: false,
    css: ['~/assets/style/index.scss'],
    components: [
        { path: '~/components', extensions: ['vue'], pathPrefix: false },
    ],
    tailwindcss: {
        configPath: '~/tailwind.config.ts',
        cssPath: false,
    },
    modules: [],
    buildModules: [
        'nuxt-vite',
        '@nuxt/typescript-build',
        '@nuxtjs/composition-api/module',
        '@nuxtjs/tailwindcss',
    ],
    vite: {
        server: {
            fs: { strict: false },
        },
        vue: {},
    },
    plugins: [],
    build: {
        extractCSS: !dev,
        postcss: {
            preset: {
                autoprefixer: {},
                features: {
                    'custom-properties': false,
                },
            },
        },
    },
};

export default config;
