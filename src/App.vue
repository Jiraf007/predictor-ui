<template>
    <n-config-provider :theme="theme" :locale="ruRU" :date-locale="dateRuRU">
        <n-message-provider placement="bottom-left" :max="5">
            <n-layout class="container">
                <n-layout-header class="nav header" bordered>
                    <n-text tag="div" class="ui-logo" :depth="1">
                        <img height="32" src="/img/bmstu_logo.png">
                        <n-gradient-text :size="24" type="success">
                            PREDICTOR
                        </n-gradient-text>
                    </n-text>
                    <div style="flex-grow: 10"></div>
                    <n-divider vertical />
                    <n-button v-if="theme == null" secondary circle @click="theme = darkTheme">
                        <template #icon>
                            <n-icon><ModeNightOutlined /></n-icon>
                        </template>
                    </n-button>
                    <n-button v-else secondary circle @click="theme = null">
                        <template #icon>
                            <n-icon><WbSunnyOutlined /></n-icon>
                        </template>
                    </n-button>
                </n-layout-header>
                <n-layout position="absolute" style="top: 64px" has-sider>
                    <n-layout-sider :native-scrollbar="false" bordered>
                        <Menu></Menu>
                    </n-layout-sider>
                    <n-layout content-style="padding: 24px;" :native-scrollbar="false">
                        <RouterView />
                    </n-layout>
                </n-layout>
            </n-layout>
        </n-message-provider>
    </n-config-provider>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router"
import { ref } from "vue"
import { darkTheme } from "naive-ui"
import Menu from "./components/sider/Menu.vue"
import type { BuiltInGlobalTheme } from "naive-ui/es/themes/interface"
import { ModeNightOutlined, WbSunnyOutlined } from "@vicons/material"
import { ruRU, dateRuRU } from 'naive-ui'

const theme = ref<null | BuiltInGlobalTheme>(null)
</script>

<style scoped>
.container {
    height: 100vh;
}

.nav {
    display: flex;
    align-items: center;
    padding: 8px;
    height: var(--header-height);
    position: absolute;
    z-index: 10;
}

.ui-logo {
    display: flex;
    align-items: center;
    font-size: 18px;
}

.ui-logo>img {
    margin: 0 12px 0 8px;
    height: 32px;
    width: 32px;
}
</style>


