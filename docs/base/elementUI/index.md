## 1、el-input 自定义
### 自定义内容 proxyInput.vue
```vue
<template>
  <el-input
      :title="inputValue"
      v-model="inputValue"
      v-bind="$attrs"
      v-on="$listeners"
      @change="handleChange"
  >
    <template v-slot:prepend>
      <slot name="prepend"></slot>
    </template>
    <template v-slot:append>
      <slot name="append"></slot>
    </template>
  </el-input>
</template>

<script>
export default {
  name: 'index',
  components: {},
  data () {
    return {
      inputValue: null
    };
  },
  props: {
    value: {
      type: [String, Number]
    },
    /** input输入框是否去除所有的空格 默认-否 */
    isRemoveSpaces: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value: {
      handler (newVal) {
        if (newVal !== this.inputValue) {
          this.inputValue = newVal;
        }
      },
      immediate: true
    }
  },
  methods: {
    handleChange (val) {
      if (this.isRemoveSpaces) {
        this.inputValue = val.replace(/\s/g, '');
        this.$emit('input', this.inputValue);
        this.$emit('change', this.inputValue);
      } else {
        this.$emit('change', val);
      }
    }
  }
};
</script>

<style scoped>

</style>

```
### 使用demo
```vue
<template>
  <proxyInput
      prefix-icon="el-icon-search"
      suffix-icon="el-icon-date"
      clearable
      :is-remove-spaces="true"
      v-model="inputValue">
    <span slot="prepend">前</span>
    <span slot="append">后</span>
  </proxyInput>
</template>
<script>
import proxyInput from './proxyInput.vue';
export default {
    components: {
      proxyInput
    },
    data () {
      return {
        inputValue: ''
      };
    },
    props: {},
    watch: {},
    computed: {},
    mounted () {},
    methods: {}
};
</script>
```
### 效果图
![自定义el-input](/img/自定义el-input.png)
## 2、el-select自定义
```vue
<template>
  <!--  对el-select的二次封装-->
  <el-select
      :title="selectTitle"
      v-model="selectValue"
      v-bind="$attrs"
      v-on="$listeners">
    <slot></slot>
    <template v-slot:prefix>
      <slot name="prefix"></slot>
    </template>
    <template v-slot:empty>
      <slot name="empty"></slot>
    </template>
    <el-option
        v-for="item in options"
        :key="item[keyValue]"
        :label="item[keyLabel]"
        :value="item[keyValue]">
    </el-option>
  </el-select>
</template>
<script>
export default {
  name: 'index',
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
      },
      immediate: true
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
### 使用demo
```vue
<template>
  <!--  封装后的使用demo-->
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
