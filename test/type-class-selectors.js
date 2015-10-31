import { expect }    from 'chai';

import { parse } from 'css';

import { toObject } from './../src/objectify';

describe('toObject(stylesheet)', function() {
    describe('objectifies type.class selectors', () => {
        it('one element', () => {
            const expected = {
                div : {
                    '.class' : {
                        border: '1px solid black'
                    }
                }
            };
            
            const actual = toObject(parse(`div.class { border: 1px solid black; }`).stylesheet);
            
            expect(actual).to.deep.equal(expected);
        });
    });
});