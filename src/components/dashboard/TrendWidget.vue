<template>
  <section
    class="widget-card trend-widget"
    @mouseenter="pauseTimer"
    @mouseleave="resumeTimer"
  >
    <div class="widget-title">
      <div class="title-left">
        <span class="emoji">🔥</span>
        <h4>실시간 트렌드</h4>
      </div>
      <span class="update-time">{{ lastUpdateTime }} 기준</span>
    </div>

    <nav class="trend-tabs">
      <button
        v-for="(tab, key) in trendData"
        :key="key"
        :class="['tab-item', { active: currentTab === key }]"
        @click="setTab(key)"
      >
        {{ tab.label }}
      </button>
    </nav>

    <div class="trend-list-container">
      <TransitionGroup name="flip-list" tag="div" class="trend-list">
        <div
          v-for="(item, index) in trendData[currentTab].list"
          :key="item"
          class="trend-item"
          :style="{ '--delay': `${(Math.random() * 3.0).toFixed(2)}s` }"
        >
          <div class="trend-main">
            <span class="rank">{{ index + 1 }}</span>
            <span class="keyword">{{ item }}</span>
          </div>
        </div>
      </TransitionGroup>
    </div>

    <div class="trend-footer-info">
      <p class="footer-label">지금 뜨는 테마 🚀</p>
      <div class="theme-tags">
        <span class="theme-tag">#초전도체</span>
        <span class="theme-tag">#온디바이스AI</span>
        <span class="theme-tag">#저PBR</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue';
import dayjs from 'dayjs';

const trendData = {
  daily: {label: '평일', list: ['엔비디아 주가', 'ISA 계좌 한도', '미국 금리 인하', '비트코인 ETF', '삼성전자 실적']},
  weekend: {label: '주말', list: ['주말 나들이 명소', '벚꽃 개화 시기', '캠핑장 예약', '넷플릭스 신작', '전시회 추천']},
  weekly: {label: '금주', list: ['반도체 시장 전망', 'AI 테마주 분석', '수도권 청약 일정', '연말정산 미리보기', '환율 변동 추이']},
  monthly: {label: '금월', list: ['2026 경제 지표', '배당주 포트폴리오', '노후 자금 준비', '부동산 정책 변화', '절세 꿀팁']}
};

type TabKey = keyof typeof trendData;
const currentTab = ref<TabKey>('daily');
const lastUpdateTime = ref(dayjs().format('HH:mm'));
let timer: any = null;

const startTimer = () => {
  if (timer) clearInterval(timer);
  // [수정] 10초(10000ms)로 변경하여 아주 천천히 넘어가게 함
  timer = setInterval(nextTab, 10000);
};

const pauseTimer = () => {
  if (timer) clearInterval(timer);
};
const resumeTimer = () => startTimer();

const setTab = (key: TabKey) => {
  currentTab.value = key;
  lastUpdateTime.value = dayjs().format('HH:mm');
  startTimer();
};

const nextTab = () => {
  const tabs: TabKey[] = ['daily', 'weekend', 'weekly', 'monthly'];
  const currentIndex = tabs.indexOf(currentTab.value);
  currentTab.value = tabs[(currentIndex + 1) % tabs.length];
};

onMounted(() => startTimer());
onUnmounted(() => pauseTimer());
</script>
