<template>
<v-container>
     <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Nombre" required></v-text-field>

          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

          <v-text-field v-model="message" :rules="messageRules" label="Mensaje" required></v-text-field>

          <v-checkbox v-model="checkbox" :rules="[v => !!v || '¡Debes acepar las condiciones para continuar!']" label="¿Aceptas términos y condiciones?" required></v-checkbox>

          <v-btn :disabled="!valid" color="success" @click="validate">
               Validate
          </v-btn>

          <v-btn color="error" @click="reset">
               Reset Form
          </v-btn>

          <v-btn color="warning" @click="resetValidation">
               Reset Validation
          </v-btn>
     </v-form>
</v-container>
</template>

<script>
export default {
     data: () => ({
          valid: true,
          name: '',
          nameRules: [
               v => !!v || 'Se requiere nombre',
               v => (v && v.length <= 5) || 'El nombre debe tener mínimo 5 carácteres'
          ],
          email: '',
          emailRules: [
               v => !!v || 'Se requiere el e-mail',
               v => /.+@.+/.test(v) || 'Debe ser un e-mail válido'
          ],
          message: '',
          messageRules: [
               v => !!v || 'Se requiere un mensaje',
               v => (v && v.length <= 0) || 'El mensaje no puede estar vacío'
          ],
          checkbox: false
     }),

     methods: {
          validate() {
               if (this.$refs.form.validate()) {
                    this.snackbar = true
               }
          },
          reset() {
               this.$refs.form.reset()
          },
          resetValidation() {
               this.$refs.form.resetValidation()
          }
     }
}
</script>
