<template>
    <div class="filters-wrapper">
        <n-grid x-gap="24" :cols="3">
            <n-gi>
                <label>
                    Наименование НИОКР
                    <n-input v-model:value="filename" type="text" placeholder="Введите" />
                </label>
            </n-gi>
            <n-gi>
                <label>
                    Дата загрузки
                    <n-date-picker
                        v-model:formatted-value="date"
                        type="daterange"
                        clearable
                        start-placeholder="Начало"
                        end-placeholder="Конец"
                        value-format="yyyy-MM-dd"
                        format="dd.MM.yyyy"
                    />
                </label>
            </n-gi>
            <n-gi>
                <label>
                    Статус ТЗ
                    <n-select
                        v-model:value="status"
                        :options="options"
                        multiple
                        placeholder="Выберите"
                        max-tag-count="responsive"
                    />
                </label>
            </n-gi>
        </n-grid>
    </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, watch } from "vue"
import { debounce } from "lodash"

const filename = ref<string | null>(null)
const date = ref<[number, number] | null>(null)
const status = ref<string[] | null>(null)
const options = [
    {
        label: "ТЗ не обработано",
        value: "ТЗ не обработано",
    },
    {
        label: "Построена структурная модель",
        value: "Построена структурная модель",
    },
    {
        label: "Сформированы группы",
        value: "Сформированы группы",
    },
    {
        label: "Утверждена проектная группа",
        value: "Утверждена проектная группа",
    },
    {
        label: "Проект утвержден",
        value: "Проект утвержден",
    },
]

// debounce для ограничения частоты запросов
watch(
    [filename, date, status],
    debounce(([newFilename, newDate, newStatus]) => {
        const data = {
            name: newFilename,
            date: newDate,
            status: newStatus,
        }
        console.log(JSON.stringify(data))
    }, 500)
)
</script>

<style scoped></style>
