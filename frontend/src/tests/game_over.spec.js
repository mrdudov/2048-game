import { expect, test, describe } from "@jest/globals"

import { is_game_over } from "../libs/game_over.js" 
import { game_over_data_set } from "./game_over_test_data_set.js" 

describe(game_over_data_set["describe"], () => {
  describe.each(game_over_data_set["tests"])(
    ".is_game_over($board)",
    ({ board, expected }) => {
      test(`returns ${expected}`, () => {
        expect(is_game_over(board)).toEqual(expected)
      })
    }
  )
})

