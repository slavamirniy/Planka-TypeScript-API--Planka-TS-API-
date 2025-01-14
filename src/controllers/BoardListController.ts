import { ApiClient } from '../ApiClient.js';

interface BoardListDto {
    id: string;
    boardId: string;
    position: number;
    name: string;
    createdAt: string;
    updatedAt?: string;
}

export class BoardListController extends ApiClient {
    constructor(baseURL: string, authToken: string) {
        super(baseURL, authToken);
    }

    async create(boardId: string, name: string, position: number): Promise<BoardListDto> {
        return this.apiPost<BoardListDto>(`/api/boards/${boardId}/lists`, { name, position });
    }

    async update(listId: string, name: string): Promise<BoardListDto> {
        return this.apiPatch<BoardListDto>(`/api/lists/${listId}`, { name });
    }

    async delete(listId: string): Promise<BoardListDto> {
        return this.apiDelete<BoardListDto>(`/api/lists/${listId}`);
    }
} 