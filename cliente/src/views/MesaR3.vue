<template>
<v-container fluid class="pa-0">
     <h2>Torre Gamer Ryzen 3 + Monitor 22"</h2>
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
                              <li>Procesador AMD Ryzen 3</li>
                              <li>Windows 10 Home 64</li>
                              <li>Unidad de estado solido Ssd 256 GB</li>
                              <li>Monitor Janus 22"</li>
                              <li>Graficas Integradas Radeon</li>
                              <li>Garantia de un año</li>
                         </ul>
                         <Detalles>
                              <h4 class="tecnical-info-title"> Ficha técnica</h4>
                              <Ul class="tecnical-detail-list">
                                   <li>Tipo de pantalla: MONITOR JANUS IPS 22″ J2275FHD IPS HDMI, VGA, FULL HD CON PARLANTES
                                        INCORPORADOS</li>
                                   <li>Procesador: AMD RYZEN 3-3200G 3,6 Ghz/L3 4MB/12NM/4 NUCLEOS/4 SUBPROCESOS</li>
                                   <li>Memoria RAM: DDR4 8GB RGB VIPER</li>
                                   <li>Almacenamiento: SSD 256 GB</li>
                                   <li>Graficas: integrada Radeon™ Vega 8 Graphics</li>
                                   <li>Board: MSI A320M-A PRO CON 2 SLOTS DE MEMORIA</li>
                                   <li>Sistema Operativo: Windows 10 Home 64</li>
                                   <li>Ventiladores: ARGB</li>
                                   <li>Caja: Janus AX-6</li>
                                   <li>Fuente: 250W</li>
                                   <li>Perifericos: Teclado y Mouse retroiluminados</li>
                              </Ul>
                         </Detalles>
                         <h2>$ 2'480.000</h2>
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
                         src: require('../assets/Imágenes/PC_s/COMPUTADORA DE MESA RYZEN/RYZEN 1.png'),
                    },
                    {
                         src: require('../assets/Imágenes/PC_s/COMPUTADORA DE MESA RYZEN/RYZEN 2.jpg'),
                    },
                    {
                         src: require('../assets/Imágenes/PC_s/COMPUTADORA DE MESA RYZEN/RYZEN 3.png'),
                    },
               ],
          }
     },
}
</script>

