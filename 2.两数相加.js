/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // console.log('==>l1&l2',l1,l2)
    let node = new ListNode('head')
    console.log('==>node',node)
    let temp = node , sum , n = 0
    while( l1 || l2 ){
        const n1 = l1 ? l1.val : 0
        const n2 = l2 ? l2.val : 0
        sum = n1 + n2 + n
        temp.next = new ListNode( sum % 10 )
        console.log('a==>temp',temp)
        temp = temp.next
        console.log('b==>temp',temp)
        console.log('c==>node',node)
        n = parseInt( sum / 10 )
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
        console.log('//////////////// 分割线 //////////////')
    }
    if( n > 0 ) temp.next = new ListNode(n)
    return node.next
};
// @lc code=end

