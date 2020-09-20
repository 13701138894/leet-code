/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// var generateParenthesis = function(n) {
//     let arr = []
//     // left && right <=3
//     // left > right
//     function generate(left,right,n,s){
//         if(left>=n && right>=n){
//             arr.push(s)
//             return   
//         }
//         if(left<n) generate(left+1,right,n,s+'(');
//         if(left>right) generate(left,right+1,n,s+')')
//     }
//     generate(0,0,n,'');
//     return arr
// };
// var generateParenthesis = function(n) {
//     var arr = [];
//     function generate(left,right,n,s){
//         if(left>=n && right>=n){
//             arr.push(s);
//             return
//         }
//         // left < n
//         if(left<n) generate(left+1,right,n,s+'(');
//         // left > right 
//         if(left > right) generate(left,right+1,n,s+')')
//     }
//     generate(0,0,n,'')
//     return arr;
// }
// var generateParenthesis = function(n) {
//     let arr= [];
//     function generate(left,right,n,s){
//         if(left >= n && right >=n){
//             arr.push(s);
//             return
//         }
//         if(left < n) generate(left+1,right,n,s+'(');
//         if(left>right) generate(left,right+1,n,s+')')
//     }
//     generate(0,0,n,'')
//     return arr;
// }
var generateParenthesis = function(n) {
    let arr = [];
    function generate(left,right,n,s) {
        if(left>=n&&right>=n){
            arr.push(s);
            return
        }
        if(left<n) generate(left+1,right,n,s+'(');
        if(left>right) generate(left,right+1,n,s+')');
    }
    generate(0,0,n,'')
    return arr
}
// @lc code=end

