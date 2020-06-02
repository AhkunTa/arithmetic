// 一条包含字母 A-Z 的消息通过以下方式进行了编码：

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// 给定一个只包含数字的非空字符串，请计算解码方法的总数。

// 示例 1:

// 输入: "12"
// 输出: 2
// 解释: 它可以解码为 "AB"（1 2）或者 "L"（12）。
// 示例 2:

// 输入: "226"
// 输出: 3
// 解释: 它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6)


// 1 动态规划
// 类似上楼梯 不过要考虑边界情况
// dp[i]为字符串的译码方法总数
// 分情况讨论
// 1 若s[i]= 0 那么 s[i-1] = 1 或 2 则dp[i] = dp[i-2] 即 当为10 20 时 只有一种方法编译 
// 否则 返回 0  因为 30 40 50 都没法编译
// 2 若s[i-1] = 1 则 dp[i] = dp[i-1] + dp[i-2]
// 当有两位时 s[i-1] 必须为1 或者2 当大于2时 没有符合条件的
// 3 若s[i-1] = 2 && s[i] <= 6 dp[i] = dp[i-1] + dp[i-2]
// 同上


var numDecodings = function(s) {
    if(s[0] == 0) return 0;
    let len = s.length;
    let dp = new Array(len+1);
    dp[0] = dp[1] = 1;
    for(let i = 1; i<len; i++){
        if(s[i] == 0){
            if(s[i-1] == 1 || s[i-1] == 2){
                dp[i+1] = dp[i-1];
            }else {
                return 0;
            }
        }else if(s[i-1] ==1 || (s[i-1] == 2 && s[i] <=6)){
            dp[i+1] = dp[i] + dp[i-1];
        }else {
            dp[i+1] = dp[i];
        }
    }
    return dp[len];
};


