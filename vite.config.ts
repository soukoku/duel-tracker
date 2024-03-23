import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// import fs from 'fs'
// import path from 'path'
// import child_process from 'child_process'
// import { env } from 'process'
// import pkg from './package.json' assert { type: 'json' }

// const baseFolder =
//   env.APPDATA !== undefined && env.APPDATA !== ''
//     ? `${env.APPDATA}/ASP.NET/https`
//     : `${env.HOME}/.aspnet/https`

// const certificateName = pkg.name || 'appname'
// const certFilePath = path.join(baseFolder, `${certificateName}.pem`)
// const keyFilePath = path.join(baseFolder, `${certificateName}.key`)

// if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
//   if (
//     0 !==
//     child_process.spawnSync(
//       'dotnet',
//       [
//         'dev-certs',
//         'https',
//         '--export-path',
//         certFilePath,
//         '--format',
//         'Pem',
//         '--no-password',
//         '--trust'
//       ],
//       { stdio: 'inherit' }
//     ).status
//   ) {
//     throw new Error('Could not create certificate.')
//   }
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  // server: {
  //   https: {
  //     key: fs.readFileSync(keyFilePath),
  //     cert: fs.readFileSync(certFilePath)
  //   }
  // }
})
