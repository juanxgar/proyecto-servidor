<template>
<v-container fluid class="pa-0">
     <h2>Licencia Windows 10 Home Original</h2>
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
                              Windows 10 original, ventajas reales
                              Obtén la mejor experiencia de PC posible, solo con una versión original de Windows 10.
                              Con Windows 10 como base de su PC, puede hacer todo lo que imagine.
                         </p>
                         <Detalles>
                              <h4 class="tecnical-info-title"> Ficha técnica</h4>
                              <Ul class="tecnical-detail-list">
                                   <Li>Sus características de seguridad integradas incluyen un antivirus, un firewall y protección para
                                        Internet.</li>
                                   <Li>Escanee su cara o su huella dactilar con Windows Hello para acceder de forma rápida, segura y
                                        sin contraseña a su PC*.</li>
                                   <Li>La escala de tiempo proporciona una forma rápida y sencilla de ver los documentos, las
                                        aplicaciones o los sitios web que ha abierto recientemente.</li>
                                   <Li>El Asistente de concentración permite bloquear notificaciones, sonidos y alertas para poder
                                        trabajar sin distracciones.</li>
                                   <li>Fotos de Microsoft es una forma fácil de organizar, buscar, editar y compartir fotos y vídeos**.
                                   </li>
                                   <li>El menú Game Bar permite hacer streaming en vivo de un juego de forma instantánea, realizar
                                        grabaciones de la pantalla y controlar opciones concretas de la configuración del audio.</li>
                              </Ul>
                         </Detalles>
                         <h2>$ 769.999</h2>
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
                         src: require("../assets/Imágenes/SOTWARE/LICENCIA WINDOWS 10/LICENCIA WINDOWS.jpg"),
                    },
                    {
                         src: require("../assets/Imágenes/SOTWARE/LICENCIA WINDOWS 10/LICENCIA WINDOWS 2.jpg"),
                    },
                    {
                         src: require("../assets/Imágenes/SOTWARE/LICENCIA WINDOWS 10/LICENCIA WINDOWS 3.jpg"),
                    },
               ],
          };
     },
};
</script>

<style>
.paginaProducto {
     display: flex;
     padding: 4px;
     border: 20px;
}

.carrousel {
     width: 60%;
}
</style>
