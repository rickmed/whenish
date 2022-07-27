import {describe, it, expect} from '@jest/globals';
import { when } from './index';
import typeOf from './utils';

type ID = <A>(x: A) => A;
const id: ID = x => x;

describe('matches the right simple value patterns', () => {

    const notMatched = <A>(x: A) => `I should'n have ran with val: ${JSON.stringify(x)}`;

    const patterns = [true, 67, 'hello', [], {}];

    for (const pattern of patterns) {
        it(`with ${typeOf(pattern)}`, () => {

            const inp = pattern;

            let cases = patterns
                .map( p => [p, p == pattern ? id : notMatched]);

            const out = when(cases)(inp);

            expect(out).toEqual(inp);
        });
    }
});

// describe.skip('works with simple pattern variables', () => {

//     const inp = 3;

//     const out = when([
//         [[_.x], id],
//     ])(inp);

//     expect(out).toEqual(inp);

// });




/*
const arr1 = ['uno', 'dos', 'tres'];
const var2 = 'tres';

const _ = {
    // a proxy which traps which prop is accessed
        // and returns a symbol + var name
};

// ARRAYs/TUPLEs
when([
    [[_.x, 'dos'], x => 'got a: ' + x],
    [[_.x, _.y, var2], (x, y) => 'got: ' + x + 'and' + y + 'using normal js vars'],
    [[_], () => 'got an array with 1 unimportant element'],
    [[], () => 'got an empty array'],
    [[_.h, _.tail], (head, t) => 'got a: ' + head + ' and the ' + t],
    [[_.one, _.two, _.tail], (one, two, tail) => `got ${one} & ${two}` + ' and the ' + tail],
    [_, () => "this will match anything"],
])(arr1);
// variables are passsed to fn in the order you declare in pattern
// tail is special/static queries exported from library


// OBJECTs
const obj1 = {name: 'Rick', age: 20};
when(
    {name: _.name, age: _.age}, (name, age) => name.concat(age),
    {name: 'Rick', age: _.age}, age => 'age is' + age,
)(obj1);
// variables are passsed to fn in the order you declare in pattern
    // beware int like keys do not preserve order.
    // FUTURE: support ({one, two}) obj keys are ints.

// Mix


// SUM TYPEs (as Objects like Elm-ish)
when(
    {Num: _.num}, num => 'Got a Num with val: ' + num,
    {Op: _.op}, op => 'Got an Op with val: ' + op,
    {Clear: {}}, () => 'Got a Clear',
)(inp);

// SUM TYPEs (as Tuples like Elixir-ish)
when(
    ['Num', _.num], num => 'Got a Num with val: ' + num,
    ['Op', _.op], op => 'Got an Op with val: ' + op,
    ['Clear'], () => 'Got a Clear',
)(inp);


// GUARDs
when(
    [_.x, _.y, 'dos'], {and: (x, y) => x > y}, x => 'got a: ' + x,
)(arr1);
// if guard throws, the pattern fails and continues to the other one
// if all guards fail, cond throws.

// VALUES: Ability to return values instead using cb if
// not using pattern variables.
when([
    [2, 'got a two'],
    [1, 'got a one]'
])(inp)


// TODO: try this API next
when([
    [[_.x, 'dos'], x => 'got a: ' + x],
    [[_.x, _.y, var2], (x, y) => 'got: ' + x + 'and' + y + 'using normal js vars']
]);

when
    ([_.x, 'dos'], x => 'got a: ' + x),
    ([_.x, _.y, var2], (x, y) => 'got: ' + x + 'and' + y + 'using normal js vars')

*/



