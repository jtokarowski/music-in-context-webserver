(this["webpackJsonpradio-form-demo"]=this["webpackJsonpradio-form-demo"]||[]).push([[0],{176:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),o=a.n(r),l=(a(84),a(29)),i=a(30),c=a(38),u=a(37),h=(a(85),a(56)),m=a(27),d=a(74),p=(a(71),a(72),a(73)),f=!0,g=!0,y=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n.state={playlists:[],playlistIDs:[],playlistNames:[],playlistIndicators:[],clusters:[],clusterIDs:[],clusterDescriptions:[],clusterMostFrequentArtists:[],clusterMostFrequentGenres:[],clusterIndicators:[]},n}return Object(i.a)(a,[{key:"handleChange",value:function(e,t){var a=this.state.clusterDescriptions.indexOf(t),n={};n[t]=!this.state[t],this.setState(Object(h.a)(Object(h.a)({},this.state),n)),this.state.clusterIndicators[a]=n[t]}},{key:"handleSubmit",value:function(e){e.preventDefault();for(var t=[],a=0;a<this.state.clusterIndicators.length;a++)this.state.clusterIndicators[a]&&t.push(this.state.clusterIDs[a]);var n=t.join(","),s="https://music-in-context.herokuapp.com/ui?".concat("refresh_token=",this.props.refreshToken,"&form_data=",n,"&mode=",this.props.mode);window.location.href=s}},{key:"render",value:function(){var e=this;try{this.props.data.map((function(t){if(e.state[t.playlistname]=e.state[t.playlistname],f){e.state.playlists.push(t),e.state.playlistIDs.push(t.playlistID),e.state.playlistNames.push(t.playlistName),e.state.playlistIndicators.push(!1),e.state.clusters.push(t),e.state.clusterIDs.push(t.clusterNumber);var a="This sub-collection the following genres: "+t.mostFrequentGenres.join()+" and the following artists: "+t.mostFrequentArtists.join();console.log(a),e.state.clusterDescriptions.push(a),e.state.clusterIndicators.push(!1)}})),f=!1,console.log("state after pushing data",this.state);var t=[];t.push(s.a.createElement("h1",null,"Select one or more collections for inclusion in your custom playlist"));for(var a=function(a){var n=e.state.clusterDescriptions[a];t.push(s.a.createElement(d.a,{toggle:!0,checked:e.state[n],onChange:function(t){return e.handleChange(t,n)}},n))},n=0;n<this.state.playlists.length;n++)a(n);return t.push(s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("input",{type:"submit",value:"Submit"}))),t}catch(r){console.log("still loading"),g=!0}if(g)return s.a.createElement("div",{className:"chart"},s.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh"}},s.a.createElement(p,{name:"ball-triangle-path",fadeIn:"none"})),s.a.createElement("div",null,s.a.createElement("h1",null,"Loading user playlists...")))}}]),a}(s.a.Component),v=a(73),b=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=window.location.search,a=new URLSearchParams(t),n={refresh_token:a.get("refresh_token"),mode:a.get("mode")};fetch("https://music-in-context-backend.herokuapp.com/clustertracks",{mode:"cors",method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log("data from post",t),e.setState({clusters:t.clusters,refreshToken:t.refreshToken,mode:t.mode})}))}},{key:"render",value:function(){return"tunnel"===this.state.mode?s.a.createElement("div",{className:"App"},s.a.createElement(y,{mode:this.state.mode,refreshToken:this.state.refreshToken,data:this.state.clusters})):s.a.createElement("div",{className:"loading"},s.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh"}},s.a.createElement(v,{name:"ball-triangle-path",fadeIn:"none"}),s.a.createElement("div",null,s.a.createElement("h1",null,"Loading user playlists..."))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,t,a){e.exports=a(176)},84:function(e,t,a){},85:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.ea67a107.chunk.js.map