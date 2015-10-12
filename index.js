'use strict';

const fs = require('fs');
const parse = require('css').parse;

const data = fs.readFileSync('./test-2.css', 'utf8');

if (data) {
    let stylesheet = parse(data).stylesheet;
    
    if (stylesheet) {
        let style = {
            
        };
        
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
        
        console.log(style);
    }
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