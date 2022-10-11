import { Extension } from '@magic-sdk/commons';
import { FlowConfig } from './type';
export declare class FlowExtension extends Extension.Internal<'flow', any> {
    flowConfig: FlowConfig;
    name: "flow";
    config: any;
    constructor(flowConfig: FlowConfig);
    authorization: (account?: any) => Promise<any>;
}
