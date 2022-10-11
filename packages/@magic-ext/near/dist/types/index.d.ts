import { Extension } from '@magic-sdk/commons';
import { NearConfig } from './types';
export declare class NearExtension extends Extension.Internal<'near', any> {
    nearConfig: NearConfig;
    name: "near";
    config: any;
    constructor(nearConfig: NearConfig);
    signTransaction(params: any): Promise<any>;
    getPublicKey(): Promise<any>;
}
