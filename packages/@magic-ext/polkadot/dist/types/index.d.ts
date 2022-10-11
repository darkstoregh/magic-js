import { Extension } from '@magic-sdk/commons';
import { PolkadotConfig, ConfigType } from './type';
export declare class PolkadotExtension extends Extension.Internal<'polkadot', PolkadotConfig> {
    polkadotConfig: PolkadotConfig;
    name: "polkadot";
    config: ConfigType;
    constructor(polkadotConfig: PolkadotConfig);
    sendTransaction: (to: string, value: number) => Promise<string>;
    contractCall: (contractAddress: string, value: number, maxGas: number, data: any) => Promise<string>;
    getAccount: () => Promise<string>;
}
