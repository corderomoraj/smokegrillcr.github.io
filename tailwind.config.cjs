module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  safelist: [
    'text-white',
    'bg-teal-600',
    'min-h-screen',
    'rounded-full',
    'shadow-lg',
    'w-14',
    'h-14',
    'flex',
    'items-center',
    'justify-center'
  ],
  theme: {
    extend: {
      colors: {
        smoke: "#111111",
        brandRed: "#B71C1C",
        flame: "#FF6F00",
        smokeWhite: "#F5F5F5"
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};
