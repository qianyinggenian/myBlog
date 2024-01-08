# 4、VUE

## 4-1  开始时间与结束时间比较验证

```vue
<template>
<el-form :model="formData" ref="Form">
	<el-row>
      <el-form-item
         class="row-two"
         label="开始时间："
         prop="StartDate"
         :rules="[$validate.Required,
         validateDateComputed('StartDate', 'EndDate')
          ]">
         <el-date-picker
           type="datetime"
           format="yyyy-MM-dd HH:mm:ss"
           value-format="yyyy-MM-dd HH:mm:ss"
           v-model="formData.StartDate">
         </el-date-picker>
     </el-form-item>
      <el-form-item
          class="row-two"
          label="结束时间："
          prop="EndDate"
          :rules="[$validate.Required,
          validateDateComputed('StartDate', 'EndDate')
          ]">
          <el-date-picker
            type="datetime"
            format="yyyy-MM-dd HH:mm:ss"
            value-format="yyyy-MM-dd HH:mm:ss"
            v-model="formData.EndDate">
          </el-date-picker>
        </el-form-item>
     </el-row>
</el-form>
</template>
<script>
    export default {
computed: {
/*开始时间和结束时间的比较验证*/
   validateDateComputed () {
      return (start, end) => {
        return {
          validator: (rule, value, callback) => {
            if (this.formData[start] && this.formData[end]) {
              if (new Date(this.formData[end]).getTime() < new Date(this.formData[start]).getTime()) {
                callback(new Error('请选择正确的时间！'));
              } else {
                const formRef = this.$refs.Form;
                if (formRef) {
                  formRef.clearValidate(start);
                  formRef.clearValidate(end);
                }
                callback();
              }
            } else {
              callback();
            }
          },
          trigger: ['blur']
        };
      };
    }
}

};
</script>

```

## 4-2 postMessage

postMessage语法知识点，参考：https://www.runoob.com/js/met-win-postmessage.html

```vue
// 子页面
<template>
<div>
    <el-button id="sendMessage" @click="sendMessage">发送postMessage消息</el-button>
   <iframe id="iframe" frameborder="0" height="100%" width="100%" src="http://localhost:8081/"></iframe>
</div>
</template>
<script>
let receiver;
export default {
  name: 'index',
  components: {
  },
  data () {
    return {
    };
  },
  mounted () {
    receiver = document.getElementById('iframe').contentWindow;
    const that = this;
    window.addEventListener('message', (e) => {
        // 父页面的域名：http://localhost:8081
      if (e.origin === 'http://localhost:8081') { // 验证消息来源地址
        that.receiverMessageFn(e);
      }
    }, false);
  },
  methods: {
    /**
     * @Description 接收postMessage的消息
     * @author wangkangzhang
     * @date 2023/6/2
    */
    receiverMessageFn (e) {
      console.log('收到消息', e.data);
    },
      
    /**
     * @Description 发送postMessage消息
     * @author wangkangzhang
     * @date 2023/6/2
    */
    sendMessage (e) {
      e.preventDefault();
      const time = new Date().getTime();
      const val = `哈哈哈哈，我发送postMessage消息，请接收，${time}`;
      const params = {
        name: '龙头山',
        id: 'aasd',
        label: val,
        list: [
          {
            name: 'sdfsd',
            id: '11111'
          },
          {
            name: 'sdfsd',
            id: '11111'
          },
          {
            name: 'sdfsd',
            id: '11111'
          },
          {
            name: 'sdfsd',
            id: '11111'
          }
        ]
      };
      receiver.postMessage(params, 'http://localhost:8081/');
    }
  }
};
</script>
```

```vue
// 父页面
<template>
<div class="container">
  <div class="title">我是myWeb页面</div>
  <p>接收消息：</p>
  <div id="recMessage"></div>
</div>
</template>

<script>
export default {
  name: "index",
  mounted() {
    var messageEle = document.getElementById('recMessage');
    window.addEventListener('message', function (e) {  // 监听 message 事件
      console.log(e.data);
       // 子页面的域名： http://localhost:31090
      if (e.origin !== "http://localhost:31090") {  // 验证消息来源地址
        return;
      }
      messageEle.innerHTML = "从"+ e.origin +"收到消息： " + e.data.label;
      // 发送消息给子页面
      window.parent.postMessage('已经接收了哦', e.origin);
    });
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  padding-left: 50px;
  align-items: center;
  background: white;
  .title {
    width: 100%;
    height: 50px;
  }
}
#recMessage {
  height: 300px;
  width: 900px;
  border: 1px solid red;
}
</style>

```

