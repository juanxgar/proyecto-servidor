<template>
<v-container fluid class="pa-0">
     <h2>Mirosoft Office 365 Familia</h2>
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
                              Trabaja como quieras desde prácticamente cualquier lugar. Con Office 365 Familia, tienes Word, Excel,
                              PowerPoint, Outlook y mucho más. Empieza un documento en tu escritorio en la oficina, revísalo en tu
                              tableta en el café y luego agrega los toques finales en tu computadora portátil en casa. Las
                              aplicaciones siempre están actualizadas, por lo que nunca son obsoletas. Soporte técnico de expertos de
                              Microsoft especializados por chat o teléfono sin costo adicional durante el periodo de tu suscripción.
                              Recuerda que el Office 365 personal y hogar ahora incluyen las nuevas aplicaciones de Office 2016 para
                              PC y Mac.
                         </p>
                         <Detalles>
                              <h4 class="tecnical-info-title"> Ficha técnica</h4>
                              <Ul class="tecnical-detail-list">
                                   <Li>RECUERDA: El pin se entregara en un correo diferente al de la factura dentro de las próximas 2
                                        Horas después de facturado el producto.</li>
                                   <Li>Guarda y comparte archivos y fotos en todos los dispositivos con OneDrive</li>
                                   <Li>Disfruta de protección de seguridad avanzada en OneDrive y Outlook</li>
                                   <Li>Versiones de Word, Excel, PowerPoint, OneNote y Outlook.</li>
                                   <Li>1 TB de almacenamiento en la nube por persona</li>
                              </Ul>
                         </Detalles>
                         <h2>$ 244.900</h2>
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
                         src: require('../assets/Imágenes/SOTWARE/LICENCIA OFFICE 365/LICENCIA OFFICE 1.jpg'),
                    },
                    {
                         src: require('../assets/Imágenes/SOTWARE/LICENCIA OFFICE 365/LICENCIA OFFICE 2.png'),
                    },
                    {
                         src: require('../assets/Imágenes/SOTWARE/LICENCIA OFFICE 365/LICENCIA OFFICE 3.png'),
                    },
               ],
          }
     },
}
</script>

