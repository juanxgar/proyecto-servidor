<template>
<v-container fluid class="pa-0">
     <h2>Asistente de Voz GOOGLE Home Mini Gris</h2>
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
                              <li> Una gran ayuda en cualquier lugar de tu casa, conoce GOOGLE Home Mini.| Google Home Mini es una
                                   parlante inteligente con el Asistente de Google integrado que siempre está listo para ayudarte en lo
                                   que necesites. Si quieres ver información actualizada sobre el tiempo, el tráfico, deportes,
                                   finanzas y mucho más, solo tienes que decirlo y el Home Mini te dará las respuestas. Diseñado para
                                   pasar desapercibido, pero para destacar. ¡Adquiere el tuyo ahora! </li>

                         </ul>
                         <Detalles>
                              <h4 class="tecnical-info-title"> Ficha técnica</h4>
                              <Ul class="tecnical-detail-list">
                                   <Li>Transmite contenido fácilmente desde un dispositivo a la TV. Simplemente accede a cualquier app
                                        compatible y presiona el botón para transmitir.</li>
                                   <Li>Obtén ayuda personalizada para organizar tu día</li>
                                   <Li>Conectividad Bluetooth, transmite música desde tu teléfono</li>
                                   <Li>Compatible con Chromecast para controlar tu TV</li>
                              </Ul>
                         </Detalles>
                         <h2>$ 169.900</h2>
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
                         src: require('../assets/Imágenes//PERIFERICOS/DIADEMA JBL/DIADEMA JBL 1.png'),
                    },
                    {
                         src: require('../assets/Imágenes/PERIFERICOS/DIADEMA JBL/DIADEMA JBL 2.png'),
                    },
                    {
                         src: require('../assets/Imágenes/PERIFERICOS/DIADEMA JBL/DIADEMA JBL 3.png'),
                    },
               ],
          }
     },
}
</script>
