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
    components: [
        { path: '~/components', extensions: ['vue'], pathPrefix: false },
    ],
    modules: [],
    buildModules: [
        'nuxt-vite',
        '@nuxt/typescript-build',
        '@nuxtjs/composition-api/module',
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
    },
};

export default config;
