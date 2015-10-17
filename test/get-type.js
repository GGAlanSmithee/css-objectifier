import { expect } from 'chai';

import { getType, SelectorType } from '../src/core/selector-type';

describe('getType(selector)', function() {
    describe('Selectors', () => {
        it('Type selector (E)', () => {
            expect(getType('div')).to.equal(SelectorType.Type);
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
        
        it('Element.Id selector (E#id)', () => {
            expect(getType('E#div')).to.equal(SelectorType.TypeId);
        });
    });
});