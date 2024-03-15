/*
MultiWoven API

Open-source Reverse ETL that makes data segmentation, sync and activation both easy and fully secure.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SyncsListOperationsResponseDataInnerAttributes } from './syncs-list-operations-response-data-inner-attributes';

/**
 * 
 * @export
 * @interface SyncsListOperationsResponseDataInner
 */
export interface SyncsListOperationsResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof SyncsListOperationsResponseDataInner
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof SyncsListOperationsResponseDataInner
     */
    'type'?: SyncsListOperationsResponseDataInnerTypeEnum;
    /**
     * 
     * @type {SyncsListOperationsResponseDataInnerAttributes}
     * @memberof SyncsListOperationsResponseDataInner
     */
    'attributes'?: SyncsListOperationsResponseDataInnerAttributes;
}

type SyncsListOperationsResponseDataInnerTypeEnum = 'syncs'


