/**
 * Interface representing the portfolio performance result
 */
export interface PortfolioPerformance {
  initialInvestment: number;
  currentValue: number;
  profitOrLoss: number;
  percentageChange: number;
  performanceSummary: string;
}

/**
 * Calculates the performance of a financial portfolio
 * @param initialInvestment - The starting investment amount
 * @param currentValue - The current value of the portfolio
 * @returns PortfolioPerformance object with calculation results
 */
export const calculatePortfolioPerformance = (
  initialInvestment: number,
  currentValue: number
): PortfolioPerformance => {
  const profitOrLoss = currentValue - initialInvestment; // Corrected Formula
  const percentageChange =
    (profitOrLoss / initialInvestment) * 100; // Corrected Formula

  // Use a ternary expression instead of if statements
  const performanceSummary =
    percentageChange > 20
      ? `The portfolio has gained significantly with a profit of $${profitOrLoss}.`
      : percentageChange < 0
      ? `The portfolio has declined with a loss of $${Math.abs(profitOrLoss)}.`
      : `The portfolio has shown little or no change.`;

  return {
    initialInvestment,
    currentValue,
    profitOrLoss,
    percentageChange,
    performanceSummary,
  };
};
