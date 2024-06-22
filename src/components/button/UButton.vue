<template>
  <button :type="props.type">
    {{props.label}}
  </button>
</template>

<script setup lang="ts">
import {ButtonHTMLAttributes} from "vue";

interface Props {
  type?: ButtonHTMLAttributes['type'];
  label: string
}

const props = withDefaults(defineProps<Props>(), {type: 'button', label: 'Label'});
</script>

<style scoped>  
</style>
