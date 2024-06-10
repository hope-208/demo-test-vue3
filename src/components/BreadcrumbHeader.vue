<template>
  <!-- <el-page-header>
    <template #content>
      <span class="text-large font-600 mr-3">{{ $route.meta.title }}</span>
    </template>
</el-page-header> -->
  <el-container>
    <el-text tag="h1" class="title-h1">{{ $route.meta.title }}</el-text>
    <el-text v-if="$route.meta.title == 'Vechicles'" tag="span" class="header-badge">

      <el-text class="text-regular header-badge__text">256</el-text>
    </el-text>
  </el-container>
</template>

<script>
export default {
  name: 'BreadcrumbHeader',
  // mounted() {

  //   console.log('%c%s', 'color: #ff0000', this.$route.meta.title)
  // },
  // watch: {
  //   $route(route) {

  //     console.log('%c%s', 'color: #00e600', route)
  //     this.title = route.meta.title
  //     // if you go to the redirect page, do not update the breadcrumbs
  //     // if (route.path.startsWith('/redirect/')) {
  //     //   return
  //     // }
  //     // this.getBreadcrumb()
  //   }
  // },
  data() {
    return {
      // title: this.$route.meta.title
    }
  }
}
</script>