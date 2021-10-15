<template>
<v-container fluid class="pa-0">
     <h2>Asus</h2>
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
                              <li> Procesador Intel Core i5</li>
                              <li> Sistema Operativo Endless</li>
                              <li> Unidad de estado solido PCIe de 256 GB</li>
                              <li> Pantalla de 15.6"</li>
                              <li> Graficas Integradas Intel</li>
                              <li> Garantia de un año</li>
                         </ul>
                         <Detalles>
                              <h4 class="tecnical-info-title"> Ficha técnica</h4>
                              <Ul class="tecnical-detail-list">
                                   <Li>Tipo de pantalla: LCD IPS Full HD 1920x1080 de 15.6"</li>
                                   <Li>Procesador: Intel Core i5 1135G7 DE 2.40 GHz Quad Core/ 8 Hilos con frecuencia turbo de hasta
                                        4.2GHz</li>
                                   <Li>Memoria RAM: 8 GB DDR4 con hasta dos ranuras</li>
                                   <Li>Almacenamiento: 256 GB SSD PCIe</li>
                                   <Li>Graficas: Graficos Integrados Intel Iris</li>
                                   <Li>Sistema Operativo: Endless</li>
                                   <Li>Puertos: HDMI, 1 USB 3.2 Gen 1 Tipo-A, 1 USB 3.2 Gen 2 Tipo-C, 2 USB 2.0 Tipo-A, Lector de
                                        Huellas</Li>
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
                         src: require('../assets/Imágenes/PORTATIL/PORTATIL ASUS/ASUS 1.png'),
                    },
                    {
                         src: require('../assets/Imágenes/PORTATIL/PORTATIL ASUS/ASUS 2.png'),
                    },
                    {
                         src: require('../assets/Imágenes/PORTATIL/PORTATIL ASUS/ASUS 3.png'),
                    },
               ],
          }
     },
}
</script>
