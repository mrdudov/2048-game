import { expect, test, describe } from "@jest/globals"

import { calc } from "../libs/calculate_gb"
import { double_adding_case_1, double_adding_case_2 } from "./test_data_set"

describe(double_adding_case_1["describe"], () => {
  describe.each(double_adding_case_1["tests"])(
    ".calc($direction, $game_board)",
    ({ title, game_board, direction, expected }) => {
      test(`${title} returns ${expected}`, () => {
        expect(calc(direction, game_board)["board"]).toEqual(expected)
      })
    }
  )
})

describe("double adding case 2", () => {
  describe.each(double_adding_case_2["tests"])(
    ".calc($direction, $game_board)",
    ({ title, game_board, direction, expected }) => {
      test(`${title} returns ${expected}`, () => {
        expect(calc(direction, game_board)["board"]).toEqual(expected)
      })
    }
  )
})
