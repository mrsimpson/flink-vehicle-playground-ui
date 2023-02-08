<script setup lang="ts">
import { ref } from "vue";
import type { GlobalTheme, GlobalThemeOverrides } from "naive-ui";
import TheNavigation from "@/components/TheNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";

// const osThemeRef = useOsTheme()
//const theme = ref((osThemeRef.value === 'dark' ? darkTheme : null) as GlobalTheme | null)
const theme = ref(null as GlobalTheme | null);

const themeOverrides: GlobalThemeOverrides = {
  common: {
  },
  Card: {
  },
};

</script>

<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
      <n-layout>
        <n-layout-header>
          <TheNavigation />
        </n-layout-header>
        <n-layout-content>
          <n-message-provider>
            <n-space vertical>
              <n-card centered>
                <RouterView />
              </n-card>
            </n-space>
          </n-message-provider>
        </n-layout-content>
        <n-layout-footer>
          <TheFooter />
        </n-layout-footer>
      </n-layout>
  </n-config-provider>
</template>

<style scoped>
.n-layout {
  max-width: 1024px;
  margin: auto;
}

.n-layout-content {
  padding-bottom: 1rem;
}

.n-layout-footer.n-layout-footer--static-positioned {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>

<!-- Global styles -->
<style>
a {
  color: var(--primary-color);
  cursor: pointer;
}

p {
  margin-block-end: 0.5rem;
  margin-block-start: 0.5rem;
}
</style>
