export interface Asset {
  name: string;
  value: number;
}

export const findLargestHolding = (assets: Asset[]): Asset | null => {
  if (assets.length === 0) return null;

  return assets.reduce((largest, current) =>
    current.value > largest.value ? current : largest
  );
};


