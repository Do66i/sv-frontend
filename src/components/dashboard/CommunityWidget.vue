<template>
  <section class="widget-card community-widget">
    <div class="widget-title">
      <div class="title-left">
        <span class="emoji">💬</span>
        <h4>커뮤니티 핫픽</h4>
      </div>
      <router-link to="/community" class="more-link">더 많은 게시글 보기</router-link>
    </div>

    <div class="post-grid">
      <router-link
        v-for="post in hotPosts"
        :key="post.id"
        to="/community"
        class="post-card"
      >
        <div class="post-thumb">
          <img :src="`https://picsum.photos/seed/${post.id + 10}/400/250`" alt="썸네일" />
          <div class="post-overlay">
            <span class="category-tag">{{ post.category }}</span>
          </div>
        </div>

        <div class="post-content">
          <h5 class="post-title">{{ post.title }}</h5>

          <div class="post-meta">
            <div class="author-info">
              <img :src="`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author}`" class="avatar" />
              <span class="author">{{ post.author }}</span>
            </div>
            <div class="stats">
              <span class="stat">❤️ {{ post.likes }}</span>
              <span class="stat">💬 {{ post.comments }}</span>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const hotPosts = ref([
  { id: 1, title: '엔비디아 지금 사도 될까요? 전고점 돌파하나', likes: 24, comments: 12, author: 'Doto', category: '미국주식' },
  { id: 2, title: 'ISA 계좌 3년 만기 후기 공유합니다 (절세 꿀팁)', likes: 56, comments: 45, author: 'InvestorA', category: '절세전략' },
  { id: 4, title: '배당주 포트폴리오 1억 달성! 월 배당금 현황', likes: 128, comments: 89, author: 'RichPapa', category: '배당주' },
]);
</script>
