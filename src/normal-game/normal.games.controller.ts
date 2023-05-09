import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { NormalGamesService } from './normal.games.service';
import { NormalGame } from './games.model';

@Controller('normal-games')
export class NormalGamesController {
  constructor(private normalGamesService: NormalGamesService) {}

  @Post()
  createGame(@Body() normalGame: NormalGame): any {
    this.normalGamesService.create(normalGame);
    return {
      message: 'The game has been successfully created',
      data: normalGame,
    };
  }

  @Get()
  async getGames() {
    return await this.normalGamesService.getAll();
  }

  @Get(':title')
  async getGame(@Param('title') title: string) {
    return await this.normalGamesService.get(title);
  }

  @Patch(':title')
  async updateGame(
    @Param('title') title: string,
    @Body() normalGame: NormalGame,
  ) {
    const game = normalGame;
    await this.normalGamesService.update(game, title);
    return game;
  }

  @Delete(':id')
  async deleteGame(@Param('id') id: string) {
    await this.normalGamesService.delete(id);
    return JSON.stringify(`The game with id: ${id} has been deleted!`);
  }
}
