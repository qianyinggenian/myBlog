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

