import type { AxiosResponse } from 'axios'
import { axiosInstance } from '../API'
import type { ISettingsCategory } from '@/utils/types/settingsTypes'
import type { ISettingsUpdateItem } from '@/utils/types/apiRequestTypes'

export function getSettings(): Promise<AxiosResponse<ISettingsCategory[], any>> {
    return axiosInstance.get('/settings')
}

export function updateSettings(data: ISettingsUpdateItem[]) {
    return axiosInstance.put('/settings', data)
}