export declare function getScriptData(): {
    script: HTMLScriptElement;
    src: URL;
    apiKey: string | undefined;
    locale: string | undefined;
    redirectURI: string | undefined;
    loginURI: string | undefined;
    termsOfServiceURI: string | undefined;
    privacyPolicyURI: string | undefined;
    debug: boolean;
};
export declare type ScriptData = ReturnType<typeof getScriptData>;
