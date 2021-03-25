// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should give us a string when called', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it('should say "Hello, Jane!"', function () {
        expect(sayHello('Jane')).toBe('Hello, Jane!');
    });
    it('should say "Hello, Alex!"', function () {
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
    it('should say "Hello, Pat!"', function () {
        expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it('should say "Hello, World!', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should say "Hello, World!" if true passed' , function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should say "Hello, World!" if false passed' , function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });
});

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return true if 5 is passed', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true if string "5" is passed', function () {
        expect(isFive('5')).toBe(true);
    });
});

describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return true if input is an even number', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should should return true is input is -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should expect return false if input is 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should expect non-number strings to return false', function () {
        expect(isEven('banana')).toBe(false);
    });
    it('should expect number as a string to be true', function () {
        expect(isEven('8')).toBe(true);
    });
    // it('should expect infinity to return false', function () {
    //     expect(isEven(infinity)).toBe(false);
    // });
    it('should return false if boolean false passed', function () {
      expect(isEven(false)).toBe(false);
    });
    it('should return false if no input', function () {
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function () {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should return true if vowel', function () {
        expect(isVowel('e')).toBe(true);
    });
    it('should return true if capitalized vowel', function () {
        expect(isVowel('A')).toBe(true);
    });
    it('should return false is a number is passed', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false if "banana" passed', function () {
       expect(isVowel('banana')).toBe(false);
    });
    it('should expect no valuse passed to be false', function () {
        expect(isVowel()).toBe(false);
    });
    it('should expect boolean values to be false', function () {
        expect(isVowel(true)).toBe(false);
    });
});

describe('add', function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should add to passed number values together', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should should add string number value', function () {
        expect(add('2', '3')).toBe(5);
    });
    // it('should return NaN for non number string values', function () {
    //     expect(add('silly', 'me')).toBe(NaN);
    // });
});