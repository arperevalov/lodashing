export function isArguments(item) {
    return item.hasOwnProperty('callee');
}
export function isArray(item) {
    return Array.isArray(item);
}
export function isArrayLike(item) {
    if (!isFunction(item) && item.length >= 0 && item.length < Number.MAX_SAFE_INTEGER) {
        return true;
    }
    return false;
}
export function isArrayLikeObject(item) {
    if (!isFunction(item) && item.length >= 0 && item.length < Number.MAX_SAFE_INTEGER && isObject(item)) {
        return true;
    }
    return false;
}
export function isBoolean(item) {
    return typeof item === 'boolean';
}
export function isFunction(item) {
    return typeof item === 'function';
}
export function isObject(item) {
    return typeof item === 'object';
}
export function castArray(value) {
    return isArray(value) ? value : [value];
}
export function clone(value) {
    if (isArray(value)) {
        return [...value];
    }
    else if (isObject(value)) {
        return Object.assign({}, value);
    }
    else {
        return value;
    }
}
