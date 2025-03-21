<script setup lang="ts">
const { data, error, status } = await useFetch('/api/visits')
</script>

<template>
  <p v-if="status === 'pending'">Lade Besucherzahl…</p>
  <p v-else-if="error">Fehler: {{ error.message }}</p>
  <p v-else>Unique Visitors: {{ data.visits }}</p>
</template>

<style lang="css" scoped>
p {
  font-size: 0.5em;
}
</style>
