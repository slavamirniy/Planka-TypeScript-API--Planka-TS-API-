import { ApiClient } from '../ApiClient.js';
import { UserDto, ApiListResponse, ApiItemResponse } from '../types/index.js';

interface UserIncluded {
    // Добавьте поля, если они есть в included для пользователей
}

export class UserController extends ApiClient {
    constructor(baseURL: string, authToken: string) {
        super(baseURL, authToken);
    }

    async list(): Promise<ApiListResponse<UserDto, UserIncluded>> {
        return this.apiGet<ApiListResponse<UserDto, UserIncluded>>('/api/users');
    }

    async create(email: string, name: string, password: string, username: string): Promise<ApiItemResponse<UserDto, UserIncluded>> {
        return this.apiPost<ApiItemResponse<UserDto, UserIncluded>>('/api/users', { email, name, password, username });
    }

    async get(id: string): Promise<ApiItemResponse<UserDto, UserIncluded>> {
        return this.apiGet<ApiItemResponse<UserDto, UserIncluded>>(`/api/users/${id}`);
    }

    async update(user: UserDto): Promise<ApiItemResponse<UserDto, UserIncluded>> {
        return this.apiPatch<ApiItemResponse<UserDto, UserIncluded>>(`/api/users/${user.id}`, user);
    }

    async updateEmail(user: UserDto): Promise<ApiItemResponse<UserDto, UserIncluded>> {
        return this.apiPatch<ApiItemResponse<UserDto, UserIncluded>>(`/api/users/${user.id}/email`, user);
    }

    async updatePassword(id: string, current: string, newPassword: string): Promise<ApiItemResponse<UserDto, UserIncluded>> {
        return this.apiPatch<ApiItemResponse<UserDto, UserIncluded>>(`/api/users/${id}/password`, { current, new: newPassword });
    }

    async updateUsername(user: UserDto): Promise<ApiItemResponse<UserDto, UserIncluded>> {
        return this.apiPatch<ApiItemResponse<UserDto, UserIncluded>>(`/api/users/${user.id}/username`, user);
    }

    async updateAvatar(user: UserDto, file: string): Promise<ApiItemResponse<UserDto, UserIncluded>> {
        return this.apiPost<ApiItemResponse<UserDto, UserIncluded>>(`/api/users/${user.id}/avatar`, { file });
    }

    async delete(user: UserDto): Promise<ApiItemResponse<UserDto, UserIncluded>> {
        return this.apiDelete<ApiItemResponse<UserDto, UserIncluded>>(`/api/users/${user.id}`);
    }
} 