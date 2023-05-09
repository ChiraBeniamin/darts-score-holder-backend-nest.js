import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NormalGamesModule } from './normal-game/normal.games.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ArchivedGamesModule } from './archived-games/archived-games.module';

@Module({
  imports: [
    NormalGamesModule,
    ArchivedGamesModule,
    MongooseModule.forRoot(
      'mongodb+srv://beniChira:blingbling10C@cluster1.6frv00k.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
