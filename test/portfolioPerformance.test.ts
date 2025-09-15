import { calculatePortfolioPerformance } from "../portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
  it("should calculate profit when currentValue > initialInvestment", () => {
    // ARRANGE
    const initial = 10000;
    const current = 12000;

    // ACT
    const result = calculatePortfolioPerformance(initial, current);

    // ASSERT
    expect(result.profitOrLoss).toBe(2000);
    expect(result.percentageChange).toBe(20);
    expect(result.performanceSummary).toContain("gained");
  });

  it("should calculate loss when currentValue < initialInvestment", () => {
    // ARRANGE
    const initial = 10000;
    const current = 8000;

    // ACT
    const result = calculatePortfolioPerformance(initial, current);

    // ASSERT
    expect(result.profitOrLoss).toBe(-2000);
    expect(result.percentageChange).toBe(-20);
    expect(result.performanceSummary).toContain("declined");
  });

  it("should handle no change when currentValue = initialInvestment", () => {
    // ARRANGE
    const initial = 10000;
    const current = 10000;

    // ACT
    const result = calculatePortfolioPerformance(initial, current);

    // ASSERT
    expect(result.profitOrLoss).toBe(0);
    expect(result.percentageChange).toBe(0);
    expect(result.performanceSummary).toContain("little or no change");
  });
});
