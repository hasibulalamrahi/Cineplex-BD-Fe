<template>
  <div class="form-container">
    <form class="my-form">
      <label for="name">Title:</label>
      <input type="text" id="name" v-model="formData.title" />

      <label for="email">Release Year</label>
      <input type="email" id="email" v-model="formData.releaseYear" />

      <label for="email">Description</label>
      <input type="email" id="email" v-model="formData.description" />

      <label for="message">Genre</label>
      <textarea id="message" v-model="formData.message"></textarea>

      <button type="submit" @click.prevent="submitForm">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddMovies',
  props: {
    msg: String
  },
  data() {
    return {
      formData: {
      title: '',
      description: '',
      genres:[]
      }
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log('Form submitted:', this.formData);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.my-form {
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f8f8f8;
}

.my-form label,
.my-form input,
.my-form textarea {
  display: block;
  margin-bottom: 10px;
}

.my-form input,
.my-form textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.my-form button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.my-form button:hover {
  background-color: #0056b3;
}
</style>
