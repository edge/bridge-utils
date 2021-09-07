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

import { ABI } from './abi'
import addresses from '../artifacts/addresses.json'
import bridge from '../artifacts/bridge.json'
import pkg from '../package.json'
import token from '../artifacts/token.json'

export type Module = {
  version: string
  addresses: {
    [net: string]: {
      bridge: string
      token: string
    }
  }
  bridge: ABI
  token: ABI
}

// note: we cast bridge and token as ABI to overcome limits of type inference, since the json alone is excessively
// faceted. these should still reflect specification, but ought to be checked whenever updated
const mod: Module = {
  version: pkg.version,
  addresses,
  bridge: bridge as ABI,
  token: token as ABI
}

export default mod
