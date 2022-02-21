function waitFor(time: number): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), time);
  });
}

waitFor(2000).then(() => {
  console.log("This will be printed after 2 seconds");
});

export { waitFor };
