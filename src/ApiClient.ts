import axios, { AxiosInstance } from 'axios';

export abstract class ApiClient {
    private client: AxiosInstance;

    constructor(baseURL: string, authToken: string) {
        this.client = axios.create({
            baseURL,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            }
        });
    }

    protected apiGet<T>(url: string): Promise<T> {
        return this.client.get(url).then(response => response.data);
    }

    protected apiPost<T>(url: string, data?: any): Promise<T> {
        return this.client.post(url, data).then(response => response.data);
    }

    protected apiPatch<T>(url: string, data?: any): Promise<T> {
        return this.client.patch(url, data).then(response => response.data);
    }

    protected apiDelete<T>(url: string): Promise<T> {
        return this.client.delete(url).then(response => response.data);
    }
} 