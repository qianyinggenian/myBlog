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

