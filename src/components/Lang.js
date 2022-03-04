export function isArray (item) {
    return Array.isArray(item)
}

export function isObject (item) {
    return typeof item === 'object'
}

export function castArray(value) {
    return isArray(value) ? value : [value]
}

export function clone(value) {
    if (isArray(value)) {
        return [...value]
    } else if (isObject(value)) {
        return {...value}
    } else {
        return value
    }
}
