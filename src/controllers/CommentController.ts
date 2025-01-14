import { ApiClient } from '../ApiClient.js';

interface CommentDto {
    id: string;
    createdAt: string;
    updatedAt?: string;
    cardId: string;
    userId: string;
    type: string;
    dataText: string;
}

export class CommentController extends ApiClient {
    constructor(baseURL: string, authToken: string) {
        super(baseURL, authToken);
    }

    async add(cardId: string, text: string): Promise<CommentDto> {
        return this.apiPost<CommentDto>(`/api/cards/${cardId}/comment-actions`, { text });
    }

    async update(commentId: string, text: string): Promise<CommentDto> {
        return this.apiPatch<CommentDto>(`/api/comment-actions/${commentId}`, { text });
    }

    async remove(commentId: string): Promise<CommentDto> {
        return this.apiDelete<CommentDto>(`/api/comment-actions/${commentId}`);
    }
} 