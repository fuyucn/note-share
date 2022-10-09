<script setup>
import { useEditor } from '@/composables/useEditor'
const editorRef = ref()

const editor = ref()
const { createEditor } = useEditor()

onMounted(() => {
  editor.value = createEditor({ editorDom: editorRef })
})
</script>

<template>
  <div id="editor" ref="editorRef" class="w-full h-full" />
</template>
