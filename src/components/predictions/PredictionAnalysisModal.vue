<template>
    <n-modal v-model:show="props.opened" :mask-closable="false">
        <n-card style="width: 900px" title="Анализ прогноза" :bordered="false" size="medium" role="dialog" closable
            @close="emit('close')" aria-modal="true">
            <n-grid x-gap="24" y-gap="16" :cols="2">
                <n-gi>
                    <n-h5 style="margin: 0; text-align: center; color: #bcbcbc">Модель</n-h5>
                </n-gi>
                <n-gi>
                    <n-h5 style="margin: 0; text-align: center; color: #bcbcbc">Прогноз</n-h5>
                </n-gi>
                <n-gi v-if="!!model">
                    <n-text strong style="margin: 0">Количество кластеров: {{ model.clasters_count }}</n-text>
                </n-gi>
                <n-gi>
                    <n-text strong style="margin: 0">Количество кластеров: {{ prediction.clasters_count }}</n-text>
                </n-gi>
                <n-gi v-if="!!model">
                    <n-text strong>Ассоциации кластеров:</n-text>
                    <n-data-table style="width: 100%; margin-top: 8px" size="small" :columns="columns"
                        :data="model.cluster_associations" :pagination="false" />
                </n-gi>
                <n-gi>
                    <n-text strong>Ассоциации кластеров:</n-text>
                    <n-data-table style="width: 100%; margin-top: 8px" size="small" :columns="columns"
                        :data="prediction.cluster_associations" :pagination="false" />
                </n-gi>
                <n-gi v-if="!!model">
                    <n-text strong>Кластеры:</n-text>
                    <img style="margin-top: 8px; width: 100%" width="100%" :src="model.cluster_chart" />
                </n-gi>
                <n-gi>
                    <n-text strong>Кластеры:</n-text>
                    <img style="margin-top: 8px; width: 100%" :src="prediction.cluster_chart" />
                </n-gi>
            </n-grid>

            <n-divider />

            <n-h5>Соответствие кластеров:</n-h5>
            <n-grid x-gap="20" :cols="2">
                <n-gi span="1">
                    <img :src="prediction.matrix_src" style="width: 100%"/>
                </n-gi>
                <n-gi span="1" style="white-space: pre-line;">
                    {{ prediction.description }}
                </n-gi>
            </n-grid>

            <template #action>
                <n-space justify="end">
                    <n-space>
                        <n-button @click="emit('close')">Скачать</n-button>
                    </n-space>
                </n-space>
            </template>
        </n-card>
    </n-modal>
</template>

<script setup lang="ts">
// @ts-ignore
import type { IPrediction, IModel } from "@/utils/types/uploadingTypes";
// @ts-ignore
import ModelAnalysisContent from '../models/ModelAnalysisContent.vue'
import { ref, watch } from "vue"
// @ts-ignore
import { getMockModelsData } from "@/services/mockData"

const props = defineProps<{
    opened: boolean
    prediction: IPrediction
}>()

const models: IModel[] = getMockModelsData()
const model = ref<IModel | null>(models.find(model => model.id === props.prediction.modelId) || null)

const emit = defineEmits<{
    (e: "close"): void
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


watch(
    () => props.prediction,
    (newval) => {
        model.value = models.find(model => model.id === newval.modelId) || null
    }
)

</script>

<style scoped></style>
