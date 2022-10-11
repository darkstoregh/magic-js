export interface ConfluxConfig {
    rpcUrl: string;
    networkId?: number;
}
export declare enum ConfluxPayloadMethod {
    ConfluxSendTransaction = "cfx_sendTransaction"
}
