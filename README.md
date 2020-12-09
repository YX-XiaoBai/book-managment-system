# 书籍管理系统

基于以下技术栈

- 前端(`frontend`)
  - [vue](https://github.com/vuejs/vue) + [js](https://github.com/search?q=js)
- 后端(`backend`)
  - [express](https://github.com/search?q=express) + [ts](https://github.com/search?q=ts)
- 数据库(`database`)
  - [mysql](https://github.com/search?q=mysql)

## Usage

- 分别进入`frontend`、`backend`下载依赖

  - `npm install`

- 分别进入`frontend`、`backend`运行项目

  - frontend: `npm run serve`
  - backend: `npm run dev`

- 项目运行完毕，访问`http://localhost:8081/`即可

## 实现功能

- `mysql`
  - 连接数据库
  - 支持多表关联查询
- `backend`
  - 支持`Jwt` 鉴权
  - 支持权限管理
  - 支持模糊搜索
- `frontend`
  - 支持懒加载

## 项目截图

### 登录页

![login](./images/login.jpg)

### 首页

![index](./images/index.jpg)

### 书籍管理页

![tutorial](./images/tutorial.jpg)

### 添加书籍页

![addTutorial](./images/addTutorial.jpg)
