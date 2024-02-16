function isThinking() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("I'm done thinking!")
    }, 3000);
  });
}

module.exports = isThinking