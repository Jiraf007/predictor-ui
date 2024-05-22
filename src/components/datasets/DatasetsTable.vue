<template>
    <n-space vertical :size="36">
        <n-button type="primary" @click="createDataset">
            Создать новый набор данных
        </n-button>

        <n-data-table :columns="columns" :data="data" :pagination="pagination" :bordered="false" />
        <!-- <TaskSettingsModal
        :opened="settingsModalOpened"
        :id="taskId"
        @close="settingsModalOpened = false"
    /> -->
    </n-space>
    <CreateDatasetModal 
        :opened="createModalOpened" 
        @close="createModalOpened = false" 
    />
    <EditDatasetModal 
        :dataset="currentDataset"
        :opened="editModalOpened" 
        @close="editModalOpened = false" 
    />
    <!-- <TaskStructureModal
        :opened="viewingStructureModalOpened"
        :id="taskId"
        @close="viewingStructureModalOpened = false"
    /> -->
</template>

<script setup lang="ts">
import { h, ref } from "vue"
import { NButton, useMessage, type DataTableColumns, NText, NIcon } from "naive-ui"
import { type IDataset } from "@/utils/types/uploadingTypes"
import { getMockDatasetsData } from "@/services/mockData"
import DatasetsDropdownMenu from "./DatasetsDropdownMenu.vue"
// import TaskSettingsModal from "@/components/uploading-task/table/modal/TaskSettingsModal.vue"
// import TaskModal from "./modal/TaskModal.vue"
// import TaskStructureModal from "./modal/TaskStructureModal.vue"
import CreateDatasetModal from './CreateDatasetModal.vue'
import EditDatasetModal from './EditDatasetModal.vue'

const data: IDataset[] = getMockDatasetsData()
const pagination = false as const
const message = useMessage()

const currentDataset = ref<IDataset | null>(null)
const createModalOpened = ref<boolean>(false)
const editModalOpened = ref<boolean>(false)
// const viewingStructureModalOpened = ref<boolean>(false)

const createDataset = () => {
    createModalOpened.value = true
}

const handleDropdownSelect = (dataset: IDataset | null, key: string) => {
    switch (key) {
        // case "create-model": {
        //     taskId.value = id
        //     createModalOpened.value = true
        //     break
        // }
        // case "open-structure": {
        //     taskId.value = id
        //     viewingStructureModalOpened.value = true
        //     break
        // }
        case "edit": {
            currentDataset.value = dataset
            editModalOpened.value = true
            break
        }
        default:
            break
    }
}

const createColumns = (): DataTableColumns<IDataset> => {
    return [
        {
            title: "Дата",
            key: "date",
            // width: '10%' // TODO настроить ширину колонок
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
            key: "predictions_count",
        },
        {
            title: "",
            key: "menu",
            render(row) {
                return h(DatasetsDropdownMenu, {
                    dataset: row,
                    onSelect: (key: string) => handleDropdownSelect(row, key),
                })
            },
        },
    ]
}

const columns = createColumns()
</script>
