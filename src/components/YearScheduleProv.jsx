import React from "react";
import { useForm } from "react-hook-form";

const YearScheduleProv = () => {
  const { register, handleSubmit, errors } = useForm();

  return <form 
            onSubmit={handleSubmit((data) => console.log(data))}
            >
   <input {...register{"year", {required: true}} />

  </form>;
};
