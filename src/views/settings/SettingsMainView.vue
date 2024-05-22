<template>
    <n-space vertical>
        <SettingsCategory v-for="(settingsCat, index) in settingsCategories" :key="settingsCat.category"
            :title="settingsCat.category" :settings="settingsCat.settings"
            @update="(settingsIndex: number, value: string) => settingChange(index, settingsIndex, value)" />
        <n-space justify="end">
            <n-popconfirm :show-icon="false" positive-text="Подтвердить" :negative-text="null" @positive-click="cancel">
                <template #trigger>
                    <n-button type="error">Отменить</n-button>
                </template>
                Изменения будут потеряны
            </n-popconfirm>
            <n-button type="primary" @click="save">Сохранить</n-button>
        </n-space>
    </n-space>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue"
// import { getMockSettings } from "@/services/mockData"
import { getSettings, updateSettings } from "@/services/settings.service";
import type { ISettingsCategory } from "@/utils/types/settingsTypes"
import SettingsCategory from "@/components/settings/SettingsCategory.vue"
import { useMessage } from "naive-ui";

const message = useMessage()

const settingsCategories = ref<ISettingsCategory[]>([])

const settingChange = (catIntex: number, settingsIndex: number, value: string) => {
    const numValue = Number(value)
    console.log(numValue)
    if (settingsCategories.value[catIntex].settings[settingsIndex].data_type == "int") {
        // value = value.replace(/\D/g, "")
        // if (Number.isInteger(value)) settingsCategories.value[catIntex].settings[settingsIndex].value = value
    }
    if (!isNaN(numValue)) settingsCategories.value[catIntex].settings[settingsIndex].value = value
}

const cancel = () => {
    resetSettings()
}

const save = async () => {
    const data = settingsCategories.value.flatMap(item =>
        item.settings.map(item => {
            return {
                name: item.name,
                value: item.value
            }
        })
    )
    console.log(data)
    try {
        await updateSettings(data)
        message.success('Изменения сохранены')
    } catch (e) {

    }
}

const getData = async () => {
    try {
        const { data } = await getSettings()
        settingsCategories.value = data
    } catch { }
}

const resetSettings = () => {
    getData()
}

onMounted(() => {
    getData()
})
</script>
