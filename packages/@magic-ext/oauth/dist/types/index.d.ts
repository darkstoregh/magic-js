import { Extension } from 'magic-sdk';
import { OAuthRedirectResult, OAuthRedirectConfiguration } from './types';
export declare class OAuthExtension extends Extension.Internal<'oauth'> {
    name: "oauth";
    config: {};
    compat: {
        'magic-sdk': string;
        '@magic-sdk/react-native': boolean;
    };
    loginWithRedirect(configuration: OAuthRedirectConfiguration): import("magic-sdk").PromiEvent<void, {
        done: (result: void) => void;
        error: (reason: any) => void;
        settled: () => void;
    }>;
    getRedirectResult(): import("magic-sdk").PromiEvent<OAuthRedirectResult, {
        done: (result: OAuthRedirectResult) => void;
        error: (reason: any) => void;
        settled: () => void;
    }>;
}
export * from './types';
