const sum = (...a: number[]) => a.reduce((acc, val) => acc + val, 0);

export { sum as default };
