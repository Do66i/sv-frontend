<template>
  <section class="widget-card metric-widget">
    <div class="widget-title">
      <div class="title-left">
        <span class="emoji">📈</span>
        <h4>주요 지표</h4>
      </div>
    </div>
    <div class="data-list">
      <div v-for="metric in metrics" :key="metric.label" class="data-item">
        <div class="label-group">
          <span class="label">{{ metric.label }}</span>
          <span class="market-status">LIVE</span>
        </div>
        <div class="value-group">
          <span class="price">{{ metric.price }}</span>
          <span class="change" :class="metric.status">{{ metric.change }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 설명: status 값은 CSS 클래스명과 일치해야 함 (up, down)
const metrics = [
  { label: 'S&P 500', price: '5,123.42', change: '+0.45%', status: 'up' },
  { label: '나스닥 100', price: '18,210.15', change: '-0.12%', status: 'down' },
  { label: '원/달러 환율', price: '1,342.50', change: '0.00%', status: '' },
];
</script>
