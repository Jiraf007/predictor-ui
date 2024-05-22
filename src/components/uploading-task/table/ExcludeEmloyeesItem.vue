<template>
    <div class="person-wrapper">
        <div>{{ props.name }}</div>
        <n-space class="person-description">
            <div>{{ props.speciality }}</div>
            <div>|</div>
            <div>{{ props.salary }}</div>
        </n-space>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    name: string
    salary: string | null
    speciality: string | null
}>()
</script>

<style scoped>
.person-wrapper {
    padding: 4px 0px;
}

.person-description {
    font-size: 12px;
    color: rgb(173, 173, 173);
}
</style>
