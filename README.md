# Planka TypeScript API Client

A TypeScript client for interacting with the Planka API.

## Installation
```bash
npm install planka-ts-api
```

## Usage

```typescript
import { 
    UserController, 
    ProjectController,
    BoardController,
    CardController 
} from 'planka-ts-api';

const baseURL = 'https://your-planka-instance.com';
const authToken = 'your-auth-token';

// Create controller instances
const userController = new UserController(baseURL, authToken);
const projectController = new ProjectController(baseURL, authToken);
const boardController = new BoardController(baseURL, authToken);
const cardController = new CardController(baseURL, authToken);

// Usage examples

// Get a list of users
const users = await userController.list();

// Create a new project
const project = await projectController.create('New Project');

// Create a board in the project
const board = await boardController.create(project.id, 'New Board', 0);

// Create a card
const card = await cardController.create('listId', 'New Task', 0);

// Update a card
await cardController.update({
    ...card,
    name: 'Updated Task'
});
```

## Available Controllers

- `AttachmentController` - Manage attachments
- `BoardController` - Manage boards
- `BoardListController` - Manage board lists
- `BoardMembershipController` - Manage board memberships
- `CardController` - Manage cards
- `CardLabelController` - Manage card labels
- `CardTaskController` - Manage card tasks
- `CommentController` - Manage comments
- `LabelController` - Manage labels
- `NotificationController` - Manage notifications
- `ProjectController` - Manage projects
- `ProjectManagerController` - Manage project managers
- `UserController` - Manage users

## Data Types

The library includes TypeScript types for all entities:

- `UserDto`
- `ProjectDto`
- `BoardDto`
- `CardDto`
- `LabelColorEnum`
- `BoardMembershipRoleEnum`
- and others

## Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test
```

## License

MIT