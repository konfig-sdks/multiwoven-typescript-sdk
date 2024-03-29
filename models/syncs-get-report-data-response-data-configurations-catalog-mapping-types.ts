/*
MultiWoven API

Open-source Reverse ETL that makes data segmentation, sync and activation both easy and fully secure.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SyncsGetReportDataResponseDataConfigurationsCatalogMappingTypesStatic } from './syncs-get-report-data-response-data-configurations-catalog-mapping-types-static';
import { SyncsGetReportDataResponseDataConfigurationsCatalogMappingTypesTemplate } from './syncs-get-report-data-response-data-configurations-catalog-mapping-types-template';

/**
 * Mapping types for catalog data.
 * @export
 * @interface SyncsGetReportDataResponseDataConfigurationsCatalogMappingTypes
 */
export interface SyncsGetReportDataResponseDataConfigurationsCatalogMappingTypes {
    /**
     * Details for standard mapping type (currently empty).
     * @type {string}
     * @memberof SyncsGetReportDataResponseDataConfigurationsCatalogMappingTypes
     */
    'standard'?: string;
    /**
     * 
     * @type {SyncsGetReportDataResponseDataConfigurationsCatalogMappingTypesStatic}
     * @memberof SyncsGetReportDataResponseDataConfigurationsCatalogMappingTypes
     */
    'static'?: SyncsGetReportDataResponseDataConfigurationsCatalogMappingTypesStatic;
    /**
     * 
     * @type {SyncsGetReportDataResponseDataConfigurationsCatalogMappingTypesTemplate}
     * @memberof SyncsGetReportDataResponseDataConfigurationsCatalogMappingTypes
     */
    'template'?: SyncsGetReportDataResponseDataConfigurationsCatalogMappingTypesTemplate;
}

