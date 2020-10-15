<template>
  <div class="home">
    <v-container>
       <h1>Homepage</h1>
       <p class="black red--text"> ipsum dolor sit, amet consectetur adipisicing elit. Debitis eius vel totam vero rerum porro alias eos accusamus perspiciatis adipisci dicta molestiae eum nisi beatae, praesentium ea deserunt animi cupiditate. </p>
       <p class="pink lighten-4 red--text text--darken-4"> ipsum dolor sit, amet consectetur adipisicing elit. Debitis eius vel totam vero rerum porro alias eos accusamus perspiciatis adipisci dicta molestiae eum nisi beatae, praesentium ea deserunt animi cupiditate. </p>
       <h1 class="display-3">Massive Display</h1>
       <h6 class="display-3">Massive Display</h6>
       <v-btn large fab>
         <span>email me</span>
        
       </v-btn>
        <v-icon color="pink">mdi-favorite</v-icon>
    </v-container>
   
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style scoped>
.v-btn--fab.v-size--large {
  width: 100px;
}
</style>