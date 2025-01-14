import { ApiClient } from '../ApiClient.js';
import { ProjectDto, UserDto, BoardDto, BoardMembershipDto, ApiListResponse, ApiItemResponse } from '../types/index.js';

interface ProjectIncluded {
    users: UserDto[];
    projectManagers: Array<{
        id: string;
        createdAt: string;
        updatedAt?: string;
        projectId: string;
        userId: string;
    }>;
    boards: BoardDto[];
    boardMemberships: BoardMembershipDto[];
}

export class ProjectController extends ApiClient {
    constructor(baseURL: string, authToken: string) {
        super(baseURL, authToken);
    }

    async list(): Promise<ApiListResponse<ProjectDto, ProjectIncluded>> {
        return this.apiGet<ApiListResponse<ProjectDto, ProjectIncluded>>('/api/projects');
    }

    async create(name: string): Promise<ApiItemResponse<ProjectDto, ProjectIncluded>> {
        return this.apiPost<ApiItemResponse<ProjectDto, ProjectIncluded>>('/api/projects', { name });
    }

    async get(projectId: string): Promise<ApiItemResponse<ProjectDto, ProjectIncluded>> {
        return this.apiGet<ApiItemResponse<ProjectDto, ProjectIncluded>>(`/api/projects/${projectId}`);
    }

    async update(project: ProjectDto): Promise<ApiItemResponse<ProjectDto, ProjectIncluded>> {
        return this.apiPatch<ApiItemResponse<ProjectDto, ProjectIncluded>>(`/api/projects/${project.id}`, project);
    }

    async delete(projectId: string): Promise<ApiItemResponse<ProjectDto, ProjectIncluded>> {
        return this.apiDelete<ApiItemResponse<ProjectDto, ProjectIncluded>>(`/api/projects/${projectId}`);
    }

    async updateBackgroundImage(projectId: string, file: string): Promise<ApiItemResponse<ProjectDto, ProjectIncluded>> {
        return this.apiPost<ApiItemResponse<ProjectDto, ProjectIncluded>>(`/api/projects/${projectId}/background-image`, { file });
    }
} 