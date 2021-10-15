<template>
<v-container fluid class="pa-0">
    <h2>Acer Nitro 5</h2>
    <div class="paginaProducto">
    <v-carousel hide-delimiters class="carrousel">
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" width: 40%></v-carousel-item>
    </v-carousel>
    <main>
        <div class="info-product">
            <Section class="detail-info">
                <h4 class="producto-info-title">
                    Resumen del producto:
                </h4>
                <ul class="resume-list">
                    <li> Procesador Intel Core i5</li>
                    <li> Windows 10 Home 64</li>
                    <li> Unidad de estado solido PCIe de 512 GB</li>
                    <li> Pantalla de 15.6"</li>
                    <li> Graficas Nvidia GeForce</li>
                    <li> Garantia de un año</li>
                </ul>
                <Detalles>
                    <h4 class="tecnical-info-title"> Ficha técnica</h4>
                    <Ul class="tecnical-detail-list">
                        <Li>Tipo de pantalla: LCD IPS ComfyView Full HD 1920x1080 de 15.6"</li>
                        <Li>Procesador: Intel Core i5 10300H DE 2.50 GHz Quad Core</li>
                        <Li>Memoria RAM: 8 GB DDR4 con hasta dos ranuras</li>
                        <Li>Almacenamiento: 512 GB SSD PCIe</li>
                        <Li>Graficas: NVIDIA GeForce GTX 1650 CON HASTA 4GB de memoria dedicada</li>
                        <Li>Sistema Operativo: Windows 10 Home 64</li>
                        <li>Puertos: HDMI, 2 USB 3.2 Gen 1 Tipo-A, 1 USB 3.2 Gen 2 Tipo-A, 1 USB 3.2 Gen 2 Tipo-C, puerto
                            RJ45</li>
                    </Ul>
                </Detalles>
                <h2>$ 3'500.000</h2>
                <div class="my-2">
                    <v-btn color="warning">
                        Añadir al carrito
                    </v-btn>
                </div>
            </section>
        </div>
    </main>
    </div>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                    src: '../assets/logo.svg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },
            ],
        }
    },
}
</script>
<style>
.paginaProducto {
    display: flex;
    padding: 4px;
    border: 20px;

}
.carrousel{
    width: 60%;

}
</style>