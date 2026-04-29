<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <footer class="p-3 text-center" aria-label="Page footer">
    <p>{{ t('footer.text') }}</p>
  </footer>
</template>

<style scoped>

</style>