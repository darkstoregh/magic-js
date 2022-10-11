import { Extension } from '@magic-sdk/commons';
import { IconConfig, ConfigType } from './type';
export declare class IconExtension extends Extension.Internal<'icon', IconConfig> {
    iconConfig: IconConfig;
    name: "icon";
    config: ConfigType;
    constructor(iconConfig: IconConfig);
    sendTransaction: (txObj: any) => Promise<string>;
    signTransaction: (txObj: any) => Promise<any>;
    getAccount: () => Promise<string>;
}
