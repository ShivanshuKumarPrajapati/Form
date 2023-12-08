import React, { useState, useEffect, useContext } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useCollapse } from "react-collapsed";
import { useNavigate } from "react-router-dom";

import { FaCaretDown } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

import Button from "./Button";
import { Layout } from "../Layout";
import { Info } from "../utils/Store";


const BookingFormComponent = ({register,errors}) => {

	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

	return (
		<div className="collapsible mx-2">
			<div
				className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
				{...getToggleProps()}
			>
				{isExpanded ? (
					<div className="flex flex-wrap lg:col-span-3 md:col-span-2 sm:col-span-1">
						<span>Booking Party Information</span>
						<BiSolidUpArrow className="icon" />
					</div>
				) : (
					<div className="flex flex-wrap lg:col-span-3 md:col-span-2 sm:col-span-1">
						<span>Booking Party Information</span>
						<BiSolidDownArrow className="icon" />
					</div>
				)}
			</div>
			<div
				{...getCollapseProps()}
				className="grid grid-flow-row-dense sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 "
			>
				<div className="mb-4">
					<label htmlFor="Name">Name</label>
					<input
						type="text"
						className="w-full"
						id="Name"
						autoFocus
						{...register("Name", {
							required: "Please enter name",
							minLength: {
								value: 3,
								message: "Name should be at least 3 characters",
							},
						})}
					/>
					{errors.Name && <p className="text-red-500">{errors.Name.message}</p>}
				</div>
				<div className="mb-4">
					<label htmlFor="bookingContactName">bookingContactName</label>
					<input
						type="text"
						className="w-full"
						id="bookingContactName"
						autoFocus
						{...register("bookingContactName", {
							required: "Please enter Contact Name",
							minLength: {
								value: 3,
								message: "booking contact name should be at least 3 characters",
							},
						})}
					/>
					{errors.bookingContactName && (
						<p className="text-red-500">{errors.bookingContactName.message}</p>
					)}
				</div>
				<div className="mb-4">
					<label htmlFor="PhoneNumber">Phone Number</label>
					<input
						type="number"
						className="w-full"
						id="PhoneNumber"
						autoFocus
						{...register("PhoneNumber", {
							required: "Please enter Phone Number",
						})}
					/>
					{errors.PhoneNumber && (
						<p className="text-red-500">{errors.PhoneNumber.message}</p>
					)}
				</div>
				<div className="mb-4">
					<label htmlFor="postalCode">Postal Code</label>
					<input
						type="text"
						className="w-full"
						id="postalCode"
						autoFocus
						{...register("postalCode", {
							required: "Please enter postal code",
						})}
					/>
					{errors.postalCode && (
						<p className="text-red-500">{errors.postalCode.message}</p>
					)}
				</div>
				<div className="mb-4">
					<label htmlFor="Country">Country</label>
					<input
						type="text"
						className="w-full"
						id="Country"
						autoFocus
						{...register("Country", {
							required: "Please enter Country",
						})}
					/>
					{errors.Country && (
						<p className="text-red-500">{errors.Country.message}</p>
					)}
				</div>
				<div className="mb-4">
					<label htmlFor="Role">Role</label>
					<input
						type={"text"}
						className="w-full"
						id="Role"
						autoFocus
						{...register("Role", {
							required: "Please enter Role",
						})}
					/>
					{errors.Role && <p className="text-red-500">{errors.Role.message}</p>}
				</div>
				<div className="mb-4">
					<label htmlFor="representativeClient"> Representative Client</label>
					<input
						type={"text"}
						className="w-full"
						id="representativeClient"
						autoFocus
						{...register("representativeClient", {
							required: "Please enter  representative Client",
						})}
					/>
					{errors.representativeClient && (
						<p className="text-red-500">
							{errors.representativeClient.message}
						</p>
					)}
				</div>
				<div className="mb-4">
					<label htmlFor="BillingAddress">BillingAddress</label>
					<input
						type={"text"}
						className="w-full"
						id="BillingAddress"
						autoFocus
						{...register("BillingAddress", {
							required: "Please enter BillingAddress",
						})}
					/>
					{errors.BillingAddress && (
						<p className="text-red-500">{errors.BillingAddress.message}</p>
					)}
				</div>
				<div className="mb-4">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						className="w-full"
						id="email"
						{...register("email", {
							required: "Please enter email",
							pattern: {
								value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
								message: "Please enter valid email",
							},
						})}
					/>
					{errors.email && (
						<div className="text-red-500">{errors.email.message}</div>
					)}
				</div>
			</div>
		</div>
	);
}

