import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AxonNotesModule } from "./database/axon_notes/axon_notes.module";
import CON from "./database/db.connection";

@Module({
  imports: [
    // @ts-ignore
    TypeOrmModule.forRoot({
      ...CON,
      synchronize: true,
      autoLoadEntities: true,
    }),
    AxonNotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
