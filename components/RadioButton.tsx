
'use client'

import { InputHTMLAttributes } from "react";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    label: String;
}

export const RadioButton = (props: RadioButtonProps) => {
    const {
        label,
    } = props;
    return (
        <div>
            <div className="flex items-center space-x-3 py-6 m-2">
                <input type="radio" name={`${label}`} id={`${label}`} className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label className="text-gray-700 font-medium leading-none">{label}</label>
            </div>
        </div >
    );
};