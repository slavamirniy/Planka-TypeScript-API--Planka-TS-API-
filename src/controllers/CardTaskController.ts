import { ApiClient } from '../ApiClient.js';

interface CardTaskDto {
    id: string;
    createdAt: string;
    updatedAt?: string;
    position: number;
    name: string;
    isCompleted: boolean;
    cardId: string;
}

export class CardTaskController extends ApiClient {
    constructor(baseURL: string, authToken: string) {
        super(baseURL, authToken);
    }

    async create(cardId: string, name: string, position: number): Promise<CardTaskDto> {
        return this.apiPost<CardTaskDto>(`/api/cards/${cardId}/tasks`, { name, position });
    }

    async update(task: CardTaskDto): Promise<CardTaskDto> {
        return this.apiPatch<CardTaskDto>(`/api/tasks/${task.id}`, task);
    }

    async delete(taskId: string): Promise<CardTaskDto> {
        return this.apiDelete<CardTaskDto>(`/api/tasks/${taskId}`);
    }
} 