const OpposingFormComponent = ({ register, errors }) => {
	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

	return (
		<div className="collapsible mx-2 mt-8">
			<div
				className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
				{...getToggleProps()}
			>
				{isExpanded ? (
					<div className="flex flex-wrap lg:col-span-3 md:col-span-2 sm:col-span-1">
						<span>Opposing Party Information</span>
						<BiSolidUpArrow className="icon" />
					</div>
				) : (
					<div className="flex flex-wrap lg:col-span-3 md:col-span-2 sm:col-span-1">
						<span>Opposing Party Information</span>
						<BiSolidDownArrow className="icon" />
					</div>
				)}
			</div>
			<div
				{...getCollapseProps()}
				className="grid grid-flow-row-dense sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 "
			>
				<div className="mb-4">
					<label htmlFor="Name1">Name</label>
					<input
						type="text"
						className="w-full"
						id="Name1"
						autoFocus
						{...register("Name1", {
							required: "Please enter name",
							minLength: {
								value: 3,
								message: "Name should be at least 3 characters",
							},
						})}
					/>
					{errors.Name1 && <p className="text-red-500">{errors.Name1.message}</p>}
				</div>
				<div className="mb-4">
					<label htmlFor="bookingContactName1">bookingContactName</label>
					<input
						type="text"
						className="w-full"
						id="bookingContactName1"
						autoFocus
						{...register("bookingContactName1", {
							required: "Please enter Contact Name",
							minLength: {
								value: 3,
								message: "booking contact name should be at least 3 characters",
							},
						})}
					/>
					{errors.bookingContactName1 && (
						<p className="text-red-500">{errors.bookingContactName1.message}</p>
					)}
				</div>
				<div className="mb-4">
					<label htmlFor="PhoneNumber1">Phone Number</label>
					<input
						type="number"
						className="w-full"
						id="PhoneNumber1"
						autoFocus
						{...register("PhoneNumber1", {
							required: "Please enter Phone Number",
						})}
					/>
					{errors.PhoneNumber1 && (
						<p className="text-red-500">{errors.PhoneNumber1.message}</p>
					)}
				</div>
				<div className="mb-4">
					<label htmlFor="postalCode1">Postal Code</label>
					<input
						type="text"
						className="w-full"
						id="postalCode1"
						autoFocus
						{...register("postalCode1", {
							required: "Please enter postal code",
						})}
					/>
					{errors.postalCode1 && (
						<p className="text-red-500">{errors.postalCode1.message}</p>
					)}
				</div>
				<div className="mb-4">
					<label htmlFor="Country1">Country</label>
					<input
						type="text"
						className="w-full"
						id="Country1"
						autoFocus
						{...register("Country1", {
							required: "Please enter Country",
						})}
					/>
					{errors.Country1 && (
						<p className="text-red-500">{errors.Country1.message}</p>
					)}
				</div>
				<div className="mb-4">
					<label htmlFor="Role1">Role</label>
					<input
						type={"text"}
						className="w-full"
						id="Role1"
						autoFocus
						{...register("Role1", {
							required: "Please enter Role",
						})}
					/>
					{errors.Role1 && <p className="text-red-500">{errors.Role1.message}</p>}
				</div>
				<div className="mb-4">
					<label htmlFor="representativeClient1"> Representative Client</label>
					<input
						type={"text"}
						className="w-full"
						id="representativeClient1"
						autoFocus
						{...register("representativeClient1", {
							required: "Please enter  representative Client",
						})}
					/>
					{errors.representativeClient1 && (
						<p className="text-red-500">
							{errors.representativeClient1.message}
						</p>
					)}
				</div>
				<div className="mb-4">
					<label htmlFor="BillingAddress1">BillingAddress</label>
					<input
						type={"text"}
						className="w-full"
						id="BillingAddress1"
						autoFocus
						{...register("BillingAddress1", {
							required: "Please enter BillingAddress",
						})}
					/>
					{errors.BillingAddress1 && (
						<p className="text-red-500">{errors.BillingAddress1.message}</p>
					)}
				</div>
				<div className="mb-4">
					<label htmlFor="email1">Email</label>
					<input
						type="email"
						className="w-full"
						id="email1"
						{...register("email1", {
							required: "Please enter email",
							pattern: {
								value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
								message: "Please enter valid email",
							},
						})}
					/>
					{errors.email1 && (
						<div className="text-red-500">{errors.email1.message}</div>
					)}
				</div>
			</div>
		</div>
	);
};

