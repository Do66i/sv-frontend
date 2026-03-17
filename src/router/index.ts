import { createRouter, createWebHistory } from 'vue-router';
import Board from "../views/Board.vue";

const routes = [
    {
        path: '/',
        name: 'BoardList',
        component: Board
    },
    // 추후 게시글 상세 페이지, 게시글 작성 페이지 등 추가 예정
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
