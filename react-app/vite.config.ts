import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// import Counter2 from "./src/Counter2.tsx";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment : 'jsdom',
    globals : true,
    setupFiles :'./src/Counter2.test.tsx'
  }

})