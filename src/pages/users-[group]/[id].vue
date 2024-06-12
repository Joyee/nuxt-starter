<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    return /^\d+$/.test(route.params.id) // 表示从字符串的开始到结束，必须全部是数字字符
  }
})

const route = useRoute()
const router = useRouter()

const { id, group } = route.params
console.log(router.getRoutes())

const handleToHome = () => {
  router.push('/')
}
</script>

<template>
  <template>
    <ul class="text-base text-gray-600">
      <li>
        获取到的 group 是 <span class="text-green-500 text-xl">{{ group }}</span>
      </li>
      <li>
        获取到的 id 是 <span class="text-green-500 text-xl">{{ id }}</span>
      </li>
    </ul>
  </template>

</template>
