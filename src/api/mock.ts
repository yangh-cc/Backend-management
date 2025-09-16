import Mock from 'mockjs'
import homeApi from '@/api/mockData/home'
import userApi from './mockData/user'

// 修正：添加了正确的路径匹配和请求方法
Mock.mock(/\/api\/home\/getTableData/, 'get', homeApi.getTableData)
Mock.mock(/\/api\/home\/getCountData/, 'get', homeApi.getCountData)
Mock.mock(/\/api\/home\/getChartData/,"get", homeApi.getChartData)
Mock.mock(/\/api\/home\/getUserData/,"get", userApi.getUserList)
Mock.mock(/\/api\/user\/deleteUser/,"get", userApi.deleteUser)

// 导出Mock实例，方便在main.js中引入
export default Mock