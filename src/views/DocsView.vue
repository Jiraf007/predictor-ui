<template>
    <n-space vertical :size="36">
        <UploadingCard :api-call="uploadFile" />
        <DocsTable />
    </n-space>
</template>

<script setup lang="ts">
import UploadingCard from "@/components/UploadingCard.vue"
import DocsTable from '@/components/docs/DocsTable.vue'
import { uploadFile } from "@/services/apiMock"
</script>

<style></style>
