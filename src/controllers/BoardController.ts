import { ApiClient } from '../ApiClient.js';
import { BoardDto, UserDto, BoardMembershipDto, ApiListResponse, ApiItemResponse } from '../types/index.js';

interface BoardIncluded {
    users: UserDto[];
    boardMemberships: BoardMembershipDto[];
}

export class BoardController extends ApiClient {
    constructor(baseURL: string, authToken: string) {
        super(baseURL, authToken);
    }

    async create(projectId: string, name: string, position: number): Promise<ApiItemResponse<BoardDto, BoardIncluded>> {
        return this.apiPost<ApiItemResponse<BoardDto, BoardIncluded>>(`/api/projects/${projectId}/boards`, { name, position });
    }

    async get(boardId: string): Promise<ApiItemResponse<BoardDto, BoardIncluded>> {
        return this.apiGet<ApiItemResponse<BoardDto, BoardIncluded>>(`/api/boards/${boardId}`);
    }

    async update(boardId: string, name: string): Promise<ApiItemResponse<BoardDto, BoardIncluded>> {
        return this.apiPatch<ApiItemResponse<BoardDto, BoardIncluded>>(`/api/boards/${boardId}`, { name });
    }

    async delete(boardId: string): Promise<ApiItemResponse<BoardDto, BoardIncluded>> {
        return this.apiDelete<ApiItemResponse<BoardDto, BoardIncluded>>(`/api/boards/${boardId}`);
    }
} 