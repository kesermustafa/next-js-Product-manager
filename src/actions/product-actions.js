"use server";

import {appConfig} from "@/app/utils/config";
import {convertFormDataToJson, getYupErrors} from "@/app/utils/form-validation";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";




const FormSchema = Yup.object({
    id: Yup.string().required(),
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    price: Yup.number().typeError("Invalid number").required("Required"),
    image: Yup.string().required("Required"),
});


const CreateSchema = FormSchema.omit(["id"]);
export const createProductAction = async (prevState, formData) => {
    // Form data turunde  gelen form bilgilerini javascript object ine cevirdik
    const fields = convertFormDataToJson(formData);

    try {
        CreateSchema.validateSync(fields, { abortEarly: false });

        const resp = await fetch(`${appConfig.apiURL}/products`, {
            method: "post",
            body: JSON.stringify(fields),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!resp.ok) {
            const data = await resp.json();

            throw new Error(data.message);
        }
    } catch (err) {
        console.log(err);
        if (err instanceof Yup.ValidationError) {
            return getYupErrors(err.inner);
        }

        return {
            message: "Something went wrong",
            errors: {
                common: err.message,
            },
        };
    }

    revalidatePath("/products");
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
};