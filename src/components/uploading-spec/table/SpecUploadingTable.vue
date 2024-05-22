<template>
    <n-data-table :columns="columns" :data="data" :pagination="pagination" :bordered="false" />
    <SpecSettingsModal
        :opened="settingsModalOpened"
        :id="taskId"
        @close="settingsModalOpened = false"
    />
    <SpecModal
        :opened="viewingTaskModalOpened"
        :id="taskId"
        @close="viewingTaskModalOpened = false"
    />
    <SpecStructureModal
        :opened="viewingStructureModalOpened"
        :id="taskId"
        @close="viewingStructureModalOpened = false"
    />
</template>

<script setup lang="ts">
import { h, ref } from "vue"
import { NButton, useMessage, type DataTableColumns, NText, NIcon } from "naive-ui"
import { type ISpeciality, StatusCodes, type TStatusCode } from "@/utils/types/uploadingTypes"
import { getMockUploadingSpecData } from "@/services/mockData"
import SpecDropdownMenu from "@/components/uploading-spec/table/SpecDropdownMenu.vue"
import SpecSettingsModal from "@/components/uploading-spec/table/modal/SpecSettingsModal.vue"
import SpecModal from "./modal/SpecModal.vue"
import SpecStructureModal from "./modal/SpecStructureModal.vue"
import { SettingsOutlined } from "@vicons/material"

const data: ISpeciality[] = getMockUploadingSpecData()
const pagination = false as const
const message = useMessage()

const taskId = ref<string | null>(null)
const settingsModalOpened = ref<boolean>(false)
const viewingTaskModalOpened = ref<boolean>(false)
const viewingStructureModalOpened = ref<boolean>(false)

const handleOpenSettingsModal = (id: string | null) => {
    taskId.value = id
    settingsModalOpened.value = true
}

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

const createColumns = (): DataTableColumns<ISpeciality> => {
    return [
        {
            title: "Дата загрузки",
            key: "date",
            // width: '10%' // TODO настроить ширину колонок
        },
        {
            title: "Наименование файла",
            key: "filename",
        },
        {
            title: "Наименование специальности",
            key: "speciality",
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
            title: "Подробнее",
            key: "info",
        },
        {
            title: "",
            key: "settings",
            render(row) {
                return h(
                    NButton,
                    {
                        onClick: () => handleOpenSettingsModal(row.id),
                        size: "large",
                        circle: true,
                        quaternary: true,
                    },
                    { icon: () => h(NIcon, {}, { default: () => h(SettingsOutlined) }) }
                )
            },
        },
        {
            title: "",
            key: "menu",
            render(row) {
                return h(SpecDropdownMenu, {
                    id: row.id,
                    onSelect: (key: string) => handleDropdownSelect(row.id, key),
                })
            },
        },
    ]
}

const columns = createColumns()
</script>
