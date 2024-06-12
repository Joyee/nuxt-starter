<script setup lang="ts">
import Count from '~/components/business/Count.vue'
import { useCounter } from '~/composables/business'

const layout = ref('custom')
const counter = useCounter()
</script>

<template>
  <NuxtLayout :name="layout">
    <div class="home">
      <h1 class="mt-20 text-3xl">Assets/ Public</h1>
      <p class="text-base text-gray-600">
        Nuxt使用两个目录来处理像stylesheets, fonts 或 images这样的资产。
      </p>
      <ul class="text-base text-gray-600">
        <li>public/目录内容原样提供给服务器根目录。</li>
        <li>assets/目录按惯例包含你想要构建工具(Vite或webpack)处理的每个资产。</li>
      </ul>

      <ul class="home-ul">
        <li class="home-ul__li">
          <img class="home-ul__li--img" src="/nuxt3.svg" alt="" />
          <div class="home-ul__li--content">
            <h6 class="text-xl">Public 目录下</h6>
            <p class="text-gray-500">
              public/ 目录直接服务于服务器根目录。这些静态资产可在应用程序的已定义URL中公开使用。
              您可以从您的应用程序的代码或从浏览器通过根URL /获得public/目录中的文件。
            </p>
          </div>
        </li>
        <li class="home-ul__li">
          <img class="home-ul__li--img" src="~/assets/images/nuxt1.svg" alt="" />
          <div class="home-ul__li--content">
            <h6 class="text-xl">Assets 目录下</h6>
            <p class="text-gray-500">assets/ 目录用于添加构建工具将处理的网站资产。</p>
          </div>
        </li>
      </ul>

      <h1 class="mt-20 text-3xl">Components</h1>
      <ul>
        <li class="text-base text-gray-600">
          components/目录是您放置所有Vue组件的地方，然后可以在您的页面或其他组件中导入这些组件(了解更多)。
        </li>
        <li class="text-base text-gray-600">
          Nuxt自动导入你的components目录中的任何组件(以及你可能正在使用的任何模块注册的组件)。
        </li>
      </ul>

      <ul class="home-ul">
        <li class="home-ul__li">
          <LazyMyImg class="home-ul__li--img" />
          <div class="home-ul__li--content">
            <h6 class="text-xl">动态导入</h6>
            <p class="text-gray-500">
              要动态导入一个组件(也称为惰性加载组件)，则需要在组件名称前添加Lazy前缀。
            </p>
          </div>
        </li>
      </ul>

      <Count />
      <div class="blue">业务组件内容: {{ counter }}</div>
      <div class="my-2">
        <a-button class="mr-2" type="primary" @click="counter--">－</a-button>
        <a-button type="primary" @click="counter++">＋</a-button>
      </div>
      <div class="mb-10 text-sm text-gray-500">
        点击按钮，业务组件内容/Count组件内容会跟着一起改变
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="less" scoped>
.home {
  width: 76vw;
  margin: 0 auto;
  overflow: auto;

  .blue {
    color: @theme-color;
  }

  &-ul {
    display: flex;

    &__li {
      width: 30%;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      border: 1px solid #e5e7eb;

      &--img {
        width: 100%;
      }

      &--content {
        padding-top: 20px;

        h6 {
          margin: 0;
        }

        p {
          margin: 0;
          padding-top: 10px;
        }
      }
    }

    .home-ul__li+.home-ul__li {
      margin-left: 20px;
    }
  }
}
</style>