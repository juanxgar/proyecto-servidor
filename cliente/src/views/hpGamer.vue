<template>
<v-container fluid class="pa-0">
     <h2>Portatil HP Pavilion Gaming 15-ec1025la</h2>
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
                              <li> Procesador AMD Ryzen 5</li>
                              <li> Windows 10 Home 64</li>
                              <li> Unidad de estado solido PCIe® NVMe™ M.2 de 256 GB</li>
                              <li> Pantalla de 15.6"</li>
                              <li> Graficas Nvidia® GeForce®</li>
                              <li> Garantia de un año</li>
                         </ul>
                         <Detalles>
                              <h4 class="tecnical-info-title"> Ficha técnica</h4>
                              <Ul class="tecnical-detail-list">
                                   <Li>Tipo de Pantalla: 15,6" de diagonal FHD antirreflejo, con microbordes, retroiluminación WLED 220
                                        nits, 45 % de NTSC (1920 x 1080)</li>
                                   <Li>Procesador: AMD Ryzen™5 4600H Six Cores 54W (3.0GHz, turbo up to 4.0GHz), 3200MHz/3MB L2</li>
                                   <Li>Memoria RAM: 8GB DDR4 - 3200 (Expandible a 16 GB)</li>
                                   <Li>Almacenamiento: 256GB SSD PCIe</li>
                                   <Li>Gráficas: NVIDIA® GeForce® GTX 1050 3GB</li>
                                   <Li>Sistema Operativo: Windows 10</li>
                                   <li>Puertos: 1 USB Type-C® con SuperSpeed de 5 Gbps Velocidad de señalización; 1 USB Type-A con
                                        SuperSpeed de 5 Gbps Velocidad de señalización; 1 USB 2.0 Type-A (HP Sleep and Charge); 1 HDMI
                                        2.0; 1 RJ-45; 1 conector inteligente CA; 1 combinación de auriculares y micrófono</li>
                              </Ul>
                         </Detalles>
                         <h2>$ 2'899.000</h2>
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
                         src: require('../assets/Imágenes/PORTATIL/PORTATIL HP GAMER/PORTATIL HP GAMER.jpg'),
                    },
                    {
                         src: require('../assets/Imágenes/PORTATIL/PORTATIL HP GAMER/PORTATIL HP GAMER 2.jpg'),
                    },
                    {
                         src: require('../assets/Imágenes/PORTATIL/PORTATIL HP GAMER/PORTATIL HP GAMER 3.jpg'),
                    },
               ],
          }
     },
}
</script>
