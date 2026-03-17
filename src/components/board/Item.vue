<template>
  <div class="board-card">
    <div class="thumbnail">
      <img :src="board.imageUrl || '/default-thumb.png'" alt="썸네일"/>
    </div>
    <div class="content">
      <h3 class="title">{{ board.title }}</h3>
      <div class="meta">
        <span class="author">{{ board.user?.username || '익명' }}</span>
        <span class="likes">❤️ {{ board.likes || 0 }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 부모로부터 게시글 데이터를 받아옴;
defineProps<{
  board: any;
}>();
</script>
