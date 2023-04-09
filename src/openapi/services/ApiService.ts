/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompaniesReturn } from '../models/CompaniesReturn';
import type { Filters } from '../models/Filters';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ApiService {

    /**
     * Get All Companies
     * @param requestBody 
     * @returns CompaniesReturn Successful Response
     * @throws ApiError
     */
    public static getAllCompaniesApiGetAllCompaniesPost(
requestBody: Filters,
): CancelablePromise<Array<CompaniesReturn>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/get_all_companies',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Company
     * @param inn 
     * @param limit 
     * @returns string Successful Response
     * @throws ApiError
     */
    public static getCompanyApiGetCompanyPost(
inn: number,
limit: number,
): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/get_company',
            query: {
                'inn': inn,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Count
     * @returns number Successful Response
     * @throws ApiError
     */
    public static getCountApiGetCountPost(): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/get_count',
        });
    }

    /**
     * Get Cities
     * @param city 
     * @returns string Successful Response
     * @throws ApiError
     */
    public static getCitiesApiGetAllCitiesPost(
city?: string,
): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/get_all_cities',
            query: {
                'city': city,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Ping
     * @returns any Successful Response
     * @throws ApiError
     */
    public static pingApiPingGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ping',
        });
    }

}
