<script setup>

</script>

<template>
  <pv-select-button
      v-model="$i18n.locale"
      :options="$i18n.availableLocales"
      aria-label="Language switcher"/>
</template>

<style scoped>

</style>