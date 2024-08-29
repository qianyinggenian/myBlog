## vue3中使用echarts时，tooltip的trigger设置为axis时formatter不触发
```js
tooltip: {
  trigger: "axis",
  formatter: function (params) {
    console.log("params", params);
  },
  axisPointer: {
    type: "shadow", // 阴影指示器
  },
},

```
### 解决办法： 用 markRaw 让echarts从监听对象变成普通对象！！！
```js
import { ref, reactive, watch, onMounted, markRaw } from 'vue';
...
const chartBox = document.getElementById('chart-box');
myChart = markRaw(echarts.init(chartBox));



```