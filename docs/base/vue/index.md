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
    <input id="file" accept=""  type="file" @change="handleChange"/>
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
## 4-8 ant-table列合并
```vue
<template>
  <ct-table :columns="columns" :data-source="data" :pagination="false" bordered>
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">
        <a href="javascript:;">{{ text }}</a>
      </template>
    </template>
  </ct-table>
</template>
<script setup>

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    colSpan: 1,
  },
  {
    title: 'Home phone',
    colSpan: 2,
    dataIndex: 'tel',
    customCell(_, index) {
      if (index >= 2) {
        return { colSpan: 2 };
      }
      return { colSpan: 1 };
    },
  },
  {
    title: 'Phone',
    colSpan: 0,
    dataIndex: 'phone',
    customCell(_, index) {
      if (index >= 2) {
        return { colSpan: 0 };
      }
      return { colSpan: 1 };
    },
  },
  {
    title: 'Address',
    colSpan: 2,
    dataIndex: 'address',
    customCell(_, index) {
      if (index >= 2) {
        return { colSpan: 2 };
      }
      return { colSpan: 1 };
    },
  },
  {
    title: 'Age',
    colSpan: 0,
    dataIndex: 'age',
    customCell(_, index) {
      if (index >= 2) {
        return { colSpan: 0 };
      }
      return { colSpan: 1 };
    },
  },
];
</script>

```
### 效果：
![ant-table列合并](/img/ant-table列合并.png)
## 4-9 ant-table表格校验
```vue
<template>
  <a-form
      ref="formRef"
      :model="formData"
  >
    <a-table
        class="ant-table-striped"
        ref="ctTableRef"
        :data-source="formData.tableData"
        bordered
        :pagination="false"
        :columns="columns"
        :defaultExpandAllRows="true"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'test'">
          <p>name:{{record.namePath}}</p>
          <a-form-item
              :rules="rules.requiredStr"
              validateFirst
              :title="record[column.dataIndex]"
              :name="record.namePath"
          >
            <a-input
                v-model:value="record[column.dataIndex]"
                allowClear
                :maxlength="100"
            ></a-input>
          </a-form-item>
        </template>
      </template>
    </a-table>
  </a-form>
</template>
<script setup>
import { ref } from 'vue';

const formRef = ref();
const rules = ref({
  requiredStr: [{ required: true, message: '非空项', trigger: 'blur' }]
});
const columns = ref([
  {
    title: '节点',
    dataIndex: 'text',
    key: 'text',
    ellipsis: true,
    width: 250
  },
  {
    title: '测试',
    dataIndex: 'test',
    key: 'test',
    ellipsis: true,
    width: 250
  }
]);
const formData = ref({
  tableData: [{
    id: '1',
    parentId: 'root',
    text: '根节点',
    actionUrl: '',
    type: '',
    showOperatePrivilege: true,
    effectiveFlag: '1',
    iconSkin: '',
    chkDisabled: false,
    checked: false,
    open: true,
    nocheck: false,
    sortOrder: 1,
    namePath: ['tableData', 0, 'test'],
    children: [
      {
        id: '8a74839b8d582387018d58eedf870026',
        parentId: '1',
        text: '二级节点',
        code: '8a74839b8d582387018d58eedf870026',
        actionUrl: '',
        type: '',
        namePath: ['tableData', 0, 'children', 0, 'test'],
        showOperatePrivilege: true,
        effectiveFlag: '1',
        iconSkin: '',
        chkDisabled: false,
        checked: false,
        open: true,
        nocheck: false,
        children: [
          {
            id: '8a74839b8d582387018d58eedf870026',
            parentId: '8a74839b8d582387018d58eedf870026',
            text: '三级节点',
            code: '8a74839b8d582387018d58eedf870026',
            actionUrl: '',
            type: '',
            showOperatePrivilege: true,
            effectiveFlag: '1',
            iconSkin: '',
            chkDisabled: false,
            checked: false,
            open: true,
            nocheck: false,
            year: '三级节点',
            isEnd: true,
            namePath: ['tableData', 0, 'children', 0, 'children', 0, 'test']
          },
        ],
      }
    ]
  }]
});
</script>

```
### 效果：
![ant-table表格校验1](/img/ant-table表格校验1.png)
![ant-table表格校验2](/img/ant-table表格校验2.png)

