/**
 * Interface representing a portfolio asset
 */
export interface Asset {
  /** The name of the asset */
  name: string;

  /** The current value of the asset */
  value: number;
}

/**
 * Finds the largest holding in a portfolio
 * @param assets - Array of assets in the portfolio
 * @returns The asset with the highest value, or null if empty
 */
export const findLargestHolding = (assets: Asset[]): Asset | null => {
  if (assets.length === 0) return null;

  return assets.reduce((largest, current) =>
    current.value > largest.value ? current : largest
  );
};

/**
 * Calculates the asset allocation percentages in a portfolio
 * @param assets - Array of assets in the portfolio
 * @returns An object mapping asset names to their percentage of the portfolio
 */
export const calculateAssetAllocation = (
  assets: Asset[]
): { [key: string]: number } => {
  if (assets.length === 0) return {};

  const total = assets.reduce((sum, asset) => sum + asset.value, 0);

  return assets.reduce((allocation, asset) => {
    allocation[asset.name] = (asset.value / total) * 100;
    return allocation;
  }, {} as { [key: string]: number });
};

