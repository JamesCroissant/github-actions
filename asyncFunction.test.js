const isThinking = require("./asyncFunction");

test("data is equal to I'm done thinking!", async () => {
  const data = await isThinking();
  expect(data).toBe("I'm done thinking!")
})