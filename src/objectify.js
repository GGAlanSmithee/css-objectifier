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
            let obj = style[selector] || {
                    
            };
                
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
/*const htmlparser = require("htmlparser2");

var rawHtml = "<div><p>Hello!</p></div><p>Bye!</p>";

let handler = new htmlparser.DomHandler(function(error, dom) {
    if (error)
        console.error(error);
    else
        console.log(error);
});

var parser = new htmlparser.Parser(handler);
parser.parseComplete(rawHtml);

console.log(handler.dom);*/