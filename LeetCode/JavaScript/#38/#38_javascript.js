// 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 被读作  "one 1"  ("一个一") , 即 11。
// 11 被读作 "two 1s" ("两个一"）, 即 21。
// 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。

// 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。

// 注意：整数顺序将表示为一个字符串。

// 示例 1:

// 输入: 1
// 输出: "1"
// 示例 2:

// 输入: 4
// 输出: "1211"

// 题目理解有点问题 其实是这样的 
// 第一位 ‘1’ 读一个一  所以第二位 ‘11’
// 第二位 ‘11’ 读二个一  所以第三位 ‘21’
// 以此类推
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 6.     312211


var countAndSay = function(n) {
	var arr = [1];
	var str = "";
    
    function toArray(arr){
        var newArr = [];
        for(var i=0; i<arr.length; i++){
            var num = 1; //重复次数
            var index = arr[i] //当前数字
            while(arr[i+1] == index ){
                num ++;
                i++;
            }
            newArr.push(num,index);
        }
        return newArr;
    }
    for(var j=1; j<n; j++){
        arr = toArray(arr);
    }
	return arr.join('');
};