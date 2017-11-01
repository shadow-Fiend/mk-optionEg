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
        const pagination = this.metaAction.gf('data.pagination').toJS()
//        this.load(pagination)
    }

    load = async (pagination) =>{
        const response = await this.webapi.product.query({ pagination})
        this.injections.reduce('load', response)
    }
    
    handleChange = (key) => (e) => {
        if(key == 'searchKey') {
            this.injections.reduce('changeSearch', key, e.target.value)
        }
    }
    
    handleSearch = (key) => (e) => {
        if(!e) {
            this.metaAction.toast('error', '请输入内容进行操作')
            return 
        } 
        
        if(key == 'searchKey') {
            if(e == '人人' || e == 'renren') {
                let pagination = this.metaAction.gf('data.pagination').toJS()
                this.load(pagination)
            }else {
                this.metaAction.toast('error', '该接口功能正在开发，敬请期待')
                return
            }
        }
    }

    pageChanged = (current, pageSize) => {
        this.load({ current, pageSize })
    }

    getLayout = () => {
        const products = this.metaAction.gf('data.products')
        if(!products || products.size == 0) return
                
        return products.map((o, index)=>this.getSingleLayout(index, o.get('id'))).toJS()
    }

    getSingleLayout = (index, id) =>{
        return {
            i: id + '',
            x: (index % 4) * 3,
            y: Math.floor(index / 4) * 4,
            w: 3,
            h: 4
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