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
// 初始化连接
function initWebSocket () {
  if (typeof (WebSocket) === 'undefined') {
    this.$message.error('您的浏览器不支持WebSocket！');
  } else {
    const userId = '';
    const url = process.env.VUE_APP_SOCKET_URL;
    const socketUrl = generateEndpoint(url);
    // 实例化socket
    this.socket = new WebSocket(`${socketUrl}/xx`);
    // 监听socket连接
    this.socket.onopen = () => {
      console.log('websocket连接成功');
    };
    // 监听socket错误信息
    this.socket.onerror = () => {
      console.log('websocket连接错误');
    };
    // 监听socket断开
    this.socket.onclose = () => {
      console.log('websocket连接断开');
      initWebSocket();
    };
    // 监听socket消息
    this.socket.onmessage = ({ data }) => {
      try {
        // 这里写逻辑
      } catch (e) {
        console.log(e);
      }
    };
  }
}

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

// 复制高阶函数
import { Message } from 'element-ui';
export const copyText = (function () {
    if (navigator.clipboard) {
        return (text) => navigator.clipboard.writeText(text).then(() => {
            Message({
                message: '复制成功',
                type: 'success',
                duration: 3000
            });
        });
    } else {
        return (text) => {
            const input = document.createElement('input');
            input.setAttribute('value', text);
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
            Message({
                message: '复制成功',
                type: 'success',
                duration: 3000
            });
        };
    }
})();
```
## 3-13 字符串分割
```js
/**
 * @Description
 * @author qianyinggenian
 * @date 2024/4/19
 * @str str 字符串
 * @separatorChar separatorChar 分割字符
 * @isIncludes isIncludes 是否包含分割字符
 * @isLastIndex isLastIndex 是否从最后出现的分割字符
 */
export function getStr (str, separatorChar, isIncludes = false, isLastIndex = false) {
  let index = str.indexOf(separatorChar);
  if (isLastIndex) {
    index = str.lastIndexOf(separatorChar);
  } else {
    index = str.indexOf(separatorChar);
  }
  if (index !== -1) {
    const endStr = isIncludes ? str.slice(index) : str.slice(index + 1);
    const startStr = isIncludes ? str.slice(0, index + 1) : str.slice(0, index);
    return {
      endStr,
      startStr
    };
  } else {
    return '';
  }
}
```
## 3-14 数组求和
```js
/**
 * @Description 数组求和
 * @author qianyinggenian
 * @date 2024/4/26
 */
export function getSum (list, field) {
  if (list?.length > 0) {
    if (field) {
      return list.reduce((acc, item) => {
        return getValue(acc, item[field]);
      }, 0);
    } else {
      return list.reduce((acc, val) => {
        return getValue(acc, val);
      }, 0);
    }
  } else {
    return 0;
  }
  function getValue (acc, value) {
    const fieldType = typeof value;
    if (['number', 'string'].includes(fieldType) && Number(value)) {
      return acc + Number(value);
    } else {
      return acc;
    }
  }
}
```
## 3-15 标签页通信
```js
/**
 * @Description 跨标签页通信
 * @author qianyinggenian
 * @date 2024/4/29
 */
const channel = new BroadcastChannel('my-channel');
/**
 * @Description 发送信息
 * @author qianyinggenian
 * @date 2024/4/29
 */
export function sendMsg (type, msg) {
  channel.postMessage({ type, msg });
}
/**
 * @Description 监听通信
 * @author qianyinggenian
 * @date 2024/4/29
 */

export function listenMsg (callback) {
  const handler = (evt) => {
    callback && callback(evt.data);
  };
  channel.addEventListener('message', handler);
  return () => {
    channel.removeEventListener('message', handler);
  };
}
```
### 3-15-1 发送页
```vue

<template>
<div>
  <el-button @click="handleSubmit">发送</el-button>
</div>
</template>
<script>
import { sendMsg } from '@/utils/util';

