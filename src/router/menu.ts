export interface MenuItem {
    id: string;
    title: string;
    path: string;
    icon: string;
}

export const menuItems: MenuItem[] = [
    {
        id: 'dashboard',
        title: '대시보드',
        path: '/',
        icon: '🏠', // 홈 대시보드
    },
    {
        id: 'board',
        title: '커뮤니티',
        path: '/community',
        icon: '📋', // 게시판
    },
    {
        id: 'intelligence',
        title: '인텔리전스',
        path: '/intelligence',
        icon: '💡', // 정보 분석
    },
    {
        id: 'archive',
        title: '아카이브',
        path: '/archive',
        icon: '📦', // 개인 저장소
    },
];
