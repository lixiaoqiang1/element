// 保存模拟数据路径
import Mock from 'mockjs'
import itemList from './itemList'

Mock.mock(/\/itemList\/getItemList/,'get',itemList.getItemList)
