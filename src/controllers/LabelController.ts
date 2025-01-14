import { ApiClient } from '../ApiClient.js';
import { LabelColorEnum } from '../types/index.js';

interface LabelDto {
    id: string;
    boardId: string;
    createdAt: string;
    updatedAt?: string;
    position: number;
    name: string;
    color?: LabelColorEnum;
}

export class LabelController extends ApiClient {
    constructor(baseURL: string, authToken: string) {
        super(baseURL, authToken);
    }

    async create(boardId: string, name: string, color: LabelColorEnum, position: number): Promise<LabelDto> {
        return this.apiPost<LabelDto>(`/api/boards/${boardId}/labels`, { name, color, position });
    }

    async update(labelId: string, name: string, color: LabelColorEnum): Promise<LabelDto> {
        return this.apiPatch<LabelDto>(`/api/labels/${labelId}`, { name, color });
    }

    async delete(labelId: string): Promise<LabelDto> {
        return this.apiDelete<LabelDto>(`/api/labels/${labelId}`);
    }
} 