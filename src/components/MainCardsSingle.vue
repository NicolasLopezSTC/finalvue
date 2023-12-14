<script setup>
  
  

  const selectCard = () => {
    console.log(`${props.monster.name} selected`)
  }

  const props = defineProps({
    monster: {
      type: Object,
      required: true,
      default: () => {
        return {
          createdAt: '2022-01-01',
          monsterId: '123',
          monsterName: 'Beholder',
          monsterDesc: 'Really Cool desc',
          updatedAt: '2022-01-01',
        }
      },
    },
  })

  
</script>

<template>
  <div class="card" @click="selectCard">
    <div class="card-image">
      
    </div>
    <div class="card-details">
      <p class="card-details-name">{{ props.monster.name }}</p>
      <p class="card-details-quote">"{{ props.monster.quote }}"</p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
  .card {
    @apply cursor-pointer overflow-hidden rounded-md bg-slate-100 p-8 shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-slate-900;
    &-image {
      img {
        @apply mx-auto rounded-full object-contain;
      }
    }
    &-details {
      @apply flex flex-col gap-2  pt-6 text-center;
      &-name {
        @apply text-3xl font-thin  tracking-wider text-slate-800;
      }
      &-job {
        @apply -mt-2 text-xs font-bold text-yellow-700;
      }
      &-quote {
        @apply pt-4 text-lg italic text-slate-800;
      }
    }
  }
</style>

