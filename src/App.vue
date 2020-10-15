<template>
  <v-app>
    <div id="nav-links">
      <router-link to="/">Home</router-link>  |
      <router-link to="/quiz">Quiz</router-link> 
    </div>
    
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
   
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
 #nav-links{
   display: flex;
   font-size: 24px;
   justify-content: center;
 }
</style>
