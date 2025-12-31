## 1、免装版本nginx本地测试
### 1-1 下载并解压放置到任意目录下
[下载地址](https://nginx.org/en/download.html)
### 1-2 配置文件
![nginx配置文件](/img/nginx配置文件.png)
#### 在nginx-conf文件中配置端口与测试模板,测试项目时需将dist目录复制到html目录下
```js
location /dist {
  root   html;
  index  index.html index.htm;
  try_files $uri $uri/ /dist/index.html;
}

```
![nginx配置端口与模板](/img/nginx配置端口与模板.png)
![nginx-html目录](/img/nginx-html目录.png)

### 1-3 启动nginx
```
start nginx
```
访问测试项目[http://localhost:8088/dist](http://localhost:8088/dist)或[http://127.0.0.1:8088/dist](http://127.0.0.1:8088/dist)
