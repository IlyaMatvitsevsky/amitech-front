export const filterEdge = <T>(edge: T | null | undefined): edge is T => !!edge

export const filterEdges = <T>(
  edges: (T | null | undefined)[] | null | undefined
) => edges?.filter(filterEdge) ?? []

export const getEntityMap = <T extends { id: number | string }>(
  array: T[]
): Record<string, T> => {
  return array.reduce(
    (acc, item) => ({
      ...acc,
      [item.id]: item,
    }),
    {}
  )
}