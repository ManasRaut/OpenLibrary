'use client';

import Button, { ButtonType } from '@/components/Buttons';
import { useState } from 'react';
import {
	ArrowLeftIcon,
	ArrowsPointingOutIcon,
	ChevronDoubleDownIcon,
	ChevronDownIcon,
	ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import InputField from '@/components/InputField';
import { Select } from '@/components/SelectField';
import { SelectOption } from '../../components/schemas/types';
import { CheckBox } from '@/components/CheckBox';
import { RadioButton } from '@/components/RadioButton';
const options: SelectOption[] = [
	{
		label: "Account Settings",
		value: "Account Settings"
	},
	{
		label: "Support",
		value: "Support"
	},
	{
		label: "License",
		value: "License"
	},

];


export default function Demo() {
	const [showOptions, setShowOptions] = useState(false);
	const [selectedItem, setSelectedItem] = useState<SelectOption | null>(null);
	return (
		<>
			<div className="flex space-x-2 flex-grow-0">
				<Button
					label="Hii"
					btnType={ButtonType.Outlined}
					onClick={(e) => alert('You clicked on button')}
					leadingIcon={<ArrowLeftIcon className="w-5 h-5" />}
					trailingIcon={<ArrowsPointingOutIcon className="w-5 h-5" />}
				/>
				<Button
					label="Normal Button"
					btnType={ButtonType.Normal}
				/>
				<Button
					label="Outlined Button"
					btnType={ButtonType.Outlined}
				/>
				<Button
					label="Text Button"
					btnType={ButtonType.TextButton}
				/>

			</div>
			<div className="flex space-x-2 flex-grow-0 m-2">
				<InputField type='text' />
			</div>
			<div className="flex space-x-2 flex-grow-0 m-2">
				<InputField label='Last Name' type='text' />
			</div>
			<div className="flex space-x-2 flex-grow-0">
				<a href="#" className="link">
					Navigate
				</a>
			</div>

			<div className="relative inline-block text-left ">
				<div>
					<button
						type="button"
						className="select-button"
						id="menu-button"
						aria-expanded="true"
						aria-haspopup="true"
						onClick={() => setShowOptions(!showOptions)}
					>
						Options
						<ChevronDownIcon className="w-5 h-5" />
					</button>
				</div>
				{showOptions ? (
					<div
						className="select-body"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="menu-button"
					>
						<div className="py-1" role="none">
							<a
								href="#"
								className="select-option"
								role="menuitem"
								id="menu-item-0"
							>
								Account settings
							</a>
							<a
								href="#"
								className="select-option"
								role="menuitem"
								id="menu-item-1"
							>
								Support
							</a>
							<a
								href="#"
								className="select-option"
								role="menuitem"
								id="menu-item-2"
							>
								License
							</a>
						</div>
					</div>
				) : null}
			</div>
			<div>
				<Select
					placeholder='Options'
					selected={selectedItem}
					options={options}
					onChange={(selection: SelectOption) => setSelectedItem(selection)}
				/>
				<p>Hello, my selection is {selectedItem?.label}</p>
			</div>
			<div className="card">
				<div className="animate-pulse flex space-x-4">
					<div className="rounded-full bg-slate-200 h-10 w-10"></div>
					<div className="flex-1 space-y-6 py-1">
						<div className="h-2 bg-slate-200 rounded"></div>
						<div className="space-y-3">
							<div className="grid grid-cols-3 gap-4">
								<div className="h-2 bg-slate-200 rounded col-span-2"></div>
								<div className="h-2 bg-slate-200 rounded col-span-1"></div>
							</div>
							<div className="h-2 bg-slate-200 rounded"></div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex space-x-2 flex-grow-0">
				<span className="badge">Badge</span>
				<span className="badge text-error bg-red-50">Error</span>
				<span className="badge text-warning bg-yellow-50">Warning</span>
				<span className="badge text-success bg-green-50">Success</span>
			</div>
			<CheckBox label={"Check it"}
			// description={"nothing to describe"}
			/>
			<RadioButton label={"hello"} />
			<div
				className="relative z-10 hidden"
				aria-labelledby="modal-title"
				role="dialog"
				aria-modal="true"
			>
				<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

				<div className="fixed inset-0 z-10 overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
							<div className=" px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
								<div className="sm:flex sm:items-start">
									<div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
										<ExclamationTriangleIcon className='w-6 h-6 text-error' />
									</div>
									<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
										<h3
											className="text-base font-semibold leading-6 text-gray-900"
											id="modal-title"
										>
											Deactivate account
										</h3>
										<div className="mt-2">
											<p className="text-sm text-gray-500">
												Are you sure you want to
												deactivate your account? All of
												your data will be permanently
												removed. This action cannot be
												undone.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
								<button className="btn-primary ">
									Deactivate
								</button>
								<button className="btn-outlined text-gray-500">
									Cancel
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	);
}
