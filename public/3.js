(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{14:function(e,t,r){"use strict";var s={props:{value:{type:Number,required:!0},pages:{type:Number,required:!0}},methods:{update:function(e){this.$emit("input",e)},range:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;return _.range(e,t,1)}}},n=r(1),a=Object(n.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex justify-center items-center space-x-2"},[e.value<4?e._l(e.range(e.value),(function(t){return r("button",{key:t,staticClass:"text-blue-500 hover:underline focus:underline px-5 py-2",on:{click:function(r){return e.update(t)}}},[e._v(e._s(t+1))])})):[r("button",{staticClass:"text-blue-500 hover:underline focus:underline px-5 py-2",on:{click:function(t){return e.update(0)}}},[e._v("1")]),e._v(" "),r("span",{staticClass:"select-none"},[e._v("·")]),e._v(" "),e._l(e.range(e.value-2,e.value),(function(t){return r("button",{key:t,staticClass:"text-blue-500 hover:underline focus:underline px-5 py-2",on:{click:function(r){return e.update(t)}}},[e._v(e._s(t+1))])}))],e._v(" "),r("span",{staticClass:"bg-blue-500 text-white select-none hover:underline focus:underline px-5 py-2"},[e._v(e._s(e.value+1))]),e._v(" "),e.value<e.pages-4?[e._l(e.range(e.value+1,e.value+3),(function(t){return r("button",{key:t,staticClass:"text-blue-500 hover:underline focus:underline px-5 py-2",on:{click:function(r){return e.update(t)}}},[e._v(e._s(t+1))])})),e._v(" "),r("span",{staticClass:"select-none"},[e._v("·")]),e._v(" "),r("button",{staticClass:"text-blue-500 hover:underline focus:underline px-5 py-2",on:{click:function(t){return e.update(e.pages-1)}}},[e._v(e._s(e.pages))])]:e._l(e.range(e.value+1,e.pages),(function(t){return r("button",{key:t,staticClass:"text-blue-500 hover:underline focus:underline px-5 py-2",on:{click:function(r){return e.update(t)}}},[e._v(e._s(t+1))])}))],2)}),[],!1,null,null,null);t.a=a.exports},3:function(e,t,r){"use strict";var s=r(1),n=Object(s.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex justify-center items-center w-full py-3 lg:py-5 bg-orange-400 shadow-md"},[t("h1",{staticClass:"font-semibold text-2xl lg:text-4xl text-white"},[this._t("default")],2)])}),[],!1,null,null,null);t.a=n.exports},69:function(e,t,r){"use strict";r.r(t);var s=r(0),n=r.n(s),a=r(2),o=r(3),i={props:{product:{type:Object,validator:function(e){return(!_.has(e,"thumbnail")||_.isString(e.thumbnail)||_.isNull(e.thumbnail))&&_.isString(e.price)&&_.isString(e.name)}},disabled:{type:Boolean,default:!1},to:{type:String|Object,required:!0}}},c=r(1),u=Object(c.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"p-2 flex flex-row items-center space-x-4 lg:space-x-6"},[r("div",{staticClass:"text-center w-20 md:w-24 hover:relative hover:z-10 flex-shrink-0 rounded-sm border bg-white transition-transform duration-150 ease-in-out transform hover:scale-150 cursor-pointer"},[e.product.thumbnail?[r("img",{staticClass:"block w-full h-auto",attrs:{src:e.product.thumbnail}})]:[r("span",[e._v("-")])]],2),e._v(" "),r("div",{staticClass:"flex flex-grow flex-col lg:flex-row break-words lg:space-x-6 lg:items-center"},[r("router-link",{staticClass:"flex-grow font-semibold hover:text-orange-600 text-sm lg:text-base",attrs:{to:e.to}},[e._v(e._s(e.product.name))]),e._v(" "),r("span",{staticClass:"text-sm lg:text-right lg:w-56 lg:text-base font-medium"},[e._v("$"+e._s(e.product.price))])],1),e._v(" "),r("button",{staticClass:"btn-solid btn-solid-orange px-2 whitespace-no-wrap text-sm md:text-base py-1 disabled:cursor-not-allowed",attrs:{disabled:e.disabled},on:{click:function(t){!e.disabled&&e.$emit("add")}}},[r("font-awesome-icon",{attrs:{icon:"plus"}}),e._v(" Añadir")],1)])}),[],!1,null,null,null).exports,l=r(14);function d(e,t,r,s,n,a,o){try{var i=e[a](o),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(s,n)}function p(e){return function(){var t=this,r=arguments;return new Promise((function(s,n){var a=e.apply(t,r);function o(e){d(a,s,n,o,i,"next",e)}function i(e){d(a,s,n,o,i,"throw",e)}o(void 0)}))}}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g,m,b={props:{searchQuery:{type:String,default:null},pageQuery:{type:Number,default:0}},data:function(){return{loading:!1,search:this.searchQuery,page:this.pageQuery,nPages:0,totalItems:0,items:[],error:null}},created:function(){this.fetchData(),this.updateQueryDebounced=_.debounce(this.updateQuery,500)},computed:{pageC:{get:function(){return this.page},set:function(e){this.page=e,this.updateQueryDebounced()}},searchC:{get:function(){return this.search},set:function(e){this.search=e,this.searchQuery!==e&&(this.page=0,this.updateQueryDebounced())}}},watch:{$route:function(){this.page=this.pageQuery,this.nPages=0,this.search=this.searchQuery,this.totalItems=0,this.items=[],this.error=null,this.fetchData()}},methods:f(f({},Object(a.b)("cart",{addToCartAction:"addToCart"})),{},{updateQuery:function(){var e={};this.search&&(e.s=this.search),this.page&&(e.p=this.page),this.$router.push({query:e})},fetchData:(m=p(n.a.mark((function e(){var t,r,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,t={},this.search&&(t.s=this.search),this.page&&(t.p=this.page),e.next=7,axios.get("/api/products",{params:t});case 7:r=e.sent.data,this.items=r.data,this.nPages=r.n_pages,this.totalItems=r.total,e.next=18;break;case 13:e.prev=13,e.t0=e.catch(1),s="",e.t0.response?404==e.t0.response.status?s+="El recurso solicitado no existe":401!=e.t0.response.status&&403!=e.t0.response.status||(s+="No posee acceso al recurso solicitado"):s=e.t0.request?"El servidor tardó en responder":"No se pudo comunicar con el servidor",this.error=s+" ("+e.t0.message+")";case 18:return e.prev=18,this.loading=!1,e.finish(18);case 21:case"end":return e.stop()}}),e,this,[[1,13,18,21]])}))),function(){return m.apply(this,arguments)}),addToCart:(g=p(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.addToCartAction(t);case 3:console.log("Producto añadido"),this.$notify({group:"messages",type:"success",title:"Producto añadido exitosamente"}),e.next=13;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),r="",e.t0.response?404==e.t0.response.status?r+="El recurso solicitado no existe":401!=e.t0.response.status&&403!=e.t0.response.status||(r+="No posee acceso al recurso solicitado"):r=e.t0.request?"El servidor tardó en responder":"No se pudo comunicar con el servidor",this.$notify({group:"messages",type:"error",title:"Error",text:r+" ("+e.t0.message+")"});case 13:case"end":return e.stop()}}),e,this,[[0,7]])}))),function(e){return g.apply(this,arguments)})}),components:{TitleBanner:o.a,SearchRowItem:u,PaginationItem:l.a}},x=Object(c.a)(b,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("TitleBanner",[e._v("Búsqueda")]),e._v(" "),r("div",{staticClass:"container mx-auto p-5"},[r("div",{staticClass:"flex mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchC,expression:"searchC"}],staticClass:"flex-1 mx-2 p-2 bg-gray-100 border-gray-400 placeholder-gray-600 text-gray-700 rounded-md border",attrs:{placeholder:"Búsqueda"},domProps:{value:e.searchC},on:{input:function(t){t.target.composing||(e.searchC=t.target.value)}}})]),e._v(" "),r("div",[r("h3",{staticClass:"text-sm md:text-base font-bold uppercase tracking-tighter"},[e._v("\n                "+e._s(e.loading?"Cargando...":0==e.totalItems?"Sin productos encontrados":1==e.totalItems?"1 producto encontrado":e.totalItems+" productos encontrados")+"\n            ")])]),e._v(" "),r("hr",{staticClass:"border-gray-500 my-2"}),e._v(" "),r("transition",{attrs:{name:"fade",mode:"out-in"}},[e.loading?r("div",{key:0,staticClass:"flex justify-center items-center text-center align-middle py-8 text-xl font-semibold text-orange-600"},[r("span",{staticClass:"spinner w-8 h-8 mx-2"}),e._v("\n                Cargando\n            ")]):e.error?r("div",{key:1,staticClass:"flex justify-center items-center text-center align-middle py-8 text-xl font-semibold text-orange-600"},[e._v("\n                Error al obtener los productos de la base de datos: "+e._s(e.error)+"\n            ")]):0==e.items.length?r("div",{key:2,staticClass:"flex justify-center items-center text-center align-middle py-8 text-xl font-semibold text-orange-600"},[e._v("\n                No se encontraron productos que coincidan con tu busqueda\n            ")]):r("div",{key:3},[r("div",{staticClass:"flex-col divide-y divide-gray-400"},e._l(e.items,(function(t,s){return r("SearchRowItem",{key:s,attrs:{to:{name:"product",params:{productId:t.id}},product:t},on:{add:function(r){return e.addToCart(t)}}})})),1),e._v(" "),r("div",{staticClass:"mt-4 flex justify-center items-center"},[r("PaginationItem",{attrs:{pages:e.nPages},model:{value:e.pageC,callback:function(t){e.pageC=t},expression:"pageC"}})],1)])])],1)],1)}),[],!1,null,null,null);t.default=x.exports}}]);
//# sourceMappingURL=3.js.map