## 4-3 element时间组件禁用

```vue
// 参考：https://blog.csdn.net/weixin_42343307/article/details/126320241
<template>
<div>
    <el-form ref="ruleForm" :model="formData" :rules="rules" label-width="100px">
        <el-form-item label="预计撤离完成时间：" prop="planDate" :rules="rules.requiredStr">
           <el-date-picker
                v-model="formData.planDate"
                type="datetime"
                :readonly="readonly"
                :clearable="false"
                value-format="yyyy-MM-dd HH:mm:ss"
                format="yyyy-MM-dd HH:mm:ss"
                :picker-options="pickerOptions">
            </el-date-picker>
        </el-form-item>
    </el-form>

</div>
</template>
<script>
let receiver;
export default {
  name: 'index',
  components: {
  },
  data () {
    return {
        formData: {},
          rules: {
            requiredStr: [
              { required: true, message: '非空项', trigger: 'blur' }
            ]
          },
        selectableRange: '',
        pickerOptions: {
          disabledDate (time) {
              // 禁用当前日期之前的日期
             return time.getTime() < Date.now() - 8.64e7;
          },
            // 时间可选范围
          selectableRange: ''
        }
    };
  },
    watch:{
    'formData.planDate': {
      handler () {
        this.selectable();
      },
      deep: true,
      immediate: true
    }
    },
  mounted () {
      // moment 为时间库
      this.selectableRange = this.$moment(new Date()).format('HH:mm:ss');
    this.pickerOptions.selectableRange = `${this.selectableRange} - 23:59:59`;
  },
  methods: {
    
    selectable () {
      const date = this.$moment(this.formData.planDate).startOf('day').format('x');
      const nowDate = this.$moment().startOf('day').format('x');
      // 如果选择的是今天 则需要禁用已经过去的时间节点
      if (date <= nowDate) {
        this.pickerOptions.selectableRange = `${this.$moment().format('HH:mm:ss')} - 23:59:59`;
      } else {
        // 如果是以后的日期，则不需要禁用时间节点
        this.pickerOptions.selectableRange = '00:00:00 - 23:59:59';
      }
    }
  }
};
</script>
```

## 4-4 vuex调用

```js
// panel.js
export default {
  namespaced: true,
  state: {
    messageNum: sessionStorage.getItem('messageNum') || 0,
    todoParams: {},
    socketFlag: '',
    isExpandPanel: sessionStorage.getItem('isExpandPanel') || false
  },
  mutations: {
    SET_TODO_PARAMS (state, params) {
      state.todoParams = params;
    },
    SET_MESSAGE_NUM (state, data) {
      state.messageNum = data;
    },
    SET_SOCKET_FLAG (state, flag) {
      state.socketFlag = flag;
    },
    // 展开或折叠面板
    SET_EXPAND_PANEL (state, flag) {
      state.isExpandPanel = flag;
      sessionStorage.setItem('isExpandPanel', flag);
    }
  },
  actions: {
    setToDoParams ({ commit }, params) {
      commit('SET_TODO_PARAMS', params);
    },
    setExpandPanel ({ commit }, params) {
      console.log('params', params);
    }
  }
};

```

```vue
<template>
  <div></div>
</template>

<script>
export default {
  name: 'test',
  components: {},
  data () {
    return {};
  },
  watch: {},
  computed: {},
  mounted () {},
  methods: {
    handleClickPanel () {
      this.isExpand = !this.isExpand;
      this.$store.commit('panel/SET_EXPAND_PANEL', this.isExpand);
      this.$store.dispatch('panel/setExpandPanel', this.isExpand);
    }
  }
};
</script>

<style scoped>

</style>

```


