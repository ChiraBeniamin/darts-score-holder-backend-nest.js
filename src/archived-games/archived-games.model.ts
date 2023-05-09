import * as mongoose from 'mongoose';

export const ArchivedGamesSchema = new mongoose.Schema({
  title: String,
  gameLegs: Number,
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

export interface ArchivedGame extends mongoose.Document {
  title: string;
  gameLegs: number;
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
  gameType: number;
}
