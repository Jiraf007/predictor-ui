<template>
    <n-space vertical :size="16">
        <n-text strong style="margin: 0">Количество кластеров: {{ props.model.clasters_count }}</n-text>
        <div>
            <n-text strong>Ассоциации кластеров:</n-text>
            <n-data-table style="max-width: 400px; margin-top: 8px" size="small" :columns="columns"
                :data="props.model.cluster_associations" :pagination="false" />
        </div>
        <div>
            <n-text strong>Кластеры:</n-text>
            <img style="margin-top: 8px; width: 100%" width="100%" :src="props.model.cluster_chart" />
        </div>
    </n-space>
</template>

<script setup lang="ts">
// @ts-ignore
import type { IModel, IPrediction } from "@/utils/types/uploadingTypes";
import { ref, watch } from "vue"

const props = defineProps<{
    model: IModel | IPrediction
}>()

const columns = [
    {
        title: "Класс",
        key: "name",
        width: '50%'
    },
    {
        title: "Процент соответствия",
        key: "percent",
        align: 'center',
        width: '50%'
    },
]

</script>

<style scoped></style>
