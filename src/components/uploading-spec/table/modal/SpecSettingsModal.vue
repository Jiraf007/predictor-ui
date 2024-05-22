<template>
    <n-modal v-model:show="props.opened" :mask-closable="false">
        <n-card
            style="width: 600px"
            title="Настройка обработки паспорта специальности"
            :bordered="false"
            size="medium"
            role="dialog"
            closable
            @close="emit('close')"
            aria-modal="true"
        >
            <n-grid x-gap="24" y-gap="24" :cols="3">
                <n-gi> Тип структурной модели </n-gi>
                <n-gi :span="2">
                    <n-select v-model:value="type" :options="typeOptions" placeholder="Выберите" />
                </n-gi>
            </n-grid>

            <template #action>
                <n-space justify="end">
                    <n-button @click="emit('close')">Отменить</n-button>
                    <n-button @click="emit('close')" type="success">Сохранить</n-button>
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

// const showModal = ref<boolean>(false)
const type = ref<string | null>(null)

const typeOptions = [
    {
        label: "Типовая модель паспорта специальности",
        value: "Типовая модель паспорта специальности",
    },
]

// в дальнейшем здесь будем получать данные по id таска
watch(
    () => props.opened,
    (newval) => {
        if (newval) console.log(props.id)
    }
)
</script>

<style scoped>
:deep() .n-input-wrapper {
    max-width: 120px;
}
</style>
