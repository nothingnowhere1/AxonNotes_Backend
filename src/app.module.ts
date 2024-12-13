import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_USER} from "./app.constant";

@Module({
	imports: [TypeOrmModule.forRoot({
		type: 'postgres',
		host: POSTGRES_HOST,
		port: POSTGRES_PORT,
		username: POSTGRES_USER,
		password: POSTGRES_PASSWORD,
		database: 'postgres',
		entities: [__dirname + '/**/*.entity{.ts,.js}'],
		synchronize: true,
	}),],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {
}
