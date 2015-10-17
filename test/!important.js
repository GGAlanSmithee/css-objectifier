// import { expect }    from 'chai';

// import { parse } from 'css';

// import { toObject } from './../src/objectify';

// describe('toObject(stylesheet)', function() {
//     describe('objectifies properties with !important values', () => {
//         it('single !important value', () => {
//             const expected = {
//                 div : {
//                     'font-size': '12px !important'
//                 }
//             };
            
//             const actual = toObject(parse(
//                 `div {
//                     font-size: 12px !important;
//                 }`
//             ).stylesheet);
            
//             expect(actual).to.deep.equal(expected);
//         });
        
//         it('normal value gets overriden by !important value', () => {
//             const expected = {
//                 div : {
//                     'font-size': '20px !important'
//                 }
//             };
            
//             const actual = toObject(parse(
//                 `div {
//                     font-size: 20px !important;
//                 }
                
//                 div {
//                     font-size: 12px;
//                 }`
//             ).stylesheet);
            
//             expect(actual).to.deep.equal(expected);
//         });
        
//         it('!important value gets overriden by !important value', () => {
//             const expected = {
//                 div : {
//                     'font-size': '12px !important'
//                 }
//             };
            
//             const actual = toObject(parse(
//                 `div {
//                     font-size: 20px !important;
//                 }
                
//                 div {
//                     font-size: 12px !important;
//                 }`
//             ).stylesheet);
            
//             expect(actual).to.deep.equal(expected);
//         });
//     });
// });