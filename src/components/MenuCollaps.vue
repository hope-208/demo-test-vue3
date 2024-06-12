<template>
 <el-menu default-active="3" class="menu-vertical" :background-color="bgColorMenu" :active-text-color="activeTextColor"
  :text-color="menuTextColor" router>
  <el-menu-item class="menu__item-logo" index="1" route="/">
   <template #title>
    <el-image class="menu__logo" src="./public/logo.svg" fit="contain" />
   </template>
  </el-menu-item>

  <el-menu-item v-for="(item, key) in menuItems" :key="key" class="menu__item" :index="item.idx"
   :route="item.routePath">
   <template #title>
    <icon :name="item.iconName" />
    <el-text class="navigation">{{ item.title }}</el-text>
   </template>
  </el-menu-item>
 </el-menu>
</template>

<script>
import Icon from '@/components/CustomIcon.vue'

export default {
 name: 'MenuCollaps',
 components: { Icon },
 data() {
  return {
   bgColorMenu: 'var(--el-color-primary-dark)',
   activeTextColor: 'var(--el-color-text-white)',
   menuTextColor: 'var(--el-color-text-white-45)',
   menuItems: [
    {
     idx: '2',
     title: 'Profile',
     routePath: '/profile',
     iconName: 'user'
    },
    {
     idx: '3',
     title: 'Vechicles',
     routePath: '/vechicles',
     iconName: 'rim'
    },
    {
     idx: '4',
     title: 'Setting',
     routePath: '/setting',
     iconName: 'settings'
    }
   ]
  }
 }
}
</script>
