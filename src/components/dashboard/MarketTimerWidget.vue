<template>
  <section class="widget-card market-timer-widget">
    <div class="widget-title">
      <div class="title-left">
        <span class="emoji">⏱️</span>
        <h4>글로벌 마켓 클락</h4>
      </div>
    </div>

    <div class="market-status-container">
      <div
        v-for="market in markets"
        :key="market.id"
        :class="['market-box', market.isOpen ? 'open' : 'closed']"
      >
        <div class="market-header">
          <div class="market-name">
            <span class="flag">{{ market.flag }}</span>
            <strong>{{ market.name }}</strong>
          </div>
          <div class="status-tag">{{ market.isOpen ? '● 영업 중' : '○ 휴장' }}</div>
        </div>

        <div class="main-display">
          <div class="info-column">
            <p class="label">{{ market.id === 'kr' ? '현재 시간' : '현지 시간' }}</p>
            <p class="time">{{ market.time }}</p>
          </div>
          <div class="divider"></div>
          <div class="info-column">
            <p class="label">{{ market.isOpen ? '장 마감까지' : '장 오픈까지' }}</p>
            <p class="countdown">{{ market.countdown }}</p>
          </div>
        </div>

        <div class="progress-container">
          <div class="progress-bar" :style="{ width: market.progress + '%' }"></div>
        </div>
      </div>
    </div>

    <div class="market-guide-box">
      <p>💡 시장 현황에 따라 실시간으로 업데이트됩니다.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import dayjs from 'dayjs';

const isDummyToggle = ref(true);
const krData = ref({ time: '', isOpen: true, countdown: '02:15:30', progress: 75 });
const usData = ref({ time: '', isOpen: false, countdown: '08:45:10', progress: 0 });

// 템플릿에서 사용할 'markets' 변수 정의
const markets = computed(() => [
  { id: 'kr', name: '한국 시장', flag: '🇰🇷', ...krData.value },
  { id: 'us', name: '미국 시장', flag: '🇺🇸', ...usData.value }
]);

const updateData = () => {
  const now = dayjs();
  krData.value.time = now.format('HH:mm:ss');
  usData.value.time = now.subtract(13, 'hour').format('HH:mm:ss');

  if (now.second() % 10 === 0) isDummyToggle.value = !isDummyToggle.value;

  if (isDummyToggle.value) {
    krData.value.isOpen = true; krData.value.countdown = '02시간 15분 30초'; krData.value.progress = 70;
    usData.value.isOpen = false; usData.value.countdown = '08시간 45분 10초'; usData.value.progress = 0;
  } else {
    krData.value.isOpen = false; krData.value.countdown = '15시간 10분 05초'; krData.value.progress = 0;
    usData.value.isOpen = true; usData.value.countdown = '04시간 20분 55초'; usData.value.progress = 45;
  }
};

let timer: any = null;
onMounted(() => { updateData(); timer = setInterval(updateData, 1000); });
onUnmounted(() => { if (timer) clearInterval(timer); });
</script>
