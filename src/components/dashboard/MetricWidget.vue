<template>
  <section class="widget-card">
    <div class="widget-title">
      <span class="emoji">📈</span>
      <h4>주요 지표</h4>
    </div>
    <div class="data-list">
      <div v-for="metric in metrics" :key="metric.label" class="data-item">
        <span class="label">{{ metric.label }}</span>
        <span class="value" :class="metric.status">{{ metric.value }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 나중에 Props로 데이터를 받으면 더 좋아!
const metrics = [
  { label: 'S&P 500', value: '5,123.42 (+0.45%)', status: 'up' },
  { label: '나스닥 100', value: '18,210.15 (-0.12%)', status: 'down' },
  { label: '원/달러 환율', value: '1,342.50', status: '' },
];
</script>

<script setup lang="ts">

</script>

<style scoped lang="scss">

</style>
