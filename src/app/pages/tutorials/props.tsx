export interface Article {
    name: string;
    id: string;
    count: number;
    uri: string;
    slug: string;
  }
  
  export interface TutorialProps {
    articles: Article[];
    name:string,
    count: number;
    uri: string;
    description: string;
    icon: string;
    slug: string;
  }
  