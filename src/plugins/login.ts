export default defineNuxtPlugin(useNuxtApp => {
  return {
    provide: {
      async login(fullPath?: string) {
        const { _route } = useNuxtApp;
        const runtimeConfig = useRuntimeConfig();

        const { loginUrl, locationOriginUrl } = runtimeConfig.public;

        fullPath = fullPath || _route?.fullPath;
        const uri = `${locationOriginUrl}${fullPath}`;
        const path = encodeURIComponent(uri);
        const redirectPath = `${loginUrl}/login?redirect_uri=${path}`;

        if (process.server) {
          await navigateTo(redirectPath, {
            external: true,
          });
        } else {
          window.location.href = redirectPath;
        }
      },
    },
  };
});
