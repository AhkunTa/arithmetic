// 给定一个整数数组 A，我们只能用以下方法修改该数组：我们选择某个索引 i 并将 A[i] 替换为 -A[i]，然后总共重复这个过程 K 次。（我们可以多次选择同一个索引 i。）

// 以这种方式修改数组后，返回数组可能的最大和。

//  

// 示例 1：

// 输入：A = [4,2,3], K = 1
// 输出：5
// 解释：选择索引 (1,) ，然后 A 变为 [4,-2,3]。
// 示例 2：

// 输入：A = [3,-1,0,2], K = 3
// 输出：6
// 解释：选择索引 (1, 2, 2) ，然后 A 变为 [3,1,0,2]。
// 示例 3：

// 输入：A = [2,-3,-1,5,-4], K = 2
// 输出：13
// 解释：选择索引 (1, 4) ，然后 A 变为 [2,3,-1,5,4]。
//  

// 提示：

// 1 <= A.length <= 10000
// 1 <= K <= 10000
// -100 <= A[i] <= 100


/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// 基础排序 消耗较大
var largestSumAfterKNegations = function(A, K) {

    let res = 0;
    A.sort((a,b)=>a-b);
    for(j=0; j<K; j++){
        A[0] = -A[0];
        A.sort((a,b)=>a-b);
    }
    for(let i in A){
        res += A[i];
    }
    return res

};

var largestSumAfterKNegations = function (A, K) {
  A.sort((a, b) => a - b)
  let minIdx = 0
  while (K > 0) {
    A[minIdx] = -A[minIdx]
    K--
    // 仅当 递增排序的A数组 内有负数时 条件成立
    // A[0] 为 负数  -A[0] 为正
    // minIdx ++ 即
    // A[1] 判断正负 
    // 循环 。。。
    if (A[minIdx + 1] < A[minIdx]) {
      minIdx++
    }
  }

  return A.reduce((a, b) => a + b, 0)
}