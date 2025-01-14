import { ApiClient } from '../ApiClient.js';

interface ProjectManagerDto {
    id: string;
    createdAt: string;
    updatedAt?: string;
    projectId: string;
    userId: string;
}

export class ProjectManagerController extends ApiClient {
    constructor(baseURL: string, authToken: string) {
        super(baseURL, authToken);
    }

    async add(projectId: string, userId: string): Promise<ProjectManagerDto> {
        return this.apiPost<ProjectManagerDto>(`/api/projects/${projectId}/managers`, { userId });
    }

    async remove(managerId: string): Promise<ProjectManagerDto> {
        return this.apiDelete<ProjectManagerDto>(`/api/project-managers/${managerId}`);
    }
} 