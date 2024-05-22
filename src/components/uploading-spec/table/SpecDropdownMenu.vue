<template>
    <n-dropdown
        trigger="click"
        :options="options"
        :show-arrow="true"
        @select="(key: string) => emit('select', key)"
    >
        <n-button quaternary circle size="large">
            <template #icon>
                <n-icon>
                    <MoreHorizOutlined />
                </n-icon>
            </template>
        </n-button>
    </n-dropdown>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { MoreHorizOutlined } from "@vicons/material"

const props = defineProps<{
    id: string
}>()

const emit = defineEmits<{
    (e: "select", key: string): void
}>()

//TODO доработать options в зависимости от статуса
const options = [
    {
        label: "Построить структурную модель",
        key: "build-structure",
    },
    {
        label: "Открыть структурную модель",
        key: "open-structure",
    },
    {
        label: "Открыть документ",
        key: "open-task",
    },
    {
        label: "Скачать документ",
        key: "download-doc",
    },
    {
        label: "Удалить документ",
        key: "delete-doc",
    },
]
</script>
