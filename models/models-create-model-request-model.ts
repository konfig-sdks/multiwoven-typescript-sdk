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
 * @interface ModelsCreateModelRequestModel
 */
export interface ModelsCreateModelRequestModel {
    /**
     * 
     * @type {string}
     * @memberof ModelsCreateModelRequestModel
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsCreateModelRequestModel
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof ModelsCreateModelRequestModel
     */
    'query': string;
    /**
     * 
     * @type {string}
     * @memberof ModelsCreateModelRequestModel
     */
    'query_type': string;
    /**
     * 
     * @type {string}
     * @memberof ModelsCreateModelRequestModel
     */
    'primary_key'?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelsCreateModelRequestModel
     */
    'connector_id': number;
}

