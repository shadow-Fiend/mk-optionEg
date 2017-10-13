import config from './config'
import * as data from './data'

export default {
	name: "leaveMessage",
	version: "1.0.0",
	description: "leaveMessage",
	meta: data.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "leaveMessage")
	}
}