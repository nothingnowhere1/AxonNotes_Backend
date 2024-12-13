export const POSTGRES_HOST: string = process.env.DB_HOST || '127.0.0.1'
export const POSTGRES_PORT: number = +process.env.DB_PORT || 5432
export const POSTGRES_USER: string = process.env.DB_USERNAME || 'postgres'
export const POSTGRES_PASSWORD: string = process.env.DB_PASSWORD || 'qwerty'
export const POSTGRES_DB: string = process.env.DB_NAME || "postgres"

export const SWAGGER_ENDPOINT: string = 'axonnotes'

export const HOST: string = process.env.HOST || '127.0.0.1'
