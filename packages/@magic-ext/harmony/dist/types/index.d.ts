import { Extension } from '@magic-sdk/commons';
import { HarmonyConfig } from './types';
export declare class HarmonyExtension extends Extension.Internal<'harmony', any> {
    harmonyConfig: HarmonyConfig;
    name: "harmony";
    config: any;
    constructor(harmonyConfig: HarmonyConfig);
    sendTransaction(params: any): Promise<any>;
}
