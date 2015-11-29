import { expect } from 'chai';

import getType, { SelectorType } from '../src/core/selector-type';

describe('getType(selector)', function() {
    describe('Selectors', () => {
        it('Invalid selector (E )', () => {
            expect(getType('div ')).to.equal(SelectorType.Invalid);
        });
        
        it('Invalid selector ( E)', () => {
            expect(getType(' div')).to.equal(SelectorType.Invalid);
        });
        
        it('Invalid selector (E E)', () => {
            expect(getType('div span')).to.equal(SelectorType.Invalid);
        });
        
        it('Invalid selector (E, E)', () => {
            expect(getType('div, span')).to.equal(SelectorType.Invalid);
        });
        
        it('Invalid selector (E.class.class)', () => {
            expect(getType('div.class1.class2')).to.equal(SelectorType.Invalid);
        });
        
        it('Invalid selector (E.class#id)', () => {
            expect(getType('div.class#id')).to.equal(SelectorType.Invalid);
        });
        
        it('Invalid selector (E#id#id)', () => {
            expect(getType('div#id1#id2')).to.equal(SelectorType.Invalid);
        });
        
        it('Invalid selector (E#id.class)', () => {
            expect(getType('div#id.class')).to.equal(SelectorType.Invalid);
        });
        
        it('Type selector (E)', () => {
            expect(getType('div')).to.equal(SelectorType.Type);
        });
        
        it('Attribute selector (E[foo])', () => {
            expect(getType('div[test]')).to.equal(SelectorType.Attribute);
        });
        
        it('Attribute selector (.class[foo])', () => {
            expect(getType('.myClass[test]')).to.equal(SelectorType.Attribute);
        });
        
        it('Attribute selector (#id[foo])', () => {
            expect(getType('#myId[test]')).to.equal(SelectorType.Attribute);
        });
        
        it('Attribute exact selector (E[foo="bar"])', () => {
            expect(getType('a[href="a"]')).to.equal(SelectorType.AttributeExact);
        });
        
        it('Attribute exact selector (.class[foo="bar"])', () => {
            expect(getType('.myClass[href="a"]')).to.equal(SelectorType.AttributeExact);
        });
        
        it('Attribute exact selector (#id[foo="bar"])', () => {
            expect(getType('#myId[href="a"]')).to.equal(SelectorType.AttributeExact);
        });
        
        it('Attribute prefix selector (E[foo^="bar"])', () => {
            expect(getType('a[href^="a"]')).to.equal(SelectorType.AttributePrefix);
        });
        
        it('Attribute prefix selector (.class[foo^="bar"])', () => {
            expect(getType('.myClass[href^="a"]')).to.equal(SelectorType.AttributePrefix);
        });
        
        it('Attribute prefix selector (#id[foo^="bar"])', () => {
            expect(getType('#myId[href^="a"]')).to.equal(SelectorType.AttributePrefix);
        });
        
        it('Attribute suffix selector (E[foo$="bar"])', () => {
            expect(getType('a[href$="a"]')).to.equal(SelectorType.AttributeSuffix);
        });
        
        it('Attribute suffix selector (.class[foo$="bar"])', () => {
            expect(getType('.myClass[href$="a"]')).to.equal(SelectorType.AttributeSuffix);
        });
        
        it('Attribute suffix selector (#id[foo$="bar"])', () => {
            expect(getType('#myId[href$="a"]')).to.equal(SelectorType.AttributeSuffix);
        });
        
        it('Attribute contains selector (E[foo*="bar"])', () => {
            expect(getType('a[href*="a"]')).to.equal(SelectorType.AttributeContains);
        });
        
        it('Attribute contains selector (.class[foo*="bar"])', () => {
            expect(getType('.myClass[href*="a"]')).to.equal(SelectorType.AttributeContains);
        });
        
        it('Attribute contains selector (#id[foo*="bar"])', () => {
            expect(getType('#myId[href*="a"]')).to.equal(SelectorType.AttributeContains);
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
        
        it('Root selector (:root)', () => {
            expect(getType(':root')).to.equal(SelectorType.Root);
        });
        
        it('Root selector (E:root)', () => {
            expect(getType('div:root')).to.equal(SelectorType.Root);
        });
        
        it('Root selector (#id:root)', () => {
            expect(getType('#myId:root')).to.equal(SelectorType.Root);
        });
        
        it('Root selector (.class:root)', () => {
            expect(getType('.myClass:root')).to.equal(SelectorType.Root);
        });
        
        it('Nth-child Selector', () => {
            expect(getType('div:nth-child(2)')).to.equal(SelectorType.NthChild);
        });
    });
});