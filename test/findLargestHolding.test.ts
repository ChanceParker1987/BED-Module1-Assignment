import { findLargestHolding, Asset } from "../portfolio/portfolioUtils";

describe("findLargestHolding", () => {
  it("should return the asset with the highest value", () => {
    // ARRANGE
    const assets: Asset[] = [
      { name: "Stocks", value: 5000 },
      { name: "Bonds", value: 7000 },
      { name: "Real Estate", value: 12000 },
    ];

    // ACT
    const result = findLargestHolding(assets);

    // ASSERT
    expect(result).toEqual({ name: "Real Estate", value: 12000 });
  });

  it("should return null for an empty array", () => {
    // ARRANGE
    const assets: Asset[] = [];

    // ACT
    const result = findLargestHolding(assets);

    // ASSERT
    expect(result).toBeNull();
  });

  it("should return the first asset if values are tied", () => {
    // ARRANGE
    const assets: Asset[] = [
      { name: "Stocks", value: 10000 },
      { name: "Bonds", value: 10000 },
    ];

    // ACT
    const result = findLargestHolding(assets);

    // ASSERT
    expect(result).toEqual({ name: "Stocks", value: 10000 });
  });
});
