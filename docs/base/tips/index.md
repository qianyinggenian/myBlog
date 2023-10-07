## 同时提交代码至GitHub和Gitee

1、输入如下命令查看当前关联的远程地址

```
git remote -v
```
结果如下图

![查看关联地址](/img/1.png)

2、添加新的关联地址，这里新增的是Gitee
```
git remote add 远程库名 远程库地址
eg: git remote add gitee https://gitee.com/wkz_gitee/yian.git
```
3、再输入步骤1的命令查看，结果如下
![查看关联地址](/img/2.png)
4、配置同时提交多个库命令
```
git remote set-url --add origin 你的gitee项目地址或步骤2的远程库地址
```
