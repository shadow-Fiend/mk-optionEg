import React from 'react'
import { action as MetaAction, AppLoader } from 'mk-meta-engine'
import config from './config'

class action {
    constructor(option) {
        this.metaAction = option.metaAction
        this.config = config.current
    }

    onInit = ({ component, injections }) => {
        this.component = component
        this.injections = injections
        injections.reduce('init')
    }
    
    load = async (pagination, filter ={}) => {
        const response = await this.webapi.getAllManualKeys.query({pagination, filter})
        response.filter = filter
        this.injections.reduce('load', response)
    }
    
    getListRowsCount = () => {
        return this.metaAction.gf('data.list').size
    }
    
    pageChanged = (current, pageSize) => {
        const filter = this.metaAction.gf(data.filter).toJS()
        this.load({current, pageSize}, filter)
    }
}

export default function creator(option) {
    const metaAction = new MetaAction(option),
        o = new action({ ...option, metaAction }),
        ret = { ...metaAction, ...o }

    metaAction.config({ metaHandlers: ret })

    return ret
}