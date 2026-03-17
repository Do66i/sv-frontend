import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: () => import('@/views/Dashboard.vue'), // 메인 대시보드
        },
        {
            path: '/community',
            name: 'community',
            component: () => import('@/views/BoardList.vue'), // 기존 게시판
        },
        {
            path: '/intelligence',
            name: 'intelligence',
            component: () => import('@/views/Intelligence.vue'), // 신규
        },
        {
            path: '/archive',
            name: 'archive',
            component: () => import('@/views/Archive.vue'), // 신규
        },
    ],
});

export default router;