## 4-10 图片水印
```vue
<template>
  <div class="watermarkImage">
    <el-form :model="form" ref="form" size="small" label-width="80px">
      <el-row type="flex" justify="space-between">
        <el-col :span="24">
          <el-form-item>
            <input type="file" @change="onFileChange" accept="image/*">
          </el-form-item>
        </el-col>
      </el-row>
      <el-row  type="flex" justify="space-between">
        <el-col :span="24">
          <el-form-item label="水印内容" prop="watermarkText">
            <el-input v-model="form.watermarkText"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-between" :gutter="20">
        <el-col :span="4">
          <el-form-item label="倾斜角度" prop="tiltAngle">
            <el-input-number v-model="form.tiltAngle" :min="-90" :max="90"></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="字体大小" prop="fontSize">
            <el-input-number v-model="form.fontSize" :min="10" :max="100"></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="透明度" prop="watermarkOpacity">
            <el-input-number v-model="form.watermarkOpacity" :step="0.1" :min="0" :max="1"></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="字体" prop="fontFamily">
            <el-select size="small" filterable v-model="form.fontFamily" placeholder="请选择">
              <el-option
                  v-for="item in fontFamilyList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="字体颜色" prop="fontColor">
            <el-color-picker v-model="form.fontColor"></el-color-picker>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item>
            <el-button
                type="primary"
                class="download-btn"
                @click="downloadImage(previewData)">
              下载
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="imageBox" v-if="previewData">
      <img :src="previewData" alt="预览图片" style="max-width: 100%;">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedFile: null,
      previewData: null,
      fontFamilyList: [
        {
          value: 'Arial',
          label: 'Arial'
        },
        {
          value: '宋体',
          label: '宋体'
        },
        {
          value: '楷体',
          label: '楷体'
        },
        {
          value: '仿宋',
          label: '仿宋'
        },
        {
          value: '黑体',
          label: '黑体'
        },
        {
          value: '等线',
          label: '等线'
        },
        {
          value: '微软雅黑',
          label: '微软雅黑'
        },
        {
          value: '思源黑体',
          label: '思源黑体'
        },
        {
          value: 'Times New Roman',
          label: 'Times New Roman'
        },
        {
          value: 'Helvetica Neue',
          label: 'Helvetica Neue'
        },
        {
          value: 'Helvetica',
          label: 'Helvetica'
        },
        {
          value: 'PingFang SC',
          label: 'PingFang SC'
        },
        {
          value: 'Hiragino Sans GB',
          label: 'Hiragino Sans GB'
        },
        {
          value: 'Microsoft YaHei',
          label: 'Microsoft YaHei'
        },
        {
          value: 'sans-serif',
          label: 'sans-serif'
        }
      ],
      form: {
        watermarkText: 'Watermark',
        tiltAngle: -30,
        fontFamily: 'Arial',
        watermarkOpacity: 0.7,
        fontSize: 20,
        fontColor: '#ffffff'
      }
    };
  },
  watch: {
    form: {
      handler (newVal, oldVal) {
        if (this.selectedFile) {
          this.addWatermarkAndDownload();
        }
      },
      deep: true // 深度监听form对象的变化
    }
  },
  methods: {
    onFileChange (event) {
      this.selectedFile = event.target.files[0];
      this.addWatermarkAndDownload();
    },
    addWatermarkAndDownload () {
      if (!this.selectedFile) {
        this.$message.error('请先选择一张图片！');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          this.addWatermark(img, event.target.result);
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    },
    addWatermark (image, sourceDataUrl) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      console.log('image.width', image.width);
      console.log('image.height', image.height);
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height); // 清除canvas上的所有内容
      // 接着绘制图片和添加水印...
      ctx.drawImage(image, 0, 0, image.width, image.height);

      const {
        watermarkText,
        tiltAngle,
        fontSize,
        fontColor,
        watermarkOpacity,
        fontFamily
      } = this.form;
      const textSpacing = 100; // 水印之间的间距
      const num = Math.max(image.width, image.height);
      // const numWatermarks = Math.ceil(image.width / textSpacing);
      const numWatermarks = Math.ceil(num / textSpacing);

      for (let i = 0; i < numWatermarks; i++) {
        for (let j = 0; j < numWatermarks; j++) {
          const x = j * textSpacing;
          const y = i * textSpacing;

          ctx.save();
          ctx.translate(x, y);
          ctx.rotate((tiltAngle * Math.PI) / 180);
          ctx.font = `${fontSize}px ${fontFamily}`;
          ctx.fillStyle = fontColor;
          ctx.globalAlpha = watermarkOpacity;
          ctx.fillText(watermarkText, 0, fontSize);
          ctx.restore();
        }
      }
      ctx.globalAlpha = 1;
      this.previewData = canvas.toDataURL('image/png');
    },
    downloadImage (dataUrl) {
      if (dataUrl) {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'watermarked_image.png';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        this.$message.error('请先选择一张图片！');
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.watermarkImage {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  .el-form {
    border: 1px solid #409EFF;
    padding: 10px;
    box-sizing: border-box;
  }
  .imageBox {
    height: calc(100% - 190px);
    margin-top: 5px;
    border: 1px solid red;
    padding: 5px;
    box-sizing: border-box;
    overflow-y: auto;
  }
}
::v-deep .el-input-number__increase {
  background: #153552 !important;
  border-left: 1px solid #409eff !important;
}
::v-deep .el-input-number__decrease {
  background: #153552 !important;
  border-right: 1px solid #409eff !important;
}

::v-deep .el-color-picker__trigger {
  border: 1px solid #409eff !important;
}
.download-btn {
  width: 100px;
}
</style>

```

