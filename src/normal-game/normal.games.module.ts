import { Module } from '@nestjs/common';
import { NormalGamesController } from './normal.games.controller';
import { NormalGamesService } from './normal.games.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NormalGameSchema } from './games.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'NormalGame', schema: NormalGameSchema },
    ]),
  ],
  controllers: [NormalGamesController],
  providers: [NormalGamesService],
})
export class NormalGamesModule {}
