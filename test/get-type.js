import { expect } from 'chai';

import getType, { SelectorType } from '../src/core/selector-type';

describe('getType(selector)', function() {
    describe('Selectors', () => {
        it('Invalid selector (E E)', () => {
            expect(getType('e e')).to.equal(SelectorType.Invalid);
        });
        
        it('Type selector (E)', () => {
            expect(getType('div')).to.equal(SelectorType.Type);
        });
        
        it('Attribute selector (E[foo])', () => {
            expect(getType('div[test]')).to.equal(SelectorType.Attribute);
        });
        
        it('Attribute exact selector (E[foo="bar"])', () => {
            expect(getType('a[href="a"]')).to.equal(SelectorType.AttributeExact);
        });
        
        it('Class selector (.class)', () => {
            expect(getType('.class')).to.equal(SelectorType.Class);
        });
        
        it('Element.Class selector (E.class)', () => {
            expect(getType('E.class')).to.equal(SelectorType.TypeClass);
        });
        
        it('Id selector (#id)', () => {
            expect(getType('#id')).to.equal(SelectorType.Id);
        });
        
        it('Element#Id selector (E#id)', () => {
            expect(getType('E#div')).to.equal(SelectorType.TypeId);
        });
    });
});