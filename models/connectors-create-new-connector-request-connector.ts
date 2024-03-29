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
 * @interface ConnectorsCreateNewConnectorRequestConnector
 */
export interface ConnectorsCreateNewConnectorRequestConnector {
    /**
     * 
     * @type {string}
     * @memberof ConnectorsCreateNewConnectorRequestConnector
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof ConnectorsCreateNewConnectorRequestConnector
     */
    'connector_type': ConnectorsCreateNewConnectorRequestConnectorConnectorTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ConnectorsCreateNewConnectorRequestConnector
     */
    'connector_name': string;
    /**
     * Configuration details for the connector. Structure depends on the connector definition.
     * @type {{ [key: string]: any; }}
     * @memberof ConnectorsCreateNewConnectorRequestConnector
     */
    'configuration': { [key: string]: any; };
}

type ConnectorsCreateNewConnectorRequestConnectorConnectorTypeEnum = 'source' | 'destination'


