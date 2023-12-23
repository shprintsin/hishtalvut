type LinkGroup = {
    title: string;
    uri: string;
    id: number;
    children: {
        title: string;
        uri: string;
        id: number;
    }[];
};

type SocialProps = {
    TextItem: string;
    Items: Link[];
};
type Link = {
    TextItem?: string;
    Title?: string;
    uri?: string;
    Icon?: React.ReactNode;
};
export type FooterLinksProps = {
    Links: LinkGroup[];
    Social: SocialProps;
};

export type FooterItemsProps = {
    FooterItems:{
        Links: LinkGroup[];
        Social: SocialProps;
    }
    };
    