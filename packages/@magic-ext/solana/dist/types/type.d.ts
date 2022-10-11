export interface SolanaConfig {
    rpcUrl: string;
}
export declare enum SolanaPayloadMethod {
    SignTransaction = "sol_signTransaction",
    SendTransaction = "sol_sendTransaction",
    SignMessage = "sol_signMessage"
}
export interface SerializeConfig {
    /** Require all transaction signatures be present (default: true) */
    requireAllSignatures?: boolean;
    /** Verify provided signatures (default: true) */
    verifySignatures?: boolean;
}