const AdditionalPartyForm = ({ register, errors, remove, fields }) => {
	console.log(fields);
	return (
		fields.map((item, index) => {
			return (
				<div>
					<div className="mb-4">
						<label htmlFor="Name">Name</label>
						<input
							type="text"
							className="w-full"
							id="Name"
							autoFocus
							{...register(`additonalPartyInfo${index}.Name`, {
								required: "Please enter name",
								minLength: {
									value: 3,
									message: "Name should be at least 3 characters",
								},
							})}
						/>
						{errors.Name && (
							<p className="text-red-500">{errors.Name.message}</p>
						)}
					</div>
				</div>
			);
		}
		)
	)
}

const PartyInfoForm = () => {
	
	const { state, dispatch } = useContext(Info);
	const { data } = state;

	const {
		handleSubmit,
		register,
		control,
		formState: { errors },
		setValue,
	} = useForm();

	const { fields, remove, append } = useFieldArray({
		control,
		name: "additionalPartyInfo",
	});

	useEffect(() => {
		console.log(state.data);
		if (data.bookingPartyInfo) {
			setValue("Name", data.bookingPartyInfo.Name);
			setValue("bookingContactName", data.bookingPartyInfo.bookingContactName);
			setValue("PhoneNumber", data.bookingPartyInfo.PhoneNumber);
			setValue("BillingAddress", data.bookingPartyInfo.BillingAddress);
			setValue("postalCode", data.bookingPartyInfo.postalCode);
			setValue("Country", data.bookingPartyInfo.Country);
			setValue("Role", data.bookingPartyInfo.Role);
			setValue("representativeClient", data.bookingPartyInfo.representativeClient);
			setValue("email", data.bookingPartyInfo.email);
		}
		if (data.opposingPartyInfo) {
			setValue("Name1", data.opposingPartyInfo.Name1);
			setValue("bookingContactName1", data.opposingPartyInfo.bookingContactName1);
			setValue("PhoneNumber1", data.opposingPartyInfo.PhoneNumber1);
			setValue("BillingAddress1", data.opposingPartyInfo.BillingAddress1);
			setValue("postalCode1", data.opposingPartyInfo.postalCode1);
			setValue("Country1", data.opposingPartyInfo.Country1);
			setValue("Role1", data.opposingPartyInfo.Role1);
			setValue("representativeClient1", data.opposingPartyInfo.representativeClient1);
			setValue("email1", data.opposingPartyInfo.email1);
		}
	}, [setValue,data]);

    
	const submitHandler = (e, formData) => {
		e.preventDefault();
		const {
			Name,
			bookingContactName,
			PhoneNumber,
			BillingAddress,
			postalCode,
			Country,
			Role,
			representativeClient,
			email,
		} = formData;
		const {
			Name1,
			bookingContactName1,
			PhoneNumber1,
			BillingAddress1,
			postalCode1,
			Country1,
			Role1,
			representativeClient1,
			email1,
		} = formData;
		console.log(formData);
		const bookingPartyInfo = { Name, bookingContactName, PhoneNumber, BillingAddress, postalCode, Country, Role, representativeClient, email };
		const opposingPartyInfo = { Name1, bookingContactName1, PhoneNumber1, BillingAddress1, postalCode1, Country1, Role1, representativeClient1, email1 };
		dispatch({
			type: "UPDATE_PARTY_DATA",
			payload: {
				bookingPartyInfo,
				opposingPartyInfo,
			},
		});
		dispatch({ type: "NEXT_STEP" });
		
	}


	const bookingForm = () => {
		return (
			<div className="relative">
				<form
					className="mx-auto w-4/5 mb-36"
					onSubmit={handleSubmit(submitHandler)}
				>
					<div>
						<BookingFormComponent register={register} errors={errors} />
						<OpposingFormComponent register={register} errors={errors} />

						<div className="mb-4 flex justify-between mt-5">
							<button
								type="button"
								className="flex flex-wrap bg-gray-900 hover:bg-gray-800 border-2 border-gray-400 p-2 rounded-md text-white px-2"
								onClick={() => append({})}
							>
								<span>Additional Parties</span>
								<IoIosAdd className="icon1" />
							</button>
						</div>
					</div>
					<div className="btn">
						<Button nextUrl="/logistics" prevUrl="/" />
					</div>
				</form>
			</div>
		);
	};

	return (
		<Layout>
			{ bookingForm() }
		</Layout>
	);
};

export default PartyInfoForm;
