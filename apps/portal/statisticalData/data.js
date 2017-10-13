import * as consts from './consts'

export function getMeta() {
	return {
		name: 'root',
		component: '::div',
		className: 'statisticalData',
		children: [{
			name: 'title',
			component: '::h1',
			children: '统计数据'
		},{
			name: 'content1',
			component: '::div',
			className: 'content1',
			children: [{
				name: 'title',
				component: '::div',
				className: 'content1-title',
				children: [{
					name: 'left',
					component: '::span',
					className: 'content1-title-left',
					children: '概况'
				}, {
					name: 'middle',
					component: '::div',
					className: 'content1-title-middle',
					children: [{
						name: 'period',
						component: 'DatePicker.RangePicker',
//						value: '{{data.form.period}}'
					}]
				}, {
					name: 'right',
					component: '::div',
					className: 'content1-title-right',
					children: [{
						name: 'time',
						component: 'Select',
						defaultValue: '{{data.staticData.time[0].id}}',
						children: [{
							name: 'option0',
							component: 'Select.Option',
							value: '{{data.staticData.time ? data.staticData.time[_rowIndex].id : ""}}',
							children: '{{data.staticData.time ? data.staticData.time[_rowIndex].name : ""}}',
							_power: 'for in data.staticData.time'
						}]
					}]
				}]
			}, {
				name: 'details',
				component: '::div',
				className: 'details',
				children: [{
					name: 'details1',
					component: '::div',
					children: [{
						name: 'details1-title',
						component: '::span',
						children: '会话数'
					}, {
						name: 'details1-content',
						component: 'Echarts',
						option: '{{$getOption("details1")}}'
					}]
				}, {
					name: 'details2',
					component: '::div',
					children: [{
						name: 'details2-title',
						component: '::span',
						children: '平均会话时长'
					}, {
						name: 'details2-content',
						component: 'Echarts',
						option: '{{$getOption("details2")}}'
					}]
				}, {
					name: 'details3',
					component: '::div',
					children: [{
						name: 'details3-title',
						component: '::span',
						children: '响应时长'
					}, {
						name: 'details3-content',
						component: 'Echarts',
						option: '{{$getOption("details3")}}'
					}]
				}, {
					name: 'details4',
					component: '::div',
					children: [{
						name: 'details4-title',
						component: '::span',
						children: '满意度'
					}, {
						name: 'details4-content',
						component: 'Echarts',
						option: '{{$getOption("details4")}}'
					}]
				}, {
					name: 'details5',
					component: '::div',
					children: [{
						name: 'details5-title',
						component: '::span',
						children: '在线状态分布'
					}, {
						name: 'details5-content',
						component: 'Echarts',
						option: '{{$getOption("details5")}}'
					}]
				}]
			}]
		}, {
			name: 'content2',
			className: 'content1 content2',
			component: '::div',
			children: [{
				name: 'title',
				className: 'content1-title',
				component: '::div',
				children: [{
					name: 'left',
					className: 'content1-title-left',
					component: '::span',
					children: '消息/会话数趋势'
				}, {
					name: 'middle',
					className: 'content1-title-middle',
					component: '::div',
					children: [{
						name: 'period1',
						component: 'DatePicker.RangePicker',
						onChange: '{{$getPeriod("content2")}}', 
//						value: '{{data.form.period1}}'
					}]
				}, {
					name: 'right',
					className: 'content1-title-right',
					component: '::div',
					children: [{
						name: 'time',
						component: 'Select',
						defaultValue: '{{data.staticData.time[3].id}}',
						children: [{
							name: 'option0',
							component: 'Select.Option',
							value: '{{data.staticData.time ? data.staticData.time[_rowIndex].id : ""}}',
							children: '{{data.staticData.time ? data.staticData.time[_rowIndex].name : ""}}',
							_power: 'for in data.staticData.time'
						}]
					}]
				}]
			}, {
				name: 'details6-content',
				component: 'Echarts',
				option: '{{$getOption("details6")}}'
			}]
		}]
	}
}

export function getInitState() {
	return {
		data: {
			form: {
				period: '',
				period1: '',
			},
			staticData: {
				time: [
					consts.time.today,
					consts.time.yesterday,
					consts.time.thisWeek,
					consts.time.thisMonth,
					consts.time.prevMonth,
					consts.time.thisYear,
					consts.time.assignTime,
				]
			},
			chart: {
				details1 : {
					xAxisData: [],
					seriesData: [[], []]
				},
				details2 : {
					xAxisData: [],
					seriesData: [[], []]
				},
				details3 : {
					xAxisData: [],
					seriesData: [[], []]
				},
				details4 : {
					xAxisData: [],
					seriesData: [[], []]
				},
				details5 : {
					xAxisData: [],
					seriesData: [[], []]
				},
				details6 : {
					xAxisData: [],
					seriesData: [[], []]
				}
			}
		}
	}
}