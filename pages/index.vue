<template>
  <div size-screen fccc font-thin>
    <div text-12 font-italic>
      {{ name }}
    </div>
    <div text="4 gray-3">
      v{{ version }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const { name, version } = usePackage()
</script>
