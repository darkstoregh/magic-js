import { Extension } from '@magic-sdk/commons';
import { SolanaConfig, SerializeConfig } from './type';
export declare class SolanaExtension extends Extension.Internal<'solana', any> {
    solanaConfig: SolanaConfig;
    name: "solana";
    config: any;
    constructor(solanaConfig: SolanaConfig);
    sendAndConfirmTransaction: (transaction: any, options?: any) => import("@magic-sdk/commons").PromiEvent<any, {
        done: (result: any) => void;
        error: (reason: any) => void;
        settled: () => void;
    }>;
    signTransaction: (transaction: any, serializeConfig?: SerializeConfig | undefined) => import("@magic-sdk/commons").PromiEvent<any, {
        done: (result: any) => void;
        error: (reason: any) => void;
        settled: () => void;
    }>;
    signMessage: (message: any) => import("@magic-sdk/commons").PromiEvent<any, {
        done: (result: any) => void;
        error: (reason: any) => void;
        settled: () => void;
    }>;
}
