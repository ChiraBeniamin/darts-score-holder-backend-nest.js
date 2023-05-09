import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ArchivedGame } from './archived-games.model';

@Injectable()
export class ArchivedGamesService {
  constructor(
    @InjectModel('ArchivedGame')
    private readonly gameModel: Model<ArchivedGame>,
  ) {}

  async archive(game: ArchivedGame) {
    const newGame = new this.gameModel({
      title: game.title,
      gameLegs: game.gameLegs,
      players: {
        playerOne: {
          name: game.players.playerOne.name,
          totalAverage: game.players.playerOne.totalAverage,
          averageWithoutDoubles: game.players.playerOne.averageWithoutDoubles,
          legs: game.players.playerOne.legs,
          score: game.players.playerOne.score,
          turns: game.players.playerOne.turns,
          allTurns: game.players.playerOne.allTurns,
        },
        playerTwo: {
          name: game.players.playerTwo.name,
          totalAverage: game.players.playerTwo.totalAverage,
          averageWithoutDoubles: game.players.playerTwo.averageWithoutDoubles,
          legs: game.players.playerTwo.legs,
          score: game.players.playerTwo.score,
          turns: game.players.playerTwo.turns,
          allTurns: game.players.playerTwo.allTurns,
        },
      },
      gameType: game.gameType,
    });
    const result = await newGame.save();
    return result.id as string;
  }

  async getAllArchivedGames() {
    const games = await this.gameModel.find().exec();
    return games;
  }
}
