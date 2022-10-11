import { Extension } from '@magic-sdk/commons';
export declare class Ed25519Extension extends Extension.Internal<'ed', any> {
    name: "ed";
    config: any;
    constructor();
    getPublicKey: () => Promise<string>;
    sign: (payload: Uint8Array) => Promise<Uint8Array>;
}
