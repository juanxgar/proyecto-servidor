<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="inventarioRegistrado"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Información de registros</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="updateNombre"
                        label="Nombre"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="updatePrecio"
                        label="Precio"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="updateUnidades"
                        label="Unidades"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cerrar
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="updateRegistro(editedItem)"
                >
                  Modificar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">¿Está seguro de eliminar el registro?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cerrar</v-btn>
                <v-btn color="blue darken-1" text @click="deleteRegistro(editedItem)">Eliminar</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item._id)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item._id)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import axios from 'axios'

  export default {
    
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        { text: 'Nombre', value: 'nombre' },
        { text: 'Precio', value: 'precio' },
        { text: 'Unidades', value: 'unidades' },
        { text: 'Acciones', value: 'actions', sortable:false }

      ],
      inventarioRegistrado: [],
      updateNombre:"",
      updatePrecio:"",
      updateUnidades:"",
      editedIndex: -1,
      editedItem: [],
      defaultItem: {
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()

      axios.get("http://localhost:3000/inventario")
      .then(response => (this.inventarioRegistrado = response.data))
      .catch(error => console.log(error))
    },

    methods: {
      initialize () {
      },

      editItem (item) {
        this.dialog = true
        console.log(item);
        axios.get(`http://localhost:3000/inventario/${item}`)
        .then(res=>{
          this.updateNombre=res.data.nombre
          this.updatePrecio=res.data.precio
          this.updateUnidades=res.data.unidades
          this.editedItem=res.data
        })

      },

      deleteItem (item) {
        this.dialogDelete = true
        axios.get(`http://localhost:3000/inventario/${item}`)
        .then(res=>{
          this.editedItem=res.data
        })
      },

      deleteItemConfirm () {
        this.inventarioRegistrado.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
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
      },
      updateRegistro(item) {
        axios.post("http://localhost:3000/inventario/update/"+item._id, {
            nombre: this.updateNombre,
            precio: this.updatePrecio,
            unidades: this.updateUnidades
          })
          .then(response => {
            this.message = response.data;
          });
        this.updateNombre = "";
        this.updatePrecio = "";
        this.updateUnidades = "";
        
      },
      deleteRegistro(item) {
        axios.delete("http://localhost:3000/inventario/delete/"+ item._id)
        .then(response => {
          console.log(response.data)
        });
      },
      
    },
  }
</script>