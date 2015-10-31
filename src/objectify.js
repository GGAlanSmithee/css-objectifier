"use strict";

import fs        from 'fs';
import { parse } from 'css';

import getType, { SelectorType } from './core/selector-type';

/**
 * Converts an external CSS stylesheet to a JavaScript stylesheet object
 * 
 * @author Alan Smithee
 * @param {string} path path to the external stylesheet to convert
 * @return {object} CSSObject
 */
export default function objectify(path) {
    const data = fs.readFileSync(path, 'utf8');
    
    if (!data || !parse(data).stylesheet) {
        return {};
    }

    return toObject(parse(data).stylesheet);
}

/**
 * Converts a stylesheet AST to a JavaScript stylesheet object
 * 
 * A helper method
 * 
 * @author Alan Smithee
 * @param {AST} stylesheet  - in the format of https://github.com/reworkcss/css
 * @return {object} CSSObject
 */
export function toObject(stylesheet) {
    if (!stylesheet) {
        return {};
    }
    
    let style = {};
    
    for (let rule of stylesheet.rules) {
        for (let selector of rule.selectors) {
            let obj = {};

            for (let declaration of rule.declarations) {
                obj[declaration.property] = declaration.value;
            }
            
            // todo refactor and generalize for all psuedoselector
            if (getType(selector) === SelectorType.TypeClass) {
                const [ topSelector, subSelector ] = selector.split(/(\.[a-zA-Z]+)/g);
                
                if (!style[topSelector]) {
                    style[topSelector] = { };
                }
                
                style[topSelector][subSelector] = Object.assign(style[topSelector][subSelector] || {}, obj);
            } else {
                style[selector] = Object.assign(style[selector] || {}, obj);
            }
        }
    }
    
    return style;
}