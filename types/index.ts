export interface Navlink {
    label:string;
    href:string;
    icon:string;
}

export interface SocialLink{
    platform:string;
    url:string;
    icon:string;
}

export interface HeroSection{
    icon:string;
    label:string;
    href?:string;
}

export interface Skill{
    name:string;
    icon:string;
}

export interface Project{
    title:string;
    description:string;
    image:string;
    href:string;
}

export interface Experience{
    company:string;
    position:string;
    startDate:string;
    endDate:string;
    description:string;
    skills:string[];
    link: string[];
    role:string;
    duration: string;
}

export interface Education{
    degree:string;
    institution:string;
    startDate:string;
    endDate:string;
    duration: string;
    link?: string;
}

export interface Project{
    title:string;
    description:string;
    image:string;
    href:string;
    link?:string[];
    github?:string;

}

export interface contactInfo{
    email:string;
    phone:string;
    address:string;
}

export interface contactForm{
    name:string;
    email:string;
    message:string;
}

export interface footerLinks{
    title:string;
    links:string[];
}

export interface Blog{
    slug:string;
    title:string;
    description:string;
    image:string;
    publishedAt:string;
    tags:string[];
    readingTime:string;
    href:string;
}

export type HeroInfoItem = {
  icon: string;
  label: string;
};