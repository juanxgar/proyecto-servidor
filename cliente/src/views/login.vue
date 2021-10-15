<template>
<v-container>
     <v-form ref="form" v-model="valid" lazy-validation>
          <div class="forms">
               <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Nombre" required></v-text-field>

               <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

               <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required></v-checkbox>
          </div>
          <div class="buttons">
               <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
                    Iniciar sesión
               </v-btn>

               <v-btn color="error" class="mr-4" @click="reset">
                    Cancelar
               </v-btn>

               <v-btn color="256eef" @click="resetValidation">
                    Registrarse
               </v-btn>
          </div>
     </v-form>
</v-container>
</template>

<script>
export default {
     data: () => ({
          valid: true,
          name: '',
          nameRules: [
               v => !!v || 'Se requiere un nombre',
               v => (v && v.length <= 10) || 'El nombre debe contener menos de 10 caracteres',
          ],
          email: '',
          emailRules: [
               v => !!v || 'Se requiere un email',
               v => /.+@.+\..+/.test(v) || 'Tiene que ser un e-mail válido',
          ],
          select: null,

          checkbox: false,
     }),

     methods: {
          validate() {
               this.$refs.form.validate()
          },
          reset() {
               this.$refs.form.reset()
          },
          resetValidation() {
               this.$refs.form.resetValidation()
          },
     },
}
</script>

<style scoped>
.forms {
     width: 70%;
     text-align: center;
     justify-content: center;
     justify-items: center;
}

.buttons {
     text-align: center;
}
</style>
