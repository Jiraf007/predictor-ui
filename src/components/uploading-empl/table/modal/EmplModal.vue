<template>
    <n-modal v-model:show="props.opened" :mask-closable="false">
        <n-card
            style="width: 700px"
            title="Просмотр карточки сотрудника"
            :bordered="false"
            size="medium"
            role="dialog"
            closable
            @close="emit('close')"
            aria-modal="true"
        >
            <n-grid x-gap="24" y-gap="24" :cols="3">
                <n-gi style="display: flex; align-items: center"> Фамилия </n-gi>
                <n-gi :span="2">
                    <n-input v-model:value="lastName" type="text" placeholder="Введите" />
                </n-gi>

                <n-gi> Имя </n-gi>
                <n-gi :span="2">
                    <n-input v-model:value="firstName" type="text" placeholder="Введите" />
                </n-gi>

                <n-gi> Отчество </n-gi>
                <n-gi :span="2">
                    <n-input v-model:value="patronymic" type="text" placeholder="Введите" />
                </n-gi>
                
                <n-gi> Специальность </n-gi>
                <n-gi :span="2">
                    <!-- TODO заменить на селект -->
                    <n-input v-model:value="speciality" type="text" placeholder="Введите" />
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

const lastName = ref<string | null>(null)
const firstName = ref<string | null>(null)
const patronymic = ref<string | null>(null)
const speciality = ref<string | null>(null)

const handleSave = () => {
    const data = {
        lastName: lastName.value,
        firstName: firstName.value,
        patronymic: patronymic.value,
        speciality: speciality.value,
    }
    console.log(JSON.stringify(data))
}
</script>

<style scoped></style>
