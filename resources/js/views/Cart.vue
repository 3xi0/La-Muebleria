<template>
    <div>
        <TitleBanner>Items en carrito</TitleBanner>
        <div class="container mx-auto p-5">
            <div class="flex items-center text-sm md:text-base tracking-tighter">
                <h3 class="flex-grow uppercase font-bold">
                    {{ loading?'Cargando...':(totalItems==0?'Sin productos encontrados':(totalItems==1?'1 producto encontrado':(totalItems + ' productos encontrados'))) }}
                </h3>
                <template v-if="!loading">
                    <span v-if="totalItems>0" class="font-semibold">
                        Costo subtotal: ${{ subtotalCost }}
                    </span>
                    <span v-else class="font-semibold">
                        Ingrese al menos un producto
                    </span>
                </template>
            </div>
            <hr class="border-gray-500 my-2">
            <div class="mb-2">
                <transition name="fade" mode="out-in">
                    <div :key="0" v-if="loading" class="flex justify-center items-center text-center align-middle py-8 text-xl font-semibold text-orange-600">
                        <span class="spinner w-8 h-8 mx-2"></span>
                        Cargando
                    </div>
                    <div :key="1" v-else-if="error" class="flex justify-center items-center text-center align-middle py-8 text-xl font-semibold text-orange-600">
                        Error al obtener los productos de la base de datos: {{ error }}
                    </div>
                    <div :key="2" v-else-if="items.length == 0" class="flex justify-center items-center text-center align-middle py-8 text-xl font-semibold text-orange-600">
                        No hay productos en su carrito
                    </div>
                    <div :key="3" v-else>
                        <div class="flex-col divide-y divide-gray-400">
                            <CartRowItem v-for="(item, index) in items" :key="index" :to="{ name: 'product', params: { productId: item.product.id } }" :value="item" @remove="removeFromCart(item.product)"/>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="flex justify-between">
                <button @click="emptyCart" :disabled="loading||totalItems==0" class="btn-outlined btn-outlined-orange px-2 py-1 disabled:cursor-not-allowed">Vaciar carrito</button>
                <button @click="checkout" :disabled="loading||totalItems==0" class="btn-outlined btn-outlined-orange px-2 py-1 disabled:cursor-not-allowed">Finalizar compra</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

import TitleBanner from './components/TheTitleBanner'
import CartRowItem from './components/Cart/CartRow'

export default {
    data () {
        return {
            loading: false,
            totalItems: 0,
            items: [],
            error: null
        }
    },
    computed: {
        subtotalCost: function () {
            return _.reduce(this.items, function (result, data) {
                return result + data.quantity*data.product.price
            }, 0)
        }
    },
    created () {
        this.fetchData()
    },
    methods: {
        ...mapActions('cart', {
            retrieveProducts: 'retrieveProducts',
            removeFromCartAction: 'removeFromCart',
            emptyCartAction: 'emptyCart'
        }),
        checkout: function () {
            this.$notify({
                group: 'messages',
                type: 'informative',
                title: 'Proximamente'
            });
        },
        emptyCart: async function () {
            try{
                await this.emptyCartAction()
                console.log("Carrito vaciado")
                this.$notify({
                    group: 'messages',
                    type: 'success',
                    title: 'Carrito vaciado exitosamente'
                });
                this.fetchData()
            }catch(e){
                console.log(e);
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
                    title: 'Error',
                    text: tempError + ' (' + e.message + ')'
                });
            }
        },
        removeFromCart: async function (product) {
            try{
                await this.removeFromCartAction(product)
                console.log("Producto eliminado")
                this.$notify({
                    group: 'messages',
                    type: 'success',
                    title: 'Producto eliminado del carrito exitosamente'
                });
                this.fetchData()
            }catch(e){
                console.log(e);
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
                    title: 'Error',
                    text: tempError + ' (' + e.message + ')'
                });
            }
        },
        fetchData: async function () {
            this.loading = true
            try{
                const items = await this.retrieveProducts()
                this.items = items.data
                this.totalItems = items.total_items
                this.totalCost = items.total_cost
            } catch (e) {
                console.log(e);
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
                this.error = tempError + " (" + e.message + ")"
            } finally {
                this.loading = false
            }
        }
    },
    components: {
        TitleBanner,
        CartRowItem
    }
}
</script>