# Planka TypeScript API Client

TypeScript клиент для работы с API Planka.

## Установка

```bash
npm install planka-ts-api
```

## Использование

```typescript
import { 
    UserController, 
    ProjectController,
    BoardController,
    CardController 
} from 'planka-ts-api';

const baseURL = 'https://your-planka-instance.com';
const authToken = 'your-auth-token';

// Создание экземпляров контроллеров
const userController = new UserController(baseURL, authToken);
const projectController = new ProjectController(baseURL, authToken);
const boardController = new BoardController(baseURL, authToken);
const cardController = new CardController(baseURL, authToken);

// Примеры использования

// Получение списка пользователей
const users = await userController.list();

// Создание нового проекта
const project = await projectController.create('Новый проект');

// Создание доски в проекте
const board = await boardController.create(project.id, 'Новая доска', 0);

// Создание карточки
const card = await cardController.create('listId', 'Новая задача', 0);

// Обновление карточки
await cardController.update({
    ...card,
    name: 'Обновленная задача'
});
```

## Доступные контроллеры

- `AttachmentController` - управление вложениями
- `BoardController` - управление досками
- `BoardListController` - управление списками на досках
- `BoardMembershipController` - управление участниками досок
- `CardController` - управление карточками
- `CardLabelController` - управление метками карточек
- `CardTaskController` - управление задачами в карточках
- `CommentController` - управление комментариями
- `LabelController` - управление метками
- `NotificationController` - управление уведомлениями
- `ProjectController` - управление проектами
- `ProjectManagerController` - управление менеджерами проектов
- `UserController` - управление пользователями

## Типы данных

Библиотека включает TypeScript типы для всех сущностей:

- `UserDto`
- `ProjectDto`
- `BoardDto`
- `CardDto`
- `LabelColorEnum`
- `BoardMembershipRoleEnum`
- и другие

## Разработка

```bash
# Установка зависимостей
npm install

# Сборка
npm run build

# Запуск тестов
npm test
```

## Лицензия

MIT 