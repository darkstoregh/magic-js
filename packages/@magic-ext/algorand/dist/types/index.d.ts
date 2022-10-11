import { Extension } from '@magic-sdk/commons';
import { AlgorandConfig } from './types';
export declare class AlgorandExtension extends Extension.Internal<'algod', any> {
    algorandConfig: AlgorandConfig;
    name: "algod";
    config: any;
    constructor(algorandConfig: AlgorandConfig);
    signTransaction(txn: any): Promise<any>;
    signBid(txn: any): Promise<any>;
    getWallet(): Promise<any>;
    signGroupTransaction(txns: any[]): Promise<any>;
    signGroupTransactionV2(txns: any): Promise<any>;
}
