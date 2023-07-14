import { describe, it, expect } from 'vitest';
import { PROJECT_NAME } from "./constants";

describe('constants test', () => {
    it('test whether project name gets loaded', () => {
        expect(PROJECT_NAME).toBe('ts-starter-template');
    });
});
