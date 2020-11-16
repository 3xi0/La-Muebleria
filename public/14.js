(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{74:function(t,e,r){"use strict";r.r(e);var a=r(0),s=r.n(a);function o(t,e,r,a,s,o,i){try{var n=t[o](i),l=n.value}catch(t){return void r(t)}n.done?e(l):Promise.resolve(l).then(a,s)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(a,s){var i=t.apply(e,r);function n(t){o(i,a,s,n,l,"next",t)}function l(t){o(i,a,s,n,l,"throw",t)}n(void 0)}))}}var n,l,c,u={props:{productId:{type:String|Number,validator:function(t){return!isNaN(t)&&!isNaN(parseInt(t))}}},data:function(){return{submiting:!1,loading:!1,loadingError:"",product:null,categories:[],form:{name:"",model:"",description:"",price:null,thumbnail:null,details:[],category:""},validationErrors:{name:[],model:[],description:[],price:[],thumbnail:[],details:[],category:[]},generalError:"",detailsC:null}},created:function(){this.fetchCategories();var t=this;this.fetchData().then((function(){t.product&&(document.title='Editando "'+t.product.name+'" | La mueblería',t.form.name=t.product.name,t.form.model=t.product.model,t.form.description=t.product.description,t.form.price=t.product.price,t.form.category=t.product.category.id)}))},watch:{$route:function(){this.submiting=!1,this.loading=!1,this.loadingError="",this.product=null,this.categories=[],this.form.name="",this.form.model="",this.form.description="",this.form.price=null,this.form.thumbnail=null,this.form.details=[],this.form.category="",this.validationErrors.name=[],this.validationErrors.model=[],this.validationErrors.description=[],this.validationErrors.price=[],this.validationErrors.thumbnail=[],this.validationErrors.details=[],this.validationErrors.category=[],this.generalError="",this.detailsC=null,this.fetchCategories();var t=this;this.fetchData().then((function(){t.product&&(document.title='Editando "'+t.product.name+'" | La mueblería',t.form.name=t.product.name,t.form.model=t.product.model,t.form.description=t.product.description,t.form.price=t.product.price,t.form.category=t.product.category.id)}))}},methods:{setDetailsImages:function(t){this.form.details=t,this.detailsC=_.map(t,this.getImage)},getImage:function(t){return URL.createObjectURL(t)},onlyNumbers:function(t){var e=(t=t||window.event).which?t.which:t.keyCode;if(!(e>31&&(e<48||e>57)&&46!==e))return!0;t.preventDefault()},fetchData:(c=i(s.a.mark((function t(){var e,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,axios.get("/api/products/"+this.productId);case 4:e=t.sent.data.data,this.product=e,t.next=14;break;case 8:t.prev=8,t.t0=t.catch(1),r="",t.t0.response?404==t.t0.response.status?r+="El recurso solicitado no existe":401!=t.t0.response.status&&403!=t.t0.response.status||(r+="No posee acceso al recurso solicitado"):r=t.t0.request?"El servidor tardó en responder":"No se pudo comunicar con el servidor",this.loadingError=r+" ("+t.t0.message+")",document.title="Error al cargar producto | La mueblería";case 14:return t.prev=14,this.loading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[1,8,14,17]])}))),function(){return c.apply(this,arguments)}),fetchCategories:(l=i(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("/api/categories");case 3:this.categories=t.sent.data,t.next=11;break;case 6:t.prev=6,t.t0=t.catch(0),e="",t.t0.response?404==t.t0.response.status?e+="El recurso solicitado no existe":401!=t.t0.response.status&&403!=t.t0.response.status||(e+="No posee acceso al recurso solicitado"):e=t.t0.request?"El servidor tardó en responder":"No se pudo comunicar con el servidor",this.$notify({group:"messages",type:"error",title:"Error al cargar las categorias",text:e+" ("+t.t0.message+")"});case 11:case"end":return t.stop()}}),t,this,[[0,6]])}))),function(){return l.apply(this,arguments)}),submitForm:(n=i(s.a.mark((function t(){var e,r,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.submiting=!0,t.prev=1,e=new FormData,r=this,Object.keys(this.form).forEach((function(t){r.form[t]&&"details"!=t?e.append(t,r.form[t]):"details"==t&&_.forEach(r.form[t],(function(t,r){e.append("details["+r+"]",t)}))})),e.append("_method","PUT"),t.next=8,axios.post("/api/products/"+this.productId,e,{headers:{"Content-Type":"multipart/form-data"}});case 8:console.log("Producto modificado"),this.$notify({group:"messages",type:"success",title:"Producto editado exitosamente"}),this.$router.push({name:"product",params:{productId:this.productId}}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),t.t0.response?401==t.t0.response.status||403==t.t0.response.status?this.generalError="No posee acceso al recurso solicitado":_.extend(this.validationErrors,t.t0.response.data.errors):(a="",a=t.t0.request?"El servidor tardó en responder":"No se pudo comunicar con el servidor",this.generalError=a+" ("+t.t0.message+")");case 16:return t.prev=16,this.submiting=!1,t.finish(16);case 19:case"end":return t.stop()}}),t,this,[[1,13,16,19]])}))),function(){return n.apply(this,arguments)})}},d=r(1),p=Object(d.a)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loadingError?r("div",{staticClass:"flex flex-1 flex-col justify-center items-center"},[r("h1",{staticClass:"text-orange-500 text-xl sm:text-2xl lg:text-3xl font-semibold text-center"},[t._v(t._s(t.error))])]):t.loading?r("div",{staticClass:"flex flex-1 flex-col justify-center items-center"},[r("span",{staticClass:"spinner w-12 h-12"})]):r("div",{staticClass:"flex flex-1 flex-col sm:justify-center items-center sm:bg-orange-400"},[r("div",{staticClass:"bg-white sm:border sm:border-orange-500 sm:rounded-md sm:shadow-lg w-full max-w-full sm:max-w-sm lg:max-w-lg"},[r("h1",{staticClass:"bg-orange-500 text-white font-semibold text-3xl text-center p-4"},[t._v("Modificar producto")]),t._v(" "),r("div",{staticClass:"px-8 py-6"},[t.product?r("p",{staticClass:"text-orange-300 text-sm"},[t._v("Producto #"+t._s(t.product.id))]):t._e(),t._v(" "),r("form",{staticClass:"space-y-6",on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[r("div",{staticClass:"space-y-2"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.name,expression:"form.name",modifiers:{trim:!0}}],staticClass:"w-full border-b border-orange-300 focus:border-orange-400 py-2 px-1 placeholder-gray-700 text-orange-500 transition duration-300 ease-in-out",attrs:{type:"text",maxlength:"100",placeholder:"Nombre"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),t._l(t.validationErrors.name,(function(e,a){return r("p",{key:a,staticClass:"text-red-600"},[t._v(t._s(e))])}))],2),t._v(" "),r("div",{staticClass:"space-y-2"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.model,expression:"form.model",modifiers:{trim:!0}}],staticClass:"w-full border-b border-orange-300 focus:border-orange-400 py-2 px-1 placeholder-gray-700 text-orange-500 transition duration-300 ease-in-out",attrs:{type:"text",maxlength:"100",placeholder:"Modelo"},domProps:{value:t.form.model},on:{input:function(e){e.target.composing||t.$set(t.form,"model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),t._l(t.validationErrors.model,(function(e,a){return r("p",{key:a,staticClass:"text-red-600"},[t._v(t._s(e))])}))],2),t._v(" "),r("div",{staticClass:"space-y-2"},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.form.price,expression:"form.price",modifiers:{number:!0}}],staticClass:"w-full border-b border-orange-300 focus:border-orange-400 py-2 px-1 placeholder-gray-700 text-orange-500 transition duration-300 ease-in-out",attrs:{type:"text",placeholder:"Precio"},domProps:{value:t.form.price},on:{keypress:function(e){return t.onlyNumbers(e)},input:function(e){e.target.composing||t.$set(t.form,"price",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),t._l(t.validationErrors.price,(function(e,a){return r("p",{key:a,staticClass:"text-red-600"},[t._v(t._s(e))])}))],2),t._v(" "),r("div",{staticClass:"space-y-2"},[r("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.description,expression:"form.description",modifiers:{trim:!0}}],staticClass:"w-full border-b border-orange-300 focus:border-orange-400 py-2 px-1 placeholder-gray-700 text-orange-500 transition duration-300 ease-in-out",attrs:{placeholder:"Descripción"},domProps:{value:t.form.description},on:{input:function(e){e.target.composing||t.$set(t.form,"description",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),t._l(t.validationErrors.description,(function(e,a){return r("p",{key:a,staticClass:"text-red-600"},[t._v(t._s(e))])}))],2),t._v(" "),r("div",{staticClass:"space-y-2"},[r("label",[r("span",{staticClass:"text-orange-500"},[t._v("Imágen:")]),t._v(" "),r("input",{ref:"thumbnail",attrs:{type:"file",accept:"image/*"},on:{change:function(e){t.form.thumbnail=e.target.files[0]}}})]),t._v(" "),t.form.thumbnail?r("div",{staticClass:"w-3/12 h-auto p-2"},[r("img",{staticClass:"border border-orange-600 rounded-md shadow-md",attrs:{src:t.getImage(t.form.thumbnail)}})]):t._e(),t._v(" "),t.form.thumbnail?r("button",{staticClass:"text-blue-500 hover:text-blue-600 focus:text-blue-600 text-sm",attrs:{type:"button"},on:{click:function(e){t.$refs.thumbnail.value="",t.form.thumbnail=null}}},[t._v("Borrar imágenes")]):t._e(),t._v(" "),t._l(t.validationErrors.thumbnail,(function(e,a){return r("p",{key:a,staticClass:"text-red-600"},[t._v(t._s(e))])}))],2),t._v(" "),r("div",{staticClass:"space-y-2"},[r("label",[r("span",{staticClass:"text-orange-500"},[t._v("Imágenes de detalle:")]),t._v(" "),r("input",{ref:"details",attrs:{type:"file",accept:"image/*",multiple:""},on:{change:function(e){return t.setDetailsImages(e.target.files)}}})]),t._v(" "),t.detailsC?r("div",{staticClass:"flex flex-row flex-wrap"},t._l(t.detailsC,(function(t,e){return r("div",{key:e,staticClass:"w-3/12 h-auto p-2"},[r("img",{staticClass:"border border-orange-600 rounded-md shadow-md",attrs:{src:t}})])})),0):t._e(),t._v(" "),t.form.details.length>0?r("button",{staticClass:"text-blue-500 hover:text-blue-600 focus:text-blue-600 text-sm",attrs:{type:"button"},on:{click:function(e){t.$refs.details.value="",t.form.details=[],t.detailsC=null}}},[t._v("Borrar imágenes")]):t._e(),t._v(" "),t._l(t.validationErrors.details,(function(e,a){return r("p",{key:a,staticClass:"text-red-600"},[t._v(t._s(e))])})),t._v(" "),0==t.form.details.length?r("span",{staticClass:"text-red-600 text-sm"},[t._v("(Incluir archivos en esta categoría eliminará todas las imágenes actuales del producto, exceptuando la imágen principal)")]):t._e()],2),t._v(" "),r("div",{staticClass:"space-y-2"},[r("label",[r("span",{staticClass:"text-orange-500"},[t._v("Categoría:")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.category,expression:"form.category"}],staticClass:"text-gray-800",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"category",e.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",value:""}},[t._v("Seleccione alguna categoría")]),t._v(" "),t._l(t.categories,(function(e,a){return r("option",{key:a,domProps:{value:e.id}},[t._v("\n                                "+t._s(e.name)+"\n                            ")])}))],2)]),t._v(" "),t._l(t.validationErrors.category,(function(e,a){return r("p",{key:a,staticClass:"text-red-600"},[t._v(t._s(e))])}))],2),t._v(" "),t.generalError?r("p",{staticClass:"text-red-600"},[t._v(t._s(t.generalError))]):t._e(),t._v(" "),r("button",{staticClass:"w-full btn-outlined btn-outlined-orange font-semibold text-center px-3 py-2",attrs:{disabled:t.submiting,type:"submit"}},[t.submiting?[r("span",{staticClass:"spinner spinner-disabled w-6 h-6 mx-2"})]:[t._v("\n                        Modificar producto\n                    ")]],2)])])])])}),[],!1,null,null,null);e.default=p.exports}}]);
//# sourceMappingURL=14.js.map