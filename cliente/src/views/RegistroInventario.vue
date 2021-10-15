<template>
  <v-app>
    <div class="d-flex justify-center">
      <h1 style="color: #256eef;">INVENTARIOS</h1>
    </div>
    <div class="d-flex justify-center">
      
      <v-col cols="4">
        <v-row cols="4">
          <h2>Registro de producto</h2>
        </v-row>
        
        <v-row cols="4">
          <v-text-field v-model="newNombre" label="Ingrese el nombre del producto" solo></v-text-field>
        </v-row>
        <v-row cols="4">
          <v-text-field v-model="newPrecio" label="Ingrese el precio" solo></v-text-field>
        </v-row>
        <v-row cols="4">
          <v-select
            v-model="newUnidades"
            :items="items"
            label="Cantidad"
            ></v-select>
        </v-row>
        <v-row style="justify-content:center;">
          <div class="d-flex justify-center">
            <v-btn @click="addRegistro()" color="primary">Registrar</v-btn>
          </div>
        </v-row>
      </v-col>
    </div>
  </v-app>
</template>

<script>

import axios from 'axios';  

  export default {
    data: () => ({

      dialog: false,
      items: [
        '1', '2', '3', '4', '5',
        '6', '7', '8', '9', '10',
        '11', '12', '13', '14', '15',
        '16', '17', '18', '19', '20'
      ],
    

      newNombre:"",
      newPrecio:"",
      newUnidades:"",
    }),
    methods: {

      guardarID(id){
          this.invID=id
      },

      addRegistro() {

        axios.post("http://localhost:3000/inventario/register", {
            nombre: this.newNombre,
            precio: this.newPrecio,
            unidades: this.newUnidades
          })
          .then(response => {
            this.message = response.data;
          });
        this.newNombre = "";
        this.newPrecio = "";
        this.newUnidades = ""; 
      }
    }
  }
</script>

<style scoped>


h2{
  color: #256eef; 
  text-align: center;
  align-content: center;
  align-items: center;
  margin-bottom: 20px;
}


</style>
