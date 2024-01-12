## el-input 自定义
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
