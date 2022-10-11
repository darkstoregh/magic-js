import { PlugNPlayExtension } from '../pnp-extension';
import type { Magic, OAuthExtension } from '../types';
export declare function createMagicInstance(apiKey?: string, endpoint?: string, locale?: string): Magic<[PlugNPlayExtension, OAuthExtension]>;
export declare type PNPMagicInstance = ReturnType<typeof createMagicInstance>;
