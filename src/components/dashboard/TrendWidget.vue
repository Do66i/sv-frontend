<template>
  <section class="widget-card">
    <div class="widget-title">
      <span class="emoji">🔥</span>
      <h4>실시간 인기 검색어</h4>
    </div>
    <div class="data-list">
      <div v-for="(trend, index) in trends" :key="index" class="data-item">
        <span class="label"><b style="color: #3b82f6; margin-right: 8px;">{{ index + 1 }}</b> {{ trend }}</span>
        <span class="value">NEW</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ trends: string[] }>(); // 부모(Dashboard)로부터 데이터를 받음
</script>

<script setup lang="ts">

</script>

<style scoped lang="scss">

</style>
