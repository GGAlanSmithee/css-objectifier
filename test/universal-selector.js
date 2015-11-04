import { expect }    from 'chai';

import { parse } from 'css';

import { toObject } from './../src/objectify';

describe('toObject(stylesheet)', function() {
    describe('objectifies universal selector', () => {
        it('one element', () => {
            const expected = {
                '*' : {
                    border: '1px solid black'
                }
            };
            
            const actual = toObject(parse(`* { border: 1px solid black; }`).stylesheet);
            
            expect(actual).to.deep.equal(expected);
        });
        
        it('re-accuring element', () => {
            const expected = {
                '*' : {
                    border: '1px solid black',
                    position: 'relative',
                    display: 'inline-block',
                    color: 'white'
                }
            };
            
            const actual = toObject(parse(
                `* { 
                    border: 1px solid black;
                    position: relative;
                }
                
                * {
                    display: inline-block;
                }
                
                * {
                    color: white;
                }`
            ).stylesheet);
            
            expect(actual).to.deep.equal(expected);
        });
        
        it('re-accuring element with conflicting (overriding) styles', () => {
            const expected = {
                '*' : {
                    border: '1px solid black',
                    position: 'absolute',
                    display: 'inline-block'
                }
            };
            
            const actual = toObject(parse(
                `* { 
                    border: 1px solid black;
                    position: relative;
                }
                
                * {
                    display: inline-block;
                }
                
                * {
                    position: absolute;
                }`
            ).stylesheet);
            
            expect(actual).to.deep.equal(expected);
        });
    });
});