## 4-11 elementUI 滚动加载
```js

/**
 * @Description 监听表格滚动
 * @author wangkangzhang
 * @date 2024/4/11
 */
addEventListenerFn () {
    this.$nextTick(() => {
        // 获取节点
        this.tableDistance = this.$refs.proxyTable.$refs.elTable.bodyWrapper;
        this.tableDistance.addEventListener('scroll', () => {
            // 滚动距离
            const scrollTop = this.tableDistance.scrollTop;
            // 变量windowHeight是可视区的高度
            const windowHeight = this.tableDistance.clientHeight || this.tableDistance.clientHeight;
            // 变量scrollHeight是滚动条的总高度
            const scrollHeight = this.tableDistance.scrollHeight || this.tableDistance.scrollHeight;
            // 这里是触底 自己按自己业务需求是写逻辑
            if (scrollTop + windowHeight === scrollHeight) {
                // 获取到的不是全部数据 当滚动到底部 继续获取新的数据
                if (this.tableList.length < this.total) {
                    this.load();
                }
            }
        });
    });
},
```

## 4-12 vue3中使用tailwindcss
### 1、安装依赖
```vue
yarn add -D tailwindcss postcss autoprefixer
```
### 2、在根目录中创建postcss.config.cjs和tailwind.config.js文件
```js
// postcss.config.cjs文件
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: { browsers: ['last 5 versions'] },
  },
};

```
```js
// tailwind.config.js文件
export default {
  // 摇树优化
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // 黑夜模式
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
};

```
### 3、创建style.css文件，引入tailwindcss相关配置
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### 4、在main.js中引入style.css，之后就可以在项目中应用tailwindcss了

## 4-13 vue3中使用svg
### 1、安装依赖
```vue
yarn add -D vite-plugin-svg-icons fast-glob
```
### 2、在vite.config.js文件中引入svg插件
```js
import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';
export default defineConfig({
  plugins: [
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [
        path.resolve(__dirname, 'src/assets/icons/'), // 存放svg文件的路径
      ],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),
  ]
});
```
#### svg存放目录
![svg存放目录](/img/svg存放目录.jpg)svg存放目录
### 3、创建svgIcon组件
```vue
<template>
  <svg :class="svgClass"
       aria-hidden="true"
       :style="{width: size + 'px', height: size + 'px', fill: fill}">
    <title>{{title}}</title>
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  iconClass: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  },
  size: {
    type: Number,
    default: 20
  },
  fill: {
    type: String,
    default: '#034a6c'
  },
  title: {
    type: String
  }
});

const iconName = computed(() => `#icon-${props.iconClass}`)
const svgClass = computed(() =>{
  if (props.className) {
    return `svg-icon ${props.className}`;
  }
  return 'svg-icon';
})
</script>

