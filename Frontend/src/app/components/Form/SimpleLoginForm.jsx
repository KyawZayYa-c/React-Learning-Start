'use client';

import {useForm} from "react-hook-form";

export default function SimpleLoginForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState : {errors}
        }= useForm();

    const onSubmit = (data) => {
        console.log('Form data : ', data );
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="username">Username</label>
                <input defaultValue="test" {...register("name")} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input {...register("password", {required : true})} />
                {errors.password && <span>password is required!</span>}
            </div>

            //1 :20


            <input  type="submit" />
        </form>
    )
}