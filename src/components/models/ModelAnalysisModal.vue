<template>
    <n-modal v-model:show="props.opened" :mask-closable="false">
        <n-card style="width: 600px" title="Анализ модели" :bordered="false" size="medium" role="dialog" closable
            @close="emit('close')" aria-modal="true">
            <ModelAnalysisContent :model="model" />
        </n-card>
    </n-modal>
</template>

<script setup lang="ts">
// @ts-ignore
import type { IModel } from "@/utils/types/uploadingTypes";
// @ts-ignore
import ModelAnalysisContent from './ModelAnalysisContent.vue'
import { ref, watch } from "vue"

const props = defineProps<{
    opened: boolean
    model: IModel
}>()

const emit = defineEmits<{
    (e: "close"): void
}>()

</script>

<style scoped></style>