<style scoped>

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover!important;
  display: inline-block;
}
</style>

```
### 4、在项目中使用svg,svgIcon需全局注册或在使用的文件中引入
```vue
<template>
  <svg-icon icon-class="新增"></svg-icon>
</template>
```
## 4-14 el-form表单中数组校验
```vue

<template>
    <div class="form-container">
      <el-form :model="formData" :rules="rules" ref="editForm"
               label-width="auto" size="small">
        <el-row type="flex" justify="space-between"
                :gutter="30" align="top"
                v-for="(item,index) in formData.testList" :key="index">
          <el-col :span="8">
            <ct-form-item label="测试1：" :prop="`testList.${index}.type1`" :rules="rules.type1">
              <el-select v-model="item.type1" placeholder="请选择类型">
                <el-option
                    v-for="item in typeList"
                    :key="item.displayValue"
                    :label="item.displayName"
                    :value="item.displayValue">
                </el-option>
              </el-select>
            </ct-form-item>
          </el-col>
          <el-col :span="16">
            <ct-form-item label="测试2：" required>
              <el-col :span="10">
                <ct-form-item  :title="item.test2"  :prop="`testList.${index}.test2`"  :rules="rules.test2">
                  <el-input
                      v-model="item.test2"
                      placeholder="请填写"
                      clearable>
                  </el-input>
                </ct-form-item>
              </el-col>
              <el-col :span="2"><span class="separator">至</span></el-col>
              <el-col :span="10">
                <ct-form-item :title="item.test3"  :prop="`testList.${index}.test3`"   :rules="rules.test3">
                  <el-input
                      v-model="item.test3"
                      placeholder="请填写"
                      clearable>
                  </el-input>
                </ct-form-item>
              </el-col>
            </ct-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-button type="primary" @click="handleSave">保存</el-button>
    </div>
</template>
<script>

  export default {
    components: {},
    data () {
      return {
        typeList: [
          {
            displayName: '测试1',
            displayValue: '测试1'
          },
          {
            displayName: '测试2',
            displayValue: '测试2'
          },
          {
            displayName: '测试3',
            displayValue: '测试3'
          }
        ],
        formData: {
          testList: [
            {
              test1: '',
              test2: '',
              test3: ''
            }
          ]
        },
        rules: {
          test1: [
            { required: true, message: '请选择', trigger: 'change' }
          ],
          test2: [
            { required: true, message: '请输入', trigger: 'blur' }
          ],
          test3: [
            { required: true, message: '请输入', trigger: 'blur' }
          ]
        }
      };
    },
    props: {},
    computed: {},
    watch: {},
    created () {},
    mounted () {},
    methods: {
      /**
       * @Description 点击保存触发
       * @author
       * @date 2024/10/17
       */
      handleSave () {
        try {
          this.$refs.editForm.validate(async (valid) => {
            if (valid) {
            }
          });
        } catch (e) {
          console.log(`error: ${e}`);
        }
      }
    }
  };
</script>
<style scoped lang="scss">
  .separator {
    color: red;
  }
</style>



```
## 4-15  Modal.confirm 提示内容自定义,多行显示
```js
<script setup>
import {
  createVNode
} from 'vue';
import { Modal } from 'ant-design-vue';


function handleTest() {
  const childrenDiv = [];
  for (let i = 0; i < 6; i += 1) {
    const item = createVNode('div', { class: 'item', }, `这是内层div的内容${i + 1}`);
    childrenDiv.push(item);
  }
  const outerDivVNode = createVNode('div', { style: 'padding: 10px;' }, childrenDiv);
  Modal.confirm({
    title: '信息提示',
    content: outerDivVNode, // 自定义的内容，多行显示
    okText: '确认',
    cancelText: '取消',
    centered: true,
    cancelButtonProps: { style: { display: 'none' } }, // 隐藏取消按钮
    onOk: async () => {
    }
  });
}

