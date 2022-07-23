module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6767',
        soft: '#F7ECDE',
      },
      boxShadow: {
        primary: '4px 4px 4px #E67878',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
