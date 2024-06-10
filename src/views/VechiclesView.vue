<template>
 <div class="panel-top">
  <search-panel :placeholderSearch="placeholderSearchInput" style="max-width: 354px;" />

  <div class="view-page">
   <el-text tag="p" class="view-page__desc text-body">Select vehicles per page:</el-text>
   <el-select v-model="selectViewPage" class="view-page__select text-body">
    <template #prefix>
     <icon name="chevron_down" class="view-page__select_arrow" />
    </template>
    <el-option v-for="item in options" :key="item.value" :label="item.value" :value="item.value" />
   </el-select>
  </div>

  <el-button class="btn-primary btn btn-text-2 view-page__btn-add" type="primary">
   <template #icon>
    <icon name="plus" class="view-page__btn-add_icon" />
   </template>
   Add Vechicle


  </el-button>
 </div>
</template>

<script>
import SearchPanel from '@/components/SearchPanel.vue'
import Icon from '@/components/CustomIcon.vue'

export default {
 name: 'VechiclesView',
 components: {
  SearchPanel,
  Icon
 },
 data() {
  return {
   placeholderSearchInput: 'Search VIN',
   selectViewPage: 9,
   options: [
    {
     value: 4
    },
    {
     value: 6
    },
    {
     value: 9
    },
    {
     value: 12
    }
   ]
  }
 }
}
</script>