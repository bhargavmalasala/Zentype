import Input from "./Input.js";
import Keyboard from "./Keyboard.js";
import Reset from "./Reset.js";
import Word from "./Word.js";
import Letter from "./Letter.js";
import Tile from "./Tile.js";

import {
  validInputKeys,
  textAreaInput,
  resetButton,
  paragraphs,
  wpmTile,
  accuracyTile,
  timeTile,
} from "./constants.js";

const wpmTileObj = new Tile(wpmTile);
const accuracyTileObj = new Tile(accuracyTile);
const timeTileObj = new Tile(timeTile);

const keyboardObj = new Keyboard();

const inputObj = new Input(
  keyboardObj,
  wpmTileObj,
  accuracyTileObj,
  timeTileObj
);

const resetObj = new Reset(resetButton, inputObj);
