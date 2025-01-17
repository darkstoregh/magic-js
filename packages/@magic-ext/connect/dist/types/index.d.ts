import { Extension } from 'magic-sdk';
export declare class ConnectExtension extends Extension.Internal<'connect', any> {
    name: "connect";
    config: any;
    showWallet(): import("magic-sdk").PromiEvent<boolean, {
        done: (result: boolean) => void;
        error: (reason: any) => void;
        settled: () => void;
    }>;
    requestUserInfo(options?: {
        isResponseRequired?: boolean;
    }): import("magic-sdk").PromiEvent<boolean, {
        done: (result: boolean) => void;
        error: (reason: any) => void;
        settled: () => void;
    }>;
    disconnect(): import("magic-sdk").PromiEvent<boolean, {
        done: (result: boolean) => void;
        error: (reason: any) => void;
        settled: () => void;
    }>;
}
export * from './types';
