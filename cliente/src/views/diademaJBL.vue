<template>
<v-container fluid class="pa-0">
     <h2>JBL QUANTUM 100</h2>
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
                              <li> Convierta el juego en una aventura épica. Con el nuevo estándar JBL QuantumSOUND Signature, los
                                   auriculares JBL Quantum 100 le sitúan en el centro de la acción. Un sonido inmersivo y preciso que
                                   le permite apreciar todos los matices y sentir todas las explosiones, un micrófono vocal extraíble,
                                   y comodidad y ligereza gracias a las almohadillas de espuma viscoelástica. El micrófono de asta
                                   desmontable le permite interactuar con varios jugadores y las almohadillas de espuma viscoelástica
                                   proporcionan un óptimo confort durante horas. Juegue partidas inolvidables con los auriculares JBL
                                   Quantum 100.</li>

                         </ul>
                         <Detalles>
                              <h4 class="tecnical-info-title"> Ficha técnica</h4>
                              <Ul class="tecnical-detail-list">
                                   <Li>Longitud del cable del auricular (m): 1.2</li>
                                   <Li>Driver (mm): 40</li>
                                   <Li>Sensibilidad del driver a 1kHz1mW (dB): 96</li>
                                   <Li>Respuesta de frecuencia dinámica: 20 Hz - 20 kHz</li>
                                   <Li>Impedancia de entrada (ohms): 32</li>
                                   <Li>Peso (g): 220</li>
                                   <li>Microfono integrado</li>
                              </Ul>
                         </Detalles>
                         <h2>$ 139.920</h2>
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
                         src: require('../assets/Imágenes/PERIFERICOS/DIADEMA JBL/DIADEMA JBL 1.png'),
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
