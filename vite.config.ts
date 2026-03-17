import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 1. path 모듈 임포트 (에러나면 npm install -D @types/node 실행)

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3333, // 원하는 포트 번호 입력 (예: 3000);
    strictPort: true, // 설정한 포트가 이미 사용 중이면 에러를 내고 종료함 (권장);
    open: true, // 서버 실행 시 자동으로 브라우저 열기;
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
