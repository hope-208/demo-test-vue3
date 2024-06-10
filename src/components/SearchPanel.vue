<template>
 <el-input v-model="searchValue" class="search text-body" :placeholder="placeholderSearch">
  <template #suffix>
   <icon name="zoom" class="search__icon" />
  </template>

 </el-input>
</template>

<script>
import Icon from '@/components/CustomIcon.vue'

export default {
 name: 'SearchPanel',
 components: { Icon },
 props: ['placeholderSearch'],
 data() {
  return {
   searchValue: ''
  }
 }
}
</script>