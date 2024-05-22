<template>
    <n-space vertical :size="36">
        <n-button type="primary" @click="createDataset">
            Создать новый набор данных
        </n-button>
        <n-data-table :columns="columns" :data="data" :pagination="pagination" :bordered="false" />
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
    <DatasetAnalysisModal 
        :dataset="currentDataset"
        :opened="datasetAnalysisModalOpened" 
        @close="datasetAnalysisModalOpened = false" 
    />
</template>

<script setup lang="ts">
import { h, ref } from "vue"
import { NButton, useMessage, type DataTableColumns, NText, NIcon } from "naive-ui"
import { type IDataset } from "@/utils/types/uploadingTypes"
import { getMockDatasetsData } from "@/services/mockData"
import DatasetsDropdownMenu from "./DatasetsDropdownMenu.vue"
import CreateDatasetModal from './CreateDatasetModal.vue'
import EditDatasetModal from './EditDatasetModal.vue'
// @ts-ignore
import DatasetAnalysisModal from './DatasetAnalysisModal.vue'

const data: IDataset[] = getMockDatasetsData()
const pagination = false as const
const message = useMessage()

const currentDataset = ref<IDataset | null>(null)
const createModalOpened = ref<boolean>(false)
const editModalOpened = ref<boolean>(false)
const datasetAnalysisModalOpened = ref<boolean>(false)

const createDataset = () => {
    createModalOpened.value = true
}

const handleDropdownSelect = (dataset: IDataset | null, key: string) => {
    switch (key) {
        case "edit": {
            currentDataset.value = dataset
            editModalOpened.value = true
            break
        }
        case "analysis": {
            currentDataset.value = dataset
            datasetAnalysisModalOpened.value = true
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
            key: "patents_count",
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
