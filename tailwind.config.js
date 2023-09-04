/** @type {import('tailwindcss').Config} */
export default {
  experimental: {
    mode: 'jit',
  },
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'mate-green':    '#8ea980',
  
        'midnight-blue': '#47415a',
  
        'white-pink':    '#ffecfa',
        'breeze-pink':   '#dea8d1',
        'mate-pink':     '#e782d0',
        'midnight-pink': '#8d6984',
      },
    }
  },
  plugins: [],
}

