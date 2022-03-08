export function isArguments (item: any) {
    return item.hasOwnProperty('callee')
}

export function isArray (item: any) {
    return Array.isArray(item)
}

export function isArrayLike (item: any) {
    if(!isFunction(item) && item.length >= 0 && item.length < Number.MAX_SAFE_INTEGER){
        return true
    }
    return false
}

export function isArrayLikeObject (item: any) {
    if(!isFunction(item) && item.length >= 0 && item.length < Number.MAX_SAFE_INTEGER && isObject(item)){
        return true
    }
    return false
}

export function isBoolean (item: any) {
    return typeof item === 'boolean'
}

export function isFunction (item: any) {
    return typeof item === 'function'
}

export function isObject (item: any) {
    return typeof item === 'object'
}

export function castArray(value: any) {
    return isArray(value) ? value : [value]
}

export function clone(value: any) {
    if (isArray(value)) {
        return [...value]
    } else if (isObject(value)) {
        return {...value}
    } else {
        return value
    }
}
