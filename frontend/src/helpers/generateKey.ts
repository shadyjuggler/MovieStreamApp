export const generateKey = (): string => {
    return `key-${Math.random().toString(36).slice(2, 9)}`;
};