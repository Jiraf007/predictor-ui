<template>
    <n-data-table :columns="columns" :data="data" :pagination="pagination" :bordered="false" />
    <SpecModal
        :opened="employeeModalOpened"
        :id="employeeId"
        @close="employeeModalOpened = false"
    />
</template>

<script setup lang="ts">
import { h, ref } from "vue"
import { type DataTableColumns } from "naive-ui"
import { type IEmployee } from "@/utils/types/uploadingTypes"
import { getMockEmployees } from "@/services/mockData"
import SpecDropdownMenu from "@/components/uploading-empl/table/EmplDropdownMenu.vue"
import SpecModal from "./modal/EmplModal.vue"

const data: IEmployee[] = getMockEmployees()
const pagination = false as const

const employeeId = ref<string | null>(null)
const employeeModalOpened = ref<boolean>(false)

const handleDropdownSelect = (id: string | null, key: string) => {
    switch (key) {
        case "open-employee": {
            employeeId.value = id
            employeeModalOpened.value = true
            break
        }
        default:
            break
    }
}

const createColumns = (): DataTableColumns<IEmployee> => {
    return [
        {
            title: "Дата загрузки",
            key: "date",
            // width: '10%' // TODO настроить ширину колонок
        },
        {
            title: "ФИО сотрудника",
            key: "name",
        },
        {
            title: "Специальность",
            key: "speciality",
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
