module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontSmoothing: {
                'subpixel-antialiased': 'subpixel-antialiased',
            },
        },
    },
    variants: {
        extend: {
            fontSmoothing: ['hover', 'focus'],
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}