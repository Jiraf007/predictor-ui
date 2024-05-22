<template>
    <n-modal v-model:show="props.opened" :mask-closable="false">
        <n-card
            style="width: 700px"
            title="Просмотр ТЗ"
            :bordered="false"
            size="medium"
            role="dialog"
            closable
            @close="emit('close')"
            aria-modal="true"
        >
            <n-grid x-gap="24" y-gap="24" :cols="3">
                <n-gi style="display: flex; align-items: center"> Наименование НИОКР </n-gi>
                <n-gi :span="2">
                    <n-input v-model:value="name" type="text" placeholder="Введите" />
                </n-gi>

                <n-gi> Цель выполнения НИОКР </n-gi>
                <n-gi :span="2">
                    <n-input v-model:value="goal" type="text" placeholder="Введите" />
                </n-gi>

                <n-gi> Технические требования </n-gi>
                <n-gi :span="2">
                    <n-input v-model:value="requirements" type="textarea" placeholder="Введите" />
                </n-gi>
            </n-grid>

            <template #action>
                <n-space justify="space-between">
                    <n-button @click="emit('close')" type="error">Удалить документ</n-button>
                    <n-space>
                        <n-button @click="emit('close')">Отменить</n-button>
                        <n-button @click="handleSave" type="primary">Скачать документ</n-button>
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
const name = ref<string | null>(null)
const goal = ref<string | null>(null)
const requirements = ref<string | null>(null)

const handleSave = () => {
    const data = {
        name: name.value,
        goal: goal.value,
        requirements: requirements.value,
    }
    console.log(JSON.stringify(data))
}
</script>

<style scoped></style>
