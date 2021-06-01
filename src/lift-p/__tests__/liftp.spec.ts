import { liftP } from "../"

describe('Lift promise', () => {
    let add: (x: number, y: number) => number
    let promise1: Promise<number>
    let promise2: Promise<number>

    beforeAll(() => {
        promise1 = Promise.resolve(1)
        promise2 = Promise.resolve(2)
        add = (numberX: number, numberY: number) => numberX + numberY
    })

    test('Compare with non-async function result', async () => {
        const addFunctionResult = add(1, 2)
        const addP = liftP(add)
        const result = await addP(promise1, promise2)

        expect(result).toBe(addFunctionResult)
    })

})
