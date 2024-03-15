/*
MultiWoven API

Open-source Reverse ETL that makes data segmentation, sync and activation both easy and fully secure.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ConnectorDefinitionsGetBasedOnTypeResponseInnerConnectorSpec } from './connector-definitions-get-based-on-type-response-inner-connector-spec';

/**
 * 
 * @export
 * @interface ConnectorDefinitionsGetBasedOnTypeResponseInner
 */
export interface ConnectorDefinitionsGetBasedOnTypeResponseInner {
    /**
     * 
     * @type {Array<string>}
     * @memberof ConnectorDefinitionsGetBasedOnTypeResponseInner
     */
    'tags'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ConnectorDefinitionsGetBasedOnTypeResponseInner
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectorDefinitionsGetBasedOnTypeResponseInner
     */
    'connector_type'?: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectorDefinitionsGetBasedOnTypeResponseInner
     */
    'connector_subtype'?: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectorDefinitionsGetBasedOnTypeResponseInner
     */
    'documentation_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectorDefinitionsGetBasedOnTypeResponseInner
     */
    'github_issue_label'?: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectorDefinitionsGetBasedOnTypeResponseInner
     */
    'icon'?: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectorDefinitionsGetBasedOnTypeResponseInner
     */
    'license'?: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectorDefinitionsGetBasedOnTypeResponseInner
     */
    'release_stage'?: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectorDefinitionsGetBasedOnTypeResponseInner
     */
    'support_level'?: string;
    /**
     * 
     * @type {ConnectorDefinitionsGetBasedOnTypeResponseInnerConnectorSpec}
     * @memberof ConnectorDefinitionsGetBasedOnTypeResponseInner
     */
    'connector_spec'?: ConnectorDefinitionsGetBasedOnTypeResponseInnerConnectorSpec;
}

