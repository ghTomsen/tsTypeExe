import type { Equal } from '@type-challenges/utils'

export type Includes<T extends any[], U> =
    T extends [infer Fir, ...infer Rest]
    ? Equal<Fir, U> extends true ? true : Includes<Rest, U>
    : false;