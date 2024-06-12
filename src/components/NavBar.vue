<template>
 <el-container class="navbar">
  <el-button class="btn btn-default navbar__btn-add">
   <icon name="plus" class="navbar__btn-add_icon" />
  </el-button>

  <div class="user-info">
   <el-avatar class="user-info__avatar" src="./src/assets/image/Photo.png" fit="contain" />
   <el-text class="user-info__name text-medium-3">John Doe</el-text>
  </div>

  <el-dropdown class="lang">

   <span class="el-dropdown-link lang__text text-medium-3">
    <icon name="uk" class="lang__flag" />En
    <icon name="chevron_down" class="lang__arrow-down" />
   </span>
  </el-dropdown>

 </el-container>
</template>

<script>
import Icon from '@/components/CustomIcon.vue'

export default {
 name: 'NavBar',
 components: { Icon }
}

</script>