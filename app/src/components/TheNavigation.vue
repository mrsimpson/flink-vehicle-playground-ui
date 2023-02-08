<script setup lang="ts">
import type { MenuOption } from "naive-ui";
import { RouterLink, useRoute } from "vue-router";
import renderIcon from '@/lib/renderIcon'

import { AirplaneOutline as Logo, InformationCircleOutline as Intro } from "@vicons/ionicons5";

const route = useRoute()
const activeKey = ref<string | undefined>("")
watch(() => route.name, (name) => {activeKey.value = name?.toString()})

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'intro',
          }
        },
        { default: () => 'Einführung' }
      ),
    key: 'intro',
    icon: () => h(Intro)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'main',
          }
        },
        { default: () => 'Main' }
      ),
    key: 'main',
    icon: renderIcon(Logo)
  }
]
</script>


<template>
  <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
</template>