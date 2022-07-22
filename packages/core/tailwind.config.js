/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{html,js}'],

    corePlugins: {
        preflight: true,
    },

    theme: {
        extend: {
            colors: {
                primary: {
                    100: '#ea4442',
                    200: '#e83330',
                    300: '#f28d8c',
                    400: '#f7bbba',
                },
            },
        },
    },
}
