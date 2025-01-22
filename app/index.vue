<style lang="scss">
html,
body,
#__nuxt,
#nuxt-app {
  --uno: size-screen;
}
</style>

<template>
  <div id="nuxt-app">
    <NuxtRouteAnnouncer />

    <div pa left-0 top-0 w-full>
      <ColorMode />
    </div>

    <NuxtPage />
  </div>
</template>
