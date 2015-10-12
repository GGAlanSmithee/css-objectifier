import { expect }    from 'chai';

import { parse } from 'css';

import { toObject } from './../src/objectify';

describe('toObject(stylesheet)', function() {
    describe('objectifies multiple selectors', () => {
        it('simple multiple elements selector', () => {
            const expected = {
                div : {
                    border: '1px solid black'
                },
                
                nav : {
                    border: '1px solid black'
                }
            };
            
            const actual = toObject(parse(
                `div, nav {
                    border: 1px solid black;
                }`
            ).stylesheet);
            
            expect(actual).to.deep.equal(expected);
        });
        
        it('multiple elements selector combined with normal elements selector', () => {
            const expected = {
                div : {
                    border: '1px dotted black',
                    'background-color': 'yellow'
                },
                
                nav : {
                    border: '1px dotted black',
                    color: 'white'
                }
            };
            
            const actual = toObject(parse(
                `div, nav {
                    border: 1px dotted black;
                }
                
                div {
                    background-color: yellow;
                }
                
                nav {
                    color: white;
                }`
            ).stylesheet);
            
            expect(actual).to.deep.equal(expected);
        });
        
        it('multiple elements selector overriden by normal elements selector', () => {
            const expected = {
                div : {
                    border: '2px dotted black',
                    'background-color': 'yellow'
                },
                
                nav : {
                    border: '1px dotted black',
                    color: 'white'
                }
            };
            
            const actual = toObject(parse(
                `div, nav {
                    border: 1px dotted black;
                }
                
                div {
                    border: 2px dotted black;
                    background-color: yellow;
                }
                
                nav {
                    color: white;
                }`
            ).stylesheet);
            
            expect(actual).to.deep.equal(expected);
        });
        
        it('multiple elements selector overriden by multiple elements selector', () => {
            const expected = {
                div : {
                    border: '2px dotted black',
                    'background-color': 'yellow'
                },
                
                nav : {
                    border: '2px dotted black',
                    'background-color': 'yellow'
                }
            };
            
            const actual = toObject(parse(
                `div, nav {
                    border: 1px dotted black;
                }
                
                div, nav {
                    border: 2px dotted black;
                    background-color: yellow;
                }`
            ).stylesheet);
            
            expect(actual).to.deep.equal(expected);
        });
    });
});