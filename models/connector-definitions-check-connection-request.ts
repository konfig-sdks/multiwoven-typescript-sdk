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
 * @interface ConnectorDefinitionsCheckConnectionRequest
 */
export interface ConnectorDefinitionsCheckConnectionRequest {
    /**
     * 
     * @type {string}
     * @memberof ConnectorDefinitionsCheckConnectionRequest
     */
    'type'?: ConnectorDefinitionsCheckConnectionRequestTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ConnectorDefinitionsCheckConnectionRequest
     */
    'name'?: string;
    /**
     * Generic connection specification structure. Specifics depend on the connector type.
     * @type {{ [key: string]: any; }}
     * @memberof ConnectorDefinitionsCheckConnectionRequest
     */
    'connection_spec'?: { [key: string]: any; };
}

type ConnectorDefinitionsCheckConnectionRequestTypeEnum = 'source' | 'destination'


