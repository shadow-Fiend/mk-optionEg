import config from './config'
import * as data from './data'

export default {
	name: "personalExpression",
	version: "1.0.0",
	description: "personalExpression",
	meta: data.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "personalExpression")
	}
}