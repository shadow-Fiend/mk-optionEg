import { config, start, componentFactory } from 'mk-meta-engine'
import * as mkComponents from 'mk-component'
import myConfig  from './config'

import mk_app_bar_graph from './apps/bar/graph/index.js'
import dialogue from './apps/dialogue/index.js'
import exportManager from './apps/exportManager/index.js'
import leaveMessage from './apps/leaveMessage/index.js'
import mk_app_login from './apps/login/index.js'
import messageCenter from './apps/messageCenter/index.js'
import mk_app_portal_about from './apps/portal/apps/mk-app-portal-about/index.js'
import mk_app_portal_app1 from './apps/portal/apps/mk-app-portal-app1/index.js'
import mk_app_portal_app2 from './apps/portal/apps/mk-app-portal-app2/index.js'
import mk_app_portal from './apps/portal/index.js'
import mk_app_root_about from './apps/root/apps/mk-app-root-about/index.js'
import mk_app_root_helloWorld from './apps/root/apps/mk-app-root-helloWorld/index.js'
import mk_app_root from './apps/root/index.js'
import search from './apps/search/index.js'
import sessionHistory from './apps/sessionHistory/index.js'
import csim from './apps/setting/csim/index.js'
import setting from './apps/setting/index.js'
import personalExpression from './apps/setting/personalExpression/index.js'
import statisticalData from './apps/statisticalData/index.js'
import toAccess from './apps/toAccess/index.js'

const apps = {
		
	[mk_app_bar_graph.name]: mk_app_bar_graph,	
	[dialogue.name]: dialogue,	
	[exportManager.name]: exportManager,	
	[leaveMessage.name]: leaveMessage,	
	[mk_app_login.name]: mk_app_login,	
	[messageCenter.name]: messageCenter,	
	[mk_app_portal_about.name]: mk_app_portal_about,	
	[mk_app_portal_app1.name]: mk_app_portal_app1,	
	[mk_app_portal_app2.name]: mk_app_portal_app2,	
	[mk_app_portal.name]: mk_app_portal,	
	[mk_app_root_about.name]: mk_app_root_about,	
	[mk_app_root_helloWorld.name]: mk_app_root_helloWorld,	
	[mk_app_root.name]: mk_app_root,	
	[search.name]: search,	
	[sessionHistory.name]: sessionHistory,	
	[csim.name]: csim,	
	[setting.name]: setting,	
	[personalExpression.name]: personalExpression,	
	[statisticalData.name]: statisticalData,	
	[toAccess.name]: toAccess,
}

apps.config = (options) => {
	Object.keys(options).forEach(key => {
		const reg = new RegExp(`^${key == '*' ? '.*' : key}$`)
		Object.keys(apps).forEach(appName => {
			if (appName != 'config') {
				if (reg.test(appName)) {
					apps[appName].config(options[key])
				}
			}
		})
	})
}

apps.config({ '*': { apps } })

config(myConfig({ apps }))

Object.keys(mkComponents).forEach(key=>{
	componentFactory.registerComponent(key, mkComponents[key])
})
	
start()