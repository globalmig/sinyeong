export const CATEGORY: {
    [key: string]: {
        title: string;
        banner: string;
        categories?: { name: string, url: string, }[]
    }
} = {
    about: {
        title: '회사소개',
        banner: "/images/about_banner.jpg",
        categories: [
            { name: "인사말", url: "introduce", },
            { name: "사업분야", url: "business", },
            { name: "보유 기술 및 특허", url: "technology", },
        ],
    },
    proofing: {
        title: '방수 도료 공사',
        banner: "/images/business_banner.jpg",
        categories: [
            { name: "폴리우레아 수지 도막 방수", url: "polyurea", },
            { name: "차열 방수", url: "heat_insulation", },
            { name: "교면 방수", url: "bridge_surface", },
        ],
    },
    ceiling: {
        title: '건축 내외장재',
        banner: "/images/ceiling_banner.jpg",
        categories: [
            { name: "금속 천장재", url: "metal", },
            { name: "금속 흡음 천장재", url: "acoustic_metal", },
        ],
    },
    pavement: {
        title: '도로 포장',
        banner: "/images/pavement_banner.jpg",
        categories: [
            { name: "박층 포장", url: "layer", },
        ],
    },
    traffic: {
        title: '교통 안전',
        banner: "/images/traffic_banner.jpg",
        categories: [
            { name: "발광형 교통 안전 시설물", url: "luminous", },
            { name: "도로 안내 표지판", url: "guidance_signs", },
        ],
    },
    gallery: {
        title: '갤러리',
        banner: "/images/gallery_banner.jpg",
    },
};