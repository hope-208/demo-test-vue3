<template>
 <el-card class="auto-card" body-class="auto-card__body" shadow="hover">
  <el-row class="auto-card__img-container">
   <el-row style="margin: 0 auto;">
    <el-image :src="carItem.photo" alt="Car's photo." fit="contain" class="auto-card__img" lazy loading="lazy">
     <template #error>
      <img src="../assets/image/mersedes.png" />
     </template>
    </el-image>
   </el-row>
   <el-button class="btn btn-text-2 auto-card__btn-more">
    <template #icon>
     <icon name="more_horizontal" />
    </template>
   </el-button>
  </el-row>

  <el-text tag="h2" class="auto-card__title">Mercedes-Benz C-Class</el-text>
  <el-text class="auto-card__desc">{{ carItem.vin }}</el-text>

  <template #footer>
   <el-tag class="auto-card__status" v-if="carItem.angles_count < 30">
    <template #default>
     {{ carItem.angles_count }}/30
    </template>
   </el-tag>

   <el-tag type="success" class="auto-card__status" v-else>
    <template #default>
     <icon name="check" class="auto-card__status-icon" />{{ carItem.angles_count }}/30
    </template>
   </el-tag>

   <el-text>3 days left</el-text>
  </template>
 </el-card>
</template>

<script>
import Icon from '@/components/CustomIcon.vue'

export default {
 name: 'AutoCard',
 components: { Icon },
 props: ['itemData'],
 data() {
  return {
   carItem: {
    vin: this.itemData.vin || 'WDB 1400321A333419',
    photo: this.itemData.photo.url || '../assets/image/mersedes.png',
    angles_count: this.itemData.angles_count
   }
  }
 }
}

</script>