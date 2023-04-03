const plus = (a, b) => {
  return a + b;
};

const multiply = (a, b) => {
  return a * b;
};

describe("Belajar test", () => {
  it("plus", () => {
    const res = plus(1, 2);
    expect(res).toEqual(3);

    const res1 = plus(2, 2);
    expect(res1).toEqual(4);

    const res2 = plus(2, 3);
    expect(res2).toEqual(5);
  });

  it("multiply", () => {
    const res = multiply(1, 2);
    expect(res).toEqual(2);

    const res1 = multiply(2, 2);
    expect(res1).toEqual(4);

    const res2 = multiply(2, 3);
    expect(res2).toEqual(6);
  });
});
