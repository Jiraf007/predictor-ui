<template>
    <n-card>
        <n-h3>{{ props.title }}</n-h3>
        <n-space vertical>
            <n-space justify="space-between" v-for="(setting, index) in props.settings" :key="setting.name">
                <n-text>{{ setting.display_name }}</n-text>
                <n-input
                    v-if="setting.data_type === 'int' || setting.data_type === 'real'"
                    :value="setting.value"
                    @update:value="(val: string) => updateSetting(index, val)"
                />
                <n-switch
                    v-else-if="setting.data_type === 'bool'"
                    @update:value="(val: string) => updateSetting(index, val)"
                />
            </n-space>
        </n-space>
    </n-card>
</template>

<script lang="ts" setup>
import type { ISetting } from "@/utils/types/settingsTypes"

const props = defineProps({
  title: String,
  settings: Array<ISetting>
})
const emit = defineEmits(['update'])

const updateSetting = (index: number, val: string) => {
    emit('update', index, val)
}
</script>
