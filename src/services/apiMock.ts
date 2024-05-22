// This func emulates the upload of a file to the server
export const uploadFile = (file: File, onProgress: (percent: number) => void): Promise<any> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let percent = 0
            const interval = setInterval(() => {
                percent += Math.random() * 5
                if (percent > 100) {
                    clearInterval(interval)
                    if (Math.random() > 0.8) {
                        reject(0)
                    } else {
                        resolve(1)
                    }
                }
                onProgress(percent)
            }, 200 + Math.random() * 200)
        }, 100)
    })
}
