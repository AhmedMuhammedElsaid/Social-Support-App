import type { Config } from 'tailwindcss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const buttonPlugin = (api: any) => {
    const { addComponents } = api;

    addComponents({
        '.btn': {
            '@apply font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed':
                {},
        },
        '.btn-primary': {
            '@apply bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500': {},
        },
        '.btn-secondary': {
            '@apply bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500': {},
        },
        '.btn-outline': {
            '@apply border border-gray-300 hover:bg-gray-50 text-gray-700 focus:ring-blue-500': {},
        },
        '.btn-danger': {
            '@apply bg-red-600 hover:bg-red-700 text-white focus:ring-red-500': {},
        },
        '.btn-sm': {
            '@apply px-3 py-1.5 text-sm': {},
        },
        '.btn-md': {
            '@apply px-4 py-2 text-base': {},
        },
        '.btn-lg': {
            '@apply px-6 py-3 text-lg': {},
        },
    });
};

const config: Config = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [buttonPlugin],
};

export default config;


