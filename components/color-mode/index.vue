<template>
  <div flex justify-end p-2>
    <div
      size-5 clickable-90
      :class="colorIcons[colorMode.preference as ColorMode]"
      @click="changeColorMode"
    />
  </div>
</template>

<script lang="ts" setup>
import { ColorMode } from '~/enums/color-mode'

const colorMode = useColorMode()

const colorIcons = {
  [ColorMode.System]: 'i-icon-park-outline-new-computer',
  [ColorMode.Light]: 'i-ic-outline-light-mode',
  [ColorMode.Dark]: 'i-ic-outline-dark-mode'
}

const colorList = Object.keys(colorIcons)

function changeColorMode() {
  const index = colorList.indexOf(colorMode.preference)
  const nextIndex = (index + 1) % colorList.length
  colorMode.preference = colorList[nextIndex] as ColorMode
}
</script>
