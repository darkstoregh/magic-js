import { LoginWithMagicLinkConfiguration, LoginWithSmsConfiguration, LoginWithEmailOTPConfiguration } from '@magic-sdk/types';
import { BaseModule } from './base-module';
declare type LoginWithMagicLinkEvents = {
    'email-sent': () => void;
    'email-not-deliverable': () => void;
    retry: () => void;
};
export declare class AuthModule extends BaseModule {
    /**
     * Initiate the "magic link" login flow for a user. If the flow is successful,
     * this method will return a Decentralized ID token (with a default lifespan
     * of 15 minutes).
     */
    loginWithMagicLink(configuration: LoginWithMagicLinkConfiguration): import("..").PromiEvent<string | null, LoginWithMagicLinkEvents & {
        done: (result: string | null) => void;
        error: (reason: any) => void;
        settled: () => void;
    }>;
    /**
     * Initiate an SMS login flow for a user. If successful,
     * this method will return a Decenteralized ID token (with a default lifespan
     * of 15 minutes)
     */
    loginWithSMS(configuration: LoginWithSmsConfiguration): import("..").PromiEvent<string | null, {
        done: (result: string | null) => void;
        error: (reason: any) => void;
        settled: () => void;
    }>;
    /**
     * Initiate an Email with OTP login flow for a user. If successful,
     * this method will return a Decenteralized ID token (with a default lifespan
     * of 15 minutes)
     */
    loginWithEmailOTP(configuration: LoginWithEmailOTPConfiguration): import("..").PromiEvent<string | null, {
        done: (result: string | null) => void;
        error: (reason: any) => void;
        settled: () => void;
    }>;
    /**
     * Log a user in with a special one-time-use credential token. This is
     * currently used during magic link flows with a configured redirect to
     * hydrate the user session at the end of the flow. If the flow is successful,
     * this method will return a Decentralized ID token (with a default lifespan
     * of 15 minutes).
     *
     * If no argument is provided, a credential is automatically parsed from
     * `window.location.search`.
     */
    loginWithCredential(credentialOrQueryString?: string): import("..").PromiEvent<string | null, {
        done: (result: string | null) => void;
        error: (reason: any) => void;
        settled: () => void;
    }>;
}
export {};
