import sum from '../sum'

test('empty adds equal to 0', () => {
    expect(sum()).toBe(0)
})

test('...adds equal to sum', () => {
    expect(sum(1, 2)).toBe(3)
})