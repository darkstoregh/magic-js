import { Extension } from '@magic-sdk/commons';
import { RegisterNewUserConfiguration, LoginWithWebAuthnConfiguration, UpdateWebAuthnInfoConfiguration } from './types';
export declare class WebAuthnExtension extends Extension.Internal<'webauthn', any> {
    name: "webauthn";
    config: any;
    private createWebAuthnNotSupportError;
    private createWebAuthCreateCredentialError;
    registerNewUser(configuration: RegisterNewUserConfiguration): Promise<string | null>;
    login(configuration: LoginWithWebAuthnConfiguration): Promise<string | null>;
    updateInfo(configuration: UpdateWebAuthnInfoConfiguration): import("@magic-sdk/commons").PromiEvent<any[], {
        done: (result: any[]) => void;
        error: (reason: any) => void;
        settled: () => void;
    }>;
    unregisterDevice(id: string): import("@magic-sdk/commons").PromiEvent<any, {
        done: (result: any) => void;
        error: (reason: any) => void;
        settled: () => void;
    }>;
    registerNewDevice(nickname?: string): Promise<string | null>;
    getMetadata(): import("@magic-sdk/commons").PromiEvent<any[], {
        done: (result: any[]) => void;
        error: (reason: any) => void;
        settled: () => void;
    }>;
}
