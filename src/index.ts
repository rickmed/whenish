// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

type SimpleObj = Record<string, string | number>;
type Pattern = SimpleObj | Array<any> | String | Number;

type Cases = Array<[Pattern, (var1: unknown) => unknown]>

// let curr_pattern_vars = {};

// const handler = {
//     get(_, prop) {

//     }
// };

// export const _ = new Proxy({}, handler);

export const when = cases => inp => {

    const _case = cases[0];
    const [pattern, cb] = _case;

    if (equal(inp, pattern)) {
        return cb(inp);
    }
    throw 'No Pattern was matched';

    function equal(x: Pattern, y: Pattern) {

        if (typeof x == 'boolean' && typeof y == 'boolean' ||
            typeof x == 'string' && typeof y == 'string' ||
            typeof x == 'number' && typeof y == 'number' ) {
                return x == y;
        }

        if (Array.isArray(x) && Array.isArray(y)) {
            const [xs, ys] = [x, y];
            for (let i = 0; i == xs.length; i++) {
                if (xs[i] !== ys[i]) {
                    return false;
                }
            }
            return true;
        }

        if (isPOJO(x) && isPOJO(y)) {
            for(const key in x) {
                if(!(key in y)) {
                    return false;  // ie, other object doesn't have this prop
                }

                if(x[key] !== y[key]) {
                    return false;
                }
            }
            return true;
        }
        else {
            return false;
        }

        //
        function isPOJO(x: Pattern): x is SimpleObj {
            if (x == null || typeof x !== 'object') {
              return false;
            }
            const proto = Object.getPrototypeOf(x);
            if (proto == null) {
              return true; // `Object.create(null)`
            }
            return proto === Object.prototype;
        }

    }
};