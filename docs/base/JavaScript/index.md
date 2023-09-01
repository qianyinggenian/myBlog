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
