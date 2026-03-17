<template>
  <div class="board-layout">
    <header class="board-header">
      <div class="title-area">
        <h2>미국 주식 & <span>ISA</span></h2>
        <p>성공적인 투자를 위한 정보 공유 커뮤니티</p>
      </div>
      <button class="write-btn">새 글 쓰기</button>
    </header>

    <div v-if="boards.length === 0" class="empty-state">
      게시글이 없습니다. 첫 글을 작성해 보세요!
    </div>

    <div v-else class="board-grid">
      <BoardItem
        v-for="board in boards"
        :key="board.id"
        :board="board"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import BoardItem from '@/components/board/Item.vue'; // << 수정: 컴포넌트 임포트 추가
import { mockBoards } from '@/api/mockData';

const boards = ref<any[]>([]);

// 만약 페이징 기능이 아직 없다면 boards를 직접 사용하도록 수정하거나,
// 아래처럼 computed로 paginatedBoards를 정의해줘야 해.
const fetchBoards = async () => {
  boards.value = mockBoards; // << 수정: 데이터 할당 주석 해제
};

onMounted(() => {
  fetchBoards();
});
</script>
