// 给定一个二进制矩阵 A，我们想先水平翻转图像，然后反转图像并返回结果。

// 水平翻转图片就是将图片的每一行都进行翻转，即逆序。例如，水平翻转 [1, 1, 0] 的结果是 [0, 1, 1]。

// 反转图片的意思是图片中的 0 全部被 1 替换， 1 全部被 0 替换。例如，反转 [0, 1, 1] 的结果是 [1, 0, 0]。

//

// 示例 1：

// 输入：[[1,1,0],[1,0,1],[0,0,0]]
// 输出：[[1,0,0],[0,1,0],[1,1,1]]
// 解释：首先翻转每一行: [[0,1,1],[1,0,1],[0,0,0]]；
//      然后反转图片: [[1,0,0],[0,1,0],[1,1,1]]
// 示例 2：

// 输入：[[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
// 输出：[[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// 解释：首先翻转每一行: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]]；
//      然后反转图片: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
//

// 提示：

// 1 <= A.length = A[0].length <= 20
// 0 <= A[i][j] <= 1

// 反转 在依次转化值
// 此方法是最差的
var flipAndInvertImage = function (A) {
  for (let i = 0; i < A.length; i++) {
    A[i].reverse();
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j] == 0) {
        A[i][j] = 1;
      } else {
        A[i][j] = 0;
      }
    }
  }
  return A;
};

// 此方法只需遍历一半数组
var flipAndInvertImage = function (A) {
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length / 2; j++) {
      if (A[i][j] == A[i][A.length - j - 1]) {
        // 首尾两个数相等 取倒数
        A[i][j] = A[i][A.length - j - 1] = 1 - A[i][j];
      }
      // 若两个数不相等 例 [1,0,0]
      // 反转 [0,0,1] 后 转化 还是 [1,0,0] 无需变化
    }
  }
  return A;
};
