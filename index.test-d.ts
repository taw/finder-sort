import finderSort from '.'
import { expectType } from 'tsd'

{
  const sorted = finderSort(['file1.txt', 'file2.txt'])
  expectType<string[]>(sorted)
}

{
  const sorted = finderSort(['file1.txt', 'file2.txt'], (filename) => filename.toUpperCase())
  expectType<string[]>(sorted)
}

{
  const sorted = finderSort(
    [
      { file: 'file1.txt', index: 0 },
      { file: 'file2.txt', index: 1 },
    ],
    (item) => item.file
  )
  expectType<{ file: string; index: number }[]>(sorted)
}
