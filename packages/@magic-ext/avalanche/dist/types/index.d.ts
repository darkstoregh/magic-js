import { Extension } from '@magic-sdk/commons';
import { AvaxConfig } from './types';
export declare class AvalancheExtension extends Extension.Internal<'avax', any> {
    avalancheConfig: AvaxConfig;
    name: "avax";
    config: any;
    constructor(avalancheConfig: AvaxConfig);
    signTransaction: (sendAmount: number, assetId: string, toAddresses: Array<string>, fromAddresses: Array<string>, changeAddresses: Array<string>) => import("@magic-sdk/commons").PromiEvent<any, {
        done: (result: any) => void;
        error: (reason: any) => void;
        settled: () => void;
    }>;
}
