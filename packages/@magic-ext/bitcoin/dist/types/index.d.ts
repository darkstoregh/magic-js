import { Extension } from '@magic-sdk/commons';
import { BitcoinConfig } from './types';
export declare class BitcoinExtension extends Extension.Internal<'bitcoin', any> {
    bitcoinConfig: BitcoinConfig;
    name: "bitcoin";
    config: any;
    constructor(bitcoinConfig: BitcoinConfig);
    signTransaction(txn: string, inputIndex: number): Promise<any>;
}
