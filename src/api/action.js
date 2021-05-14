import http from './index'

// Example Function
export async function ExFunction(params) {
    return http.post('', params)
}