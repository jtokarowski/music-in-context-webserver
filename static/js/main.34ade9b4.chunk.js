(this["webpackJsonpradio-form-demo"]=this["webpackJsonpradio-form-demo"]||[]).push([[0],{175:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(9),i=a.n(l),o=(a(82),a(29)),r=a(30),c=a(38),h=a(37),u=(a(83),a(27)),m=a(72),p=(a(70),a(71),a(156)),d=!0,f=!0,y=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={selectedPlaylist:null,playlists:[],playlistIDs:[],playlistNames:[],playlistIndicators:[]},n.changePlaylist=n.changePlaylist.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(r.a)(a,[{key:"changePlaylist",value:function(e){this.setState({selectedPlaylist:e})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.selectedPlaylist,a=this.state.playlistNames.indexOf(t),n=this.state.playlistIDs[a];console.log("selected playlist ID",n);var s="https://music-in-context.herokuapp.com/ui?".concat("refresh_token=",this.props.refreshToken,"&form_data=",n,"&mode=",this.props.mode);window.location.href=s}},{key:"render",value:function(){var e=this;try{this.props.data.map((function(t){e.state[t.playlistname]=e.state[t.playlistname],d&&(e.state.playlists.push(t),e.state.playlistIDs.push(t.playlistID),e.state.playlistNames.push(t.playlistName),e.state.playlistIndicators.push(!1))})),d=!1,console.log("state after pushing data",this.state);var t=[];t.push(s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("input",{type:"submit",value:"Submit"})));for(var a=function(a){var n=e.state.playlistNames[a];t.push(s.a.createElement(m.a,{name:"playlist",checked:e.state.selectedPlaylist===n,onChange:function(){e.changePlaylist(n)}},n))},n=0;n<this.state.playlists.length;n++)a(n);return t.push(s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("input",{type:"submit",value:"Submit"}))),t}catch(l){console.log("still loading"),f=!0}if(f)return s.a.createElement("div",{className:"chart"},s.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh"}},s.a.createElement(p,{name:"ball-triangle-path",fadeIn:"none"})),s.a.createElement("div",null,s.a.createElement("h1",null,"Loading user playlists...")))}}]),a}(s.a.Component),v=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=window.location.search,a=new URLSearchParams(t),n={refresh_token:a.get("refresh_token"),mode:a.get("mode")};fetch("https://music-in-context-backend.herokuapp.com/getuserplaylists",{mode:"cors",method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log("data from post",t),e.setState({apiData:t.userPlaylists,refreshToken:t.refreshToken,mode:t.mode})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(y,{mode:this.state.mode,refreshToken:this.state.refreshToken,data:this.state.apiData}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,t,a){e.exports=a(175)},82:function(e,t,a){},83:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.34ade9b4.chunk.js.map