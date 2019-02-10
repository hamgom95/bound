// fill items in targetList if predicate is true with values from fillList
const fillWith = <T>(targetList: T[], fillList: T[], predicate: (item: T) => boolean): T[] => [...targetList.map(item => predicate(item) ? fillList.shift() : item), ...fillList];

// marker for placeholder args
export const placeholder = Symbol("placeholder");
type Placeholder = typeof placeholder;

// shorter alias
export const _ = placeholder;

/**
 * Function.prototype.bind with placeholder support.
 * 
 * @param func Function to bind to
 * @param boundArgs Arguments to bind (first is this, also suppoerts placeholder) 
 * @returns bound function
 */
export const bound = <R, A>(func: (...args: A[]) => R, ...boundArgs: Array<A | Placeholder>) => (...args: A[]): R => {
    const [thisArg, ...rest] = fillWith(boundArgs, args, (item) => item === placeholder);
    return func.call(thisArg, ...rest);
};