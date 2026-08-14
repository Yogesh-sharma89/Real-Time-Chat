export interface ApiErrorResponse {
    success: boolean;
    message: string;
    code?: string;
    errors?: Record<string, string[]>;
}

export class ApiError extends Error {
    status: number;
    code?: string;
    errors?: Record<string, string[]>;

    constructor(
        message: string,
        status: number,
        code?: string,
        errors?: Record<string, string[]>
    ){
        super(message);

        this.status = status;
        this.code = code;
        this.errors=errors
    }

}
