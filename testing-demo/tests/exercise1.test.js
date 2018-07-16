const { fizzBuzz } = require('../exercise1');

describe('fizzBuzz', () => {
    it('should return the input if the requirements meet', () => {
        let regularNumber = 2;
        let result = fizzBuzz(regularNumber);
        expect(result).toBe(regularNumber);

        regularNumber = 7;
        result = fizzBuzz(regularNumber);
        expect(result).toBe(regularNumber);

        regularNumber = 11;
        result = fizzBuzz(regularNumber);
        expect(result).toBe(regularNumber);

        regularNumber = 13;
        result = fizzBuzz(regularNumber);
        expect(result).toBe(regularNumber);

        regularNumber = -1;
        result = fizzBuzz(regularNumber);
        expect(result).toBe(regularNumber);
    });

    it('should return FizzBuzz', () => {
        let result = fizzBuzz(0);
        expect(result).toBe('FizzBuzz');

        result = fizzBuzz(15);
        expect(result).toBe('FizzBuzz');

        result = fizzBuzz(30);
        expect(result).toBe('FizzBuzz');

        result = fizzBuzz(45);
        expect(result).toBe('FizzBuzz');

    })

    it('should return Fizz', () => {
        let inputs = [3, 6, 9, 12, 18, 21];
        inputs.forEach(input => {
            expect(fizzBuzz(input)).toBe('Fizz');
        })
    });

    it('should return Buzz', () => {
        let inputs = [5, 10, 20, 25, 35, 40, 50, 55];
        inputs.forEach(input => {
            expect(fizzBuzz(input)).toBe('Buzz');
        })
    })

    it('should throw errors', () => {
        let inputs = ['text', null, undefined];
        inputs.forEach(input => {
            expect(() => {fizzBuzz(input)}).toThrow();
        })
    })
});