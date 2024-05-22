<template>
    <n-menu :options="menuOptions" :indent="12" @update:value="handleUpdateValue" />
</template>

<script lang="ts">
import { defineComponent, h, type Component } from "vue"
import { NIcon, useMessage, NEllipsis } from "naive-ui"
import type { MenuOption } from "naive-ui"
import SiderItem from "./SiderItem.vue"
import {
    SimCardDownloadOutlined as CardDownload,
    TextSnippetOutlined as TextSnippet,
    AccountBoxOutlined as AccountBox,
    PeopleOutlineFilled as PeopleOutline,
    ClassOutlined,
    AccessTimeOutlined as AccessTime,
    CreateNewFolderOutlined as CreateNew,
    AnalyticsOutlined,
    AdminPanelSettingsOutlined as AdminPane,
    SettingsOutlined,
    GroupAddOutlined as GroupAdd,
} from "@vicons/material"

function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
    {
        label: () =>
            h(SiderItem, {
                to: "/docs",
                title: "Документы",
            }),
        key: "docs",
        icon: renderIcon(TextSnippet),
    },
    {
        label: () =>
            h(SiderItem, {
                to: "/datasets",
                title: "Наборы данных",
            }),
        key: "datasets",
        icon: renderIcon(AccountBox),
    },
    {
        label: () =>
            h(SiderItem, {
                to: "models",
                title: "Модели",
            }),
        key: "models",
        icon: renderIcon(PeopleOutline),
    },
    {
        label: () =>
            h(SiderItem, {
                to: "/predictions",
                title: "Прогнозы",
            }),
        key: "predictions",
        icon: renderIcon(ClassOutlined),
    },
    {
        label: () =>
            h(SiderItem, {
                to: "/settings",
                title: "Настройки",
            }),
        key: "settings",
        icon: renderIcon(SettingsOutlined),
    },

]

export default defineComponent({
    setup() {
        // TODO удалить ненужное (пока что оставлено в качестве примера)
        const message = useMessage()
        return {
            menuOptions,
            handleUpdateValue(key: string, item: MenuOption) {
                // message.info('[onUpdate:value]: ' + JSON.stringify(key))
                // message.info('[onUpdate:value]: ' + JSON.stringify(item))
            },
        }
    },
})
</script>

<style scoped></style>
