/// <reference types="node" />
import { Extension } from '@magic-sdk/commons';
import { TaquitoConfig } from './type';
export declare class TaquitoExtension extends Extension.Internal<'taquito', any> {
    taquitoConfig: TaquitoConfig;
    name: "taquito";
    config: any;
    constructor(taquitoConfig: TaquitoConfig);
    getPublicKey(): Promise<any>;
    sign(bytes: string, watermark?: Uint8Array): Promise<Buffer>;
    createMagicSigner(): Promise<any>;
}
