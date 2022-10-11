import { Extension } from '@magic-sdk/commons';
import { ConfluxConfig } from './types';
export declare class ConfluxExtension extends Extension.Internal<'conflux', any> {
    confluxConfig: ConfluxConfig;
    name: "conflux";
    config: any;
    constructor(confluxConfig: ConfluxConfig);
    sendTransaction(txObject: any): Promise<any>;
}
