<template>
<v-container>
     <footer class="footer text-white pt-4">
          <div class="content">
               <div class="left box">
                    <div class="upper">
                         <div class="topic">Sobre nosotros</div>
                         <div>
                              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7953.186396507621!2d-74.06802687834924!3d4.666389129746847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1633386210799!5m2!1ses-419!2sco" width="100%" allowfullscreen="false" loading="lazy"></iframe>
                         </div>
                    </div>
                    <div class="lower text-white">
                         <div class="topic">Contáctanos</div>
                         <div class="phone">
                              <a href="#"><i class="fas fa-phone-volume"></i>+1 76484377</a>
                         </div>
                         <div class="email">
                              <a href="mailto:contacto@etecno.com"><i class="fas fa-envelope"></i>contacto@etecno.com</a>
                         </div>
                    </div>
               </div>

               <div class="middle-box text-white">
                    <div><a href="/">Home</a></div>
                    <div><a href="/login">Login</a></div>
                    <div><a href="/carrito">Carrito</a></div>
                    <div class="contact"><a href="/about">Contáctenos</a></div>
                    <div class="media-icons">
                         <a href="#">
                              <v-list-item-icon>
                                   <v-icon color="white--text">mdi-facebook</v-icon>
                              </v-list-item-icon>
                         </a>
                         <a href="#">
                              <v-list-item-icon>
                                   <v-icon>mdi-twitter</v-icon>
                              </v-list-item-icon>
                         </a>
                         <a href="#">
                              <v-list-item-icon>
                                   <v-icon>mdi-instagram</v-icon>
                              </v-list-item-icon>
                         </a>
                         <a href="#">
                              <v-list-item-icon>
                                   <v-icon>mdi-youtube</v-icon>
                              </v-list-item-icon>
                         </a>
                         <a href="#">
                              <v-list-item-icon>
                                   <v-icon>mdi-linkedin</v-icon>
                              </v-list-item-icon>
                         </a>
                         <p>eTecno©️ 2021 All rights reserved</p>
                    </div>
               </div>
          </div>
     </footer>
</v-container>
</template>

<script>
export default {
     name: "PageFooter",
};
</script>

<style scoped>
footer {
     padding-top: -20px;
     position: relative;
     bottom: 0;
     left: 0;
     background: #256eef;
     color: aliceblue;
}

footer .content {
     max-width: 1350px;
     margin: auto;
     padding: 20px;
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between;
}

footer .content p,
a {
     color: #fff;
}

footer .middle-box {
     width: 49%;
     transition: all 0.4s ease;
     color: #fff;
     text-align: center;
}

footer .content .topic {
     font-size: 22px;
     font-weight: 600;
     color: #fff;
     margin-bottom: 16px;
}

footer .content p {
     text-align: justify;
     padding-right: 80px;
}

footer .content .lower .topic {
     margin: 24px 0 5px 0;
     color: white;
}

footer .content .lower i {
     padding-right: 16px;
     color: white-space;
}

footer .content .middle {
     padding-left: 80px;
     justify-content: center;
     text-align: center;
}

footer .content .middle a {
     line-height: 32px;
}

footer .content .media-icons a {
     font-size: 16px;
     height: 45px;
     width: 45px;
     display: inline-block;
     text-align: center;
     line-height: 43px;
     border-radius: 5px;
     border: 2px solid #ffff;
     margin: 30px 5px 0 0;
     transition: all 0.3s ease;
}

footer .content .media-icons p {
     justify-content: center;
     text-align: center;
     margin: 30px 5px 0 0;
     padding-left: 80px;
}

.content .media-icons a:hover {
     border-color: #ffc304;
}

footer a {
     transition: all 0.3s ease;
}

footer a:hover {
     color: #ffc304;
}

footer .content .email {
     font-weight: 600;
     color: #fff;
     margin-bottom: 16px;
}

.v-application a {
     color: #ffffff;
}

.v-list-item__action,
.v-list-item__avatar,
.v-list-item__icon {
     display: contents;
}
</style>
