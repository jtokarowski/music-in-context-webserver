(this.webpackJsonpreactcharts=this.webpackJsonpreactcharts||[]).push([[0],{169:function(t,a,e){"use strict";e.r(a);var o=e(0),n=e.n(o),r=e(46),s=e.n(r),i=(e(53),e(15)),c=e(16),l=e(18),d=e(17),u=e(19),g=(e(54),e(20)),p=(e(150),e(151)),h=!0,m=function(t){function a(t){return Object(i.a)(this,a),Object(l.a)(this,Object(d.a)(a).call(this,t))}return Object(u.a)(a,t),Object(c.a)(a,[{key:"render",value:function(){var t=this,a={trackNames:[],subTrackData:{},subAudioFeatureData:{}};try{Object.keys(this.props.rawIncomingData).map((function(e){return a[e]=t.props.rawIncomingData[e]})),a.spotifyAudioFeatures.map((function(t){a.subAudioFeatureData[t]=[]})),a.rawDataByTrack.map((function(t){a.trackNames.push(t.trackName),a.subTrackData[t.trackName]=[],a.spotifyAudioFeatures.map((function(e){a.subAudioFeatureData[e].push(t.audioFeatures[e]),a.subTrackData[t.trackName].push(t.audioFeatures[e])}))})),a.dataByAudioFeature={datasets:[],labels:a.trackNames},a.dataByTrack={datasets:[],labels:a.spotifyAudioFeatures};var e=0;a.spotifyAudioFeatures.map((function(t){var o={label:t,data:a.subAudioFeatureData[t],fill:!1,borderColor:a.colors[e]};(e+=1)===a.colors.length&&(e=0),a.dataByAudioFeature.datasets.push(o)}));var o=0;a.rawDataByTrack.map((function(t){var e={label:t.trackName,data:a.subTrackData[t.trackName],fill:!1,borderColor:a.colors[o]};(o+=1)===a.colors.length&&(o=0),a.dataByTrack.datasets.push(e)})),console.log(a),h=!1}catch(r){console.log("still loading data"),h=!0}return h?n.a.createElement("div",{className:"chart"},n.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh"}},n.a.createElement(p,{name:"ball-triangle-path",fadeIn:"none"})),n.a.createElement("div",null,n.a.createElement("h1",null,"Loading user data..."))):"cluster"==a.mode?n.a.createElement("div",{className:"chart"},n.a.createElement(g.b,{data:a.dataByTrack,options:{dragData:!0,dragDataRound:2,showTooltip:!0,title:{display:this.props.displayTitle,text:this.props.location,fontSize:25},legend:{display:this.props.displayLegend,position:this.props.legendPosition},scale:{ticks:{beginAtZero:!0,max:1}},onDragStart:function(t,a){console.log("dragging ",a)},onDrag:function(t,a,e,o){t.target.style.cursor="grabbing"},onDragEnd:function(t,a,e,o){console.log("done dragging!"),console.log(a,e,o),t.target.style.cursor="default"},hover:{onHover:function(t){this.getElementAtEvent(t).length?t.target.style.cursor="grab":t.target.style.cursor="default"}}}})):n.a.createElement("div",{className:"chart"},n.a.createElement(g.b,{data:a.dataByTrack,options:{dragData:!0,dragDataRound:2,showTooltip:!0,title:{display:this.props.displayTitle,text:this.props.location,fontSize:25},legend:{display:this.props.displayLegend,position:this.props.legendPosition},scale:{ticks:{beginAtZero:!0,max:1}},onDragStart:function(t,a){console.log("dragging ",a)},onDrag:function(t,a,e,o){t.target.style.cursor="grabbing"},onDragEnd:function(t,a,e,o){console.log("done dragging!"),console.log(a,e,o),t.target.style.cursor="default"},hover:{onHover:function(t){this.getElementAtEvent(t).length?t.target.style.cursor="grab":t.target.style.cursor="default"}}}}),n.a.createElement(g.a,{data:a.dataByAudioFeature,options:{dragData:!0,dragDataRound:1,title:{display:this.props.displayTitle,text:this.props.location,fontSize:25},scales:{yAxes:[{ticks:{min:0,max:1,stepSize:.1}}]},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}}))}}]),a}(o.Component);m.defaultProps={displayTitle:!0,displayLegend:!0,legendPosition:"right",location:"City"};var f=m,y=function(t){function a(){var t;return Object(i.a)(this,a),(t=Object(l.a)(this,Object(d.a)(a).call(this))).state={},t}return Object(u.a)(a,t),Object(c.a)(a,[{key:"componentDidMount",value:function(){var t=this,a=window.location.search,e=new URLSearchParams(a),o={refresh_token:e.get("refresh_token"),mode:e.get("mode"),form_data:e.get("form_data")};fetch("https://music-in-context-backend.herokuapp.com/data",{mode:"cors",method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(a){t.setState({rawIncomingData:a})}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(f,{rawIncomingData:this.state.rawIncomingData,location:"Audio Features",legendPosition:"bottom"}))}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},48:function(t,a,e){t.exports=e(169)},53:function(t,a,e){},54:function(t,a,e){}},[[48,1,2]]]);
//# sourceMappingURL=main.fe6348af.chunk.js.map