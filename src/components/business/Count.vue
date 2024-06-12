<script setup lang="ts">
import { useCounter } from '~/composables/business'

const counter = useCounter()
</script>

<template>
  <div>Count组件内容：{{ counter }}</div>
</template>
