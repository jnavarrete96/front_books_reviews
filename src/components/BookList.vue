<template>
  <div class="min-h-screen bg-gray-100 py-10 px-4">
    <div class="max-w-3xl mx-auto">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-3xl font-bold text-gray-800">
          📚 Libros
        </h1>

        <button
          @click="fetchBooks"
          class="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Refrescar
        </button>
      </div>

      <div
        v-if="error"
        class="mb-4 p-3 bg-red-100 text-red-700 rounded"
      >
        {{ error }}
      </div>

      <div class="space-y-4">
        <div
          v-for="book in books"
          :key="book.title"
          class="bg-white p-5 rounded-xl shadow-sm border border-gray-200"
        >
          <h2 class="text-xl font-semibold text-gray-900">
            {{ book.title }}
          </h2>

          <p class="text-gray-600 mt-1">
            {{ book.author }} · {{ book.publishedYear }}
          </p>

          <p class="mt-3 font-medium">
            ⭐ Rating promedio:
            <span
              v-if="book.averageRating !== null"
              class="text-blue-600"
            >
              {{ book.averageRating }}
            </span>
            <span
              v-else
              class="text-gray-400 italic"
            >
              Sin reseñas
            </span>
          </p>
        </div>
      </div>
    </div>
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
