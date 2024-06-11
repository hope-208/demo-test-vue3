<template>
 <div class="panel-top">

  <el-input v-model="searchValue" class="search text-body" :placeholder="placeholderSearchInput"
   style="max-width: 354px;" @change="updateSearchValue">
   <template #suffix>
    <icon name="zoom" class="search__icon" />
   </template>

  </el-input>

  <div class="view-page">
   <el-text tag="p" class="view-page__desc text-body">Select vehicles per page:</el-text>
   <el-select v-model="perPage" class="view-page__select text-body" disabled @change="updateSearchValue">
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

 <el-container class="cars-container" v-loading="loadingCars">
  <auto-card v-for="(item, idx) in carList" :key="idx" :itemData="item" />
 </el-container>

 <el-row class="pagination-container" v-if="allCars > 0">
  <el-text class="text-body page-control__info">Showing {{ perPage }} out of {{ allCars }} </el-text>

  <el-row class="page-control">
   <el-button class="btn-default btn btn-text-2 page-control__btn" :disabled="currentPage == 1" @click="decreaseCount">
    <template #icon>
     <icon name="chevron_left" class="pag__prew" />
    </template>
   </el-button>

   <el-input v-model="currentPage" class="text-regular page-control__page-info" minlength="1" :maxlength="lastPage"
    @change="getCars" />
   <el-text tag="span" class="page-control__span">of</el-text>
   <el-input v-model="lastPage" class="text-regular page-control__page-info" disabled />

   <el-button class="btn-default btn btn-text-2 page-control__btn" :disabled="currentPage == lastPage"
    @click="increaseCount">
    <template #icon>
     <icon name="chevron_right" class="pag__next" />
    </template>
   </el-button>
  </el-row>
 </el-row>

</template>

<script>
import { storeToRefs } from 'pinia'
import { useCarInfoStore } from '@/stores/CarInfo'
import Icon from '@/components/CustomIcon.vue'
import AutoCard from '@/components/AutoCard.vue'
import { Request } from '@/api/http'

export default {
 name: 'VechiclesView',
 components: {
  Icon,
  AutoCard
 },
 setup() {
  const storeCarInfoItems = useCarInfoStore()
  const { countCars } = storeToRefs(storeCarInfoItems)
  // const { openModal,  } = storeCarInfoItems
  return { countCars }
 },
 mounted() {
  let resp = this.getCars()
  this.carList = resp.data
 },
 data() {
  return {
   placeholderSearchInput: 'Search VIN',
   searchValue: '2323',
   currentPage: 1,
   perPage: 9,
   lastPage: 1,
   allCars: 1,
   loadingCars: false,
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
   ],
   carList: []
  }
 },
 methods: {
  async getCars() {
   this.loadingCars = true
   if (this.currentPage > this.lastPage) this.currentPage = this.lastPage
   if (this.currentPage < 1) this.currentPage = 1
   try {
    const params = {
     search: this.searchValue,
     per_page: this.perPage,
     page: this.currentPage
    }
    const { data } = await Request({
     url: '/cars-test',
     method: 'get',
     params
    })
    this.carList = data.data
    this.allCars = data.meta.total
    this.countCars = this.allCars
    this.lastPage = data.meta.last_page
    this.loadingCars = false
    return data
   } catch (error) {
    this.loadingCars = false
    console.log(error);
   }
  },
  updateSearchValue() {
   this.currentPage = 1
   this.getCars()
  },
  increaseCount() {
   if (this.currentPage < this.lastPage) {
    this.currentPage++
    this.getCars()
   }
  },
  decreaseCount() {
   if (this.currentPage !== 1) {
    this.currentPage--
    this.getCars()
   }
  }
 }
}
</script>