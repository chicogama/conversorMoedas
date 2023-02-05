export interface Conversao {
    success?: boolean;
    query?: any[];
    amount: number;
    from: any;
    to: any;
    info?: any[];
    historical?: boolean;
    date?: Date;
    result?: number;
}
