import { AbiItem } from 'web3-utils';
export declare type ABI = {
    _format: string;
    contractName: string;
    sourceName: string;
    abi: AbiItem[];
    bytecode: string;
    deployedBytecode: string;
    linkReferences: Record<never, unknown>;
    deployedLinkReferences: Record<never, unknown>;
};
export declare type Addresses = {
    [net: string]: {
        bridge: string;
        token: string;
        usdc: string;
    };
};
export declare type Module = {
    version: string;
    addresses: Addresses;
    bridge: ABI;
    token: ABI;
    usdc: ABI;
};
export declare const addresses: Addresses;
export declare const bridge: ABI;
export declare const token: ABI;
export declare const usdc: ABI;
declare const mod: Module;
export default mod;
