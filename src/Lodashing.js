import * as LoArray from './components/Array'
import * as LoLang from './components/Lang'

const lodashing = {}

lodashing.chunk = LoArray.chunk
lodashing.compact = LoArray.compact
lodashing.concat = LoArray.concat
lodashing.difference = LoArray.difference
lodashing.differenceBy = LoArray.differenceBy


lodashing.isArray = LoLang.isArray
lodashing.isObject = LoLang.isObject
lodashing.castArray = LoLang.castArray
lodashing.clone = LoLang.clone

export default lodashing