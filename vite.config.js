import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output:{
        manualChunks(id) {
            if (id.includes('node_modules')) {
                return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
        }
    },
      external: [
        // 'src/assets/cases/concreate/concreate.mp4',
        // 'src/assets/cases/baio/Komp1.mp4',
        // 'src/assets/cases/baio/baioclip.mp4',
        // 'src/assets/cases/gamel/_Gamel1.mp4',
        // 'src/assets/cases/gamel/_Gamel2.mp4',
        // 'src/assets/cases/gamel/_Gamel3.mp4',
        // 'src/assets/cases/gamel/_Gamel4.mp4',
        // 'src/assets/cases/hitech/_Hitech1.mp4',
        // 'src/assets/cases/hitech/_Hitech2.mp4',
        // 'src/assets/cases/skilled/_Skilled1.mp4',
        // 'src/assets/cases/stickyprojects/_Sticky1.mp4',
        // 'src/assets/cases/taskmanager/_Task1.mp4',
        // import.meta.url
      ]
    }
  }
})