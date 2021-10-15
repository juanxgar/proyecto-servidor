<template>
<v-container fluid class="pa-0">
     <h2>Computador de Mesa RYZEN 7</h2>
     <v-row>
          <v-col>
          <v-carousel hide-delimiters class="carrousel">
               <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" width: 40%></v-carousel-item>
          </v-carousel>
          </v-col>
          <v-col>
               <div class="info-product">
                    <Section class="detail-info">
                         <h4 class="producto-info-title">
                              Resumen del producto:
                         </h4>
                         <ul class="resume-list">
                              <li>Procesador AMD Ryzen 7</li>
                              <li>Sin SO</li>
                              <li>Unidad de estado solido Ssd 240 GB</li>
                              <li>Graficas Integradas Radeon</li>
                              <li>Garantia de un año</li>
                         </ul>
                         <Detalles>
                              <h4 class="tecnical-info-title"> Ficha técnica</h4>
                              <Ul class="tecnical-detail-list">
                                   <li>Procesador: AMD RYZEN 7 3,6 Ghz</li>
                                   <li>Memoria RAM: DDR4 8GB RGB VIPER</li>
                                   <li>Almacenamiento: SSD 240 GB</li>
                                   <li>Graficas: integrada Radeon</li>
                                   <li>Board: GIGABYTE A520 DS3H</li>
                                   <li>Sistema Operativo: Sin SO</li>
                                   <li>Ventiladores: ARGB</li>
                                   <li>Caja: Power Group Clon Gamer 6</li>
                                   <li>Fuente: 250W</li>
                              </Ul>
                         </Detalles>
                         <h2>$ 3'110.000</h2>
                         <div class="my-2">
                              <v-btn color="warning">
                                   Añadir al carrito
                              </v-btn>
                         </div>
                    </section>
               </div>
          </v-col>
     </v-row>
</v-container>
</template>

<script>
export default {
     data() {
          return {
               items: [{
                         src: require('../assets/Imágenes/PC_s/COMPUTADOR DE MESA RYZEN 7/RYZEN 7 1.jpg'),
                    },
                    {
                         src: require('../assets/Imágenes/PC_s/COMPUTADOR DE MESA RYZEN 7/RYZEN 7 2.jpg'),
                    },
               ],
          }
     },
}
</script>
