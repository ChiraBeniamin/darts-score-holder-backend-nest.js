import { Module } from '@nestjs/common';
import { ArchivedGamesController } from './archived-games.controller';
import { ArchivedGamesService } from './archived-games.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ArchivedGamesSchema } from './archived-games.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ArchivedGame', schema: ArchivedGamesSchema },
    ]),
  ],
  controllers: [ArchivedGamesController],
  providers: [ArchivedGamesService],
})
export class ArchivedGamesModule {}
