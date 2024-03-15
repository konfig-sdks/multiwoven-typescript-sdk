/*
MultiWoven API

Open-source Reverse ETL that makes data segmentation, sync and activation both easy and fully secure.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SyncRecordsListForSyncRunResponseDataInner } from './sync-records-list-for-sync-run-response-data-inner';
import { SyncRunsListBySyncIdResponseLinks } from './sync-runs-list-by-sync-id-response-links';

/**
 * 
 * @export
 * @interface SyncRecordsListForSyncRunResponse
 */
export interface SyncRecordsListForSyncRunResponse {
    /**
     * 
     * @type {Array<SyncRecordsListForSyncRunResponseDataInner>}
     * @memberof SyncRecordsListForSyncRunResponse
     */
    'data'?: Array<SyncRecordsListForSyncRunResponseDataInner>;
    /**
     * 
     * @type {SyncRunsListBySyncIdResponseLinks}
     * @memberof SyncRecordsListForSyncRunResponse
     */
    'links'?: SyncRunsListBySyncIdResponseLinks;
}

