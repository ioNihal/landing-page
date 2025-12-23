// featured Ai Tools

export type FeaturedTool = {
    name: string;
    url: string;
    img: string;
    type: string;
    tags: string[];
    description: string;
    price: number;
    rating: number;
};

export type AITools = {
    id: number;
    name: string;
    url: string;
    verified: boolean;
    img: string;
    bannerImg: string;
    type: string;
    tags: string[];
    description: string;
    price: number;
    rating: number;
}
