<template>
  <section class="widget-card community-widget">
    <div class="widget-title">
      <div class="title-left">
        <span class="emoji">💬</span>
        <h4>커뮤니티 핫픽</h4>
      </div>
      <router-link to="/community" class="more-link">전체보기 ></router-link>
    </div>

    <div class="post-grid">
      <router-link
        v-for="post in hotPosts"
        :key="post.id"
        to="/community"
        class="post-card"
      >
        <div class="post-thumb">
          <img :src="`https://picsum.photos/seed/${post.id}/300/200`" alt="썸네일" />
          <span class="likes-badge">❤️ {{ post.likes }}</span>
        </div>
        <div class="post-info">
          <span class="post-title">{{ post.title }}</span>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const hotPosts = ref([
  { id: 1, title: '엔비디아 지금 사도 될까요?', likes: 24 },
  { id: 2, title: 'ISA 계좌 3년 만기 후기 공유', likes: 56 },
  { id: 4, title: '배당주 포트폴리오 1억 달성!', likes: 128 },
]);
</script>
