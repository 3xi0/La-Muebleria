<template>
    <div v-if="loadingError" class="flex flex-1 flex-col justify-center items-center">
        <h1 class="text-orange-500 text-xl sm:text-2xl lg:text-3xl font-semibold text-center">{{ error }}</h1>
    </div>
    <div v-else-if="loading" class="flex flex-1 flex-col justify-center items-center">
        <span class="spinner w-12 h-12"></span>
    </div>
    <div v-else class="flex flex-1 flex-col sm:justify-center items-center sm:bg-orange-400">
        <div class="bg-white sm:border sm:border-orange-500 sm:rounded-md sm:shadow-lg w-full max-w-full sm:max-w-sm lg:max-w-lg">
            <h1 class="bg-orange-500 text-white font-semibold text-3xl text-center p-4">Modificar producto</h1>
            <div class="px-8 py-6">
                <p class="text-orange-300 text-sm" v-if="product">Producto #{{ product.id }}</p>
                <form class="space-y-6" @submit.prevent="submitForm">
                    <div class="space-y-2">
                        <input v-model.trim="form.name" type="text" maxlength="100" class="w-full border-b border-orange-300 focus:border-orange-400 py-2 px-1 placeholder-gray-700 text-orange-500 transition duration-300 ease-in-out" placeholder="Nombre"/>
                        <p class="text-red-600" v-for="(error, index) in validationErrors.name" :key="index">{{ error }}</p>
                    </div>
                    <div class="space-y-2">
                        <input v-model.trim="form.model" type="text" maxlength="100" class="w-full border-b border-orange-300 focus:border-orange-400 py-2 px-1 placeholder-gray-700 text-orange-500 transition duration-300 ease-in-out" placeholder="Modelo"/>
                        <p class="text-red-600" v-for="(error, index) in validationErrors.model" :key="index">{{ error }}</p>
                    </div>
                    <div class="space-y-2">
                        <input v-model.number="form.price" @keypress="onlyNumbers($event)" type="text" class="w-full border-b border-orange-300 focus:border-orange-400 py-2 px-1 placeholder-gray-700 text-orange-500 transition duration-300 ease-in-out" placeholder="Precio">
                        <p class="text-red-600" v-for="(error, index) in validationErrors.price" :key="index">{{ error }}</p>
                    </div>
                    <div class="space-y-2">
                        <textarea v-model.trim="form.description" class="w-full border-b border-orange-300 focus:border-orange-400 py-2 px-1 placeholder-gray-700 text-orange-500 transition duration-300 ease-in-out" placeholder="Descripción"></textarea>
                        <p class="text-red-600" v-for="(error, index) in validationErrors.description" :key="index">{{ error }}</p>
                    </div>
                    <div class="space-y-2">
                        <label>
                            <span class="text-orange-500">Imágen:</span>
                            <input type="file" ref="thumbnail" accept="image/*"
                            @change="form.thumbnail = $event.target.files[0]">
                        </label>
                        <div class="w-3/12 h-auto p-2"
                        v-if="form.thumbnail">
                            <img 
                            :src="getImage(form.thumbnail)"
                            class="border border-orange-600 rounded-md shadow-md">
                        </div>
                        <button v-if="form.thumbnail" @click="$refs.thumbnail.value = ''; form.thumbnail = null" type="button" class="text-blue-500 hover:text-blue-600 focus:text-blue-600 text-sm">Borrar imágenes</button>
                        <p class="text-red-600" v-for="(error, index) in validationErrors.thumbnail" :key="index">{{ error }}</p>
                    </div>
                    <div class="space-y-2">
                        <label>
                            <span class="text-orange-500">Imágenes de detalle:</span>
                            <input type="file" ref="details" accept="image/*" multiple
                            @change="setDetailsImages($event.target.files)">
                        </label>
                        <div v-if="detailsC" class="flex flex-row flex-wrap">
                            <div class="w-3/12 h-auto p-2"
                            v-for="(image, index) in detailsC" 
                            :key="index">
                                <img 
                                :src="image"
                                class="border border-orange-600 rounded-md shadow-md">
                            </div>
                        </div>
                        <button v-if="form.details.length > 0" @click="$refs.details.value = ''; form.details = []; detailsC = null" type="button" class="text-blue-500 hover:text-blue-600 focus:text-blue-600 text-sm">Borrar imágenes</button>
                        <p class="text-red-600" v-for="(error, index) in validationErrors.details" :key="index">{{ error }}</p>
                        <span v-if="form.details.length == 0" class="text-red-600 text-sm">(Incluir archivos en esta categoría eliminará todas las imágenes actuales del producto, exceptuando la imágen principal)</span>
                    </div>
                    <div class="space-y-2">
                        <label>
                            <span class="text-orange-500">Categoría:</span>
                            <select v-model="form.category" class="text-gray-800">
                                <option disabled value="">Seleccione alguna categoría</option>
                                <option v-for="(category, index) in categories" :key="index" :value="category.id">
                                    {{ category.name }}
                                </option>
                            </select>
                        </label>
                        <p class="text-red-600" v-for="(error, index) in validationErrors.category" :key="index">{{ error }}</p>
                    </div>
                    <p class="text-red-600" v-if="generalError">{{ generalError }}</p>
                    <button :disabled="submiting" type="submit" class="w-full btn-outlined btn-outlined-orange font-semibold text-center px-3 py-2">
                        <template v-if="submiting">
                            <span class="spinner spinner-disabled w-6 h-6 mx-2"></span>
                        </template>
                        <template v-else>
                            Modificar producto
                        </template>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        productId: {
            type: String | Number,
            validator: function (value) {
                return !isNaN(value) && !isNaN(parseInt(value))
            }
        }
    },
    data() {
        return {
            submiting: false,
            loading: false,
            loadingError: '',
            product: null,
            categories: [],
            form: {
                name: '',
                model: '',
                description: '',
                price: null,
                thumbnail: null,
                details: [],
                category: ''   
            },
            validationErrors: {
                name: [],
                model: [],
                description: [],
                price: [],
                thumbnail: [],
                details: [],
                category: []
            },
            generalError: '',
            detailsC: null
        }
    },
    created () {
        this.fetchCategories()
        var vm = this
        this.fetchData().then(function () {
            if(vm.product){
                document.title = 'Editando "' + vm.product.name + '" | La mueblería';
                vm.form.name = vm.product.name
                vm.form.model = vm.product.model
                vm.form.description = vm.product.description
                vm.form.price = vm.product.price
                vm.form.category = vm.product.category.id
            }
        })
    },
    watch: {
        $route: function () {
            this.submiting = false
            this.loading = false
            this.loadingError = ''
            this.product = null
            this.categories = []
            this.form.name = ''
            this.form.model = ''
            this.form.description = ''
            this.form.price = null
            this.form.thumbnail = null
            this.form.details = []
            this.form.category = ''
            this.validationErrors.name = []
            this.validationErrors.model = []
            this.validationErrors.description = []
            this.validationErrors.price = []
            this.validationErrors.thumbnail = []
            this.validationErrors.details = []
            this.validationErrors.category = []
            this.generalError = ''
            this.detailsC = null
            this.fetchCategories()
            var vm = this
            this.fetchData().then(function () {
                if(vm.product){
                    document.title = 'Editando "' + vm.product.name + '" | La mueblería';
                    vm.form.name = vm.product.name
                    vm.form.model = vm.product.model
                    vm.form.description = vm.product.description
                    vm.form.price = vm.product.price
                    vm.form.category = vm.product.category.id
                }
            })
        }
    },
    methods: {
        setDetailsImages: function (files) {
            this.form.details = files
            this.detailsC = _.map(files, this.getImage)
        },
        getImage: function (imageFile) {
            return URL.createObjectURL(imageFile)
        },
        onlyNumbers: function (event) {
            event = (event) ? event : window.event
            var charCode = (event.which) ? event.which : event.keyCode
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                event.preventDefault()
            } else {
                return true
            }
        },
        fetchData: async function () {
            this.loading = true
            try {
                const data = (await axios.get('/api/products/'+this.productId)).data.data
                this.product = data
            } catch(e) {
                var tempError = ""
                if (e.response) {
                    if(e.response.status == 404)
                        tempError += "El recurso solicitado no existe"
                    else if(e.response.status == 401 || e.response.status == 403)
                        tempError += "No posee acceso al recurso solicitado"
                } else if (e.request) {
                    tempError = "El servidor tardó en responder";
                } else {
                    tempError = "No se pudo comunicar con el servidor";
                }
                this.loadingError = tempError + " (" + e.message + ")"
                document.title = 'Error al cargar producto | La mueblería';
            } finally {
                this.loading = false
            }
        },
        fetchCategories: async function () {
            try {
                this.categories = (await axios.get('/api/categories')).data
            } catch(e) {
                var tempError = ""
                if (e.response) {
                    if(e.response.status == 404)
                        tempError += "El recurso solicitado no existe"
                    else if(e.response.status == 401 || e.response.status == 403)
                        tempError += "No posee acceso al recurso solicitado"
                } else if (e.request) {
                    tempError = "El servidor tardó en responder";
                } else {
                    tempError = "No se pudo comunicar con el servidor";
                }
                this.$notify({
                    group: 'messages',
                    type: 'error',
                    title: 'Error al cargar las categorias',
                    text: tempError + ' (' + e.message + ')'
                });
            }
        },
        submitForm: async function () {
            this.submiting = true
            try {
                var formData = new FormData()
                var vm = this
                Object.keys(this.form).forEach(function (input) {
                    if(vm.form[input] && input != 'details')
                        formData.append(input, vm.form[input])
                    else if(input == 'details')
                        _.forEach(vm.form[input], function (file, index) {
                            formData.append('details[' + index + ']', file)
                        })
                })
                formData.append('_method', 'PUT')
                await axios.post('/api/products/'+this.productId, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                console.log("Producto modificado")
                this.$notify({
                    group: 'messages',
                    type: 'success',
                    title: 'Producto editado exitosamente'
                });
                this.$router.push({ name: 'product', params: {
                    productId: this.productId
                } })
            } catch(e) {
                if (e.response) {
                    if(e.response.status == 401 || e.response.status == 403)
                        this.generalError = "No posee acceso al recurso solicitado"
                    else
                        _.extend(this.validationErrors, e.response.data.errors)
                } else {
                    var tempError = ""
                    if (e.request) {
                        tempError = "El servidor tardó en responder";
                    } else {
                        tempError = "No se pudo comunicar con el servidor";
                    }
                    this.generalError = tempError + " (" + e.message + ")"
                }
            } finally {
                this.submiting = false
            }
        }
    }
}
</script>