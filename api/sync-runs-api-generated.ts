/* tslint:disable */
/* eslint-disable */
/*
MultiWoven API

Open-source Reverse ETL that makes data segmentation, sync and activation both easy and fully secure.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { SyncRunsListBySyncId404Response } from '../models';
// @ts-ignore
import { SyncRunsListBySyncIdResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * SyncRunsApi - axios parameter creator
 * @export
 */
export const SyncRunsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves a list of sync runs for a specific sync, optionally filtered by status.
         * @summary List sync runs for a specific sync
         * @param {number} syncId The ID of the sync to list runs for.
         * @param {string} [status] Optional status to filter the sync runs by.
         * @param {number} [page] Page number for pagination.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listBySyncId: async (syncId: number, status?: string, page?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'syncId' is not null or undefined
            assertParamExists('listBySyncId', 'syncId', syncId)
            const localVarPath = `/api/v1/syncs/{sync_id}/sync_runs`
                .replace(`{${"sync_id"}}`, encodeURIComponent(String(syncId !== undefined ? syncId : `-sync_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v1/syncs/{sync_id}/sync_runs',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SyncRunsApi - functional programming interface
 * @export
 */
export const SyncRunsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SyncRunsApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieves a list of sync runs for a specific sync, optionally filtered by status.
         * @summary List sync runs for a specific sync
         * @param {SyncRunsApiListBySyncIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listBySyncId(requestParameters: SyncRunsApiListBySyncIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SyncRunsListBySyncIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listBySyncId(requestParameters.syncId, requestParameters.status, requestParameters.page, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SyncRunsApi - factory interface
 * @export
 */
export const SyncRunsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SyncRunsApiFp(configuration)
    return {
        /**
         * Retrieves a list of sync runs for a specific sync, optionally filtered by status.
         * @summary List sync runs for a specific sync
         * @param {SyncRunsApiListBySyncIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listBySyncId(requestParameters: SyncRunsApiListBySyncIdRequest, options?: AxiosRequestConfig): AxiosPromise<SyncRunsListBySyncIdResponse> {
            return localVarFp.listBySyncId(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for listBySyncId operation in SyncRunsApi.
 * @export
 * @interface SyncRunsApiListBySyncIdRequest
 */
export type SyncRunsApiListBySyncIdRequest = {
    
    /**
    * The ID of the sync to list runs for.
    * @type {number}
    * @memberof SyncRunsApiListBySyncId
    */
    readonly syncId: number
    
    /**
    * Optional status to filter the sync runs by.
    * @type {string}
    * @memberof SyncRunsApiListBySyncId
    */
    readonly status?: string
    
    /**
    * Page number for pagination.
    * @type {number}
    * @memberof SyncRunsApiListBySyncId
    */
    readonly page?: number
    
}

/**
 * SyncRunsApiGenerated - object-oriented interface
 * @export
 * @class SyncRunsApiGenerated
 * @extends {BaseAPI}
 */
export class SyncRunsApiGenerated extends BaseAPI {
    /**
     * Retrieves a list of sync runs for a specific sync, optionally filtered by status.
     * @summary List sync runs for a specific sync
     * @param {SyncRunsApiListBySyncIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SyncRunsApiGenerated
     */
    public listBySyncId(requestParameters: SyncRunsApiListBySyncIdRequest, options?: AxiosRequestConfig) {
        return SyncRunsApiFp(this.configuration).listBySyncId(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
