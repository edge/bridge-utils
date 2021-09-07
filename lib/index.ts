//                  $$\
//                  $$ |
//   $$$$$$\   $$$$$$$ | $$$$$$\   $$$$$$\
//  $$  __$$\ $$  __$$ |$$  __$$\ $$  __$$\
//  $$$$$$$$ |$$ /  $$ |$$ /  $$ |$$$$$$$$ |
//  $$   ____|$$ |  $$ |$$ |  $$ |$$   ____|
//  \$$$$$$$\ \$$$$$$$ |\$$$$$$$ |\$$$$$$$\
//   \_______| \_______| \____$$ | \_______|
//                      $$\   $$ |
// © 2021 Edge Network  \$$$$$$  |
//   Technologies Ltd.   \______/

import { AbiItem } from 'web3-utils'
import addressesJSON from '../artifacts/addresses.json'
import bridgeJSON from '../artifacts/bridge.json'
import pkg from '../package.json'
import tokenJSON from '../artifacts/token.json'

export type ABI = {
  _format: string
  contractName: string
  sourceName: string
  abi: AbiItem[]
  bytecode: string
  deployedBytecode: string
  linkReferences: Record<never, unknown>
  deployedLinkReferences: Record<never, unknown>
}

export type Addresses = {
  [net: string]: {
    bridge: string
    token: string
  }
}

export type Module = {
  version: string
  addresses: Addresses
  bridge: ABI
  token: ABI
}

export const addresses = addressesJSON as Addresses
export const bridge = bridgeJSON as ABI
export const token = tokenJSON as ABI

const mod: Module = {
  version: pkg.version,
  addresses,
  bridge,
  token
}

export default mod
