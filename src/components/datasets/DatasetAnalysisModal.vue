<template>
    <n-modal v-model:show="props.opened" :mask-closable="false">
        <n-card style="width: 700px" title="Анализ набора данных" :bordered="false" size="medium" role="dialog" closable
            @close="emit('close')" aria-modal="true">
            <!-- <n-space vertical :size="16">
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

            </n-space> -->

            <n-space vertical :size="16">
                <n-text strong style="margin: 0">Всего патентов: {{ props.dataset?.patents_count }}</n-text>
                <div>
                    <n-text strong>Распределение данных:</n-text>
                    <n-grid x-gap="20" :cols="3" style="margin-top: 8px">
                        <n-gi span='2'>
                            <img style="width: 100%" width="100%" :src="props.dataset?.diagram_src" />
                        </n-gi>
                        <n-gi>
                            <div v-for="item in props.dataset?.patents_distribution">
                                {{ item.name }}: {{ item.count }}
                            </div>
                        </n-gi>
                    </n-grid>
                </div>
            </n-space>
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
