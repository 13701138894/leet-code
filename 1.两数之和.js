/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var obj = {};
    for(var i = 0; i < nums.length; i++){
        if(obj[nums[i]]==undefined){
            obj[target-nums[i]] = i;
        }else{
            return [obj[nums[i]],i]
        }
    }
};
// @lc code=end

