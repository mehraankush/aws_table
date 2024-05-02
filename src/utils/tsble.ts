export const getTextFilterCounterText = (count: number) => `${count} ${count === 1 ? 'match' : 'matches'}`;

export const getHeaderCounterText = (
    items: ReadonlyArray<unknown>,
    selectedItems: ReadonlyArray<unknown> | undefined
  ) => {
    return selectedItems && selectedItems?.length > 0 ? `(${selectedItems.length}/${items.length})` : `(${items.length})`;
  };
  