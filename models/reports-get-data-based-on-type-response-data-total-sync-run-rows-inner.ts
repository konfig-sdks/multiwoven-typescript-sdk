/*
MultiWoven API

Open-source Reverse ETL that makes data segmentation, sync and activation both easy and fully secure.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface ReportsGetDataBasedOnTypeResponseDataTotalSyncRunRowsInner
 */
export interface ReportsGetDataBasedOnTypeResponseDataTotalSyncRunRowsInner {
    /**
     * 
     * @type {string}
     * @memberof ReportsGetDataBasedOnTypeResponseDataTotalSyncRunRowsInner
     */
    'time_slice'?: string;
    /**
     * 
     * @type {number}
     * @memberof ReportsGetDataBasedOnTypeResponseDataTotalSyncRunRowsInner
     */
    'total_count'?: number;
    /**
     * 
     * @type {number}
     * @memberof ReportsGetDataBasedOnTypeResponseDataTotalSyncRunRowsInner
     */
    'failed_count'?: number;
    /**
     * 
     * @type {number}
     * @memberof ReportsGetDataBasedOnTypeResponseDataTotalSyncRunRowsInner
     */
    'success_count'?: number;
}

