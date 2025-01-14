import { ApiClient } from '../ApiClient.js';
import { BoardMembershipRoleEnum } from '../types/index.js';

interface BoardMembershipDto {
    id: string;
    createdAt: string;
    updatedAt?: string;
    userId: string;
    canComment: boolean;
    role: BoardMembershipRoleEnum;
    boardId: string;
}

export class BoardMembershipController extends ApiClient {
    constructor(baseURL: string, authToken: string) {
        super(baseURL, authToken);
    }

    async add(boardId: string, userId: string, role: BoardMembershipRoleEnum): Promise<BoardMembershipDto> {
        return this.apiPost<BoardMembershipDto>(`/api/boards/${boardId}/memberships`, { userId, role });
    }

    async update(membershipId: string, role: BoardMembershipRoleEnum, canComment: boolean = true): Promise<BoardMembershipDto> {
        return this.apiPatch<BoardMembershipDto>(`/api/board-memberships/${membershipId}`, { role, canComment });
    }

    async delete(membershipId: string): Promise<BoardMembershipDto> {
        return this.apiDelete<BoardMembershipDto>(`/api/board-memberships/${membershipId}`);
    }
} 