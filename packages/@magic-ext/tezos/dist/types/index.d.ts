import { Extension } from '@magic-sdk/commons';
import { TezosConfig, ConfigType } from './type';
export declare class TezosExtension extends Extension.Internal<'tezos', TezosConfig> {
    tezosConfig: TezosConfig;
    name: "tezos";
    config: ConfigType;
    constructor(tezosConfig: TezosConfig);
    sendTransactionOperation: (to: string, amount: number, fee: number, derivationPath: string) => Promise<string>;
    sendContractOriginationOperation: (amount: number, delegate: any, fee: number, derivationPath: string, storage_limit: number, gas_limit: number, code: string, storage: string, codeFormat: string) => Promise<any>;
    sendContractInvocationOperation: (contract: string, amount: number, fee: number, derivationPath: string | undefined, storageLimit: number, gasLimit: number, entrypoint: string | undefined, parameters: string | undefined, parameterFormat?: string | undefined) => import("@magic-sdk/commons").PromiEvent<any, {
        done: (result: any) => void;
        error: (reason: any) => void;
        settled: () => void;
    }>;
    sendContractPing: (contract: string, amount: number, fee: number, derivationPath: string | undefined, storageLimit: number, gasLimit: number) => import("@magic-sdk/commons").PromiEvent<any, {
        done: (result: any) => void;
        error: (reason: any) => void;
        settled: () => void;
    }>;
    sendDelegationOperation: (to: string, amount: number) => import("@magic-sdk/commons").PromiEvent<any, {
        done: (result: any) => void;
        error: (reason: any) => void;
        settled: () => void;
    }>;
    getAccount: () => Promise<string>;
}
