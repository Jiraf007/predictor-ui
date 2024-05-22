<template>
    <n-modal v-model:show="props.opened" :mask-closable="false">
        <n-card style="width: 450px" title="Редактирование набора данных" :bordered="false" size="medium" role="dialog"
            closable @close="emit('close')" aria-modal="true">
            <n-space vertical :size="16">
                <div>
                    <label>
                        <n-text strong>Диапазон</n-text>
                        <n-date-picker v-model:value="date" type="daterange" clearable
                            start-placeholder="Начало" end-placeholder="Конец" value-format="yyyy-MM-dd"
                            format="dd.MM.yyyy" />
                    </label>
                </div>
                <div>
                    <label>
                        <n-text strong>Классы</n-text>
                    </label>
                    <n-dynamic-tags v-model:value="currentTags" />
                </div>

            </n-space>

            <template #action>
                <n-space justify="end">
                    <n-space>
                        <n-button @click="emit('close')">Отменить</n-button>
                        <n-button @click="handleSave" type="success">Сохранить</n-button>
                    </n-space>
                </n-space>
            </template>
        </n-card>
    </n-modal>
</template>

<script setup lang="ts">
import type { IDataset } from "@/utils/types/uploadingTypes";
import { ref, watch } from "vue"

const props = defineProps<{
    dataset: IDataset | null
    opened: boolean
    create?: boolean
}>()

const emit = defineEmits<{
    (e: "close"): void
}>()


const parseRange = (rangeString: string | undefined) => {
    return rangeString 
    ? rangeString.split(' - ').map(dateString => dateString.split('.')).map(dateArray => new Date(+dateArray[2], +dateArray[1] - 1, +dateArray[0]).getTime())
    : null
}
const date = ref<number[] | null>(null)

const currentTags = ref<string[]>([])

watch(
    () => props.opened,
    async (newval) => {
        if (newval) {
            date.value = parseRange(props.dataset?.range)
            currentTags.value = props.dataset?.classes ? props.dataset?.classes.split(', ') : []
        }
    }
)

const handleSave = () => {
    // const data = {
    //     name: name.value,
    //     goal: goal.value,
    //     requirements: requirements.value,
    // }
    // console.log(JSON.stringify(data))
}
</script>

<style scoped></style>
