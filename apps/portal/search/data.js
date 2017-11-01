export function getMeta() {
	return {
		name: 'root',
		component: 'Layout',
		className: 'mk-app-product-list',
		children: [{
            name: 'search',
            component: '::div',
            children: [{
                name: 'searchKey',
                component: 'Input.Search',
                value: '{{data.searchKey}}',
                placeholder: '请输入人人或renren然后enter',
                onChange: '{{$handleChange("searchKey")}}',
                onSearch: '{{$handleSearch("searchKey")}}' 
            }]
        }, {
			name: 'products',
			component: 'GridLayout.WidthProviderGridLayout',
			className: 'mk-app-product-list-products',
			cols: 12,
			rowHeight: 50,
			margin: [20, 20],
			isResizable: false,
			isDraggable: false,
			_visible: '{{data.products && data.products.length > 0}}',
			layout: '{{$getLayout()}}',
			children: [{
				name: 'container',
				component: '::div',
				key: "{{data.products[_rowIndex].id + ''}}",
                className: 'mk-app-product-list-content',
				_power: 'for in data.products',
				children: {
					name: 'product',
					component: 'Card',
					children: [{
                        name: 'title',
                        component: '::a',
                        href: '{{data.products[_rowIndex].renrenSrc}}',
                        target: '_blank',
						className: 'mk-app-product-list-title',
                        children: '{{data.products[_rowIndex].title}}'
                    }, {
                        name: 'productContent',
                        component: '::div',
                        className: 'mk-app-product-list-productContent',
                        children: [{
                            name: 'img',
                            component: '::img',
                            className: 'mk-app-product-list-img',
                            src: '{{data.products[_rowIndex].img}}'
                        }, {
                            name: 'details',
                            component: '::div',
                            className: 'mk-app-product-list-details',
                            children: '{{data.products[_rowIndex].details}}'
                        }]
                    }, {
						name: 'description',
						component: '::div',
						className: 'mk-app-product-list-item',
						children: [{
							name: 'title',
							component: '::a',
							className: 'mk-app-product-list-item-title',
                            href: '{{data.products[_rowIndex].renrenSrc}}',
                            target: '_blank',
							children: "{{data.products[_rowIndex].renrenSrc}}"
						}, {
							name: 'price',
							component: '::h3',
							className: 'mk-app-product-list-item-price',
							children: "{{'¥' + data.products[_rowIndex].price}}"
						}]
					}]
				}
			}]
		}, {
			name: 'footer',
			className: 'mk-app-product-list-footer',
			component: 'Layout',
			children: [{
				name: 'pagination',
				component: 'Pagination',
				pageSize: '{{data.pagination.pageSize}}',
				current: '{{data.pagination.current}}',
				total: '{{data.pagination.total}}',
				onChange: '{{$pageChanged}}',
				onShowSizeChange: '{{$pageChanged}}'
			}]
		}]

	}
}

export function getInitState() {
	return {
		data: {
			layout: [],
			products: [],
			pagination: { current: 1, total: 0, pageSize: 8 },
		}
	}
}