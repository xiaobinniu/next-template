




// 后端返回的数据类型
export interface ResOptions<T> {
    data?: T
    code?: number
    msg?: string
}

const baseUrl = "https://ass.arkfungames.com"

/**
 * api请求封装
 * @param { String } url 请求地址
 * @param { Object } options useFtech第二个参数
 * @param { Object } headers 自定义header头, 单独设置headers区分请求参数，也好设置类型
 */
const Fetch = (url: string, options?: any, headers: any = {}): Promise<any> => {

    return new Promise((resolve, reject) => {
        fetch(`${baseUrl}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...headers
            },
            body: JSON.stringify(options)
        })
            .then(response => response.json())
            .then(({ data }) => {
                resolve(data)
            })
            .catch((err: any) => {
                console.log("【useFetch报错了】", err)
                reject(err)
            }).finally(() => {

            })

    })
}

export default new class Http {

    get(url: string, params?: any, headers?: any): Promise<any> {
        return Fetch(url, { method: 'get', params }, headers)
    }

    post(url: string, params?: any, headers?: any): Promise<any> {
        return Fetch(url, { method: 'post', body: { ...params }, }, headers)
    }

}