<template>
    <div class="hello">
      <h1>Hello from HompePage</h1>
      <add-movies></add-movies>
    </div>
  </template>
  
  <script>
  import AddMovies from '../components/Form/AddMovies/Form.vue'
  export default {
    name: 'HompePage',
    components: {
   'add-movies': AddMovies
    // 'header-nav':header
  }
    
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  