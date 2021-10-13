// Copyright (C) 2021 Edge Network Technologies Limited
// Use of this source code is governed by a GNU GPL-style license
// that can be found in the LICENSE.md file. All rights reserved.

import { AbiItem } from 'web3-utils'
import addressesJSON from '../artifacts/addresses.json'
import bridgeJSON from '../artifacts/bridge.json'
import pkg from '../package.json'
import tokenJSON from '../artifacts/token.json'
import usdcJSON from '../artifacts/usdc.json'

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
    usdc: string
  }
}

export type Module = {
  version: string
  addresses: Addresses
  bridge: ABI
  token: ABI
  usdc: ABI
}

export const addresses = addressesJSON as Addresses
export const bridge = bridgeJSON as ABI
export const token = tokenJSON as ABI
export const usdc = usdcJSON as ABI

const mod: Module = {
  version: pkg.version,
  addresses,
  bridge,
  token,
  usdc
}

export default mod
