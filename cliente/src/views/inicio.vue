<template>
<v-container>
     <v-carousel hide-delimiters class="carrou">
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
     </v-carousel>

     <v-row>
          <v-col>
               <a href="/MesaR7">
                    <v-img :src="require('../assets/Imágenes/PC_s/COMPUTADOR DE MESA RYZEN 7/RYZEN 7 2.jpg')" max-width="200" to="/afiliacion" width="100%"> </v-img>
                    <p>Computador de Mesa Ryze 7</p>
               </a>
          </v-col>
          <v-col>
               <a href="/MesaR3">
                    <v-img :src="require('../assets/Imágenes/PC_s/COMPUTADORA DE MESA RYZEN/RYZEN 2.jpg')" max-width="200" to="/afiliacion" width="100%"> </v-img>
                    <p>Computador de Mesa Ryze 3</p>
               </a>
          </v-col>
          <v-col>
               <a href="/MesaR5">
                    <v-img :src="require('../assets/Imágenes/PC_s/COMPUTADORA DE MESA RYZEN 5/RYZEN 5 3.jpg')" max-width="200" to="/afiliacion" width="100%"> </v-img>
                    <p>Computador de Mesa Ryze 5</p>
               </a>
          </v-col>
          <v-col>
               <a href="/diademaJBL">
                    <v-img :src="require('../assets/Imágenes/PERIFERICOS/DIADEMA JBL/DIADEMA JBL 1.png')" max-width="200" to="/afiliacion" width="100%"> </v-img>
                    <p>Diadema JBL QUANTUM 100</p>
               </a>
          </v-col>
     </v-row>
     <v-row>
          <v-col>
               <a href="/Office365">
                    <v-img :src="require('../assets/Imágenes/SOTWARE/LICENCIA OFFICE 365/LICENCIA OFFICE 1.jpg')" max-width="200" to="/afiliacion" width="100%"> </v-img>
                    <p>Microsoft Office 365 Familia</p>
               </a>
          </v-col>
          <v-col>
               <a href="/mcAfee">
                    <v-img :src="require('../assets/Imágenes/SOTWARE/LICENCIA MCAFEE/LICENCIA MCAFEE.jpg')" max-width="130" to="/afiliacion" width="100%"> </v-img>
                    <p>McAfee Total Protection - 10 Dispositivos</p>
               </a>
          </v-col>
          <v-col>
               <a href="/win10">
                    <v-img :src="require('../assets/Imágenes/SOTWARE/LICENCIA WINDOWS 10/LICENCIA WINDOWS 3.jpg')" max-width="200" to="/afiliacion" width="100%"> </v-img>
                    <p>Licencia Windows 10 Home Original</p>
               </a>
          </v-col>
          <v-col>
               <a href="/kaspersky">
                    <v-img :src="require('../assets/Imágenes/SOTWARE/LICENCIA KASPERSKY/LICENCIA KASPERSKY 1.jpg')" max-width="200" to="/afiliacion" width="100%"> </v-img>
                    <p>Kaspersky Total Security- eTecno - Todo en tecnología</p>
               </a>
          </v-col>
     </v-row>

</v-container>
</template>

<script>
export default {
     data() {
          return {
               items: [{
                         src: require('../assets/Imágenes/Carou1.png'),
                    },
                    {
                         src: require('../assets/Imágenes/Carou2.png'),
                    },
                    {
                         src: require('../assets/Imágenes/Carou3.png'),
                    }
               ],
          }
     },
}
</script>

<style scoped>
.carrou {
     width: 100%;

}
</style>