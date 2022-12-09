import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { LanguageContext } from "../App";
import MvBtn from "./MvBtn";

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const t = useContext(LanguageContext);

  const handleReturnToWelcomePage = () => {
    console.log("returned to welcome page");
  };

  const onSubmit = (data) => {
    alert(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default SignupPage;
