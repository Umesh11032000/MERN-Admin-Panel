import { config } from 'dotenv';

config({
    path: `.env.${process.env.NODE_ENV || 'development'}.local`
});

export const {
    DB_URL,
    PORT,
    JWT_SECRET,
    MONGODB_URI,
    JWT_EXPIRATION
} = process.env;