import React from 'react'
import { action as MetaAction, AppLoader } from 'mk-meta-engine'
import config from './config'

class action {
    constructor(option) {
        this.metaAction = option.metaAction
        this.config = config.current
		this.webapi = this.config.webapi
    }

    onInit = ({ component, injections }) => {
        this.component = component
        this.injections = injections
        injections.reduce('init')
		this.load()
    }
	
	load = async () => {
		const response = await this.webapi.statisticalData.query()
		this.injections.reduce('load', response)
	}
	
	getPeriod = (address) => {
//		return this.metaAction.toast('error', '暂无数据')
	}

    getOption = (address) => {

        const data = this.metaAction.gf('data.chart.' + address).toJS()
		let text, legend = []
		if(address == 'details6') {
			text = ''
			legend = ['会话', '消息']
		}
        return {
            title: {
                text: text,
                subtext: '纯属虚构'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: legend
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: data.xAxisData
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: legend[0],
                    type: 'bar',
                    data: data.seriesData[0],
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    }
                },
                {
                    name: legend[1],
                    type: 'bar',
                    data: data.seriesData[1],
                    markPoint: {
                        data: [
                            { type: 'max', name: '年最高', },
                            { type: 'min', name: '年最低', }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    }
                }
            ]
        }
    }
}

export default function creator(option) {
    const metaAction = new MetaAction(option),
        o = new action({ ...option, metaAction }),
        ret = { ...metaAction, ...o }

    metaAction.config({ metaHandlers: ret })

    return ret
}