<template>
  <section class="widget-card promo-banner premium-locked">
    <div class="skeleton-container">
      <div class="sk-row sk-title"></div>
      <div class="sk-grid">
        <div class="sk-card"></div>
        <div class="sk-card"></div>
        <div class="sk-card"></div>
      </div>
    </div>

    <div class="lock-shield">
      <div class="lock-inner">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 17V15M7 10H17M17 10C18.1046 10 19 10.8954 19 12V18C19 19.1046 18.1046 20 17 20H7C5.89543 20 5 19.1046 5 18V12C5 10.8954 5.89543 10 7 10M17 10V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>
    </div>

    <div class="promo-content">
      <div class="premium-badge">PRIVATE ACCESS</div>
      <h4>오직 귀하만을 위한<br>인텔리전스 허브가 준비되었습니다</h4>
      <p class="promo-desc">
        이곳에서 제공되는 모든 데이터와 실시간 분석 리포트는<br>
        로그인 후 정식 회원에게만 온전히 공개됩니다.
      </p>

      <button class="exclusive-btn" @click="$emit('login')">
        <span class="btn-text">로그인</span>
      </button>
    </div>
  </section>
</template>
