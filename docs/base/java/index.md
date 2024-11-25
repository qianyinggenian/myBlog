## 1、 java编译文件问题
### 1-1 在编译时出现编码GBK的不可映射字符，Java报错
解决办法：javac -encoding UTF-8 F.java 即可解决编码问题，其中F.java可替换为其他java文件
