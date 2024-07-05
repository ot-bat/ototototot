/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BlockchainConfig18StoragePricesInner
 */
export interface BlockchainConfig18StoragePricesInner {
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig18StoragePricesInner
     */
    utimeSince: number;
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig18StoragePricesInner
     */
    bitPricePs: number;
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig18StoragePricesInner
     */
    cellPricePs: number;
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig18StoragePricesInner
     */
    mcBitPricePs: number;
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig18StoragePricesInner
     */
    mcCellPricePs: number;
}

/**
 * Check if a given object implements the BlockchainConfig18StoragePricesInner interface.
 */
export function instanceOfBlockchainConfig18StoragePricesInner(value: object): value is BlockchainConfig18StoragePricesInner {
    if (!('utimeSince' in value) || value['utimeSince'] === undefined) return false;
    if (!('bitPricePs' in value) || value['bitPricePs'] === undefined) return false;
    if (!('cellPricePs' in value) || value['cellPricePs'] === undefined) return false;
    if (!('mcBitPricePs' in value) || value['mcBitPricePs'] === undefined) return false;
    if (!('mcCellPricePs' in value) || value['mcCellPricePs'] === undefined) return false;
    return true;
}

export function BlockchainConfig18StoragePricesInnerFromJSON(json: any): BlockchainConfig18StoragePricesInner {
    return BlockchainConfig18StoragePricesInnerFromJSONTyped(json, false);
}

export function BlockchainConfig18StoragePricesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockchainConfig18StoragePricesInner {
    if (json == null) {
        return json;
    }
    return {
        
        'utimeSince': json['utime_since'],
        'bitPricePs': json['bit_price_ps'],
        'cellPricePs': json['cell_price_ps'],
        'mcBitPricePs': json['mc_bit_price_ps'],
        'mcCellPricePs': json['mc_cell_price_ps'],
    };
}

export function BlockchainConfig18StoragePricesInnerToJSON(value?: BlockchainConfig18StoragePricesInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'utime_since': value['utimeSince'],
        'bit_price_ps': value['bitPricePs'],
        'cell_price_ps': value['cellPricePs'],
        'mc_bit_price_ps': value['mcBitPricePs'],
        'mc_cell_price_ps': value['mcCellPricePs'],
    };
}

