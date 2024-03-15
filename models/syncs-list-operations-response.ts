/*
MultiWoven API

Open-source Reverse ETL that makes data segmentation, sync and activation both easy and fully secure.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SyncsListOperationsResponseDataInner } from './syncs-list-operations-response-data-inner';
import { SyncsListOperationsResponseLinks } from './syncs-list-operations-response-links';

/**
 * 
 * @export
 * @interface SyncsListOperationsResponse
 */
export interface SyncsListOperationsResponse {
    /**
     * 
     * @type {Array<SyncsListOperationsResponseDataInner>}
     * @memberof SyncsListOperationsResponse
     */
    'data': Array<SyncsListOperationsResponseDataInner>;
    /**
     * 
     * @type {SyncsListOperationsResponseLinks}
     * @memberof SyncsListOperationsResponse
     */
    'links': SyncsListOperationsResponseLinks;
}
