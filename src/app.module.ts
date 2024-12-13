import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { POSTGRES_DB, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_USER, } from './app.constant'

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: POSTGRES_HOST,
			port: POSTGRES_PORT,
			username: POSTGRES_USER,
			password: POSTGRES_PASSWORD,
			database: POSTGRES_DB,
			entities: [__dirname + '/**/*.entity{.ts,.js}'],
			migrations: [__dirname + '/**/*.migrations{.ts,.js}'],
			synchronize: false,
		}),
	], controllers: [AppController], providers: [AppService],
})
export class AppModule {
}
