export const liftP = <TParameters, TReturn> (fn: (...values: TParameters[]) => TReturn) => async (...args: Promise<TParameters>[]) => {
    return Promise.all(args).then(values => fn(...values))
}