export default {
  components: {},
  data () {
    return {};
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    handleSubmit () {
      this.num += 1;
      sendMsg('add', this.num);
    }
  }
};
</script>
<style scoped lang="scss">

</style>

```

### 3-15-2 监听页
```vue

<template>
  <div></div>
</template>
<script>
import { listenMsg } from '@/utils/util';
export default {
  components: {},
  data () {
    return {};
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    this.removeListen = listenMsg((info) => {
      console.log('info', info);
      if (info.msg) {
        this.count = info.msg;
      }
    });
  },
  destroyed () {
    this.removeListen();
  },
  methods: {}
};
</script>
<style scoped lang="scss">

</style>

```
## 3-16 防抖函数
```js

/**
 * @Description 防抖函数
 * @author qianyinggenian
 * @params method 函数
 * @params delay 延时时间-毫秒
 * @date 2024/12/30
 */
export function debounce (method, delay) {
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      method(context, args);
    }, delay);
  };
}
```
```vue
<script>
  import { debounce } from '@/utils/util';

  export default {
    components: {},
    data () {
      return {};
    },
    props: {},
    computed: {},
    watch: {},
    created () {},
    mounted () {},
    methods: {
      handleClick: debounce((vm, args) => {
        const [params, params2, params3] = args;
        console.log('params', params);
        console.log('params2', params2);
        console.log('params3', params3);
        console.log('vm', vm);
        vm.fn();
      }, 2000),
      fn () {
        console.log('防抖输出');
      }
    }
  };
</script>

<template>
  <div><button class="btn type-1" @click="handleClick('参数1','参数2',false)">按钮</button></div>
</template>

<style scoped lang="scss">

</style>

```
## 3-17 截图
```js
import html2canvas from 'html2canvas';
setTimeout(() => {
  // container截图范围节点id
  html2canvas(document.getElementById('container'), {
    useCORS: true, // 允许跨域资源加载
    logging: true, // 开启控制台日志（调试用）
    scale: 1 // 提高清晰度（可调整）
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'map.jpg';
    link.href = canvas.toDataURL();
    link.click();
  });
}, 500);
```
## 3-18 获取文件媒体类型
```js
const mimeTypeMap = {
  // --- 常用办公文档 (Office & PDF) ---
  pdf: 'application/pdf',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ppt: 'application/vnd.ms-powerpoint',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  csv: 'text/csv',
  rtf: 'application/rtf', // 富文本格式

  // --- 图片格式 (Images) ---
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  gif: 'image/gif',
  bmp: 'image/bmp',
  svg: 'image/svg+xml',
  webp: 'image/webp',
  ico: 'image/x-icon',
  tiff: 'image/tiff',
  tif: 'image/tiff',

  // --- 音视频格式 (Audio & Video) ---
  mp3: 'audio/mpeg',
  wav: 'audio/wav',
  ogg: 'audio/ogg',
  mp4: 'video/mp4',
  avi: 'video/x-msvideo',
  mov: 'video/quicktime',
  wmv: 'video/x-ms-wmv',
  flv: 'video/x-flv',
  webm: 'video/webm',
  m4a: 'audio/mp4',

  // --- 压缩包 (Archives) ---
  zip: 'application/zip',
  rar: 'application/x-rar-compressed',
  '7z': 'application/x-7z-compressed',
  tar: 'application/x-tar',
  gz: 'application/gzip',

  // --- 文本与代码 (Text & Code) ---
  txt: 'text/plain',
  html: 'text/html',
  htm: 'text/html',
  css: 'text/css',
  js: 'application/javascript', // 或 text/javascript
  json: 'application/json',
  xml: 'application/xml', // 或 text/xml
  md: 'text/markdown',
  java: 'text/x-java-source',
  py: 'text/x-python',
  c: 'text/x-c',
  cpp: 'text/x-c++src',
  h: 'text/x-c',
  yaml: 'application/x-yaml',
  yml: 'application/x-yaml',

  // --- 字体 (Fonts) ---
  ttf: 'font/ttf',
  otf: 'font/otf',
  woff: 'font/woff',
  woff2: 'font/woff2',
  eot: 'application/vnd.ms-fontobject',

  // --- 其他/特殊格式 ---
  apk: 'application/vnd.android.package-archive',
  exe: 'application/x-msdownload',
  msi: 'application/x-msdownload',
  dwg: 'application/acad', // CAD文件，有时也用 application/x-autocad
  psd: 'image/vnd.adobe.photoshop',
  ai: 'application/postscript',
  eps: 'application/postscript',
  jsonld: 'application/ld+json',
  mjs: 'text/javascript',

  // --- 默认兜底 ---
  default: 'application/octet-stream'
};

