import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { SWAGGER_ENDPOINT } from './app.constant'
import { INestApplication } from '@nestjs/common'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	SwaggerSetup(app)
	await app.listen(process.env.PORT ?? 3000)
}

function SwaggerSetup(app: INestApplication) {
	if ( !SWAGGER_ENDPOINT ) return false

	const config = new DocumentBuilder()
		.setTitle('AxonNotes')
		.setDescription('AxonNotes API')
		.setVersion('0.1')
		.build()

	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup(SWAGGER_ENDPOINT, app, document)
	return SWAGGER_ENDPOINT
}

bootstrap()
