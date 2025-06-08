export interface PaginatedResponse<T> {
  data: T[];

  page: number;

  limit: number;

  totalItems: number;

  totalPages: number;
}

export interface Phrase {
  id: number;

  content: string;

  author: string;

  date: string;
}

export interface GetPhrasesParams {
  search?: string;

  page?: number;

  limit?: number;
}
