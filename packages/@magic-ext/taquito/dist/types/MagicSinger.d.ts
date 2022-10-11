import { Signer } from './SignerInterface';
export declare class MagicSigner implements Signer {
    private pkh;
    private pK;
    private magic;
    constructor(pkh: string, pK: string, magic: any);
    publicKeyHash(): Promise<string>;
    publicKey(): Promise<string>;
    secretKey(): Promise<string>;
    sign(bytes: string, watermark?: Uint8Array): Promise<{
        bytes: string;
        sig: string;
        prefixSig: string;
        sbytes: string;
    }>;
}
