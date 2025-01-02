function sum(a, b){
  return a+b;
}

function concatObject(a,b){
  return {
      ...a,
      ...b
  }
}
beforeAll(()=> {
  console.log("This is before All");
});

describe("Sum.js Unit Test", ()=>{
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  
  test("Concat 2 objects together", ()=>{
      const result = expect(concatObject({name: "An"}, {lastname: "Le"}));
      result.not.toBeNull();
      result.toHaveProperty("name", "An");
  })

  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  });

  test('the shopping list has milk on it', () => {
    const shoppingList = [
      'diapers',
      'kleenex',
      'trash bags',
      'paper towels',
      'milk',
    ];
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });
})
