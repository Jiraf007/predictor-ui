<template>
    <n-data-table :columns="columns" :data="data" :pagination="pagination" :bordered="false" />
    <!-- <TaskSettingsModal
        :opened="settingsModalOpened"
        :id="taskId"
        @close="settingsModalOpened = false"
    />
    <TaskModal
        :opened="viewingTaskModalOpened"
        :id="taskId"
        @close="viewingTaskModalOpened = false"
    />
    <TaskStructureModal
        :opened="viewingStructureModalOpened"
        :id="taskId"
        @close="viewingStructureModalOpened = false"
    /> -->
</template>

<script setup lang="ts">
import { h, ref } from "vue"
import { NButton, useMessage, type DataTableColumns, NText, NIcon } from "naive-ui"
import { type IDoc, StatusCodes, type TStatusCode } from "@/utils/types/uploadingTypes"
import { getMockDocsData } from "@/services/mockData"
import TaskDropdownMenu from "@/components/uploading-task/table/TaskDropdownMenu.vue"
// import TaskSettingsModal from "@/components/uploading-task/table/modal/TaskSettingsModal.vue"
// import TaskModal from "./modal/TaskModal.vue"
// import TaskStructureModal from "./modal/TaskStructureModal.vue"

const data: IDoc[] = getMockDocsData()
const pagination = false as const
const message = useMessage()

const taskId = ref<string | null>(null)
const viewingTaskModalOpened = ref<boolean>(false)
const viewingStructureModalOpened = ref<boolean>(false)


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

const handleDropdownSelect = (id: string | null, key: string) => {
    switch (key) {
        case "open-task": {
            taskId.value = id
            viewingTaskModalOpened.value = true
            break
        }
        case "open-structure": {
            taskId.value = id
            viewingStructureModalOpened.value = true
            break
        }
        default:
            break
    }
}

const createColumns = (): DataTableColumns<IDoc> => {
    return [
        {
            title: "Дата",
            key: "date",
            // width: '10%' // TODO настроить ширину колонок
        },
        {
            title: "Название",
            key: "filename",
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
            title: "Патенты",
            key: "predictions_count",
        },
        {
            title: "",
            key: "menu",
            render(row) {
                return h(TaskDropdownMenu, {
                    id: row.id,
                    onSelect: (key: string) => handleDropdownSelect(row.id, key),
                })
            },
        },
    ]
}

const columns = createColumns()
</script>
