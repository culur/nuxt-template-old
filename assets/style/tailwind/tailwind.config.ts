import type { Config } from 'tailwindcss';
import { colors } from './tailwind.colors';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export const tailwindConfig: Partial<Config> = {
    mode: 'jit',
    purge: {
        content: ['./**/*.vue'],
    },
    variants: {},
    plugins: [
        //
        forms({ strategy: 'class' }),
        typography,
    ],
    theme: {
        extend: {
            colors,
        },
    },
};
