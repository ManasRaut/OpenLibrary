
'use client'

import { InputHTMLAttributes } from "react";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    label: String;
}

export const CheckBox = (props: CheckBoxProps) => {
    const {
        label,
    } = props;
    return (
        <div>
            <div className="flex items-center space-x-3 py-6 m-2">
                <input type="checkbox" name={`${label}`} id={`${label}`} className="border-gray-300 rounded h-5 w-5 cursor-pointer" />
                <label className="text-gray-700 font-medium leading-none">{label}</label>
            </div>
        </div >
    );
};