<template>
  <section class="widget-card promo-banner">
    <div class="promo-content">
      <span class="emoji">🚀</span>
      <h4>나만의 투자 인사이트를 관리하세요</h4>
      <p>로그인하면 관심 종목 알림과 개인 메모 기능을 사용할 수 있습니다.</p>
      <button class="login-btn" @click="$emit('login')">
        로그인하고 시작하기
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
// 부모 컴포넌트에서 로그인 팝업을 띄울 수 있도록 이벤트를 보냄
defineEmits(['login']);
</script>

<style lang="scss" scoped>

</style>
