module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                Karla: ['Karla', 'sans-serif']
            },
            colors: {
                'coffee': {
                    100: '#E8D6D0',
                    200: '#C89F94',
                    400: '#A25F4B',
                    600: '#744838',
                },

                'text-footer': '#e5e7eb'
            },
            keyframes: {
                slideDown: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(0%)' },
                },
                fadeIn: {
                    from: { opacity: 0 },
                    to: { opacity: 1 }
                }
            },
            animation: {
                slideDown: 'slideDown 0.4s ease-in-out',
                fadeIn: 'fadeIn 0.5s ease-in-out'

            }
        },
    },
    plugins: [],
}