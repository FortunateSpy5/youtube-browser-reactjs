(this["webpackJsonpyoutube-browser-reactjs"]=this["webpackJsonpyoutube-browser-reactjs"]||[]).push([[0],{19:function(e,t,a){e.exports=a(42)},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),c=a.n(i),s=a(6),o=a.n(s),l=a(17),m=a(2),u=a(3),d=a(5),p=a(4),v=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSearchSubmit(e.state.term),e.setState({term:""})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search-bar ui segment"},r.a.createElement("form",{className:"ui form",onSubmit:this.onFormSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Search Video"),r.a.createElement("input",{type:"text",name:"search",placeholder:"Search",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value.trimStart()})}}))))}}]),a}(r.a.Component),h=function(e){var t=e.video,a=e.onVideoSelect;return r.a.createElement("div",{className:"item",onClick:function(){return a(t)}},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:t.snippet.thumbnails.medium.url,alt:t.snippet.title})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},t.snippet.title)))},b=function(e){var t=e.videos,a=e.onVideoSelect;if(t.length>0){var n=t.map((function(e){return r.a.createElement(h,{key:e.id.videoId,video:e,onVideoSelect:a})}));return r.a.createElement("div",{className:"ui segment"},r.a.createElement("div",{className:"ui divided items"},n))}return""},f=function(e){var t=e.video;return t?r.a.createElement("div",{className:"ui segment"},r.a.createElement("div",{className:"ui embed"},r.a.createElement("iframe",{title:"video playr",src:"https://www.youtube.com/embed/".concat(t.id.videoId)})),r.a.createElement("h2",{className:"header"},t.snippet.title),r.a.createElement("p",{className:"meta"},t.snippet.description)):""},S=a(18),E=a.n(S).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,type:"video",key:"AIzaSyA1khGZ4dY4VTjifFBCQ9ql41j8h9D5oiE"}}),y=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={videos:[],video:null},e.onSearchSubmit=function(){var t=Object(l.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.get("/search",{params:{q:a}});case 2:n=t.sent,e.setState({videos:n.data.items});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){console.log(t),e.setState({video:t})},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container",style:{paddingTop:"10px"}},r.a.createElement(v,{onSearchSubmit:this.onSearchSubmit}),r.a.createElement(f,{video:this.state.video}),r.a.createElement(b,{onVideoSelect:this.onVideoSelect,videos:this.state.videos}))}}]),a}(r.a.Component);c.a.render(r.a.createElement(y,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.29719e90.chunk.js.map