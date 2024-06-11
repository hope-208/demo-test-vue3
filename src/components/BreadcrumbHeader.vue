<template>
  <!-- <el-page-header>
    <template #content>
      <span class="text-large font-600 mr-3">{{ $route.meta.title }}</span>
    </template>
</el-page-header> -->
  <el-container>
    <el-text tag="h1" class="title-h1">{{ $route.meta.title }}</el-text>
    <el-text v-if="$route.meta.title == 'Vechicles'" tag="span" class="header-badge">
      <el-text class="text-regular header-badge__text">{{ countCars }}</el-text>
    </el-text>
  </el-container>
</template>

<script>
import { storeToRefs } from 'pinia'
import { useCarInfoStore } from '@/stores/CarInfo'

export default {
  name: 'BreadcrumbHeader',
  setup() {
    const storeCarInfoItems = useCarInfoStore()
    const { countCars } = storeToRefs(storeCarInfoItems)
    // const { openModal,  } = storeCarInfoItems
    return { countCars }
  },
  data() {
    return {
    }
  }
}
</script>