export function apiWrapper() {
    const wrap = async (
        apiCall: () => Promise<any>,
        callback: (() => void) | null = null,
        errorCallback: (() => void) | null = null
    ) => {
        try {
            const res = await apiCall()
            console.log(res)
            if (callback) callback()
        } catch (error) {
            console.log(error)
            if (errorCallback) errorCallback()
        }
    }
    return { wrap }
}