## 4-5 数据字典转换
```vue
  computed: {
	dictionary () {
	      return (val) => {
	        if (this.dictionaryValue&& this.dictionaryValue.length > 0 && val) {
              const result = this.dictionaryValue.find(item => val === item.displayValue);
	          return result ? result.displayName : val;
	        } else {
	          return '';
	        }
	      };
	    }
    }
```
## 4-6 el-select 二次封装，添加title属性
### 4-6-1 文件目录
![文件目录](/img/3.png)
### 4-6-2 继承el-select, 组将名为my-select
```vue
<!--继承el-select, 组将名为my-select-->
<script>
import { Select } from 'element-ui';

export default {
  name: 'mySelect',
  extends: Select
};
</script>

<style scoped>

</style>

```
### 4-6-3 对el-select进行拓展
```vue
<!-- 对el-select进行拓展 -->
<template>
  <MySelect
      :title="selectTitle"
      v-model="selectValue"
      v-bind="$attrs"
      v-on="$listeners">
    <el-option
        v-for="item in options"
        :key="item[keyValue]"
        :label="item[keyLabel]"
        :value="item[keyValue]">
    </el-option>
  </MySelect>
</template>

<script>
import MySelect from './my-select.vue';

export default {
  name: 'index',
  components: {
    MySelect
  },
  data () {
    return {
      selectTitle: '',
      selectValue: null
    };
  },
  props: {
    value: {
      type: [String, Array]
    },
    keyValue: {
      type: String,
      default: 'value'
    },
    keyLabel: {
      type: String,
      default: 'label'
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    value: {
      handler (newVal) {
        this.selectValue = newVal;
      },
      immediate: true
    },
    selectValue: {
      handler (newVal) {
        if (newVal && newVal.length) {
          if (typeof newVal === 'string') {
            const result = this.options.find(item => item[this.keyValue] === newVal);
            if (result) {
              this.selectTitle = result[this.keyLabel];
            } else {
              this.selectTitle = '';
            }
          } else {
            this.getArrTitle();
          }
        } else {
          this.selectTitle = '';
        }
      }
    }
  },
  methods: {
    getArrTitle () {
      const list = JSON.parse(JSON.stringify(this.options));
      const arr = [];
      this.selectValue.forEach(val => {
        for (const key of list) {
          if (val === key[this.keyValue]) {
            arr.push(key);
          }
        }
      });
      this.selectTitle = arr.map(value => value[this.keyLabel]).toString();
    }
  }
};
</script>

<style scoped>

</style>

```
### 4-6-4 使用拓展后的el-select
```vue
<!-- 使用拓展后的el-select -->
<template>
  <proxySelect
      multiple
      v-model="value"
      :options="options"
      clearable>
  </proxySelect>
</template>

<script>
import proxySelect from './index.vue';

export default {
  name: 'dome',
  components: {
    proxySelect
  },
  data () {
    return {

      value: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }]
    };
  },
  props: {},
  watch: {},
  computed: {},
  mounted () {
  },
  methods: {}
};
</script>

<style scoped>

</style>

```

## 4-7 获取本地文件中的内容
```vue
<template>
  <div>
    <input id="file" accept="" type="file" @change="handleChange"/>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    components: {},
      data () {
        return {};
      },
      props: {},
      watch: {},
      computed: {},
      mounted () {},
      methods: {

        /**
         * @Description 选择文件后触发
         * @author qianyinggenian
         * @date 2024/01/08
         */
        handleChange (event) {
          const file = event.target.files[0];
          // 打印文件名及类型
          console.log('文件名:', file.name);
          console.log('文件类型:', file.type);
          const reader = new FileReader();
          reader.onloadend = () => {
            console.log('文件路径:', reader.result);
            this.getFileInfo(reader.result);
          };
          reader.readAsDataURL(file);
        },
        /**
         * @Description 获取文件中的内容
         * @author qianyinggenian
         * @date 2024/01/08
         */
        getFileInfo (path) {
          axios.get(path) // 这里的路径应根据实际情况修改
              .then(response => {
                this.fileContent = response.data;
                console.log('fileContent', this.fileContent);
              })
              .catch(error => {
                console.log('Error:', error);
              });
        }
      }
}
</script>

<style lang="scss" scoped>

</style>
```
