import { Map, fromJS } from 'immutable'
import { reducer as MetaReducer } from 'mk-meta-engine'
import config from './config'
import { getInitState } from './data'

class reducer {
    constructor(option) {
        this.metaReducer = option.metaReducer
        this.config = config.current
    }

    init = (state, option) => {
        const initState = getInitState()
        return this.metaReducer.init(state, initState)
    }

    load = (state, response) => {
		state = this.metaReducer.sf(state, 'data.chart.details6.xAxisData', fromJS(response.details6.xAxisData))
		state = this.metaReducer.sf(state, 'data.chart.details6.seriesData', fromJS(response.details6.seriesData))
		return state
	}
}

export default function creator(option) {
    const metaReducer = new MetaReducer(option),
        o = new reducer({ ...option, metaReducer })

    return { ...metaReducer, ...o }
}