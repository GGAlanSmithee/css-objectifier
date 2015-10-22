"use strict";

/**
 * Types of CSS selectors
 * 
 * @author Alan Smithee
 */
export const SelectorType = {
    None : 0,
    Invalid : 0,
    Universal : 1,
    Type : 2,
    TypeClass : 3,
    Typeid : 4,
    Class : 5,
    Id : 6,
    Attribute : 7,            // E[attr]
    AttributeExact : 8,       // E[attr=value]
    AttributeExactHyphen : 9, // E[attr|=value]
    AttributeList : 10,       // E[attr~=value]
    AttributePrefix : 11,     // E[attr^=value]
    AttributeSuffix : 12,     // E[attr$=value]
    AttributeContains : 13,   // E[attr*=value]
    DescendantCombinator : 14,
    ChildCombinator : 15,
    AdjacentSiblingCombinator : 16,
    GeneralSiblingCombinator : 17
};

/**
 * Regex used to identify what category a CSS selector is (Element/class/id/psuedo etc)
 * 
 * @author Alan Smithee
 */
const SelectorCategoryRegex = {
    Type : /^[A-Za-z]+/,
    Attribute : /^[A-Za-z]+\[.+?\]$/,
};

/**
 * Regex used to identify what type a CSS selector is (Element.Class/Element[foo0] etc)
 * 
 * @author Alan Smithee
 */
const SelectorTypeRegex = {
    None : '',
    Invalid : '',
    Universal : /\*/,
    Type : /^[A-Za-z]+$/,
    TypeClass : /^[A-Za-z]+\.[A-Za-z]+$/,
    TypeId : /^[A-Za-z]+\#[A-Za-z]+$/,
    Class : /^\.[A-Za-z]+$/,
    Id : /^\#[A-Za-z]+$/,
    Attribute : /^[A-Za-z]+\[[A-Za-z]+\]$/,                     // E[attr]
    AttributeExact : /^[A-Za-z]+\[[A-Za-z]+\=\"[A-Za-z]+\"\]$/, // E[attr=value]
    AttributeExactHyphen : /^[A-Za-z]+\[[A-Za-z]+\]$/,          // E[attr|=value]
    AttributeList : /^[A-Za-z]+\[[A-Za-z]+\]$/,                 // E[attr~=value]
    AttributePrefix : /^[A-Za-z]+\[[A-Za-z]+\]$/,               // E[attr^=value]
    AttributeSuffix : /^[A-Za-z]+\[[A-Za-z]+\]$/,               // E[attr$=value]
    AttributeContains : /^[A-Za-z]+\[[A-Za-z]+\]$/              // E[attr*=value]
};

/**
 * Gets the type of a given {selector}.
 * 
 * This methods expects that {selector} is a single selector.
 * Multi selectors should be split up and processed one at a time.
 * If a multi selector is passed in, {Regex.None|Invalid} will be returned
 * 
 * @author Alan Smithee
 * @param {string} selector 
 * @return {SelectorType} type
 */
export default function getType(selector) {
    if (selector === '*') {
        return SelectorType.Universal;
    }
    
    if (SelectorCategoryRegex.Attribute.test(selector)) {
        return SelectorTypeRegex.AttributeExact.test(selector) ? SelectorType.AttributeExact :
               SelectorTypeRegex.Attribute.test(selector) ? SelectorType.Attribute :
               SelectorType.Invalid;
    }
    
    if (SelectorCategoryRegex.Type.test(selector)) {
        return SelectorTypeRegex.TypeClass.test(selector) ? SelectorType.TypeClass :
               SelectorTypeRegex.TypeId.test(selector) ? SelectorType.TypeId :
               SelectorTypeRegex.Type.test(selector) ? SelectorType.Type :
               SelectorType.Invalid;
    }
    
    return SelectorTypeRegex.Class.test(selector) ? SelectorType.Class :
           SelectorTypeRegex.Id.test(selector) ? SelectorType.Id :
           SelectorType.None;
}
