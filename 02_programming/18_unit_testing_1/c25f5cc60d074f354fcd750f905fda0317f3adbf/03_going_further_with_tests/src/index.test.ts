let mockArray = [];
let mockObject = {};

beforeEach(() => {
  mockArray = [];
  mockObject = {};
});

describe("Let the tests on arrays begin !", () => {
  // The following arrays are a short list of "must watch" movies.
  // Write a test for each of them, respecting the conditions written in the requirements.
  // Be sure to always test if you test passes with the right conditions but also if
  // it does fail with the wrong conditions. Don't forget `expect.assertions`!

  // Here's an example:
  test("Should be a collection of 2 movies", () => {
    expect.assertions(1);

    mockArray = ["Into the wild", "Alien the 8th passenger"];

    expect(mockArray.length).toBe(2);
  });

  // Create a test that ensures that "Alien the 8th passenger" is present in mockArray.
  test("Alien the 8th passenger is present in mockArray", () => {
    expect.assertions(1);

    mockArray = ["Into the wild", "Alien the 8th passenger", "Ip Man", "Tombeau des lucioles", "fight club"];

    expect(mockArray).toContain("Alien the 8th passenger");
  });

  // Create a test that fails if "Indiana Jones 4" is present in mockArray.
  test("Indiana Jones 4 should not be in mockArray", () => {
    expect.assertions(1);

    mockArray = ["Into the wild", "Alien the 8th passenger", "Ip Man", "Tombeau des lucioles", "fight club"];

    expect(mockArray).not.toContain("Indiana Jones 4");
  });

  // Create a test fails if the list has less than 5 elements.
  test("mockArray should have a least 5 elements", () => {
    expect.assertions(1);

    mockArray = [
      "Lord of the rings : the return of the king",
      "Into the wild",
      "Alien the 8th passenger",
      "Tombeau des lucioles",
      "fight club",
    ];

    expect(mockArray.length).toBe(5);
  });

  // Create a test that checks if the array only contains String element.
  // Remember that a test is code, you are not limited to using `expect`.
  test("should only contains string", () => {
    expect.assertions(1);

    mockArray = [
      "Lord of the rings : the return of the king",
      "Into the wild",
      "Alien the 8th passenger",
      "Tombeau des lucioles",
      "fight club",
    ];

    let isTheArrayOnlyString = true;

    for (let i = 0; i < mockArray.length; i++) {
      if (typeof mockArray[i] !== "string") {
        isTheArrayOnlyString = false;
      }
    }

    expect(isTheArrayOnlyString).toBe(true);
  });

  // Create a test that passes if there's at least one film with "Lord of the rings" inside mockArray.
  test("should contain `Lord of the rings`", () => {
    expect.assertions(1);

    mockArray = [
      "Lord of the rings : the return of the king",
      "Into the wild",
      "Alien the 8th passenger",
      "Tombeau des lucioles",
      "fight club",
    ];

    let mockArrayIndex;
    let doesItIncludes = false;

    for (let i = 0; i < mockArray.length; i++) {
      mockArrayIndex = mockArray[i];
      if (mockArrayIndex.includes("Lord of the rings")) {
        doesItIncludes = true;
      }
    }

    expect(doesItIncludes).toBe(true);
  });

  //Create a test that checks if the elements in mockArray respect that the strings are the same with the right order as solutionArray
  //eg : mockArray = ["Blue","Blue","Red", "Yellow"] would fail the test
  test("should be exactly the same a `solutionArray`", () => {
    expect.assertions(1);

    mockArray = ["Blue", "Red", "Blue", "Yellow"];
    const solutionArray = ["Blue", "Red", "Blue", "Yellow"];

    expect(mockArray).toStrictEqual(solutionArray);
  });
});

describe("Let the tests on objects begin !", () => {
  // Create a test that ensures that your 'command' object contains at least `fries: true` and `sauce: "Hannibal"` without checking properties one by one
  // You should do it with only one assertion.
  // Hint: we want our mock object to _match_ another smaller object (look at the documentation!)
  test("should contains `fries: true` and `sauce: Hannibal`", () => {
    expect.assertions(1);

    mockObject = {
      sauce: "Hannibal",
      fries: true,
      kebab: "Double",
      soda: "Sprite",
    };

    const command = {
      sauce: "Hannibal",
      fries: true,
    };

    expect(mockObject).toMatchObject(command);
  });
});

//At the end, your file should contain 7 test (8 with the given example).
