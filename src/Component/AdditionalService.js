import ReactSelect from "react-select";
import { useCollapse } from "react-collapsed";
import { useForm, Controller } from "react-hook-form";
import { Switch, ThemeProvider } from "@chakra-ui/core";
import React, { useState, useEffect, useContext } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

import Button from "./Button";
import { Layout } from "../Layout";
import { Info } from "../utils/Store";



const CourtReporting = ({ register, errors, control }) => {
	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

	return (
		<div className="collapsible mx-2">
			<div
				className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
				{...getToggleProps()}
			>
				{isExpanded ? (
					<div className="flex flex-wrap lg:col-span-3 md:col-span-2 sm:col-span-1">
						<span>Court Reporting</span>
						<BiSolidUpArrow className="icon" />
					</div>
				) : (
					<div className="flex flex-wrap lg:col-span-3 md:col-span-2 sm:col-span-1">
						<span>Court Reporting</span>
						<BiSolidDownArrow className="icon" />
					</div>
				)}
			</div>
			<div
				{...getCollapseProps()}
				className="grid grid-flow-row-dense sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 justify-center  items-center"
			>
				<div className="mb-4">
					<ThemeProvider>
						<div className="container">
							<section>
								<label className="mr-3">
									Will this matter plan to have a court reporter?
								</label>
								<Controller
									control={control}
									name="matterPlan"
									render={({ field }) => (
										<Switch
											onChange={(e) => field.onChange(e.target.checked)}
											isChecked={field.value}
										/>
									)}
								/>
							</section>
						</div>
					</ThemeProvider>
				</div>
				<div className="mb-4">
					<ThemeProvider>
						<div className="container">
							<section>
								<label className="mr-3">
									Would you like an Arbitration place court reporter?
								</label>
								<Controller
									control={control}
									name="arbitrationPlace"
									render={({ field }) => (
										<Switch
											onChange={(e) => field.onChange(e.target.checked)}
											isChecked={field.value}
										/>
									)}
								/>
							</section>
						</div>
					</ThemeProvider>
				</div>
				<div className="mb-4">
					<ThemeProvider>
						<div className="container">
							<section>
								<label className="mr-3">Will a transcript be required?</label>
								<Controller
									control={control}
									name="transcript"
									render={({ field }) => (
										<Switch
											onChange={(e) => field.onChange(e.target.checked)}
											isChecked={field.value}
										/>
									)}
								/>
							</section>
						</div>
					</ThemeProvider>
				</div>
				<div className="mb-4">
					<label>Turnaround Time?</label>
					<Controller
						name="turnAroundTime"
						control={control}
						render={({ field }) => (
							<ReactSelect
								isClearable
								{...field}
								options={[
									{ value: "standard", label: "standard" },
									{ value: "normal", label: "normal" },
								]}
							/>
						)}
					/>
				</div>
				<div className="mb-4">
					<ThemeProvider>
						<div className="container">
							<section>
								<label className="mr-3">Multilingual?</label>
								<Controller
									control={control}
									name="multilingual"
									render={({ field }) => (
										<Switch
											onChange={(e) => field.onChange(e.target.checked)}
											isChecked={field.value}
										/>
									)}
								/>
							</section>
						</div>
					</ThemeProvider>
				</div>
				<div className="mb-4">
					<label htmlFor="languages">
						Please list all languages to be interpreted(separate by comma)
					</label>
					<input
						type="text"
						className="w-full"
						id="languages"
						autoFocus
						{...register("languages", {
							required: "Please enter languages",
							minLength: {
								value: 3,
								message: "languages should be at least 3 characters",
							},
						})}
					/>
					{errors.languages && (
						<p className="text-red-500">{errors.languages.message}</p>
					)}
				</div>
				<div className="mb-4">
					<label htmlFor="additonalRequest">
						Please list the non-English language(s) you would like
						accomodate(seperate by commma)
					</label>
					<input
						type="text"
						className="w-full"
						id="langList"
						autoFocus
						{...register("langList")}
					/>
					{errors.langList && (
						<p className="text-red-500">{errors.langList.message}</p>
					)}
				</div>
				<div className="mb-4">
					<label>Daily Rough Draft?</label>
					<Controller
						name="RoughDraft"
						control={control}
						render={({ field }) => (
							<ReactSelect
								isClearable
								{...field}
								options={[
									{ value: "I know", label: "I know" },
									{ value: "I don't know", label: "I don't know" },
								]}
							/>
						)}
					/>
				</div>
				<div className="mb-4">
					<label>Realtime Reporting?</label>
					<Controller
						name="RealtimeReporting"
						control={control}
						render={({ field }) => (
							<ReactSelect
								isClearable
								{...field}
								options={[
									{ value: "I know", label: "I know" },
									{ value: "I don't know", label: "I don't know" },
								]}
							/>
						)}
					/>
				</div>
			</div>
		</div>
	);
};



