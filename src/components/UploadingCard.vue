<template>
    <n-card>
        <n-upload
            abstract
            v-model:file-list="fileListRef"
            ref="uploadRef"
            :default-upload="false"
            multiple
            @change="handleUploadChange"
            :custom-request="handleUploadFile"
            @finish="handleFinish"
            @remove="() => true"
        >
            <n-space vertical justify="space-between">
                <n-space justify="space-between">
                    <n-upload-trigger>
                        <n-button type="primary"> Выбрать файлы </n-button>
                    </n-upload-trigger>
                    <n-button @click="handleClick" :disabled="!canUpload" type="primary">
                        Загрузить
                    </n-button>
                </n-space>

                <n-scrollbar style="max-height: 120px">
                    <n-upload-file-list />
                </n-scrollbar>
            </n-space>
        </n-upload>
    </n-card>
</template>

<script setup lang="ts">
import { ref } from "vue"
import type { UploadInst, UploadFileInfo, UploadCustomRequestOptions } from "naive-ui"
import { apiWrapper } from "@/utils/api/api"

const props = defineProps<{
    apiCall: (file: File, onProgress: (percent: number) => void) => Promise<any>
}>()

const canUpload = ref(false)
const uploadRef = ref<UploadInst | null>(null)
const fileListRef = ref<UploadFileInfo[]>([])
const apiw = apiWrapper()

function handleUploadChange(data: { fileList: UploadFileInfo[] }) {
    canUpload.value = data.fileList.filter((file) => file.status == "pending").length > 0
}
function handleClick() {
    uploadRef.value?.submit()
}
const handleFinish = ({ file, event }: { file: UploadFileInfo; event?: ProgressEvent }) => {
    // Удаление файлов при success аплоаде
    setTimeout(
        () =>
            fileListRef.value.splice(
                fileListRef.value.findIndex((v) => v.id == file.id),
                1
            ),
        800
    )
    return file
}

const handleUploadFile = async ({
    file,
    onFinish,
    onError,
    onProgress,
}: UploadCustomRequestOptions) => {
    if (file.file != null) {
        const f: File = file.file
        apiw.wrap(
            () =>
                props.apiCall(f, (p: number) => {
                    onProgress({ percent: p })
                }),
            () => onFinish(),
            () => onError()
        )
    }
}
</script>

<style scoped>
:deep() .n-upload-file--success-status .n-upload-file-info__name {
    /* TODO: Научиться пользоваться цветами Naive-UI */
    color: #18a058 !important;
}
</style>
