(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={form__block:"Searchbar_form__block__1eQ3e",form:"Searchbar_form__1W60a",input:"Searchbar_input__1fkGA",button__submit:"Searchbar_button__submit__3gri1"}},,function(e,t,n){e.exports={overlay:"Modal_overlay__2ihOX",modal:"Modal_modal__1JGs2"}},,function(e,t,n){e.exports={gallery__img:"ImageGalleryItem_gallery__img__2V_Fi"}},function(e,t,n){e.exports={block_button:"Button_block_button__Mh4Na",button:"Button_button__EydU4"}},function(e,t,n){e.exports={spinner__backdrop:"Loader_spinner__backdrop__2eANw",spinner:"Loader_spinner__3x8et"}},,,function(e,t,n){e.exports={gallery:"ImageGallery_gallery__22gK2"}},function(e,t,n){e.exports={container:"Container_container__1KJJe"}},,,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=(n(22),n(2)),l=n(3),s=n(5),m=n(4),u=(n(23),n(13)),b=n(10),g=n.n(b),d=n(1),h=function(e){var t=e.id,n=e.src,a=e.user,r=e.onClick;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("li",{className:g.a.gallery__item,children:Object(d.jsx)("img",{className:g.a.gallery__img,onClick:r,id:t,src:n,alt:a,width:"380px",height:"280px"})})})},p=n(15),j=n.n(p),f=n(16),O=n.n(f);var _=n(11),v=n.n(_),x=function(e){var t=e.nextPage;return Object(d.jsx)("div",{className:v.a.block_button,children:Object(d.jsx)("button",{className:v.a.button,onClick:t,children:"Load more"})})},y=n(14),w=n(17),k=n(12),N=n.n(k),S=function(e){return Object(d.jsx)("div",{className:N.a.spinner__backdrop,children:Object(d.jsx)("div",{className:N.a.spinner,children:Object(d.jsxs)(w.a,Object(y.a)(Object(y.a)({viewBox:"0 0 400 160",height:160,width:400,backgroundColor:"aqua"},e),{},{children:[Object(d.jsx)("circle",{cx:"150",cy:"86",r:"8"}),Object(d.jsx)("circle",{cx:"194",cy:"86",r:"8"}),Object(d.jsx)("circle",{cx:"238",cy:"86",r:"8"})]}))})})};S.metadata={name:"RioF",github:"clariokids",description:"Three Dots",filename:"ThreeDots"};var C=S,M=n(8),I=n.n(M),z=document.createElement("div"),E=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).closeKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.closeBackDrop=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){document.body.appendChild(z),window.addEventListener("keydown",this.closeKeyDown),document.body.style.overflow="hidden"}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeKeyDown),document.body.style.overflow="scroll"}},{key:"render",value:function(){var e=this.props,t=e.openImgModal,n=e.alt;return Object(c.createPortal)(Object(d.jsx)("div",{className:I.a.overlay,onClick:this.closeBackDrop,children:Object(d.jsx)("div",{className:I.a.modal,children:Object(d.jsx)("img",{className:I.a.modal__image,src:t,alt:n})})}),z)}}]),n}(a.Component),A=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={imgArr:[],page:1,loading:!1,isOpen:!1,largeImageURL:null},e.clearOnNewRequest=function(){e.setState({page:1,imgArr:[]})},e.buttonOnclickNextPage=function(){var t=e.state.page;e.setState({page:t+1}),e.scrollTop()},e.onClickImgToggleModal=function(){e.setState((function(e){return{isOpen:!e.isOpen}}))},e.imgModalWriting=function(t){e.onClickImgToggleModal(),e.setState({largeImageURL:t})},e.scrollTop=function(){setTimeout((function(){return window.scrollTo({top:window.pageYOffset+document.documentElement.clientHeight,behavior:"smooth",block:"end"})}),1e3)},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this,a=this.state.page,r=this.props.imgName;e.imgName===r&&t.page===a||(this.setState({loading:!0}),function(e,t){var n="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q="+"".concat(e,"&page=").concat(t,"&per_page=12&key=").concat("23937697-9e9e797303b592bb126e18e87");return fetch(n).then((function(e){return e.json()}))}(this.props.imgName,this.state.page).then((function(e){return n.setState({imgArr:[].concat(Object(u.a)(n.state.imgArr),Object(u.a)(e.hits))})})).finally((function(){return n.setState({loading:!1})}))),e.imgName!==r&&this.clearOnNewRequest()}},{key:"render",value:function(){var e=this,t=this.state,n=t.imgArr,a=t.isOpen,r=t.largeImageURL,c=t.loading;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:O.a.container,children:n.length>0&&Object(d.jsx)("ul",{className:j.a.gallery,children:n.map((function(t){return Object(d.jsx)(h,{src:t.webformatURL,alt:t.tags,onClick:function(){return e.imgModalWriting(t.largeImageURL)}},t.id)}))})}),n.length>0&&!c&&Object(d.jsx)(x,{nextPage:this.buttonOnclickNextPage}),c&&Object(d.jsx)(C,{}),a&&Object(d.jsx)(E,{onClose:this.onClickImgToggleModal,openImgModal:r})]})}}]),n}(a.Component);function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var P=a.createElement("g",{fill:"#000000cc"},a.createElement("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),a.createElement("circle",{cx:420.9,cy:296.5,r:45.7}),a.createElement("path",{d:"M520.5 78.1z"}));function T(e,t){var n=e.title,r=e.titleId,c=D(e,["title","titleId"]);return a.createElement("svg",L({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 841.9 595.3",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,P)}var R=a.forwardRef(T),F=(n.p,n(6)),U=n.n(F),B=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={imgName:""},e.searchPhoto=function(t){e.setState({imgName:t.target.value.toLowerCase()})},e.handleSubmit=function(t){var n=e.state.imgName;t.preventDefault(),""!==n.trim()&&(e.props.img(n),e.setState({imgName:""}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.imgName;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("header",{className:U.a.form__block,children:Object(d.jsxs)("form",{className:U.a.form,onSubmit:this.handleSubmit,children:[Object(d.jsxs)("button",{className:U.a.button__submit,type:"submit",children:[Object(d.jsx)("span",{children:Object(d.jsx)(R,{width:"30px",height:"30px"})}),Object(d.jsx)("span",{className:U.a.button__label,children:"Search"})]}),Object(d.jsx)("input",{onChange:this.searchPhoto,className:U.a.input,type:"text",placeholder:"Search images and photos",value:e})]})})})}}]),n}(a.Component),J=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={imgName:""},e.handleFormSubmit=function(t){e.setState({imgName:t})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(B,{img:this.handleFormSubmit}),Object(d.jsx)(A,{imgName:this.state.imgName})]})}}]),n}(a.Component);o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(J,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.176e589f.chunk.js.map