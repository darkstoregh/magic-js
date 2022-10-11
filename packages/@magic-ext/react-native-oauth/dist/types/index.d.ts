import { Extension } from '@magic-sdk/react-native';
import { OAuthRedirectConfiguration, OAuthRedirectResult } from './types';
export declare class OAuthExtension extends Extension.Internal<'oauth'> {
    name: "oauth";
    config: {};
    compat: {
        'magic-sdk': boolean;
        '@magic-sdk/react-native': string;
    };
    loginWithPopup(configuration: OAuthRedirectConfiguration): import("@magic-sdk/react-native").PromiEvent<OAuthRedirectResult, {
        done: (result: OAuthRedirectResult) => void;
        error: (reason: any) => void;
        settled: () => void;
    }>;
}
export declare function createURI(this: OAuthExtension, configuration: OAuthRedirectConfiguration): Promise<{
    query: string | undefined;
    provider: import("./types").OAuthProvider;
    redirectURI: string;
}>;
export declare function getResult(this: OAuthExtension, queryString: string): import("@magic-sdk/react-native").PromiEvent<OAuthRedirectResult, {
    done: (result: OAuthRedirectResult) => void;
    error: (reason: any) => void;
    settled: () => void;
}>;
export * from './types';
