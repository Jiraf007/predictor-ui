<template>
    <n-ellipsis>
        <RouterLink :to="props.to">
            {{ props.title }}
        </RouterLink>
        <template #tooltip>
            <span>{{ props.title }}</span>
        </template>
    </n-ellipsis>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router"

const props = defineProps<{
    title: string
    to: string
}>()
</script>
