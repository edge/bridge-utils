// this typeset aims to reflect the ABI specification accurately:
//
// https://ethereum.org/en/developers/docs/smart-contracts/compiling/#web-applications
// https://docs.soliditylang.org/en/v0.7.0/abi-spec.html#abi-json
//
// primarily this enables type-aware handling of different types of function and event, with their
// respective schemas

export type ABI = {
  _format: string
  contractName: string
  sourceName: string
  abi: (ConstructorFn | Event | FallbackFn | Fn)[]
  bytecode: string
  deployedBytecode: string
  linkReferences: Record<never, unknown>
  deployedLinkReferences: Record<never, unknown>
}

export type ConstructorFn = {
  inputs: never[]
  stateMutability?: StateMutability
  type: 'constructor'
}

// note: it's unclear from solidity's spec whether `inputs` is defined at all, but we don't use fallback
// functions at present, so no reference data to check. need to review this if at some point we add one
export type FallbackFn = {
  inputs?: never[]
  outputs: FnOutput[]
  stateMutability?: StateMutability
  type: 'fallback'
}

export type Event = {
  anonymous?: boolean
  inputs: FnInput[]
  name: string
  type: 'event'
}

export type EventInput = Omit<FnInput, 'components'> & {
  components?: EventInput[]
  indexed: boolean
}

export type Fn = {
  inputs: FnInput[]
  name?: string
  outputs: FnOutput[]
  stateMutability?: StateMutability
  type: 'function' | 'receive'
}

export type FnInput = {
  components?: FnInput[]
  internalType: string
  name: string
  type: string
}

export type FnOutput = FnInput

export type StateMutability = 'nonpayable' | 'payable' | 'pure' | 'view'
