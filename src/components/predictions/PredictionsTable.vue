<template>
    <n-data-table :columns="columns" :data="data" :pagination="pagination" :bordered="false" />
    <PredictionAnalysisModal
        :opened="predictionAnalysisModalOpened"
        :prediction="currentPrediction"
        @close="predictionAnalysisModalOpened = false"
    />
</template>

<script setup lang="ts">
import { h, ref } from "vue"
import { NButton, useMessage, type DataTableColumns, NText, NIcon } from "naive-ui"
import { type IPrediction, StatusCodes, type TStatusCode } from "@/utils/types/uploadingTypes"
import { getMockPredictionsData } from "@/services/mockData"
import PredictionsDropdownMenu from "./PredictionsDropdownMenu.vue"
import PredictionAnalysisModal from './PredictionAnalysisModal.vue'


const data: IPrediction[] = getMockPredictionsData()
const pagination = false as const
const message = useMessage()

const predictionAnalysisModalOpened = ref<boolean>(false)
const currentPrediction = ref<IPrediction>(data[0])


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

const handleDropdownSelect = (row: IPrediction, key: string) => {
    switch (key) {
        case "analysis": {
            currentPrediction.value = row
            predictionAnalysisModalOpened.value = true
            break
        }
        default:
            break
    }
}

const createColumns = (): DataTableColumns<IPrediction> => {
    return [
    {
            title: "Дата",
            key: "date",
            // width: '10%' // TODO настроить ширину колонок
        },
        {
            title: "Диапазон 1",
            key: "range1",
        },
        {
            title: "Диапазон 2",
            key: "range2",
        },
        {
            title: "Классы",
            key: "classes",
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
                return h(PredictionsDropdownMenu, {
                    id: row.id,
                    onSelect: (key: string) => handleDropdownSelect(row, key),
                })
            },
        },
    ]
}

const columns = createColumns()
</script>