</script>

```
## 4-16 a-time-picker时间段禁用
### 时间段选择，开始时间和结束时间为空时，选择无限制，否则结束时间不能小于开始时间，开始时间不能大于结束时间
```vue
<script setup>
import { ref } from 'vue';
import dayjs from 'dayjs';

const startTime = ref(null);
const endTime = ref(null);
// 禁用开始时间选择器中的小时、分钟、秒
const disabledStartHours = () => {
  if (!endTime.value) return [];
  const endHour = dayjs(endTime.value, 'HH:mm:ss').hour();
  return Array.from({ length: 24 - endHour }, (_, i) => endHour + 1 + i);
};

const disabledStartMinutes = (selectedHour) => {
  if (!endTime.value || selectedHour !== dayjs(endTime.value, 'HH:mm:ss').hour()) return [];
  const endMinute = dayjs(endTime.value, 'HH:mm:ss').minute();
  return Array.from({ length: 60 - endMinute + 1 }, (_, i) => endMinute + i + 1);
};

const disabledStartSeconds = (selectedHour, selectedMinute) => {
  if (!endTime.value || selectedHour !== dayjs(endTime.value, 'HH:mm:ss').hour() || selectedMinute !== dayjs(endTime.value, 'HH:mm:ss').minute()) {
    return [];
  }
  const endSeconds = dayjs(endTime.value, 'HH:mm:ss').second();
  return Array.from({ length: 60 - endSeconds + 1 }, (_, i) => endSeconds + i + 1);
};

// 禁用结束时间选择器中的小时、分钟、秒
const disabledEndHours = () => {
  if (!startTime.value) return [];
  return Array.from({ length: dayjs(startTime.value, 'HH:mm:ss').hour() }, (_, i) => dayjs(startTime.value, 'HH:mm:ss').hour() - i - 1);
};
const disabledEndMinutes = (selectedHour) => {
  if (!startTime.value || selectedHour !== dayjs(startTime.value, 'HH:mm:ss').hour()) return [];
  const startMinute = dayjs(startTime.value, 'HH:mm:ss').minute();
  return Array.from({ length: 60 - startMinute + 1 }, (_, i) => startMinute - i - 1);
};

const disabledEndSeconds = (selectedHour, selectedMinute) => {
  if (!startTime.value || selectedHour !== dayjs(startTime.value, 'HH:mm:ss').hour() || selectedMinute !== dayjs(startTime.value, 'HH:mm:ss').minute()) {
    return [];
  }
  const startSecond = dayjs(startTime.value, 'HH:mm:ss').second();
  return Array.from({ length: startSecond }, (_, i) => i);
};
</script>

<template>
  <a-space :size="12">
    <a-time-picker
        v-model:value="startTime"
        :disabled-hours="disabledStartHours"
        :disabled-minutes="disabledStartMinutes"
        :disabled-seconds="disabledStartSeconds"
        valueFormat="HH:mm:ss"
        placeholder="请选择开始时间"/>

    <a-time-picker
        v-model:value="endTime"
        :disabled-hours="disabledEndHours"
        :disabled-minutes="disabledEndMinutes"
        :disabled-seconds="disabledEndSeconds"
        valueFormat="HH:mm:ss"
        placeholder="请选择结束时间"/>
  </a-space>
</template>

<style scoped lang="less">

</style>


```
## 4-17 el-time-picker时间段禁用
```vue
<script>
export default {
  components: {},
  data () {
    return {
      startTime: '',
      endTime: ''
    };
  },
  props: {},

  computed: {
    // 开始时间选择器配置
    startPickerOptions () {
      return {
        selectableRange: this.calcStartRange()
      };
    },
    // 结束时间选择器配置
    endPickerOptions () {
      return {
        selectableRange: this.calcEndRange()
      };
    }
  },
  watch: {},
  created () {},
  mounted () {},
  methods: {
    calcStartRange () {
      if (!this.endTime) return [];
      const end = `${this.endTime}:00`;
      return [`00:00:00 - ${end}`];
    },
    calcEndRange () {
      if (!this.startTime) return [];
      const start = `${this.startTime}:00`;
      return [`${start} - 23:59:59`];
    }
  }
};
</script>

