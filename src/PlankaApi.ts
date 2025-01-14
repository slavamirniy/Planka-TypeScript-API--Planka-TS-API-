import { AttachmentController } from './controllers/AttachmentController.js';
import { BoardController } from './controllers/BoardController.js';
import { BoardListController } from './controllers/BoardListController.js';
import { BoardMembershipController } from './controllers/BoardMembershipController.js';
import { CardController } from './controllers/CardController.js';
import { CardLabelController } from './controllers/CardLabelController.js';
import { CardTaskController } from './controllers/CardTaskController.js';
import { CommentController } from './controllers/CommentController.js';
import { LabelController } from './controllers/LabelController.js';
import { NotificationController } from './controllers/NotificationController.js';
import { ProjectController } from './controllers/ProjectController.js';
import { ProjectManagerController } from './controllers/ProjectManagerController.js';
import { UserController } from './controllers/UserController.js';
import axios from 'axios';

export class PlankaApi {
    public readonly attachments: AttachmentController;
    public readonly boards: BoardController;
    public readonly boardLists: BoardListController;
    public readonly boardMemberships: BoardMembershipController;
    public readonly cards: CardController;
    public readonly cardLabels: CardLabelController;
    public readonly cardTasks: CardTaskController;
    public readonly comments: CommentController;
    public readonly labels: LabelController;
    public readonly notifications: NotificationController;
    public readonly projects: ProjectController;
    public readonly projectManagers: ProjectManagerController;
    public readonly users: UserController;

    constructor(baseURL: string, authToken: string) {
        this.attachments = new AttachmentController(baseURL, authToken);
        this.boards = new BoardController(baseURL, authToken);
        this.boardLists = new BoardListController(baseURL, authToken);
        this.boardMemberships = new BoardMembershipController(baseURL, authToken);
        this.cards = new CardController(baseURL, authToken);
        this.cardLabels = new CardLabelController(baseURL, authToken);
        this.cardTasks = new CardTaskController(baseURL, authToken);
        this.comments = new CommentController(baseURL, authToken);
        this.labels = new LabelController(baseURL, authToken);
        this.notifications = new NotificationController(baseURL, authToken);
        this.projects = new ProjectController(baseURL, authToken);
        this.projectManagers = new ProjectManagerController(baseURL, authToken);
        this.users = new UserController(baseURL, authToken);
    }
}

export async function authenticate(baseURL: string, username: string, password: string): Promise<PlankaApi> {
    try {
        const response = await axios.post(`${baseURL}/api/access-tokens`, {
            emailOrUsername: username,
            password: password,
        });

        const authToken = response.data.item;

        return new PlankaApi(baseURL, authToken);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response?.status === 401) {
                throw new Error('Invalid username or password');
            }
            throw new Error(`Failed to authenticate: ${error.message}`);
        }
        throw new Error('An unexpected error occurred during authentication');
    }
}