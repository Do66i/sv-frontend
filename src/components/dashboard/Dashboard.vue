<template>
  <div class="dashboard-container">
    <IntelligenceBriefing/>

    <div class="dashboard-grid">
      <MetricWidget/>
      <TrendWidget :trends="trends"/>
      <WeatherWidget/>
      <CommunityWidget/>
      <PromoBanner v-if="!isLoggedIn" @login="handleLogin"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import IntelligenceBriefing from './IntelligenceBriefing.vue';
import MetricWidget from './MetricWidget.vue';
import TrendWidget from './TrendWidget.vue';
import WeatherWidget from './WeatherWidget.vue';
import PromoBanner from './PromoBanner.vue';
import CommunityWidget from "@/components/dashboard/CommunityWidget.vue";

const trends = ref(['ISA 계좌 한도', '엔비디아 주가', '미국 금리 인하', '비트코인 ETF']);
const isLoggedIn = ref(false);

const handleLogin = () => {
  console.log('로그인 페이지로 이동하거나 모달을 띄웁니다.');
};
</script>
