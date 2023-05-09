import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArchivedGamesService } from './archived-games.service';
import { NormalGame } from '../normal-game/games.model';

@Controller('archived-games')
export class ArchivedGamesController {
  constructor(private archivedGamesService: ArchivedGamesService) {}

  @Post()
  archiveGame(@Body() normalGame: NormalGame): any {
    this.archivedGamesService.archive(normalGame);
    return {
      message: 'The game has been successfully created',
      data: normalGame,
    };
  }

  @Get()
  async getArchivedGames() {
    return await this.archivedGamesService.getAllArchivedGames();
  }
}