<template>
<div>
  <el-row type="flex" align="middle" justify="space-between">
    <el-time-picker
      size="mini"
      :arrow-control="false"
      v-model="startTime"
      value-format="HH:mm"
      format="HH:mm"
      :picker-options="startPickerOptions"
      placeholder="请选择开始时间">
    </el-time-picker>
    <div class="range-separator">至</div>
    <el-time-picker
      size="mini"
      :arrow-control="false"
      v-model="endTime"
      value-format="HH:mm"
      format="HH:mm"
      :picker-options="endPickerOptions"
      placeholder="请选择结束时间">
    </el-time-picker>
  </el-row>

</div>
</template>

<style scoped lang="scss">

</style>

```

## 4-18 a-date-picker时间段禁用
```vue
<script setup>
  import { computed, ref } from 'vue';
  import dayjs from 'dayjs';

  const startDate = ref(null);
  const endDate = ref(null);
  // 禁用开始时间的选择（日期部分）
  const disabledStartDate = (current) => {
    if (!endDate.value) return false;
    return current > dayjs(endDate.value).endOf('day');
  };

  // 禁用开始时间的选择（时间部分）
  const disabledStartTime = computed(() => (value) => {
    if (!endDate.value) return {};

    const endTime = dayjs(endDate.value);
    const startTime = dayjs(value);
    const startHour = startTime.hour();
    const endHour = endTime.hour();
    return {
      disabledHours: () => isSomDay(startTime, endTime) ? range(0, 24).filter((h) => h > endHour) : [],
      disabledMinutes: () => isSomDay(startTime, endTime) ?
          range(0, 60).filter((m) => startHour === endTime.hour() && m > endTime.minute()) : [],
      disabledSeconds: () => isSomDay(startTime, endTime) ?
          range(0, 60).filter((s) => startHour === endTime.hour() &&
              startTime.minute() === endTime.minute() && s > endTime.second()) : [],
    };
  });

  // 禁用结束时间的选择（日期部分）
  const disabledEndDate = (current) => {
    if (!startDate.value) return false;
    return current < dayjs(startDate.value).startOf('day');
  };

  // 禁用结束时间的选择（时间部分）
  const disabledEndTime = computed(() => (value) => {
    if (!startDate.value) return {};
    const startTime = dayjs(startDate.value);
    const endTime = dayjs(value);
    const startHour = startTime.hour();
    const endHour = endTime.hour();
    return {
      disabledHours: () => isSomDay(startTime, endTime) ? range(0, 24).filter((h) => h < startHour) : [],
      disabledMinutes: () => isSomDay(startTime, endTime) ?
          range(0, 60).filter((m) => endHour === startHour && m < startTime.minute()) : [],
      disabledSeconds: () => isSomDay(startTime, endTime) ? range(0, 60).filter((s) => endHour === startHour &&
          endTime.minute() === startTime.minute() && s < startTime.second()) : [],
    };
  });
  function isSomDay(startTime, endTime) {
    return startTime.isSame(endTime, 'day');
  }
  // 开始时间变化时触发
  const handleStartChange = (value) => {
    // startDate.value = value;
  };
  const handleEndChange = (value) => {
    // endDate.value = value;
  };
  // 辅助函数：生成范围数组
  const range = (start, end) => Array.from({ length: end - start }, (_, i) => start + i);
</script>
<template>
  <div class="flex">
    <a-date-picker
        :showTime="true"
        class="custom-picker"
        v-model:value="startDate"
        format="YYYY-MM-DD HH:mm:ss"
        value-format="YYYY-MM-DD HH:mm:ss"
        :disabled-date="disabledStartDate"
        :disabled-time="disabledStartTime"
        @change="handleStartChange"
    />
    <span class="custom-picker-separator">--</span>
    <a-date-picker
        :showTime="true"
        class="custom-picker"
        v-model:value="endDate"
        format="YYYY-MM-DD HH:mm:ss"
        value-format="YYYY-MM-DD HH:mm:ss"
        :disabled-date="disabledEndDate"
        :disabled-time="disabledEndTime"
        @change="handleEndChange"
    />
  </div>
</template>

```
