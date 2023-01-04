/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: ['IBM-3270', 'IBM 3270'],
        },
        extend: {
            colors: {
                dark: '#1E1E1E',
                primary: '#0B4F6C',
                secondary: '#05374D',
                tertiary: '#087E8B',
                quaternary: '#12B4C5',
                light: '#FBFBFF',
            },
            margin: {
                "site-default": '10rem',
                "tablet": '6rem',
                "mobile": '1.5rem',
                "spacing": '2rem',
            },
            padding: {
                "site-default": '10rem',
                "tablet": '6rem',
                "mobile": '1.5rem',
                "spacing": '2rem',
            },
            spacing: {
                "site-default": '10rem',
                "tablet": '6rem',
                "mobile": '1.5rem',
                "spacing": '2rem',
            },
            transitionDelay: {
                primary: "200ms",
            }
        },
    },
    plugins: [
        require("tailwindcss-hyphens")
    ],
};