import { ApiClient } from '../ApiClient.js';

interface AttachmentDto {
    id: string;
    name: string;
    cardId: string;
    url: string;
    creatorUserId: string;
    createdAt: string;
    updatedAt?: string;
    coverUrl?: string;
    image?: {
        height: number;
        width: number;
    };
}

export class AttachmentController extends ApiClient {
    constructor(baseURL: string, authToken: string) {
        super(baseURL, authToken);
    }

    async upload(cardId: string, file: string): Promise<AttachmentDto> {
        return this.apiPost<AttachmentDto>(`/api/cards/${cardId}/attachments`, { file });
    }

    async updateName(attachmentId: string, name: string): Promise<AttachmentDto> {
        return this.apiPatch<AttachmentDto>(`/api/attachments/${attachmentId}`, { name });
    }

    async remove(attachmentId: string): Promise<AttachmentDto> {
        return this.apiDelete<AttachmentDto>(`/api/attachments/${attachmentId}`);
    }
} 