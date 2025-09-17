// 整个项目api的统一管理
import request from "./request";

// 定义类型别名


//请求页面左侧的表格数据
export default {
    getTableData() {
        return request({
            url: '/home/getTable',
            method: 'get',
            mock: true
        })
    },
    getCountData() {
        return request({
            url:'/home/getCountData',
            method:'get'
        })
    },
    getChartData() {
     return request({
       url: '/home/getChartData',
       method: 'get',
     })
   },
    getUserData(data) {
     return request({
       url: '/home/getUserData',
       method: 'get',
       data
     })
   },
   deleteUser(data) {
     return request({
       url: '/user/deleteUser',
       method: 'get',
       data
     })
   },
   addUser(data) {
     return request({
       url: '/user/addUser',
       method: 'post',
       data
     })
   },
   editUser(data) {
     return request({
       url: '/user/editUser',
       method: 'post',
       data
     })
   },
   getMenu(params) {
    return request({
      url: '/permission/getMenu',
      method: 'post',
      data: params
    })
},
    
 
}