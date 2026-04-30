import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Remplacez 'NOM-DE-VOTRE-DEPOT' par le nom exact sur GitHub (ex: 'ZELYNTO')
  // Si c'est votre site principal (techrist.github.io), mettez juste '/'
  base: '/ZELYNTO/', 
})