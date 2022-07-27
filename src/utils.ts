type Thing = String | Number | Object | any[]

export default function typeOf(thing: Thing) {
    if (typeof thing == 'boolean') {
        return 'Bool';
    }
    if (typeof thing == 'number') {
        return 'Num';
    }
    if (typeof thing == 'string') {
        return 'Str';
    }
    if (Array.isArray(thing)) {
        return 'Arr';
    }
    if (typeof thing == 'object') {
        return 'Obj';
    }
    throw `Don't recognize this: ${thing}`;
}