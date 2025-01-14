export interface UserDto {
    id: string;
    createdAt: string;
    updatedAt?: string;
    deletedAt?: string;
    email?: string;
    isAdmin: boolean;
    name?: string;
    username?: string;
    phone?: string;
    organization?: string;
    language?: string;
    subscribeToOwnCards: boolean;
    avatarUrl?: string;
}

export interface ProjectDto {
    id: string;
    createdAt: string;
    updatedAt?: string;
    name: string;
    background?: {
        type: string;
        name?: string;
    };
    backgroundImage?: {
        url: string;
        coverUrl: string;
    };
}

export interface BoardDto {
    id: string;
    projectId: string;
    position: number;
    name: string;
    createdAt: string;
    updatedAt?: string;
}

export interface CardDto {
    id: string;
    createdAt: string;
    updatedAt?: string;
    position: number;
    name: string;
    description?: string;
    dueDate?: string;
    isDueDateCompleted?: boolean;
    stopwatch?: {
        startedAt?: string;
        total: number;
    };
    boardId: string;
    listId?: string;
    creatorUserId: string;
    coverAttachmentId?: string;
    isSubscribed?: boolean;
}

export enum LabelColorEnum {
    BERRY_RED = 'berry-red',
    PUMPKIN_ORANGE = 'pumpkin-orange',
    LAGOON_BLUE = 'lagoon-blue',
    PINK_TULIP = 'pink-tulip',
    LIGHT_MUD = 'light-mud',
    ORANGE_PEEL = 'orange-peel',
    BRIGHT_MOSS = 'bright-moss',
    ANTIQUE_BLUE = 'antique-blue',
    DARK_GRANITE = 'dark-granite',
    LAGUNE_BLUE = 'lagune-blue',
    SUNNY_GRASS = 'sunny-grass',
    MORNING_SKY = 'morning-sky',
    LIGHT_ORANGE = 'light-orange',
    MIDNIGHT_BLUE = 'midnight-blue',
    TANK_GREEN = 'tank-green',
    GUN_METAL = 'gun-metal',
    WET_MOSS = 'wet-moss',
    RED_BURGUNDY = 'red-burgundy',
    LIGHT_CONCRETE = 'light-concrete',
    APRICOT_RED = 'apricot-red',
    DESERT_SAND = 'desert-sand',
    NAVY_BLUE = 'navy-blue',
    EGG_YELLOW = 'egg-yellow',
    CORAL_GREEN = 'coral-green',
    LIGHT_COCOA = 'light-cocoa'
}

export enum BoardMembershipRoleEnum {
    EDITOR = 'editor',
    VIEWER = 'viewer'
}

export interface ApiListResponse<T, I = any> {
    items: T[];
    included: I;
}

export interface ApiItemResponse<T, I = any> {
    item: T;
    included: I;
}

export interface BoardMembershipDto {
    id: string;
    createdAt: string;
    updatedAt?: string;
    role: BoardMembershipRoleEnum;
    canComment: boolean | null;
    boardId: string;
    userId: string;
} 