'use client';

import {movieSchema} from "@/app/schema/movieSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";


export default function MovieForm() {

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        defaultValues: {
            title: "some title",
            year: "2001",
            director: "",
        },
        resolver : zodResolver(movieSchema),
    })
    const onSubmit = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>
                    Title
                </label>
                <input {...register("title" )} />
                <p>{errors.title?.message}</p>
            </div>

            <div>
                <label>
                    Year
                </label>
                <input {...register("year")} />
                <p>{errors.year?.message}</p>
            </div>
            <div>
                <label>
                    Director
                </label>
                <input {...register("director")} />
                <p>{errors.director?.message}</p>
            </div>



            <input type="submit" />
        </form>
    )
}