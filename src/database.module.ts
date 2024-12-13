import {Module} from '@nestjs/common';
import {Client} from 'pg';
import {POSTGRES_DB, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_USER} from './app.constant';

@Module({
    providers: [{
        provide: 'PG_CONNECTION', useValue: new Client({
            host: POSTGRES_HOST,
            port: POSTGRES_PORT,
            user: POSTGRES_USER,
            password: POSTGRES_PASSWORD,
            database: POSTGRES_DB
        })
    }], exports: ['PG_CONNECTION']
})

export class DatabaseModule {
}
