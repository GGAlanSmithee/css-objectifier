// import { expect }    from 'chai';

// import { parse } from 'css';

// import { toObject } from './../src/objectify';

// describe('toObject(stylesheet)', function() {
//     describe('objectifies class selectors', () => {
//         it('one class', () => {
//             const expected = {
//                 '.class' : {
//                     'border': '1px solid black'
//                 }
//             };
            
//             const actual = toObject(parse(`.class { border: 1px solid black; }`).stylesheet);
            
//             expect(actual).to.deep.equal(expected);
//         });
        
//         it('two classes', () => {
//             const expected = {
//                 '.class' : {
//                     'border': '1px solid black'
//                 },
                
//                 '.class2' : {
//                     'background-color': '#2233FF'
//                 }
//             };
            
//             const actual = toObject(parse(
//                 `.class {
//                     border: 1px solid black;
//                 }
                
//                 .class2 {
//                     background-color: #2233FF;
//                 }`
//             ).stylesheet);
            
//             expect(actual).to.deep.equal(expected);
//         });
        
//         it('re-accuring class', () => {
//             const expected = {
//                 '.class' : {
//                     'border': '1px solid black',
//                     'background-color': '#2233FF'
//                 }
//             };
            
//             const actual = toObject(parse(
//                 `.class {
//                     border: 1px solid black;
//                 }
                
//                 .class {
//                     background-color: #2233FF;
//                 }`
//             ).stylesheet);
            
//             expect(actual).to.deep.equal(expected);
//         });
        
//         it('re-accuring class with conflicting (overriding) styles', () => {
//             const expected = {
//                 '.class' : {
//                     'border': '1px solid black',
//                     'background-color': 'white'
//                 }
//             };
            
//             const actual = toObject(parse(
//                 `.class {
//                     border: 1px solid black;
//                     background-color: #2233FF;
//                 }
                
//                 .class {
//                     background-color: white;
//                 }`
//             ).stylesheet);
            
//             expect(actual).to.deep.equal(expected);
//         });
//     });
// });