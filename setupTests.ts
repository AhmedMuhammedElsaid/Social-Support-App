import '@testing-library/jest-dom'

// Mock i18next
jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
        i18n: {
            changeLanguage: jest.fn(),
            language: 'en',
        },
    }),
    I18nextProvider: ({ children }: { children: React.ReactNode }) => children,
}))

// Mock localStorage
const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
}
Object.defineProperty(window, 'localStorage', { value: localStorageMock })
