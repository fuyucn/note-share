<script setup lang="ts">
import Editor from '@/components/Editor/index.vue'
const content = ref('')
</script>

<template>
  <div class="flex flex-col h-full">
    <div> new note</div>
    <ClientOnly>
      <Editor class="flex-1" />
    </ClientOnly>
  </div>
</template>
