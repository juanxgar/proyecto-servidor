<template>
<v-container fluid class="pa-0">
     <h2>McAfee Total Protection - 10 Dispositivos</h2>
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
                         <p class="resume-list">
                              McAfee #174 Total Protection es un producto de seguridad de confianza para disfrutar de una protección
                              antivirus, de identidad y de privacidad en sus PC, Mac, Smartphones y Tablets.
                         </p>
                         <Detalles>
                              <h4 class="tecnical-info-title"> Ficha técnica</h4>
                              <Ul class="tecnical-detail-list">
                                   <li>Advierte sitios web de riesgo y evita descargas peligrosas</li>
                                   <li>Proteja a sus hijos del contenido digital inapropiado.</li>
                                   <li>Administrador de contraseñas</li>
                                   <li>Guarde bajo llave los archivos confidenciales</li>
                                   <li>Antivirus de reconocido prestigio</li>
                              </Ul>
                         </Detalles>
                         <h2>$ 79.900</h2>
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
                    src: require('../assets/Imágenes/SOTWARE/LICENCIA MCAFEE/LICENCIA MCAFEE.jpg'),
               }, ],
          }
     },
}
</script>

