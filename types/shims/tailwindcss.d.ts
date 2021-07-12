declare module 'tailwindcss' {
    import type { DeepPartial } from '~/types/utils/types';
    import type {
        TailwindConfig,
        TailwindPurgeConfig,
        // eslint-disable-next-line import/no-unresolved
    } from 'tailwindcss/tailwind-config';

    interface TailwindStandardProperty {
        readonly [key: string]: string;
        readonly [key: number]: string;
    }
    type TailwindMapValue<T> = (theme: (key: string) => string) => T;

    interface PurgeConfig extends TailwindPurgeConfig {
        // https://tailwindcss.com/docs/optimizing-for-production#safelisting-specific-classes
        safelist?: string[];
    }

    type TailwindTheme = TailwindConfig['theme'];

    type Theme = Omit<TailwindTheme, 'extend' | 'colors'> & {
        colors: DeepPartial<TailwindTheme['colors']> & {
            [key: string]: string | TailwindStandardProperty;
        };
    };

    type ThemeMapValue = {
        [P in keyof Theme]?:
            | Partial<Theme[P]>
            | TailwindMapValue<Partial<Theme[P]>>;
    };

    export interface Config extends Omit<TailwindConfig, 'purge' | 'theme'> {
        mode?: string;
        purge: string[] | PurgeConfig;
        theme: Partial<ThemeMapValue & { extend: ThemeMapValue }>;
    }
}
