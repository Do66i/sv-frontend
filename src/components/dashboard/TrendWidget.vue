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
          :style="{ '--delay': `${(index * 0.1).toFixed(2)}s` }"
        >
          <div class="trend-main">
            <span class="rank">{{ index + 1 }}</span>
            <span class="keyword">{{ item }}</span>
          </div>
          <span class="status-tag">HOT</span>
        </div>
      </TransitionGroup>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const trendData = {
  daily: { label: '평일', list: ['엔비디아 주가', 'ISA 계좌 한도', '미국 금리 인하', '비트코인 ETF', '삼성전자 실적'] },
  weekend: { label: '주말', list: ['주말 나들이 명소', '벚꽃 개화 시기', '캠핑장 예약', '넷플릭스 신작', '전시회 추천'] },
  weekly: { label: '금주', list: ['반도체 시장 전망', 'AI 테마주 분석', '수도권 청약 일정', '연말정산 미리보기', '환율 변동 추이'] },
  monthly: { label: '금월', list: ['2026 경제 지표', '배당주 포트폴리오', '노후 자금 준비', '부동산 정책 변화', '절세 꿀팁'] }
};

type TabKey = keyof typeof trendData;
const tabs: TabKey[] = ['daily', 'weekend', 'weekly', 'monthly'];
const currentTab = ref<TabKey>('daily');
let timer: any = null;

// 타이머 시작 함수
const startTimer = () => {
  if (timer) clearInterval(timer);
  timer = setInterval(nextTab, 3000);
};

// 타이머 정지 함수 (Hover 시 실행)
const pauseTimer = () => {
  if (timer) clearInterval(timer);
};

// 타이머 재개 함수 (Mouseleave 시 실행)
const resumeTimer = () => {
  startTimer();
};

const setTab = (key: TabKey) => {
  currentTab.value = key;
  startTimer(); // 탭 클릭 시 타이머 리셋
};

const nextTab = () => {
  const currentIndex = tabs.indexOf(currentTab.value);
  currentTab.value = tabs[(currentIndex + 1) % tabs.length];
};

const prevTab = () => {
  const currentIndex = tabs.indexOf(currentTab.value);
  currentTab.value = tabs[(currentIndex - 1 + tabs.length) % tabs.length];
};

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  pauseTimer();
});
</script>
