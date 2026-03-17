<template>
  <div class="gemini-layout" :class="{ 'sidebar-collapsed': isCollapsed }">
    <aside class="side-panel">
      <div class="top-section">
        <button class="menu-btn" @click="toggleSidebar">☰</button>
      </div>

      <nav class="nav-list">
        <router-link
          v-for="item in menuItems"
          :key="item.id"
          :to="item.path"
          class="nav-item"
          active-class="active"
        >
          <span class="icon">{{ item.icon }}</span>
          <span v-if="!isCollapsed" class="text">{{ item.title }}</span>
        </router-link>
      </nav>
    </aside>

    <div class="main-container">
      <header class="top-bar">
        <div class="user-info">
          <span class="user-name">Gwon님</span>
          <div class="user-profile">G</div>
        </div>
      </header>

      <main class="content-view">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { menuItems } from '@/router/menu';

const isCollapsed = ref(false);

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>
