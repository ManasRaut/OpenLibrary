import { ButtonHTMLAttributes } from 'react';

export enum ButtonType {
	Normal = 'btn-primary',
	Outlined = 'btn-outlined',
	TextButton = 'btn-text',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: String;
	btnType?: ButtonType;
	leadingIcon?: React.ReactNode;
	trailingIcon?: React.ReactNode;
}

export default function Button(props: ButtonProps) {
	const {
		className = '',
		label,
		btnType = ButtonType.Normal,
		leadingIcon,
		trailingIcon,
		onClick = () => { },
	} = props;

	return (
		<button
			className={`${btnType} ${className} flex items-center justify-center space-x-2`}
			onClick={onClick}
		>
			<div>{leadingIcon}</div>
			<div>{label}</div>
			<div>{trailingIcon}</div>
		</button>
	);
}
