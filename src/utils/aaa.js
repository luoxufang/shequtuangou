export default class aaa {
  // 判断字符串是否为空
  static isEmpty(str) {
    return str == '' || str == null || str == 'null';
  }

  //获得对象的key
  static getObjKeys(obj) {
    if (obj !== Object(obj)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in obj)
        if (Object.prototype.hasOwnProperty.call(obj, key))
            keys[keys.length] = key;
    return keys;
  }

  /**
   * 从数组中生成指定长度的组合
   */
  static arrayCombine(targetArr) {
    if(!targetArr || !targetArr.length) {
        return [];
    }

    var len = targetArr.length;
    var resultArrs = [];

    // 所有组合
    for(var n = 1; n < len; n++) {
        var flagArrs = this.getFlagArrs(len, n);
        while(flagArrs.length) {
            var flagArr = flagArrs.shift();
            var combArr = [];
            for(var i = 0; i < len; i++) {
                flagArr[i] && combArr.push(targetArr[i]);
            }
            resultArrs.push(combArr);
        }
    }
    return resultArrs;
  }

  /**
   * 获得从m中取n的所有组合
   */
  static getFlagArrs(m, n) {
    if(!n || n < 1) {
      return [];
    }

    var resultArrs = [],
      flagArr = [],
      isEnd = false,
      i, j, leftCnt;

    for (i = 0; i < m; i++) {
      flagArr[i] = i < n ? 1 : 0;
    }

    resultArrs.push(flagArr.concat());

    while (!isEnd) {
      leftCnt = 0;
      for (i = 0; i < m - 1; i++) {
        if (flagArr[i] == 1 && flagArr[i+1] == 0) {
          for(j = 0; j < i; j++) {
              flagArr[j] = j < leftCnt ? 1 : 0;
          }
          flagArr[i] = 0;
          flagArr[i+1] = 1;
          var aTmp = flagArr.concat();
          resultArrs.push(aTmp);
          if(aTmp.slice(-n).join("").indexOf('0') == -1) {
              isEnd = true;
          }
          break;
        }
        flagArr[i] == 1 && leftCnt++;
      }
    }
    return resultArrs;
  }

  //检查是否计算过
  getPrice(key) {
    //检查是否已计算过
    if (typeof this.cacheData[key] != 'undefined') {
        return this.cacheData[key];
    }
    return '0.00'
  }

  //初始化组合
  static getNum(key,cacheData,keysData,allData) {
    var result = 0,
    i, j, m,
    items, n = [];
    //检查是否已计算过
    if (typeof cacheData[key] != 'undefined') {
        return cacheData[key].count;
    }

    items = key.split(";");

    //已选择数据是最小路径，直接从已端数据获取
    if (items.length === keysData.length) {
      return allData[key] ? allData[key].count : 0;
    }

    //拼接子串
    for (i = 0; i < keysData.length; i++) {
      for (j = 0; j < keysData[i].length && items.length > 0; j++) {
        if (keysData[i][j] == items[0]) {
            break;
        }
      }

      if (j < keysData[i].length && items.length > 0) {
        //找到该项，跳过
        n.push(items.shift());
      } else {
        //分解求值
        for (m = 0; m < keysData[i].length; m++) {
            result += this.getNum(n.concat(keysData[i][m], items).join(";"));
        }
        break;
      }
    }
    //缓存
    // this.cacheData[key] = result;
    return result;
  }
 
}
