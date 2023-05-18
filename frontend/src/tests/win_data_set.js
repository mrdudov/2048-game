export { win_data_set }

const win_data_set = {
  describe: "game over",
  tests: [
    {
      board: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      expected: false,
    },
    {
      board: [
        [16, 8, 4, 2],
        [4, 16, 8, 4],
        [2, 8, 16, 64],
        [4, 64, 128, 2],
      ],
      expected: false,
    },
    {
      board: [
        [16, 8, 4, 2],
        [4, 16, 8, 4],
        [2, 8, 16, 64],
        [4, 64, 128, 2048],
      ],
      expected: true,
    },
  ],
}
