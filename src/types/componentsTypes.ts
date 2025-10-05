export interface SelectOption {
    value: string
    label: string
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string
    options: SelectOption[]
    error?: string
    required?: boolean
    isSM?: boolean
}

export interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    children: React.ReactNode
    size?: 'sm' | 'md' | 'lg' | 'xl'
}
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    children: React.ReactNode;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    required?: boolean;
}
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string
    error?: string
    required?: boolean
}

export type TSuccessMessage = {
    handleClick: () => void
}
