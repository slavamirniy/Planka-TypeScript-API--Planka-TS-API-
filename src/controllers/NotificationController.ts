import { ApiClient } from '../ApiClient.js';
import { UserDto, CardDto } from '../types/index.js';

interface CardActionItemDto {
    id: string;
    createdAt: string;
    updatedAt?: string;
    type: string;
    dataText: string;
    cardId: string;
    userId: string;
}

interface NotificationItemDto {
    id: string;
    createdAt: string;
    updatedAt?: string;
    isRead: boolean;
    userId: string;
    cardId: string;
    actionId: string;
}

interface NotificationListDto {
    items: NotificationItemDto[];
    included: {
        users: UserDto[];
        cards: CardDto[];
        actions: CardActionItemDto[];
    };
}

export class NotificationController extends ApiClient {
    constructor(baseURL: string, authToken: string) {
        super(baseURL, authToken);
    }

    async list(): Promise<NotificationListDto> {
        return this.apiGet<NotificationListDto>('/api/notifications');
    }

    async getOne(notifyId: string): Promise<NotificationItemDto> {
        return this.apiGet<NotificationItemDto>(`/api/notifications/${notifyId}`);
    }

    async markIsRead(notifyIdList: string[]): Promise<NotificationItemDto[]> {
        return this.apiPatch<NotificationItemDto[]>(`/api/notifications/${notifyIdList.join(',')}`, { isRead: true });
    }

    async markIsNotRead(notifyIdList: string[]): Promise<NotificationItemDto[]> {
        return this.apiPatch<NotificationItemDto[]>(`/api/notifications/${notifyIdList.join(',')}`, { isRead: false });
    }
} 