webpackJsonp([19],{1590:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i,u=a(2),o=n(u),s=a(54),d=n(s),f=a(5),c=n(f),l=a(9),p=n(l),m=a(7),h=n(m),v=a(8),y=n(v),x=a(0),w=(n(x),a(250)),g=a(581),_=n(g),b=(r=(0,w.wrapper)(_.default))(i=function(e){function t(){return(0,c.default)(this,t),(0,h.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,y.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){return this.props.monkeyKing((0,o.default)({},this.props,{path:"root"}))}}]),t}(x.Component))||i;t.default=b,e.exports=t.default},1591:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=new m.action(e),a=new y((0,u.default)({},e,{metaAction:t})),n=(0,u.default)({},t,a);return t.config({metaHandlers:n}),n}Object.defineProperty(t,"__esModule",{value:!0});var i=a(2),u=n(i),o=a(559),s=n(o),d=a(560),f=n(d),c=a(5),l=n(c);t.default=r;var p=a(0),m=(n(p),a(250)),h=a(561),v=n(h),y=function e(t){var a=this;(0,l.default)(this,e),this.onInit=function(e){var t=e.component,n=e.injections;a.component=t,a.injections=n,n.reduce("init"),a.load()},this.load=(0,f.default)(s.default.mark(function e(){var t;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.webapi.bargraph.query();case 2:t=e.sent,a.injections.reduce("load",t);case 4:case"end":return e.stop()}},e,a)})),this.getOption=function(){var e=a.metaAction.gf("data").toJS();return{title:{text:"某地区蒸发量和降水量",subtext:"纯属虚构"},tooltip:{trigger:"axis"},legend:{data:["蒸发量","降水量"]},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,xAxis:[{type:"category",data:e.xAxisData}],yAxis:[{type:"value"}],series:[{name:"蒸发量",type:"bar",data:e.seriesData[0],markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{data:[{type:"average",name:"平均值"}]}},{name:"降水量",type:"bar",data:e.seriesData[1],markPoint:{data:[{type:"max",name:"年最高"},{type:"min",name:"年最低"}]},markLine:{data:[{type:"average",name:"平均值"}]}}]}},this.metaAction=t.metaAction,this.config=v.default.current,this.webapi=this.config.webapi};e.exports=t.default},1592:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=new f.reducer(e),a=new m((0,u.default)({},e,{metaReducer:t}));return(0,u.default)({},t,a)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(2),u=n(i),o=a(5),s=n(o);t.default=r;var d=a(165),f=a(250),c=a(561),l=n(c),p=a(582),m=function e(t){var a=this;(0,s.default)(this,e),this.init=function(e,t){var n=(0,p.getInitState)();return a.metaReducer.init(e,n)},this.load=function(e,t){return e=a.metaReducer.sf(e,"data.xAxisData",(0,d.fromJS)(t.xAxisData)),e=a.metaReducer.sf(e,"data.seriesData",(0,d.fromJS)(t.seriesData))},this.metaReducer=t.metaReducer,this.config=l.default.current};e.exports=t.default}});