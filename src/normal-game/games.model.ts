import * as mongoose from 'mongoose';

export const NormalGameSchema = new mongoose.Schema({
  title: String,
  gameLegs: Number,
  turn: Number,
  startingTurn: Number,
  players: {
    playerOne: {
      name: String,
      totalAverage: Number,
      averageWithoutDoubles: Number,
      legs: Number,
      score: Number,
      turns: Array,
      allTurns: Array,
    },
    playerTwo: {
      name: String,
      totalAverage: Number,
      averageWithoutDoubles: Number,
      legs: Number,
      score: Number,
      turns: Array,
      allTurns: Array,
    },
  },
  gameType: Number,
});

export interface NormalGame extends mongoose.Document {
  title: string;
  gameLegs: number;
  gameType: number;
  turn: number;
  startingTurn: number;
  players: {
    playerOne: {
      name: string;
      totalAverage: number;
      averageWithoutDoubles: number;
      legs: number;
      score: number;
      turns: number[];
      allTurns: number[];
    };
    playerTwo: {
      name: string;
      totalAverage: number;
      averageWithoutDoubles: number;
      legs: number;
      score: number;
      turns: number[];
      allTurns: number[];
    };
  };
}
