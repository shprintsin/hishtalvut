export type InfoDataProps = {
    title?: string;
    subtitle: string;
    description: string;
    id: number;
    summary: {
        title?: string;
        subtitle?: string;
    }[];
    chart: {
        type: string;
        labels: number[];
        series: {
            labels: string;
            data: number[];
            backgroundColor?: string;
        }[];
    };
};
