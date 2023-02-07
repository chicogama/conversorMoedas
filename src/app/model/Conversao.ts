export interface Conversao {
    success?: boolean;
    query: Query;
    rate: number;
    info: Info;
    historical: boolean;
    date: Date;
    result: number;
}

export interface OrdenaConversao {
    from: string;
    to: string;
    amount: number;
    rate: number;
    result: number;
    data: string;
    hour: string;
}

export interface Query {
    from: string;
    to: string;
    amount: number;
}

export interface Info {
    rate: number;
}
