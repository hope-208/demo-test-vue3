<template>
 <el-row class="pagination-container">
  <el-text class="text-body page-control__info">Showing {{ pageSize }} out of {{ allPage }} </el-text>

  <el-row class="page-control">
   <el-button class="btn-default btn btn-text-2 page-control__btn">
    <template #icon>
     <icon name="chevron_left" class="pag__prew" />
    </template>
   </el-button>

   <el-input v-model="currentPage" class="text-regular page-control__page-info" />
   <el-text tag="span" class="page-control__span">of</el-text>
   <el-input v-model="lastPage" class="text-regular page-control__page-info" disabled />

   <el-button class="btn-default btn btn-text-2 page-control__btn">
    <template #icon>
     <icon name="chevron_right" class="pag__next" />
    </template>
   </el-button>
  </el-row>
 </el-row>
</template>

<script>
import Icon from '@/components/CustomIcon.vue'

export default {
 name: 'PaginationPanel',
 components: { Icon },
 data() {
  return {
   currentPage: 1,
   pageSize: 9,
   allPage: 256,
   lastPage: 28

  }
 },
 methods: {
  handleSizeChange(val) {
   console.log(`${val} items per page`)
  },
  handleCurrentChange(val) {
   console.log(`current page: ${val}`)
  }
 }
}

</script>