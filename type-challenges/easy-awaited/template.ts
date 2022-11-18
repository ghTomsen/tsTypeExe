type MyAwaited<T> = T extends Promise<infer X>
    ? MyAwaited<X>
    : (T extends {
        then: (onfulfilled: (arg: infer U) => any) => any
    }
        ? U
        : T)