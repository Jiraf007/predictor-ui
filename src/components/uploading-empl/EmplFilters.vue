<template>
    <div class="filters-wrapper">
        <n-grid x-gap="24" :cols="3">
            <n-gi>
                <label>
                    ФИО сотрудника
                    <n-input v-model:value="name" type="text" placeholder="Введите" clearable />
                </label>
            </n-gi>

            <n-gi>
                <label>
                    Специальность
                    <n-input v-model:value="speciality" type="text" placeholder="Введите" clearable />
                </label>
            </n-gi>

            <n-gi>
                <label>
                    Дата загрузки
                    <n-date-picker v-model:formatted-value="date" type="daterange" clearable start-placeholder="Начало"
                        end-placeholder="Конец" value-format="yyyy-MM-dd" format="dd.MM.yyyy" />
                </label>
            </n-gi>
        </n-grid>
    </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, watch } from "vue"
import { debounce } from "lodash"

const name = ref<string | null>(null)
const speciality = ref<string | null>(null)
const date = ref<[number, number] | null>(null)
const status = ref<string[] | null>(null)

// debounce для ограничения частоты запросов
watch(
    [name, date, speciality],
    debounce(([newFilename, newDate, newSpec]) => {
        const data = {
            name: newFilename,
            date: newDate,
            speciality: newSpec,
        }
        console.log(JSON.stringify(data))
    }, 500)
)
</script>

<style scoped></style>
