import { LinkChecker } from "../src/url-checker";
import { calculatePasswordStrength } from "../src/calculate-password-strength";

describe("LinkChecker", () => {
    let linkChecker: LinkChecker;

    beforeEach(() => {
        linkChecker = new LinkChecker();
    });

    test("should return true for valid URL with https", () => {
        expect(linkChecker.isValidUrl("https://www.example.com")).toBe(true);
    });

    // FIXME
    test.skip("should return true for valid URL with http", () => {
        expect(linkChecker.isValidUrl("http://www.example.com")).toBe(true);
    });

    // FIXME
    test("should return false for invalid URL with no protocols", () => {
        expect(linkChecker.isValidUrl("www.example.com/path/to/page")).toBeFalsy();
    });
});

describe("calculatePasswordStrength", () => {
    test("should return 'Very Weak' for weak password", () => {
        const result = calculatePasswordStrength("abcdef");
        expect(result).toBe("Very Weak");
    });

    test('should return "Strong" for complex password with uppercase, lowercase, digits, and special chars', () => {
        const result = calculatePasswordStrength("MyPass123!");
        expect(result).toBe("Strong");
    });

    test("should not return undefined", () => {
        const result = calculatePasswordStrength("password!");
        expect(result).toBeDefined();
    });

    test("should return a valid strength level", () => {
        const result = calculatePasswordStrength("Testpass123!");
        const validLevels = ["Very Weak", "Weak", "Moderate", "Strong"];
        expect(validLevels).toContain(result);
    });
});