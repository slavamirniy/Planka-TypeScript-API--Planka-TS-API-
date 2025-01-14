import { ApiClient } from '../ApiClient.js';

interface CardLabelDto {
    id: string;
    createdAt: string;
    updatedAt?: string;
    cardId: string;
    labelId?: string;
}

export class CardLabelController extends ApiClient {
    constructor(baseURL: string, authToken: string) {
        super(baseURL, authToken);
    }

    async add(cardId: string, labelId: string): Promise<CardLabelDto> {
        return this.apiPost<CardLabelDto>(`/api/cards/${cardId}/labels`, { labelId });
    }

    async remove(cardId: string, labelId: string): Promise<CardLabelDto> {
        return this.apiDelete<CardLabelDto>(`/api/cards/${cardId}/labels/${labelId}`);
    }
} 