const AdditionalFeature = ({register,errors, control}) => { 
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

		return (
			<div className="collapsible mx-2 mt-8">
				<div
					className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
					{...getToggleProps()}
				>
					{isExpanded ? (
						<div className="flex flex-wrap lg:col-span-3 md:col-span-2 sm:col-span-1">
							<span>Additional Features</span>
							<BiSolidUpArrow className="icon" />
						</div>
					) : (
						<div className="flex flex-wrap lg:col-span-3 md:col-span-2 sm:col-span-1">
							<span>Additional Features</span>
							<BiSolidDownArrow className="icon" />
						</div>
					)}
				</div>
				<div
					{...getCollapseProps()}
					className="grid grid-flow-row-dense sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 "
				>
					<div className="mb-4">
						<ThemeProvider>
							<div className="container">
								<section>
									<label className="mr-3">Do you require interpretation?</label>
									<Controller
										control={control}
										name="interpretation"
										render={({ field }) => (
											<Switch
												onChange={(e) => field.onChange(e.target.checked)}
												isChecked={field.value}
											/>
										)}
									/>
								</section>
							</div>
						</ThemeProvider>
					</div>
					<div className="mb-4">
						<ThemeProvider>
							<div className="container">
								<section>
									<label className="mr-3">Do you require CART services?</label>
									<Controller
										control={control}
										name="cartService"
										render={({ field }) => (
											<Switch
												onChange={(e) => field.onChange(e.target.checked)}
												isChecked={field.value}
											/>
										)}
									/>
								</section>
							</div>
						</ThemeProvider>
					</div>
					<div className="mb-4">
						<ThemeProvider>
							<div className="container">
								<section>
									<label className="mr-3">
										Will you need a quote prior to confirmation?
									</label>
									<Controller
										control={control}
										name="quoteConfirmation"
										render={({ field }) => (
											<Switch
												onChange={(e) => field.onChange(e.target.checked)}
												isChecked={field.value}
											/>
										)}
									/>
								</section>
							</div>
						</ThemeProvider>
					</div>
					<div className="mb-4">
						<label htmlFor="languages">
							Please list all languages to be interpreted(separate by comma)
						</label>
						<input
							type="text"
							className="w-full"
							id="languages"
							autoFocus
							{...register("languages", {
								required: "Please enter languages",
								minLength: {
									value: 3,
									message: "languages should be at least 3 characters",
								},
							})}
						/>
						{errors.languages && (
							<p className="text-red-500">{errors.languages.message}</p>
						)}
					</div>
					<div className="mb-4">
						<label htmlFor="additonalRequest">
							Please list any additional request or considerations you might
							have at this time
						</label>
						<input
							type="text"
							className="w-full"
							id="additonalRequest"
							autoFocus
							{...register("additonalRequest")}
						/>
						{errors.additonalRequest && (
							<p className="text-red-500">{errors.additonalRequest.message}</p>
						)}
					</div>
				</div>
			</div>
		);
}

const AdditionalService = () => {

    
    const { state, dispatch } = useContext(Info);
    const { data } = state;
    
    const defaultValues = {
			interpretation: false,
			cartService: true,
			quoteConfirmation: false,
			matterPlan: false,
			arbitrationPlace: false,
			transcript: true,
			multilingual: false,
			turnAroundTime: { value: "standard", label: "standard" },
			RoughDraft: { value: "I know", label: "I know" },
			RealtimeReporting: { value: "I know", label: "I know" },
    };
    
    const {
			handleSubmit,
			register,
			formState: { errors },
			setValue,
			control,
		} = useForm({
			defaultValues,
		});
    
    useEffect(() => {
        if (data.additionalInfo) {
            setValue("interpretation", data.additionalInfo.interpretation);
            setValue("cartService", data.additionalInfo.cartService);
            setValue("quoteConfirmation", data.additionalInfo.quoteConfirmation);
            setValue("matterPlan", data.additionalInfo.matterPlan);
            setValue("arbitrationPlace", data.additionalInfo.arbitrationPlace);
            setValue("multilingual", data.additionalInfo.multilingual);
            setValue("turnAroundTime", data.additionalInfo.turnAroundTime);
            setValue("RoughDraft", data.additionalInfo.RoughDraft);
            setValue("RealtimeReporting", data.additionalInfo.RealtimeReporting);
            setValue("languages", data.additionalInfo.languages);
            setValue("langList", data.additionalInfo.langList);
            setValue("additonalRequest", data.additionalInfo.additonalRequest);

        }
        console.log(data.additionalInfo);
    }, [setValue, data.additionalInfo]);


    const submitHandler = (formData) => {
        console.log(formData);
        dispatch({
					type: "UPDATE_ADDITIONAL_DATA",
					payload: {
						additionalInfo: formData,
					},
				});
        console.log(formData);
    }

    const additionServiceForm = () => {
        return (
					<div className="relative">
						<form
							className="mx-auto w-4/5 mb-36"
							onSubmit={handleSubmit(submitHandler)}
						>
							<div>
								<CourtReporting
									register={register}
									errors={errors}
									control={control}
								/>
								<AdditionalFeature
									register={register}
									errors={errors}
									control={control}
								/>
							</div>
							<div className="btn">
								<Button nextUrl="/final" prevUrl="/logistics" />
							</div>
						</form>
					</div>
				);
    }
	return <Layout>{additionServiceForm()}</Layout>;
};

export default AdditionalService;
