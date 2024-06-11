<template>
  <el-row class="not-found">
    <icon name="404" class="icon__not-found" />
  </el-row>
</template>

<script>
import Icon from '@/components/CustomIcon.vue'

export default {
  name: 'NotFound',
  components: { Icon }
}
</script>