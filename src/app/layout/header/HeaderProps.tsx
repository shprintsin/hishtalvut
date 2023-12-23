export interface BarItemsProps{
    items:{
        label:string,
        uri:string,
        order:number
    }[]
}

export interface MainNavProps {
    Nav: BarItemsProps["items"];
    children?: React.ReactNode;
  }

  export interface BarLogoProps {
    title: string | "Logo";
    src: string | "/public/logo.png";
    width: string | "180";
    uri: string | "/";
    className?: string;
  }

  export interface HeaderProps {
    PrimaryNav:BarItemsProps["items"],
    Logo:BarLogoProps,
    children?:React.ReactNode
  }