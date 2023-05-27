import React, { useState } from 'react';
import { SelectOption } from '@/components/schemas/types';
import { ChevronDownIcon } from '@heroicons/react/24/outline';


interface SelectProps {
    placeholder?: string | React.ReactNode;
    options: SelectOption[];
    selected: SelectOption | null;
    onChange: (selection: SelectOption) => void;
};

export const Select: React.FC<SelectProps> = ({ placeholder, selected, options, onChange }) => {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <div className='select-wrapper'>
            <div onClick={() => setShowOptions(!showOptions)} className='select-button'>
                <span>{selected ? selected.label : placeholder}</span>
                <ChevronDownIcon className='w-5 h-5' />
            </div>
            {showOptions && (
                <div className='select-body'>
                    {options.map(option => (
                        <div onClick={() => {
                            onChange(option);
                            setShowOptions(false);
                        }} key={option.value} className='select-option'>
                            <span>{option.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};