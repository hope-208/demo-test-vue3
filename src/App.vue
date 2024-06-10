<template>
  <el-container>
    <el-aside class="aside-menu">
      <menu-collaps />
    </el-aside>
    <el-container class="page">
      <header class="header">
        <breadcrumb-header />
        <nav-bar />
      </header>
      <main class="main">
        <router-view />
      </main>
      <footer></footer>
    </el-container>

  </el-container>
</template>

<script>
import MenuCollaps from '@/components/MenuCollaps.vue'
import BreadcrumbHeader from '@/components/BreadcrumbHeader.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  components: { MenuCollaps, BreadcrumbHeader, NavBar },
  data() {
    return {
    }
  }
}
</script>
