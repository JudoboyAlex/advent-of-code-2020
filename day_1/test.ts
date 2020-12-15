const assert = require("assert");
const test_part_one = require("./solution_part1");
const test_part_two = require("./solution_part2");

describe("Part One Testing", () => {
  it("should return 514579 with input", () => {
    let input = ["1721", "979", "366", "299", "675", "1456"];
    assert.strictEqual(test_part_one(input), 514579);
  });
});

describe("Part Two Testing", () => {
  it("should return 19999980 with input", () => {
    let input = ["190", "1001", "20", "999"];
    assert.strictEqual(test_part_two(input), 19999980);
  });
});

