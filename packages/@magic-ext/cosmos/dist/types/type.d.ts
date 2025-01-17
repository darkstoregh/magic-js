export interface CosmosConfig {
    rpcUrl: string;
}
export declare enum CosmosPayloadMethod {
    Sign = "cos_sign",
    SignAndBroadcast = "cos_signAndBroadcast",
    SendTokens = "cos_sendTokens",
    ChangeAddress = "cos_changeAddress"
}
