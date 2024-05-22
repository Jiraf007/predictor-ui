<template>
    <n-modal v-model:show="props.opened" :mask-closable="false">
        <n-card
            style="width: 700px"
            title="Просмотр структурной модели паспорта специальности"
            :bordered="false"
            size="medium"
            role="dialog"
            closable
            @close="emit('close')"
            aria-modal="true"
        >
            <n-grid x-gap="24" y-gap="24" :cols="3">
                <n-gi style="display: flex; align-items: center"> Цели специальности </n-gi>
                <n-gi :span="2">
                    <n-input v-model:value="goals" type="text" placeholder="Введите" />
                </n-gi>

                <n-gi> Вид профессиональной деятельности </n-gi>
                <n-gi :span="2">
                    <n-input v-model:value="activity" type="text" placeholder="Введите" />
                </n-gi>
            </n-grid>

            <template #action>
                <n-space justify="space-between">
                    <n-button @click="emit('close')" type="error">Удалить модель</n-button>
                    <n-space>
                        <n-button @click="emit('close')">Отменить</n-button>
                        <n-button @click="handleSave" type="primary">Скачать модель</n-button>
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
    id: string | null
    opened: boolean
}>()

const emit = defineEmits<{
    (e: "close"): void
}>()

// const showModal = ref<boolean>(true)
const goals = ref<string | null>(null)
const activity = ref<string | null>(null)

const handleSave = () => {
    const data = {
        goals: goals.value,
        activity: activity.value,
    }
    console.log(JSON.stringify(data))
}
</script>

<style scoped></style>
