import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // Usamos las fuentes de Google Fonts cargadas via CDN
                serif: ['"DM Serif Display"', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                // Paleta original (mantenida por compatibilidad)
                sand: {
                    50: '#FAF9F7',
                    100: '#F0EBE5',
                    200: '#E6DDD3',
                    300: '#D6C7B5',
                },
                earth: {
                    400: '#A68A76',
                    500: '#9C7E6A',
                    600: '#8C705F',
                    800: '#543D32',
                    900: '#3D2B24',
                },
                // Nueva paleta según requisitos
                beige: {
                    50: '#FAF9F7',
                    100: '#F0EBE5',
                    200: '#E6DDD3',
                    300: '#D6C7B5',
                },
                coffee: {
                    light: '#9C7E6A',
                    medium: '#8C705F',
                    dark: '#543D32',
                    darker: '#3D2B24',
                },
                mountain: {
                    1: '#E6DDD3',
                    2: '#D6C7B5',
                    3: '#A68A76',
                    4: '#8C705F',
                },
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'fade-up': 'fadeUp 0.8s ease-out forwards',
                'wave': 'wave 3s ease-in-out infinite',
                'spin-slow': 'spin 15s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                wave: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '50%': { transform: 'translateX(10px)' },
                },
            }
        },
    },
    plugins: [],
};
export default config;