import { ABI } from './abi';
export declare type Module = {
    version: string;
    addresses: {
        [net: string]: {
            bridge: string;
            token: string;
        };
    };
    bridge: ABI;
    token: ABI;
};
declare const mod: Module;
export default mod;
