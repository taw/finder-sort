declare function finderSort(data: string[]): string[]
declare function finderSort<T>(data: T[], key_func: (item: T) => string): T[]

export = finderSort
