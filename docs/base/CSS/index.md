# 2、CSS

## 2-1 div先上下后左右排序或先左右后上下

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>div上下左右排序</title>
</head>
<style>
  .div-box {
      display: grid;
      grid-auto-flow: column; /* 排序方式： column-先列后行， row-先行后列 */
      grid-template-columns: repeat(4, 207px); /* 设计列宽 */
      grid-template-rows:  repeat(2,138px); /* 设计行高 */
      /* grid-template-rows:  repeat(2,auto); */
      grid-row-gap: 24px; /* 行间距 */
      grid-column-gap: 177px;  /* 列间距 */
  }
  .div-box2 {
      display: grid;
      grid-auto-flow: row;
      grid-template-columns: repeat(4, 207px);
      grid-template-rows:  repeat(4,138px);
      /* grid-template-rows:  repeat(2,auto); */
      grid-row-gap: 24px;
      grid-column-gap: 177px;
  }
  .div-item {
      background-color: #0ec885;
      line-height: 138px;
      text-align: center;
  }
</style>
<body>
<h2>排列：先列后行</h2>
<div class="div-box">
  <div class="div-item">1</div>
  <div class="div-item">2</div>
  <div class="div-item">3</div>
  <div class="div-item">4</div>
  <div class="div-item">5</div>
  <div class="div-item">6</div>
</div>
<h2>排列：先行后列</h2>
<div class="div-box2">
  <div class="div-item">1</div>
  <div class="div-item">2</div>
  <div class="div-item">3</div>
  <div class="div-item">4</div>
  <div class="div-item">5</div>
  <div class="div-item">6</div>
  <div class="div-item">7</div>
  <div class="div-item">8</div>
</div>
</body>
</html>

```

## 2-2 背景图片置灰

```css
.bg-disable {
        cursor: not-allowed;
        filter: grayscale(100%);
        -webkit-filter: grayscale(100%);
        -moz-filter: grayscale(100%);
        -ms-filter: grayscale(100%);
        -o-filter: grayscale(100%);
        filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
        opcacity:0.5;
 }
