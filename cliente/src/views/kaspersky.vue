<template>
<v-container fluid class="pa-0">
     <h2>Kaspersky Total Security- eTecno - Todo en tecnología</h2>
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
                              Todas tus necesidades de seguridad en un solo producto. Obtén la inigualable sensación de seguridad con
                              una protección galardonada contra hackers, virus y malware. Incluye herramientas de privacidad y
                              protección de pagos que te protegen desde todos los ángpos en cada dispositivo.
                         </p>
                         <Detalles>
                              <h4 class="tecnical-info-title"> Ficha técnica</h4>
                              <Ul class="tecnical-detail-list">
                                   <Li>VPN gratuita con hasta 300 MB de tráfico diario</li>
                                   <Li>Navegador de pago seguro para cifrar tus pagos y transacciones en Internet</li>
                                   <Li>Gratis Kaspersky Password Manager Premium</li>
                                   <Li>Gratis Kaspersky Safe Kids Premium</li>
                                   <Li>Cifra el historial de navegación y los datos en línea</li>
                              </Ul>
                         </Detalles>
                         <h2>$ 239.900</h2>
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
                         src: require('../assets/Imágenes/SOTWARE/LICENCIA KASPERSKY/LICENCIA KASPERSKY 1.jpg'),
                    },
                    {
                         src: require('../assets/Imágenes/SOTWARE/LICENCIA KASPERSKY/LICENCIA KASPERSKY 2.jpg'),
                    },
                    {
                         src: require('../assets/Imágenes/SOTWARE/LICENCIA KASPERSKY/LICENCIA KASPERSKY 3.jpg'),
                    },
               ],
          }
     },
}
</script>

