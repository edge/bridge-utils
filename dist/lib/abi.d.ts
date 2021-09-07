export declare type ABI = {
    _format: string;
    contractName: string;
    sourceName: string;
    abi: (ConstructorFn | Event | FallbackFn | Fn)[];
    bytecode: string;
    deployedBytecode: string;
    linkReferences: Record<never, unknown>;
    deployedLinkReferences: Record<never, unknown>;
};
export declare type ConstructorFn = {
    inputs: never[];
    stateMutability?: StateMutability;
    type: 'constructor';
};
export declare type FallbackFn = {
    inputs?: never[];
    outputs: FnOutput[];
    stateMutability?: StateMutability;
    type: 'fallback';
};
export declare type Event = {
    anonymous?: boolean;
    inputs: FnInput[];
    name: string;
    type: 'event';
};
export declare type EventInput = Omit<FnInput, 'components'> & {
    components?: EventInput[];
    indexed: boolean;
};
export declare type Fn = {
    inputs: FnInput[];
    name?: string;
    outputs: FnOutput[];
    stateMutability?: StateMutability;
    type: 'function' | 'receive';
};
export declare type FnInput = {
    components?: FnInput[];
    internalType: string;
    name: string;
    type: string;
};
export declare type FnOutput = FnInput;
export declare type StateMutability = 'nonpayable' | 'payable' | 'pure' | 'view';
