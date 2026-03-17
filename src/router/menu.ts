export interface MenuItem {
    id: string;
    title: string;
    path: string;
    icon: string;
};

export const menuItems: MenuItem[] = [
    {
        id: 'board',
        title: '게시판',
        path: '/',
        icon: '📋', // 나중에 Lucide 아이콘이나 FontAwesome으로 교체 가능;
    },
    // 여기에 메뉴를 추가하면 자동으로 사이드바에 반영됨;
];