```

| ![置灰前](/img/置灰前.png)置灰前 | ![置灰后](/img/置灰后.png)置灰后 |
|-------------------------|-------------------------|



## 2-3 边框四个角自定义样式

``` &::before {
@mixin info-bg {
  background: rgba(0,0,0,0.6);
  border-radius: 0;
  opacity: 1;
  border: 1px solid #00D3FF;
  position: relative;
  &::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    background: linear-gradient(to left, #00D3FF,#00D3FF) left top no-repeat,
    linear-gradient(to bottom, #00D3FF,#00D3FF) left top no-repeat,
    linear-gradient(to left, #00D3FF,#00D3FF) right top no-repeat,
    linear-gradient(to bottom, #00D3FF,#00D3FF) right top no-repeat,
    linear-gradient(to left, #00D3FF,#00D3FF) left bottom no-repeat,
    linear-gradient(to bottom, #00D3FF,#00D3FF) left bottom no-repeat,
    linear-gradient(to left, #00D3FF,#00D3FF) right bottom no-repeat,
    linear-gradient(to left, #00D3FF,#00D3FF) right bottom no-repeat;
    background-size: 4px 16px, 16px 4px, 4px 16px, 16px 4px;
  }
}
.div-item1 {
      width: 492px;
      height: 240px;
      @include info-bg;
      margin-bottom: 16px;
      position: relative;
    }
```

```html
 <div class="div-item1"></div>
```
![边框四个角自定义样式](/img/边框四个角自定义样式.png)边框四个角自定义样式
# 
## 2-4 表格列错位 
```html
<!--html代码-->
        <table >
          <tr>
            <td class="border-right" colspan="2">
              <span class="star">*</span>测试
            </td>
            <td colspan="6">
              <el-form-item prop="ledgerName" :title="formData.ledgerName" label="台账名称" :rules="[$validate.Required2]">
                <el-input size="small" v-model="formData.ledgerName" placeholder="" :disabled="disabled" clearable></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr >
            <td class="border-right" colspan="2">测试</td>
            <td class="border-right" colspan="2">
              <el-form-item prop="ledgerName" :title="formData.ledgerName" label="台账名称" :rules="[$validate.Required2]">
                <el-input size="small" v-model="formData.ledgerName" placeholder="" :disabled="disabled" clearable></el-input>
              </el-form-item>
            </td>
            <td class="border-right" colspan="2">
              <span  class="star">*</span>测试
            </td>
            <td colspan="2">
              <el-form-item prop="ledgerName" :title="formData.ledgerName" label="台账名称" :rules="[$validate.Required2]">
                <el-input size="small" v-model="formData.ledgerName" placeholder="" :disabled="disabled" clearable></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="border-right" colspan="1">
              <span class="star">*</span>测试
            </td>
            <td class="border-right"  colspan="7">

              <el-form-item prop="ledgerName" :title="formData.ledgerName" label="台账名称" :rules="[$validate.Required2]">
                <el-input  type="textarea"
                           :rows="5" size="small" v-model="formData.ledgerName" placeholder="" :disabled="disabled" clearable></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="border-right" colspan="1">
              <span class="star">*</span>测试
            </td>
            <td class="border-right"  colspan="7">

              <el-form-item prop="ledgerName" :title="formData.ledgerName" label="台账名称" :rules="[$validate.Required2]">
                <el-input  type="textarea"
                           :rows="5" size="small" v-model="formData.ledgerName" placeholder="" :disabled="disabled" clearable></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="border-right" colspan="1">
              <span class="star">*</span>测试
            </td>
            <td class="border-right"  colspan="7">

              <el-form-item prop="ledgerName" :title="formData.ledgerName" label="台账名称" :rules="[$validate.Required2]">
                <el-input  type="textarea"
                           :rows="5" size="small" v-model="formData.ledgerName" placeholder="" :disabled="disabled" clearable></el-input>
              </el-form-item>
            </td>
          </tr>
        </table>
```
```scss
 table {
        table-layout: fixed; // 重点，实现列错位的重点
        width: 100%;
        border: 2px solid #f2f2f2;
        tr {
          border-bottom: 2px solid #f2f2f2;
          td {
            height: 100%;
            box-sizing: border-box;
            padding: 15px;
            vertical-align: middle;
            text-align: center;
            font-size: 16px;
          }
        }
        .border-right {
          border-right: 2px solid #f2f2f2;
        }
      }

.star {
  color: red;
}
```
![表格列错位](/img/4.png)表格列错位


## 2-5 动画-div进入与离开动画
```vue
<template>
  <div>
    <transition name="left-fade">
      <div v-show="isShow"></div>
    </transition>
    <transition name="middle-fade">
      <div v-show="isShow" />
    </transition>
    <transition name="right-fade">
      <div v-show="isShow" />
    </transition>
  </div>
</template>
<script>
  export default {
    components: {},
    data () {
      return {
        isShow: false
      };
    },
    props: {},
    computed: {},
    watch: {},
    created () {},
    mounted () {
      this.isShow = true;
    },
    methods: {}
  };
</script>
<style lang="scss" scoped>
  // 左边部分动画
  $time: 0.5s;
  .left-fade-enter-active {
    transition: all $time ease;
    animation-fill-mode: both;
    transform: translate3d(0, 0, 0);
  }
  .left-fade-leave-active {
    transition: all $time cubic-bezier(1, 0.5, 0.8, 1);
    animation-fill-mode: both;
    transform: translate3d(-100%, 0, 0);
  }

  .left-fade-enter-from,
  .left-fade-leave-to {
    animation-fill-mode: both;
    transform: translate3d(-100%, 0, 0);
    opacity: 0;
  }
  // 右边部分动画
  .right-fade-enter-active {
    transition: all $time ease;
    transform: translate3d(0, 0, 0);
  }

  .right-fade-leave-active {
    transition: all $time cubic-bezier(1, 0.5, 0.8, 1);
    transform: translate3d(100%, 0, 0);
  }

  .right-fade-enter-from,
  .right-fade-leave-to {
    transform: translate3d(100%, 0, 0);
    opacity: 0;
  }

  // 中间部分动画
  .middle-fade-enter-active {
    transition: all $time ease;
    transform: translate3d(0, 0, 0);
    animation-fill-mode: both;
  }

  .middle-fade-leave-active {
    transition: all $time cubic-bezier(1, 0.5, 0.8, 1);
    transform: translate3d(0, 100%, 0);
    animation-fill-mode: both;
  }

  .middle-fade-enter-from,
  .middle-fade-leave-to {
    transform: translate3d(0, 100%, 0);
    animation-fill-mode: both;
    opacity: 0;
  }
</style>
```