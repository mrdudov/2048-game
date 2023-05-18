export { double_adding_case_1, double_adding_case_2 };

const double_adding_case_1 = {
  describe: "double adding case 1",
  tests: [
    {
      title: "move right",
      game_board: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [2, 8, 8, 16],
        [0, 0, 0, 0],
      ],
      direction: "right",
      expected: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 2, 16, 16],
        [0, 0, 0, 0],
      ],
    },
    {
      title: "move left",
      game_board: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [16, 8, 8, 2],
        [0, 0, 0, 0],
      ],
      direction: "left",
      expected: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [16, 16, 2, 0],
        [0, 0, 0, 0],
      ],
    },
    {
      title: "move up",
      game_board: [
        [0, 0, 16, 0],
        [0, 0, 8, 0],
        [0, 0, 8, 0],
        [0, 0, 2, 0],
      ],
      direction: "up",
      expected: [
        [0, 0, 16, 0],
        [0, 0, 16, 0],
        [0, 0, 2, 0],
        [0, 0, 0, 0],
      ],
    },
    {
      title: "move down",
      game_board: [
        [0, 0, 2, 0],
        [0, 0, 8, 0],
        [0, 0, 8, 0],
        [0, 0, 16, 0],
      ],
      direction: "down",
      expected: [
        [0, 0, 0, 0],
        [0, 0, 2, 0],
        [0, 0, 16, 0],
        [0, 0, 16, 0],
      ],
    },
  ],
}

const double_adding_case_2 = {
  describe: "double adding case 2",
  tests: [
    {
      title: "move left",
      game_board: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [2, 8, 8, 16],
        [0, 0, 0, 0],
      ],
      direction: "left",
      expected: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [2, 16, 16, 0],
        [0, 0, 0, 0],
      ],
    },
    {
      title: "move right",
      game_board: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [16, 8, 8, 2],
        [0, 0, 0, 0],
      ],
      direction: "right",
      expected: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 16, 16, 2],
        [0, 0, 0, 0],
      ],
    },
    {
      title: "move down",
      game_board: [
        [0, 0, 16, 0],
        [0, 0, 8, 0],
        [0, 0, 8, 0],
        [0, 0, 2, 0],
      ],
      direction: "down",
      expected: [
        [0, 0, 0, 0],
        [0, 0, 16, 0],
        [0, 0, 16, 0],
        [0, 0, 2, 0],
      ],
    },
    {
      title: "move up",
      game_board: [
        [0, 0, 2, 0],
        [0, 0, 8, 0],
        [0, 0, 8, 0],
        [0, 0, 16, 0],
      ],
      direction: "up",
      expected: [
        [0, 0, 2, 0],
        [0, 0, 16, 0],
        [0, 0, 16, 0],
        [0, 0, 0, 0],
      ],
    },
  ],
}
