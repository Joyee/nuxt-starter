<template>
  <NuxtLayout>
    <div class="fetch">
      <a-select v-model:value="value" :options="options" style="width: 200px" label-in-value
        @change="handleChange"></a-select>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { data: options } = await useAsyncData(
  "mountains",
  () => $fetch("https://yapi.3weijia.com/mock/1357/api/geography"),
  {
    pick: ["data"],
  }
)

const value = ref<Value>()
const handleChange = (value: Value) => {
  console.log(value)
}
</script>
