<template>
  <div>
    <button @click="fetchBooks">Refrescar</button>

    <ul>
      <li v-for="book in books" :key="book.title">
        {{ book.title }} — {{ book.average_rating }}
      </li>
    </ul>

    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getBooks } from '../services/BookService'

const books = ref([])
const error = ref(null)

const fetchBooks = async () => {
  error.value = null

  try {
    books.value = await getBooks()
  } catch (e) {
    error.value = 'Error cargando libros'
  }
}

onMounted(fetchBooks)
</script>
