<script setup lang="ts">
import { CloseCircleOutlined } from '@ant-design/icons-vue'

const props = defineProps({
  error: Object,
})

const { error } = toRefs(props)
</script>

<template>
  <a-result status="error" :title="error?.statusCode || '500'"
    :sub-title="error?.message || error?.statusMessage || '服务器发生错误，请联系管理员'">
    <template #extra>
      <a-button key="console" type="primary">Go Console</a-button>
      <a-button key="buy">Buy Again</a-button>
    </template>
    <div v-html="error?.stack"></div>
  </a-result>
</template>

<style scoped>
.desc p {
  margin-bottom: 1em;
}
</style>