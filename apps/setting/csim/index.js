import config from './config'
import * as data from './data'

export default {
	name: "csim",
	version: "1.0.0",
	description: "csim",
	meta: data.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "csim")
	}
}