/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Filters = {
    offset: number;
    limit: number;
    rating?: boolean;
    cities?: Array<string>;
    iporul?: string;
    lower_trade_limit?: number;
    upper_trade_limit?: number;
    inn?: number;
    rating_by_deals?: boolean;
};
