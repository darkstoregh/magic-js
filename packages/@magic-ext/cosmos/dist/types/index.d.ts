import { Extension } from '@magic-sdk/commons';
import { CosmosConfig } from './type';
export declare class CosmosExtension extends Extension.Internal<'cosmos', any> {
    cosmosConfig: CosmosConfig;
    name: "cosmos";
    config: any;
    constructor(cosmosConfig: CosmosConfig);
    signAndBroadcast: (message: any, fee: any) => Promise<any>;
    sign: (message: any, fee: any) => Promise<any>;
    sendTokens: (recipientAddress: string, transferAmount: string | number, denom: string, memo?: string | undefined) => Promise<any>;
    changeAddress: (prefix: string) => Promise<any>;
}
