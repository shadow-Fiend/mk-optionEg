export function getMeta() {
	return {
		name: 'bussinessSearch',
		component: '::div',
        className: 'bussinessSearch',
		children: [{
			name: 'option',
			component: '::div',
            className: 'bussinessSearch-option',
			children: [{
                name: 'search',
                component: 'Input',
                placeholder: '请输入关键字搜索',
//                value: '',
                
            }, {
                name: 'fresh',
                component: 'Icon',
                type: 'reload',
                style: {
                    fontSize: 18
                },
                title: '刷新',
//                onClick: '{{$handleFresh}}'
            }, {
                name: 'refresh',
                component: 'Button',
                type: 'softly',
                children: '全部重新生成',
//                onClick: '{{$handleRefresh}}'
            }]
		}, {
			name: 'content',
			component: 'Layout',
            className: 'mk-app-person-list-content',
			children: [{
                name: 'dataGrid',
                component: 'DataGrid',
                headerHeight: 35,
                rowHeight: 35,
                enableSequence: true,
                startSequence: '{{(data.pagination.current - 1)*data.pagination.pageSize + 1}}',
                rowsCount: '{{$getListRowsCount()}}',
                columns: [/*{
                    name: 'select',
                    component: 'DataGrid.Column',
                    columnKey: 'select',
                    width: 40,
                    fixed: true,
                    header: {
                        name: 'header',
                        component: 'DataGrid.Cell',
                        children: {
                            name: 'cb',
                            component: 'Checkbox',
//                            checked: '{{$isSelectAll()}}',
//                            onChange: '{{$selectAll}}'
                        }
                    },
                    cell: {
                        name: 'cell',
                        component: 'DataGrid.Cell',
//                        _power: '({rowIndex})=>rowIndex',
                        children: {
                            name: 'checkbox',
                            component: 'Checkbox',
//                            checked: '{{data.list[_rowIndex].selected}}',
//                            onChange: "{{ (e, option) => $setField('data.list.' + _rowIndex + '.selected', e.target.checked ) }}",
                        }
                    }
                }, {
                    name: 'oprate',
                    component: 'DataGrid.Column',
                    columnKey: 'oprate',
                    fixed: true,
                    width: 30,
                    header: {
                        name: 'header',
                        component: 'DataGrid.Cell',
                        children: ''
                    },
                    cell: {
                        name: 'cell',
                        component: 'DataGrid.Cell',
//                        _power: '({rowIndex})=>rowIndex',
                        children: [{
                            name: 'edit',
                            component: 'Icon',
                            showStyle: 'showy',
                            type: 'edit',
                            style: {
                                fontSize: 18
                            },
                            title: 'edit',
//                            onClick: '{{$editRow}}'
                        }]
                    }
                }, {
                    name: 'busCode',
                    component: 'DataGrid.Column',
                    columnKey: 'busCode',
                    width: 100,
                    header: {
                        name: 'header',
                        component: 'DataGrid.Cell',
                        children: '业务编码'
                    },
                    cell: {
                        name: 'cell',
                        component: 'DataGrid.Cell',
//                        _power: '{{rowIndex}} => rowIndex',
//                        children: '{{data.list[_rowIndex].busCode}}'
                    }
                }, {
                    name: 'busName',
                    component: 'DataGrid.Column',
                    columnKey: 'busName',
                    width: 200,
                    header: {
                        name: 'header',
                        component: 'DataGrid.Cell',
                        children: '业务名称'
                    },
                    cell: {
                        name: 'cell',
                        component: 'DataGrid.Cell',
//                        _power: '{{rowIndex}} => rowIndex',
//                        children: '{{data.list[_rowIndex].busName}}'
                    }
                }, {
                    name: 'busKey',
                    component: 'DataGrid.Column',
                    columnKey: 'busKey',
                    width: 280,
                    header: {
                        name: 'header',
                        component: 'DataGrid.Cell',
                        children: '业务名称'
                    },
                    cell: {
                        name: 'cell',
                        component: 'DataGrid.Cell',
//                        _power: '{{rowIndex}} => rowIndex',
//                        children: '{{data.list[_rowIndex].busKey}}'
                    }
                }, {
                    name: 'busExtKey',
                    component: 'DataGrid.Column',
                    columnKey: 'busExtKey',
                    width: 280,
                    header: {
                        name: 'header',
                        component: 'DataGrid.Cell',
                        children: '业务名称'
                    },
                    cell: {
                        name: 'cell',
                        component: 'DataGrid.Cell',
//                        _power: '{{rowIndex}} => rowIndex',
//                        children: '{{data.list[_rowIndex].busExtKey}}'
                    }
                }*/]
            }]
		}, {
            name: 'footer',
            className: 'mk-app-person-list-footer',
            component: 'Layout',
            children: [{
                name: 'pagination',
                component: 'Pagination',
                showSizeChanger: true,
                pageSize: '{{data.pagination.pageSize}}',
                current: '{{data.pagination.current}}',
                total: '{{data.pagination.total}}',
                onChange: '{{$pageChanged}}',
//                onShowSizeChange: '{{$pageChanged}}'
            }]
        }]
	}
}

export function getInitState() {
	return {
		data: {
			list: [],
            pagination: {current: 1, total: 0, pageSize: 20},
            filter: {},
            other: {}
		}
	}
}