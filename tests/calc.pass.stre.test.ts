import { calculatePasswordStrength } from "../src/calculate-password-strength";

describe('CalculatePasswordStrength', () => {
    describe('Very Weak Password', () => {
        it('should return "Very Weak" for password with only lowercase letters', () => {
            expect(calculatePasswordStrength('abcdef')).toBe('Very Weak');
        });

        it('should return "Very Weak" for empty string', () => {
            expect(calculatePasswordStrength('')).toBe('Very Weak');
        });

        it('should return "Very Weak" for very short password', () => {
            expect(calculatePasswordStrength('abc')).toBe('Very Weak');
        });
    });

    describe('Weak Password', () => {
        it('should return "Weak" for password with lowercase and digits', () => {
            expect(calculatePasswordStrength('password123')).toBe('Weak');
        });

        it('should return "Weak" for password with uppercase and lowercase only', () => {
            expect(calculatePasswordStrength('PassWord')).toBe('Weak');
        });

        it('should return "Weak" for password with digits only', () => {
            expect(calculatePasswordStrength('12345678')).toBe('Weak');
        });
    });

    describe('Moderate Password', () => {
        it('should return "Moderate" for password with uppercase, lowercase, and digits', () => {
            expect(calculatePasswordStrength('Password123')).toBe('Moderate');
        });

        it('should return "Moderate" for 8+ chars with mixed case and digits', () => {
            expect(calculatePasswordStrength('MyPass123')).toBe('Moderate');
        });
    });

    describe('Strong Password', () => {
        it('should return "Strong" for password with all character types', () => {
            expect(calculatePasswordStrength('MyPass123!')).toBe('Strong');
        });

        it('should return "Strong" for complex password', () => {
            expect(calculatePasswordStrength('Secure@Pass123')).toBe('Strong');
        });

        it('should return "Strong" for long password with special chars', () => {
            expect(calculatePasswordStrength('MySecurePassword123!@#')).toBe('Strong');
        });
    });

    describe('Edge Cases', () => {
        it('should always return a string', () => {
            const result = calculatePasswordStrength('anything');
            expect(typeof result).toBe('string');
        });

        it('should handle passwords with spaces', () => {
            const result = calculatePasswordStrength('Pass Word 123');
            expect(result).toBeDefined();
        });

        it('should handle passwords with only special characters', () => {
            const result = calculatePasswordStrength('!@#$%^&*');
            expect(result).toBeDefined();
        });

        it('should return valid strength level only', () => {
            const result = calculatePasswordStrength('TestPass123!');
            const validLevels = ['Very Weak', 'Weak', 'Moderate', 'Strong'];
            expect(validLevels).toContain(result);
        });
    });
});