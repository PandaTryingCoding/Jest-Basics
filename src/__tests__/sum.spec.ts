import { sum } from "../sum";

describe("sum function", () => {
  it("should return the sum of two positive numbers", () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
  });
  it("should return the sum of two negative numbers", () => {
    const result = sum(-2, 1);
    expect(result).toBe(-1);
  });
});
