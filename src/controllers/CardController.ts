import { ApiClient } from '../ApiClient.js';
import { CardDto, UserDto, ApiListResponse, ApiItemResponse } from '../types/index.js';

interface CardMembershipDto {
    id: string;
    createdAt: string;
    updatedAt?: string;
    cardId: string;
    userId: string;
}

interface CardIncluded {
    users: UserDto[];
    cardMemberships: CardMembershipDto[];
}

export class CardController extends ApiClient {
    constructor(baseURL: string, authToken: string) {
        super(baseURL, authToken);
    }

    async create(listId: string, name: string, position: number): Promise<ApiItemResponse<CardDto, CardIncluded>> {
        return this.apiPost<ApiItemResponse<CardDto, CardIncluded>>(`/api/lists/${listId}/cards`, { name, position });
    }

    async get(cardId: string): Promise<ApiItemResponse<CardDto, CardIncluded>> {
        return this.apiGet<ApiItemResponse<CardDto, CardIncluded>>(`/api/cards/${cardId}`);
    }

    async update(card: CardDto): Promise<ApiItemResponse<CardDto, CardIncluded>> {
        return this.apiPatch<ApiItemResponse<CardDto, CardIncluded>>(`/api/cards/${card.id}`, card);
    }

    async clearTime(card: CardDto): Promise<ApiItemResponse<CardDto, CardIncluded>> {
        return this.apiPatch<ApiItemResponse<CardDto, CardIncluded>>(`/api/cards/${card.id}`, { dueDate: null });
    }

    async moveCard(card: CardDto): Promise<ApiItemResponse<CardDto, CardIncluded>> {
        return this.apiPatch<ApiItemResponse<CardDto, CardIncluded>>(`/api/cards/${card.id}`, card);
    }

    async addSpentTime(card: CardDto, seconds: number): Promise<ApiItemResponse<CardDto, CardIncluded>> {
        return this.apiPatch<ApiItemResponse<CardDto, CardIncluded>>(`/api/cards/${card.id}`, { spentSeconds: seconds });
    }

    async triggerTimer(card: CardDto, start: boolean): Promise<ApiItemResponse<CardDto, CardIncluded>> {
        return this.apiPatch<ApiItemResponse<CardDto, CardIncluded>>(`/api/cards/${card.id}`, { start });
    }

    async delete(cardId: string): Promise<void> {
        return this.apiDelete<void>(`/api/cards/${cardId}`);
    }

    async subscribe(cardId: string, userId: string): Promise<ApiItemResponse<CardMembershipDto, CardIncluded>> {
        return this.apiPost<ApiItemResponse<CardMembershipDto, CardIncluded>>(`/api/cards/${cardId}/memberships`, { userId });
    }

    async unsubscribe(cardId: string, userId: string): Promise<ApiItemResponse<CardMembershipDto, CardIncluded>> {
        return this.apiDelete<ApiItemResponse<CardMembershipDto, CardIncluded>>(`/api/cards/${cardId}/memberships?userId=${userId}`);
    }
} 