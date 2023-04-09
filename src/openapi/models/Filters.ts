/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Filters = {
    offset: number;
    limit: number;
    rating?: boolean;
    cities?: Array<string>;
    organization?: string;
    lower_trade_limit?: number;
    upper_trade_limit?: number;
    customer_inn?: number;
};
