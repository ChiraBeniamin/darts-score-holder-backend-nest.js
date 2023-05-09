import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NormalGame } from './games.model';

@Injectable()
export class NormalGamesService {
  constructor(
    @InjectModel('NormalGame')
    private readonly gameModel: Model<NormalGame>,
  ) {}

  async create(game: NormalGame) {
    const newGame = new this.gameModel({
      title: game.title,
      gameLegs: game.gameLegs,
      gameType: game.gameType,
      turn: game.turn,
      startingTurn: game.startingTurn,
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
    });
    const result = await newGame.save();
    return result.id as string;
  }

  async getAll() {
    const games = await this.gameModel.find().exec();
    return games;
  }

  async get(title: string) {
    const game = await this.gameModel.findOne({ title: title });
    return game;
  }

  async update(game: NormalGame, title: string) {
    const updatedGame = await this.findGame(title);
    if (game) {
      if (game.players) {
        //PLAYER ONE CHECKS
        if (game.players.playerOne) {
          if (game.players.playerOne.score) {
            updatedGame.players.playerOne.score = game.players.playerOne.score;
          }
          if (game.players.playerOne.legs) {
            updatedGame.players.playerOne.legs = game.players.playerOne.legs;
          }
          if (game.players.playerOne.name) {
            updatedGame.players.playerOne.name = game.players.playerOne.name;
          }
          if (game.players.playerOne.totalAverage) {
            updatedGame.players.playerOne.totalAverage =
              game.players.playerOne.totalAverage;
          }
          if (game.players.playerOne.averageWithoutDoubles) {
            updatedGame.players.playerOne.averageWithoutDoubles =
              game.players.playerOne.averageWithoutDoubles;
          }
          if (game.players.playerOne.turns) {
            updatedGame.players.playerOne.turns = game.players.playerOne.turns;
          }
          if (game.players.playerOne.allTurns) {
            updatedGame.players.playerOne.allTurns =
              game.players.playerOne.allTurns;
          }
        }
        //PLAYER TWO CHECKS
        if (game.players.playerTwo) {
          if (game.players.playerTwo.score) {
            updatedGame.players.playerTwo.score = game.players.playerTwo.score;
          }
          if (game.players.playerTwo.legs) {
            updatedGame.players.playerTwo.legs = game.players.playerTwo.legs;
          }
          if (game.players.playerTwo.name) {
            updatedGame.players.playerTwo.name = game.players.playerTwo.name;
          }
          if (game.players.playerTwo.totalAverage) {
            updatedGame.players.playerTwo.totalAverage =
              game.players.playerTwo.totalAverage;
          }
          if (game.players.playerTwo.averageWithoutDoubles) {
            updatedGame.players.playerTwo.averageWithoutDoubles =
              game.players.playerTwo.averageWithoutDoubles;
          }
          if (game.players.playerTwo.turns) {
            updatedGame.players.playerTwo.turns = game.players.playerTwo.turns;
          }
          if (game.players.playerTwo.allTurns) {
            updatedGame.players.playerTwo.allTurns =
              game.players.playerTwo.allTurns;
          }
        }
      }
      if (game.title) {
        updatedGame.title = game.title;
      }
      if (game.gameLegs) {
        updatedGame.gameLegs = game.gameLegs;
      }
      if (game.gameType) {
        updatedGame.gameType = game.gameType;
      }
      if (game.turn) {
        updatedGame.turn = game.turn;
      }
      if (game.startingTurn) {
        updatedGame.startingTurn = game.startingTurn;
      }
    }
    return updatedGame.save();
  }

  async delete(id: string) {
    await this.gameModel.deleteOne({ _id: id }).exec();
  }

  private async findGame(title: string) {
    if (!title) {
      throw new NotFoundException('Could not find product');
    }
    const game = await this.gameModel.findOne({ title });
    return game;
  }
}
