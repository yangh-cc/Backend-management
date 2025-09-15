import Mock from 'mockjs'
import homeApi from '@/api/mockData/home'

// 修正：添加了正确的路径匹配和请求方法
Mock.mock(/\/api\/home\/getTableData/, 'get', homeApi.getTableData)

// 导出Mock实例，方便在main.js中引入
export default Mock