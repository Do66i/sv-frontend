<template>
  <section class="widget-card metric-widget">
    <div class="widget-title">
      <div class="title-left">
        <span class="emoji">📈</span>
        <h4>주요 지표</h4>
      </div>
    </div>

    <div class="metric-grid">
      <div v-for="metric in metrics" :key="metric.label" class="metric-box" :class="metric.status">
        <div class="box-header">
          <span class="label">{{ metric.label }}</span>
          <span class="status-dot">LIVE</span>
        </div>

        <div class="price-area">
          <span class="price">{{ metric.price }}</span>
          <span class="change-percent">{{ metric.status === 'up' ? '▲' : '▼' }} {{ metric.change }}</span>
        </div>

        <div class="comparison-area">
          <span class="comp-label">어제보다</span>
          <span class="diff-price">
            {{ metric.status === 'up' ? '+' : '-' }}{{ metric.diff }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const metrics = [
  { label: 'S&P 500', price: '5,123.42', change: '0.45%', diff: '22.84', status: 'up' },
  { label: '나스닥 100', price: '18,210.15', change: '0.12%', diff: '21.45', status: 'down' },
  { label: '원/달러 환율', price: '1,342.50', change: '0.05%', diff: '0.67', status: 'up' },
];
</script>
