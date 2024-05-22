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


const options = [
    {
        label: "Анализ",
        key: "analysis",
    },
    {
        label: "Изменить",
        key: "edit",
    },
    {
        label: "Создать модель",
        key: "create-model",
    },
]
</script>
