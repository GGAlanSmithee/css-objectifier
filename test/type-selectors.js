import { expect }    from 'chai';

import { parse } from 'css';

import { toObject } from './../src/objectify';

describe('toObject(stylesheet)', function() {
    describe('objectifies type selectors', () => {
        it('one element', () => {
            const expected = {
                div : {
                    border: '1px solid black'
                }
            };
            
            const actual = toObject(parse(`div { border: 1px solid black; }`).stylesheet);
            
            expect(actual).to.deep.equal(expected);
        });
        
        it('two elements', () => {
            const expected = {
                div : {
                    border: '1px solid black',
                    position: 'relative'
                },
                
                a : {
                    display: 'inline-block'
                }
            };
            
            const actual = toObject(parse(
                `div { 
                    border: 1px solid black;
                    position: relative;
                }
                
                a {
                    display: inline-block;
                }`
            ).stylesheet);
            
            expect(actual).to.deep.equal(expected);
        });
        
        it('re-accuring element', () => {
            const expected = {
                div : {
                    border: '1px solid black',
                    position: 'relative',
                    display: 'inline-block',
                    color: 'white'
                }
            };
            
            const actual = toObject(parse(
                `div { 
                    border: 1px solid black;
                    position: relative;
                }
                
                div {
                    display: inline-block;
                }
                
                div {
                    color: white;
                }`
            ).stylesheet);
            
            expect(actual).to.deep.equal(expected);
        });
        
        it('re-accuring element with conflicting (overriding) styles', () => {
            const expected = {
                div : {
                    border: '1px solid black',
                    position: 'absolute',
                    display: 'inline-block'
                }
            };
            
            const actual = toObject(parse(
                `div { 
                    border: 1px solid black;
                    position: relative;
                }
                
                div {
                    display: inline-block;
                }
                
                div {
                    position: absolute;
                }`
            ).stylesheet);
            
            expect(actual).to.deep.equal(expected);
        });
    });
});