import type { Config } from 'tailwindcss';
import { colors } from './tailwind.colors';

export const tailwindConfig: Partial<Config> = {
    mode: 'jit',
    purge: {
        content: ['./**/*.vue'],
    },
    variants: {},
    plugins: [],
    theme: {
        extend: {
            colors,
        },
    },
};
