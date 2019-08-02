### 安装依赖

`npm install`

### 启动

`npm run watch`

### 执行 `npm link`

此时就可以使用 `eos` 命令了。

- `eos init vue-template myVue`
- `eos config get`
- `eos config set type orgs`
- `eos config set registry vuejs-templates`

- `eos config set type users`
- `eos config set registry YvetteLau`

### 发布

开发完成后，即可发布至 npm.


### RC 配置下载模板的地方，给 github 的 api 使用
### https://api.github.com/users/YvetteLau/repos
### https://api.github.com/${type}/${registry}/repos
### 模板下载地址可配置

`export const DEFAULTS = {
    registry: 'YvetteLau',
    type: 'users'
}`

### 原文链接
https://juejin.im/post/5d37d982e51d45108c59a635

补充说明建议先填充 .eosrc 内容

- `eos config set registry YvetteLau`
- `eos config set type users`
- `eos config get`
 
- `eos init vue-template myvue`



