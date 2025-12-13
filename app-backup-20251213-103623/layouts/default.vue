<script setup lang="ts">
import appFooter from './footer.vue';
import appHeader from './header.vue';
</script>

<template>
  <div>
    <!-- Header OUTSIDE overflow wrapper -->
    <appHeader />
    
    <!-- Main content WITH overflow wrapper -->
    <div class="overflow-x-hidden ">
      <main class="min-h-screen">
        <slot />
      </main>
      <appFooter />
    </div>
  </div>
</template>