// 辅助函数：根据后缀获取类型
export function getMimeType (suffix) {
  const key = suffix.toLowerCase();
  return mimeTypeMap[key] || mimeTypeMap.default;
}
```

## 3-19 下载文件
```js
export function downloadFile (resultValue, filename = '新建文本文档', filetype = 'txt') {
  if (resultValue) {
    const blob = new Blob([resultValue], { type: getMimeType(filetype) });
    const downloadElement = document.createElement('a');
    const href = window.URL.createObjectURL(blob); // 创建下载的链接
    const fileName = `${filename}.${filetype}`;
    downloadElement.href = href;
    downloadElement.download = fileName; // 下载后文件名
    document.body.appendChild(downloadElement);
    downloadElement.click(); // 点击下载
    document.body.removeChild(downloadElement); // 下载完成移除元素
    window.URL.revokeObjectURL(href); // 释放掉blob对象
  } else {
    this.$message.error('内容为空，不可保存');
  }
}
```

## 3-20 获取文件后缀
```js
export function getFileExtension (filename) {
  if (!filename) return '';

  // 找到最后一个点的位置
  const lastDotIndex = filename.lastIndexOf('.');

  // 如果没有点，或者点在第一个字符之前（如 .gitignore），返回空字符串
  if (lastDotIndex === -1 || lastDotIndex === 0) {
    return '';
  }

  // 截取点之后的部分并转为小写（可选，方便比较）
  return filename.slice(lastDotIndex + 1).toLowerCase();
}
```
## 3-21 生成随机字符串
```js
export function generateRandomNumbers () {
  let d = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}
```
## 3-22 将扁平列表转换为树形结构
```js
/**
 * 将扁平列表转换为树形结构
 * @param {Array} list - 原始扁平数组
 * @param {String} rootId - 根节点的 parentId 标识，默认为 'root'
 * @returns {Array} - 树形结构数组
 */
function listToTree (list, rootId = 'root') {
  // 1. 创建映射表：key 为 id，value 为节点对象
  // 使用 Map 或者普通对象都可以，这里用普通对象
  const map = {};
  const tree = [];

  // 2. 初始化：将所有节点放入 map，并初始化 children 数组
  // 注意：这里需要深拷贝或者直接引用，通常直接引用即可，但为了安全可以浅拷贝 children
  list.forEach(item => {
    // 确保 children 存在且为数组，防止后端传 null 导致 push 报错
    item.children = item.children || [];
    map[item.id] = item;
  });

  // 3. 构建树：再次遍历，将节点挂载到父节点下
  list.forEach(item => {
    const parent = map[item.parentId];

    if (parent) {
      // 如果找到了父节点，将当前节点加入父节点的 children
      parent.children.push(item);
    } else {
      // 如果没找到父节点（即 parentId 为 root 或 找不到对应 id），视为根节点
      // 这里做一个额外判断，确保只有真正的根节点才进入 tree 数组
      if (item.parentId === rootId || !item.parentId) {
        tree.push(item);
      } else {
        // 这种情况通常是数据脏数据（父节点不存在），可以选择忽略或单独处理
        console.warn(`发现孤立节点，ID: ${item.id}, 缺失的父ID: ${item.parentId}`);
        // 也可以选择将其强行放入根节点，视业务需求而定
        // tree.push(item);
      }
    }
  });

  return tree;
}
```
