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
    DescendantCombinator : 7,
    ChildCombinator : 8,
    AdjacentSiblingCombinator : 9,
    GeneralSiblingCombinator : 10
};

/**
 * Regex used to identify what type a CSS selector is (Element/class/id/psuedo etc)
 * 
 * @author Alan Smithee
 */
const Regex = {
    None : '',
    Invalid : '',
    Universal : /\*/,
    TypeCategory : /^[A-Za-z]+/,
    Type : /^[A-Za-z]+$/,
    TypeClass : /^[A-Za-z]+\.[A-Za-z]+$/,
    TypeId : /^[A-Za-z]+\#[A-Za-z]+$/,
    Class : /^\.[A-Za-z]+$/,
    Id : /^\#[A-Za-z]+$/
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
    
    if (Regex.TypeCategory.test(selector)) {
        return Regex.TypeClass.test(selector) ? SelectorType.TypeClass :
               Regex.TypeId.test(selector) ? SelectorType.TypeId :
               Regex.Type.test(selector) ? SelectorType.Type :
               SelectorType.Invalid;
    }
    
    return Regex.Class.test(selector) ? SelectorType.Class :
           Regex.Id.test(selector) ? SelectorType.Id :
           SelectorType.None;
}