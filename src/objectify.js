"use strict";

import fs        from 'fs';
import { parse } from 'css';

export function toObject(stylesheet) {
    if (!stylesheet) {
        return {};
    }
    
    let style = {};
    
    for (let rule of stylesheet.rules) {
        for (let selector of rule.selectors) {
            console.log(selector);
            
            // todo resolve selector type (regex) - WIP in /core/selector-type.js
            
            let obj = style[selector] || {};
                
            for (let declaration of rule.declarations) {
                if (obj[declaration.property] && obj[declaration.property].indexOf('!important') !== -1) {
                    if (declaration.value.indexOf('!important') !== -1) {
                        obj[declaration.property] = declaration.value;
                    }
                    
                    continue;
                }
                    
                obj[declaration.property] = declaration.value;
            }
            
            style[selector] = obj;
        }
    }
    
    return style;
}

export default function objectify(path) {
    const data = fs.readFileSync(path, 'utf8');
    
    if (!data) {
        return {};
    }

    return toObject(parse(data).stylesheet);
}