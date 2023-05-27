'use client';

import { ButtonHTMLAttributes } from 'react';
import { ButtonType } from './schemas/Button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
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
		...rest
	} = props;

	return (
		<button
			type="button"
			className={`${btnType} flex items-center justify-center space-x-2 ${className}`}
			onClick={onClick}
			{...rest}
		>
			<div>{leadingIcon}</div>
			<div>{label}</div>
			<div>{trailingIcon}</div>
		</button>
	);
}
