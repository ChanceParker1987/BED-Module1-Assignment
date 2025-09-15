import { calculateAssetAllocation, Asset } from "../portfolio/portfolioUtils";

describe("calculateAssetAllocation", () => {
  it("should calculate even allocation", () => {
    // ARRANGE
    const assets: Asset[] = [
      { name: "Stocks", value: 5000 },
      { name: "Bonds", value: 5000 },
    ];

    // ACT
    const result = calculateAssetAllocation(assets);

    // ASSERT
    expect(result).toEqual({
      Stocks: 50,
      Bonds: 50,
    });
  });

  it("should calculate uneven allocation", () => {
    // ARRANGE
    const assets: Asset[] = [
      { name: "Stocks", value: 7000 },
      { name: "Bonds", value: 3000 },
    ];

    // ACT
    const result = calculateAssetAllocation(assets);

    // ASSERT
    expect(result).toEqual({
      Stocks: 70,
      Bonds: 30,
    });
  });

  it("should return empty object for empty array", () => {
    // ARRANGE
    const assets: Asset[] = [];

    // ACT
    const result = calculateAssetAllocation(assets);

    // ASSERT
    expect(result).toEqual({});
  });
});
