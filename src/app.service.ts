import {Inject, Injectable} from '@nestjs/common';
import {Client} from 'pg';

@Injectable()
export class AppService {
	constructor(@Inject('PG_CONNECTION') private client: Client) {
	}

	async onModuleInit() {
		await this.client.connect();
	}

	async getUsers() {
		const res = await this.client.query('SELECT * FROM users');
		return res.rows;
	}

	getHello(): string {
		return 'Hello World!';
	}
}
