/// <reference types="node" />
import { Extension } from '@magic-sdk/commons';
import { TerraConfig } from './types';
export declare class TerraExtension extends Extension.Internal<'terra', any> {
    terraConfig: TerraConfig;
    name: "terra";
    config: any;
    constructor(terraConfig: TerraConfig);
    getPublicKey(): Promise<any>;
    sign(payload: Buffer): Promise<Buffer>;
}
