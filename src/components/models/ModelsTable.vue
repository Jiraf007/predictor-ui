<template>
    <n-data-table :columns="columns" :data="data" :pagination="pagination" :bordered="false" />
    <ModelAnalysisModal
        :opened="modelAnalysisModalOpened"
        :model="currentModel"
        @close="modelAnalysisModalOpened = false"
    />
</template>

<script setup lang="ts">
import { h, ref } from "vue"
import { NButton, useMessage, type DataTableColumns, NText, NIcon } from "naive-ui"
import { type IModel, StatusCodes, type TStatusCode } from "@/utils/types/uploadingTypes"
import { getMockModelsData } from "@/services/mockData"
import ModelsDropdownMenu from "./ModelsDropdownMenu.vue"
// @ts-ignore
import ModelAnalysisModal from './ModelAnalysisModal.vue'
// import TaskSettingsModal from "@/components/uploading-task/table/modal/TaskSettingsModal.vue"
// import TaskModal from "./modal/TaskModal.vue"
// import TaskStructureModal from "./modal/TaskStructureModal.vue"

const data: IModel[] = getMockModelsData()
const pagination = false as const
const message = useMessage()

const modelAnalysisModalOpened = ref<boolean>(false)
const currentModel = ref<IModel>(data[0])


// TODO возможно вынести в помогаторы
const setStatusColor = (status_code: TStatusCode) => {
    switch (status_code) {
        case "PENDING":
            return "warning"
        case "RUNNING":
            return "info"
        case "COMPLETED":
            return "success"
        case "ERROR":
            return "error"
        default:
            return "default"
    }
}

const handleDropdownSelect = (row: IModel, key: string) => {
    switch (key) {
        case "analysis": {
            currentModel.value = row
            modelAnalysisModalOpened.value = true
            break
        }
        default:
            break
    }
}

const createColumns = (): DataTableColumns<IModel> => {
    return [
    {
            title: "Дата",
            key: "date",
        },
        {
            title: "Диапазон",
            key: "range",
        },
        {
            title: "Классы",
            key: "classes",
        },
        {
            title: "Патенты",
            key: "patents_count",
        },
        {
            title: "Статус",
            key: "status",
            render(row) {
                return h(
                    NText,
                    {
                        type: setStatusColor(row.status_code),
                    },
                    {
                        default: () =>
                            `${StatusCodes[row.status_code]} ${
                                row.status_code === "RUNNING" ? `(${row.progress}%)` : ""
                            }`,
                    }
                )
            },
        },
        {
            title: "",
            key: "menu",
            render(row) {
                return h(ModelsDropdownMenu, {
                    id: row.id,
                    onSelect: (key: string) => handleDropdownSelect(row, key),
                })
            },
        },
    ]
}

const columns = createColumns()
</script>
