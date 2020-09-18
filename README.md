# TodoMVC

A TodoMVC used by React, TypeScript.

## 需求分析

### 新增 Todo

- 在输入框填写新增的值，按 `enter` 新增并清空输入框。

### 删除 Todo

- 点击删除按钮 `X` 删除选择数据；
- 点击右下角 `clear complete` 清空已经 `complete` 的数据。

### 修改 Todo

- 双击某行数据时切换到编辑并自动获得焦点；
- 按回车键或光标离开可以修改数据。

### 查询 Todo

- 当 list 有值时，可以正常显示数据；
- 右下角 `item left` 根据当前 item 数自动变化；
- 点击下方的 `all ` `active` `complete` 可以过滤 list，并且高亮自动能切换；
- 勾选 `item` 可以切换 `active`和 `complete`样式；
- 当 `item` 全选时，新增数据框左侧的 `<-` 高亮；
- 点击新增数据框左侧的 `<-`，可以全选或全不选 `item`；
- 进入首页时，新增输入框自动获得焦点。
