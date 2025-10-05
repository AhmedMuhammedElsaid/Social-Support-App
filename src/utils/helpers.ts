
export const generateId = () => Math.random().toString(36).substr(2, 9)

// Get value from localStorage
export function getLocalStorageItem<T>(key: string): T | null {
    if (typeof window === 'undefined') return null;
    try {
        const item = localStorage.getItem(key);
        return item ? (JSON.parse(item) as T) : null;
    } catch {
        return null;
    }
}

// Set value in localStorage
export function setLocalStorageItem<T>(key: string, value: T): void {
    if (!key || !value) return;
    localStorage.setItem(key, JSON.stringify(value));
}

// Remove item from localStorage
export function removeLocalStorageItem(key: string): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(key);
}
export function debounce<T extends (...args: unknown[]) => void>(
    func: T,
    timeout = 300
): (...args: Parameters<T>) => void {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, timeout);
    };
}
