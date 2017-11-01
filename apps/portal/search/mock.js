/**
 * mock.js 提供应用截获ajax请求，为脱离后台测试使用
 * 模拟查询更改内存中mockData,并返回数据
 */

import { fetch } from 'mk-utils'
import img from './img/product.jpg'
const mockData = fetch.mockData


function initMockData() {
    if (!mockData.products) {
        mockData.products = []
        for (let i = 0; i < 117; i++) {
            mockData.products.push({
                id: i,
                img,
                renrenSrc: 'https://www.rrtimes.com/',
                title: '人人时代' + (i + 1),
                price: 100.50 + i * 20,
                details: '易嘉是为小微企业量身定制的业财税智能服务平台。产品传承财税专家智囊团的集体智慧,融合最新税收法规政策。将复杂的财务税务化繁为简,非专业人士也能轻松驾驭。' + (i + 1)
            })
        }
    }
}


fetch.mock('/v1/product/query', (option) => {
    initMockData()

    const { pagination } = option

    var data = mockData.products

    var current = pagination.current
    var pageSize = pagination.pageSize
    var start = (current - 1) * pageSize
    var end = current * pageSize

    start = start > data.length - 1 ? 0 : start
    end = start > data.length - 1 ? pageSize : end
    current = start > data.length - 1 ? 1 : current

    var ret = {
        result: true,
        value: {
            pagination: { current, pageSize, total: data.length },
            products: []
        }
    }

    for (let j = start; j < end; j++) {
        if (data[j])
            ret.value.products.push(data[j])
    }

    return ret
})