import { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label?: string;
}

function InputField({ ...props }: InputFieldProps) {
    const {
        className = '',
        type,
        name,
        label = '',
        placeholder,
        onChange,
        value,
        ...rest
    } = props;
    return (
        <div>
            <label
                htmlFor={name}
                className={`input-label`}
            >
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                id={name}
                placeholder={placeholder}
                className={`input-field mt-2 ${className}`}
                onChange={onChange}
                {...rest}
            />
        </div>
    );
}

export default InputField;