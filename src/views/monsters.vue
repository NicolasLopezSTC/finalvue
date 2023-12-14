<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

import useAPI from '@/composables/useAPI';

const { fetchMonster, currentMonster } = useAPI()


const route = useRoute()

const monster = ref('')
onMounted(async () => {
  await fetchMonster(route.params.id)
  console.log(route.params.id)
})

onUnmounted(() => {
 currentMonster.value = null
})

</script>

<template>
  <main
    class="min-h-screen bg-gradient-to-b from-amber-900 to-yellow-300 font-poppins"
  >
    <div
      v-if="currentMonster"
      class="flex flex-col items-center justify-center gap-6"
    >
      <img class="p-8 h-64 w-64"
        :src="currentMonster.image"
        :alt="currentMonster.name"
      />
      <h1 class="text-white-800 text-6xl font-bold">
        {{ currentMonster.name }}
      </h1>
      
    </div>
  </main>
</template>