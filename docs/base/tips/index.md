## 1、同时提交代码至GitHub和Gitee

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
## 2、gitee 获取仓库具体路径下的内容
### 1、api地址：https://gitee.com/api/v5/swagger#/getV5ReposOwnerRepoContents(Path)
### api:https://gitee.com/api/v5/repos/{owner}/{repo}/contents(/{path})
![获取gitee文件内容](/img/获取gitee文件内容.png)
```js
     function fetchFileContent() {
      const fileUrl =  "api/v5/repos/wkz_gitee/yuan/contents/json.json";

        axios({
          method: 'get',
          timeout: 6000,
          baseURL: 'https://gitee.com/',
          responseType: 'json', // default
          url: fileUrl
        })
          .then((response) => {
            console.log('文件内容:', response.data);
            const decodedText = atob(response.data.content); // 解码得到明文
            console.log("decodedText",decodedText); // 输出结果：Hello World!
            // 这里可以对返回的文件内容进行处理
        }).catch((error) => {
          console.error('获取文件失败:', error);
        });
      }
```
## 3、github获取仓库具体路径下的内容

### 1、api地址：https://docs.github.com/zh/rest/repos/contents?apiVersion=2022-11-28#get-repository-content
### api: https://api.github.com/repos/OWNER/REPO/contents/PATH
![获取GitHub文件内容](/img/获取GitHub文件内容.png)
