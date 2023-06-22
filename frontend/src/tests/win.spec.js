import { expect, test, describe } from "@jest/globals"

import { is_win } from "../libs/win/lib/functions.js"
import { win_data_set } from "./win_data_set.js"

describe(win_data_set["describe"], () => {
  describe.each(win_data_set["tests"])(
    ".is_win($board)",
    ({ board, expected }) => {
      test(`returns ${expected}`, () => {
        expect(is_win(board)).toEqual(expected)
      })
    }
  )
})
