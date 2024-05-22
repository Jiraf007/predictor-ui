<template>
    <!-- <n-button quaternary circle @click="showModal = true" size="large">
        <template #icon>
            <n-icon>
                <SettingsOutlined />
            </n-icon>
        </template>
    </n-button> -->
    <n-modal v-model:show="props.opened" :mask-closable="false">
        <n-card
            style="width: 600px"
            title="Настройка обработки ТЗ"
            :bordered="false"
            size="medium"
            role="dialog"
            closable
            @close="emit('close')"
            aria-modal="true"
        >
            <n-grid x-gap="24" y-gap="24" :cols="3">
                <n-gi style="display: flex; align-items: center"> Количество сотрудников </n-gi>
                <n-gi :span="2">
                    <n-space justify="space-between" align="center">
                        <div>от</div>
                        <n-input-number
                            v-model:value="employeesFrom"
                            clearable
                            placeholder="Введите"
                        />
                        <div>до</div>
                        <n-input-number
                            v-model:value="employeesTo"
                            clearable
                            placeholder="Введите"
                        />
                    </n-space>
                </n-gi>

                <n-gi> Тип структурной модели </n-gi>
                <n-gi :span="2">
                    <n-select v-model:value="type" :options="typeOptions" placeholder="Выберите" />
                </n-gi>

                <n-gi> Сотрудники, исключаемые из рассмотрения при формировании групп </n-gi>
                <n-gi :span="2">
                    <n-select
                        multiple
                        v-model:value="excludeEmployees"
                        :options="excludeEmployeesOptions"
                        :render-label="renderLabel"
                        :render-tag="renderMultipleSelectTag"
                        filterable
                        placeholder="Выберите"
                        value-field="id"
                        label-field="name"
                    />
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
import { SettingsOutlined } from "@vicons/material"
import { defineComponent, h } from "vue"
import { type IEmployee } from "@/utils/types/uploadingTypes"
import ExcludeEmloyeesItem from "@/components/uploading-task/table/ExcludeEmloyeesItem.vue"
import { getMockEmployees } from "@/services/mockData"
import { NTag } from "naive-ui"

const props = defineProps<{
    id: string | null
    opened: boolean
}>()

const emit = defineEmits<{
    (e: "close"): void
}>()

// const showModal = ref<boolean>(false)
const employeesFrom = ref<number | null>(null)
const employeesTo = ref<number | null>(null)
const type = ref<string | null>(null)
const excludeEmployees = ref<string[] | null>(null)

const typeOptions = [
    {
        label: "Типовая модель ТЗ",
        value: "Типовая модель ТЗ",
    },
]

const excludeEmployeesOptions: IEmployee[] = getMockEmployees()

interface renderTagsProps {
    option: IEmployee
    handleClose: () => void
}

const renderMultipleSelectTag = ({ option, handleClose }: renderTagsProps) => {
    return h(
        NTag,
        {
            style: {
                width: "100%",
            },
            closable: true,
            onClose: (e) => {
                e.stopPropagation()
                handleClose()
            },
        },
        {
            default: () => h("div", {}, { default: () => option.name }),
        }
    )
}

const renderLabel = (option: IEmployee) => {
    return h(ExcludeEmloyeesItem, {
        name: option.name,
        salary: option.salary,
        speciality: option.speciality,
    })
}

watch(excludeEmployees, (newval) => {
    console.log(JSON.stringify(newval))
})

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
