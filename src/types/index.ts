export interface MenuItem {
    id: number;
    name:string;
    description:string;
    price:number;
    category: 'espresso' | 'cold' | 'pourover' | 'seasonal';
    isPopular?:boolean;
}

export interface Testimonial{
    id:number;
    name:string;
    initials:string;
    text:string;
    rating:number;
}

export interface OpeningHour {
    day: string; 
    hours: string;
}

export interface stats{
    Number:number;
    label:string;
}