import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

function AccountDetailsForm({ errors, register }: Props) {
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold">Account details</h2>
      <p className="text-iridium md:text-sm">Enter your email and password</p>
      <form></form>
    </>
  );
}

export default AccountDetailsForm;
