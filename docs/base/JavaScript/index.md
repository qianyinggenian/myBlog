# 3、JavaScript

## 3-1 判断对象是否为空

```js
if (Object.keys(obj).length === 0) {
  console.log('空对象');
  } else {
    console.log('非空对象');
  }
```

## 3-2 金额，三位就以逗号分割的形式方法，小数两位

```javascript
// 第一种方法
toThousands (num) {
  const result = [];
  let counter = 0;
  const str = (num || 0).toString().split('.')[0];
  // 存在小数
  const str1 = (num || 0).toString().split('.')[1];
  let flag = false;
  if ((num || 0).toString().includes('.')) {
    // 存在小数
    flag = true;
  }
  num = str.split('');
  for (var i = num.length - 1; i >= 0; i--) {
    counter++;
    result.unshift(num[i]);
    if (!(counter % 3) && i !== 0) { result.unshift(','); }
  }
  if (flag) {
    // 存在小数
    return result.join('') + '.' + str1;
  } else {
    return result.join('');
  }
}
// 第二种方法
export const formMoney = (n) => {
  const money = n.toString();
  return money.replace(new RegExp(`(?!^)(?=(\\d{3})+${money.includes('.') ? '\\.' : '$'})`, 'g'), ',');
};
// 第三种方法
export default formatNumber(value) {
  value += '';
  const list = value.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';

  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }

  if (num) {
    result = num + result;
  }

  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
}
```

## 3-3 数组对象去重

```js
export function uniqueArray (arr, key) {
  const obj = {};
  arr = arr.reduce(function (item, next) {
    // eslint-disable-next-line no-unused-expressions
    obj[next[key]] ? '' : obj[next[key]] = item.push(next);
    return item;
  }, []);
  return arr;
}

```

## 3-4 动态配置WebSocket

```js
export function generateEndpoint (socketURI) {
  if (socketURI.includes('ws')) {
    return socketURI;
  } else {
    return `${location.protocol === 'https' ? 'wss' : 'ws'}://${location.host}${socketURI}`;
  }
}

```

## 3-5 脱敏处理

```vue
  computed: {
      encryFn () {
      return (value, startLen, endLen) => {
        if (value && value.length) {
          if (value.length > 2) {
            const prefix = value.substr(0, startLen);
            const suffix = value.substr(-endLen, endLen);
            const len = value.length - startLen- endLen;
            let str= '';
            for (let i = 0; i < len; i++) {
              str+= '*';
            }
            return `${prefix}${str}${suffix}`;
          } else {
            const prefix = value.substr(0, 1);
            return `${prefix}*`;
          }
        } else {
          return value;
        }
      };
    },
  }

```

## 3-6 拷贝
```js
JSON.parse(JSON.stringify(Value))
```
## 3-7 判断对象是否为空
```js
if (Object.keys(obj).length === 0) {
  console.log('空对象');
  } else {
    console.log('非空对象');
  }
```
## 3-8 判断浏览器类型
```js
export function browserType () {
  var userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串
  // 判断是否Opera浏览器
  if (userAgent.indexOf('Opera') > -1) {
    return 'isOpera';
  }
  // 判断是否Firefox浏览器
  if (userAgent.indexOf('Firefox') > -1) {
    return 'Firefox';
  }
  // 判断是否Chrome浏览器
  if (userAgent.indexOf('Chrome') > -1) {
    return 'Chrome';
  }
  // 判断是否Safari浏览器
  if (userAgent.indexOf('Safari') > -1) {
    return 'Safari';
  }
  // 判断是否IE浏览器
  if (!!window.ActiveXObject || 'ActiveXObject' in window) {
    return 'isIE';
  }
}
```
## 3-9 对象深度合并
```js
// 参考：http://www.seozhijia.net/javascript/238.html
/**
 *判断对象是否是一个纯粹的对象
 */
function isPlainObject (obj) {
  return typeof obj === 'object' && Object.prototype.toString.call(obj) === '[object Object]';
}

/**
 *深度合并多个对象的方法
 */
export function deepAssign () {
  const len = arguments.length;
  let target = arguments[0];
  if (!isPlainObject(target)) {
    target = {};
  }
  for (let i = 1; i < len; i++) {
    const source = arguments[i];
    if (isPlainObject(source)) {
      for (const s in source) {
        if (s === '__proto__' || target === source[s]) {
          continue;
        }
        if (isPlainObject(source[s])) {
          target[s] = deepAssign(target[s], source[s]);
        } else {
          target[s] = source[s];
        }
      }
    }
  }
  return target;
}
// 自定义方法： const setting = deepAssign(this.defaultSetting, this.setting)
// 使用Jquery方法
// const setting = $.extend(true, this.defaultSetting, this.setting);
```
## 3-10 两个数组查找相同项
```js
const columns = [
  {
    "prop": "name",
    "label": "姓名",
    "minWidth": "150px"
  },
  {
    "prop": "region",
    "label": "区域",
    "minWidth": "250px",
    "slot": true,
    "slotHeader": "region"
  },
  {
    "prop": "province",
    "label": "省份",
    "slot": true,
    "slotColumn": "province",
    "minWidth": "250px"
  },
  {
    "prop": "city",
    "label": "城市",
    "minWidth": "350px"
  },
  {
    "prop": "county",
    "label": "市县",
    "minWidth": "250px"
  },
  {
    "prop": "zip",
    "label": "邮政编码",
    "minWidth": "150px"
  },
  {
    "prop": "creatDate",
    "label": "创建日期",
    "minWidth": "150px"
  }
];
const list =[
  "name",
  "region",
  "province",
  "city",
  "county",
  "zip"
]
function getSame(columns, filterCheckList) {
  const list = JSON.parse(JSON.stringify(columns));
  return list.filter(item => {
    return filterCheckList.some(val => item.prop === val);
  });
}
console.log(getSame(columns,list))
/* 结果如下
[
    {
      "prop": "name",
      "label": "姓名",
      "minWidth": "150px"
    },
    {
      "prop": "region",
      "label": "区域",
      "minWidth": "250px",
      "slot": true,
      "slotHeader": "region"
    },
    {
      "prop": "province",
      "label": "省份",
      "slot": true,
      "slotColumn": "province",
      "minWidth": "250px"
    },
    {
      "prop": "city",
      "label": "城市",
      "minWidth": "350px"
    },
    {
      "prop": "county",
      "label": "市县",
      "minWidth": "250px"
    },
    {
      "prop": "zip",
      "label": "邮政编码",
      "minWidth": "150px"
    }
]
*/
```
## 3-11 echarts 地图名称位置更改 
#### 添加cp数组字段，值为经纬度坐标
```json

"properties": {
    "adcode": 620000,
    "name": "甘肃省",
    "center": [
    103.823557,
    36.058039
    ],
    "cp": [
    103.830175,
    36.063365
    ],
    "childrenNum": 14,
    "level": "province",
    "parent": {
    "adcode": 100000
    },
    "subFeatureIndex": 27,
    "acroutes": [
    100000
    ]
},
```
#### 更改前
![更改前](/img/5.png)
#### 更改后
![更改后](/img/6.png)
## 3-12 复制
```js
function handleCopyResult () {
      // const m3uOutput = document.getElementById('m3uOutput');
      // m3uOutput.select();
      // document.execCommand('copy');
      // alert('内容已复制到剪贴板！');
      // 下面为新语法
      navigator.clipboard.writeText(this.vaule).then(() => {
        this.$message.success('复制成功');
      });
    }
```
