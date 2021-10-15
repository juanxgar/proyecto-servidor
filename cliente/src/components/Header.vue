<template>
<v-navigation-drawer app permanent expand-on-hover color="#256eef" dark>
     <v-list>
          <v-list-item class="px-2">
               <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
               </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
               <v-list-item-content>
                    <v-list-item-title class="text-h6"> Usuario </v-list-item-title>
                    <v-list-item-subtitle>Email@gmail.com</v-list-item-subtitle>
               </v-list-item-content>
          </v-list-item>
     </v-list>

     <v-list nav dense>
         <router-link to="/">
          <v-list-item link>
               <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
               </v-list-item-icon>
               <v-list-item-title @click="llamarInicio()">Inicio</v-list-item-title>
          </v-list-item>
         </router-link>
         <router-link to="/about">
          <v-list-item link>
               <v-list-item-icon>
                    <v-icon>mdi-cellphone</v-icon>
               </v-list-item-icon>
               <v-list-item-title @click="llamarContacto()">Contacto</v-list-item-title>
          </v-list-item>
         </router-link>
          
          <router-link to="/login">
          <v-list-item link>
               <v-list-item-icon>
                    <v-icon>mdi-login-variant</v-icon>
               </v-list-item-icon>
               <v-list-item-title @click="llamarLogin()">Login</v-list-item-title>
          </v-list-item>
          </router-link>

          <v-list-item link>          
               <v-list-item-icon>
                    <v-icon>mdi-cart</v-icon>
               </v-list-item-icon>
               <v-list-item-title>Carrito</v-list-item-title>
          </v-list-item>

          <router-link to="/registroinventario">
          <v-list-item link>          
               <v-list-item-icon>
                    <v-icon>mdi-login</v-icon>
               </v-list-item-icon>
               <v-list-item-title>Registrar producto</v-list-item-title>
          </v-list-item>
          </router-link>
        
          <router-link to="/tabla">
          <v-list-item link>          
               <v-list-item-icon>
                    <v-icon small>info</v-icon>
               </v-list-item-icon>
               <v-list-item-title>Inventario</v-list-item-title>
          </v-list-item>
          </router-link>

     </v-list>
</v-navigation-drawer>
</template>

  <!-- <nav>
          <ul class="menu">
               <li class="logo"><a href="#"><img src="@/assets/Imágenes/Logos/eTecno Blanco horizontal.png"
                              alt="Logo eTecno"></a></li>
               <li ><a class="item">Home</a></li>
               <li ><a class="item">Tienda</a></li>
               <li ><a class="item">Carrito</a></li>
               <li ><a class="item">Contacto</a></li>

               <li class="item button"><a >Log in</a></li>
               <li class="item button secondary"><a >Registro</a></li>
               <li class="toggle"><a ><i class="fas fa-bars"></i></a></li>
          </ul>
     </nav> -->

<script>


export default {
    components:{
    },
     data() {
    

     },
     methods: {
          llamarInicio() {
               this.$router.push('/')
          },
          llamarLogin() {
               this.$router.push('/login')
          },
          llamarContacto() {
               this.$router.push('/contacto')
          },
     }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
     -webkit-box-sizing: border-box;
     box-sizing: border-box;
     padding: 0;
     margin: 0;
}

body {
     font-family: "Poppins", sans-serif;
     background: #fff;
}
</style>
