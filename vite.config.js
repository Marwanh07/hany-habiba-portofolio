import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = process.env.GITHUB_ACTIONS === 'true' ? '/hany-habiba-portofolio/' : '/'

export default defineConfig({
  plugins: [react()],
  base,
})
