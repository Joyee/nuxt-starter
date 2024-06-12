import Antd, { message } from 'ant-design-vue';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(Antd);

  return {
    provide: {
      message,
    },
  };
});
