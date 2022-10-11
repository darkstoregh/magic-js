import type { MagicUserMetadata } from '@magic-sdk/types';
export declare class PlugNPlayExtension extends window.Magic.Extension.Internal<'pnp', {
    isPnP: boolean;
}> {
    config: {
        isPnP: boolean;
    };
    name: "pnp";
    static storageKeys: {
        lastUsedProvider: string;
    };
    getLoginMethod(options: {
        debug?: boolean;
        termsOfServiceURI?: string;
        privacyPolicyURI?: string;
    }): import("../../provider/dist/types").PromiEvent<[string, string | undefined], {
        done: (result: [string, string | undefined]) => void;
        error: (reason: any) => void;
        settled: () => void;
    }>;
    showSettings(): import("../../provider/dist/types").PromiEvent<any, {
        done: (result: any) => void;
        error: (reason: any) => void;
        settled: () => void;
    }>;
    saveLastUsedProvider(provider?: string): Promise<void>;
    encodeUserMetadata(userMetadata: MagicUserMetadata): string;
    decodeUserMetadata(userMetadataQueryString?: string | null): MagicUserMetadata | null;
}
