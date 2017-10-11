import config from './config'
import * as data from './data'

export default {
	name: "messageCenter",
	version: "1.0.0",
	description: "messageCenter",
	meta: data.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "messageCenter")
	}
}