<template>
    <n-modal v-model:show="props.opened" :mask-closable="false">
        <n-card style="width: 450px" title="Создание набора данных"
            :bordered="false" size="medium" role="dialog" closable @close="emit('close')" aria-modal="true">
            <n-space vertical :size="16">
                <div>
                    <label>
                        <n-text strong>Диапазон</n-text>
                        <n-date-picker v-model:formatted-value="date" type="daterange" clearable
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
import { ref, watch } from "vue"

const props = defineProps<{
    opened: boolean
}>()

const emit = defineEmits<{
    (e: "close"): void
}>()

// const showModal = ref<boolean>(true)
const date = ref<[number, number] | null>(null)

const currentTags = ref([])

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
