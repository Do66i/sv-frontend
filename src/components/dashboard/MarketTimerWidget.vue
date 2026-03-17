<template>
  <section class="widget-card market-timer-widget">
    <div class="widget-title">
      <div class="title-left">
        <span class="emoji">⏱️</span>
        <h4>거래소 시계탑</h4>
      </div>
    </div>

    <div class="market-status-container">
      <div class="market-box" :class="krStatus.isOpen ? 'open' : 'closed'">
        <div class="market-header">
          <div class="market-name">
            <span class="flag">🇰🇷</span>
            <strong>한국 시장</strong>
          </div>
          <div class="status-tag">{{ krStatus.isOpen ? '● 영업 중' : '○ 휴장' }}</div>
        </div>

        <div class="main-display">
          <div class="info-column">
            <p class="label">현재 시간</p>
            <p class="time">{{ currentTime }}</p>
          </div>
          <div class="divider"></div>
          <div class="info-column">
            <p class="label">{{ krStatus.isOpen ? '장 마감까지' : '장 오픈까지' }}</p>
            <p class="countdown">{{ krStatus.countdown }}</p>
          </div>
        </div>

        <div class="progress-container">
          <div class="progress-bar" :style="{ width: krStatus.progress + '%' }"></div>
        </div>
      </div>

      <div class="market-box" :class="usStatus.isOpen ? 'open' : 'closed'">
        <div class="market-header">
          <div class="market-name">
            <span class="flag">🇺🇸</span>
            <strong>미국 시장</strong>
          </div>
          <div class="status-tag">{{ usStatus.isOpen ? '● 영업 중' : '○ 휴장' }}</div>
        </div>

        <div class="main-display">
          <div class="info-column">
            <p class="label">현지 시간</p>
            <p class="time">{{ usTime }}</p>
          </div>
          <div class="divider"></div>
          <div class="info-column">
            <p class="label">{{ usStatus.isOpen ? '장 마감까지' : '장 오픈까지' }}</p>
            <p class="countdown">{{ usStatus.countdown }}</p>
          </div>
        </div>

        <div class="progress-container">
          <div class="progress-bar" :style="{ width: usStatus.progress + '%' }"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import dayjs from 'dayjs';

// 시간 및 상태 관리를 위한 반응형 변수
const currentTime = ref('');
const usTime = ref('');
const isDummyToggle = ref(true); // 10초마다 바뀔 스위치

const krStatus = ref({ isOpen: true, countdown: '01시간 20분 05초', progress: 85 });
const usStatus = ref({ isOpen: false, countdown: '05시간 40분 12초', progress: 0 });

const updateData = () => {
  const now = dayjs();
  currentTime.value = now.format('HH:mm:ss');
  usTime.value = now.subtract(13, 'hour').format('HH:mm:ss'); // 대략적인 미국 시간 더미

  // 10초마다 상태 변경 (초 단위를 10으로 나눈 나머지가 0일 때 토글)
  if (now.second() % 10 === 0) {
    isDummyToggle.value = !isDummyToggle.value;
  }

  if (isDummyToggle.value) {
    krStatus.value = { isOpen: true, countdown: '02시간 15분 30초', progress: 70 };
    usStatus.value = { isOpen: false, countdown: '08시간 45분 10초', progress: 0 };
  } else {
    krStatus.value = { isOpen: false, countdown: '15시간 10분 05초', progress: 0 };
    usStatus.value = { isOpen: true, countdown: '04시간 20분 55초', progress: 45 };
  }
};

let timer: any = null;
onMounted(() => {
  updateData();
  timer = setInterval(updateData, 1000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>
