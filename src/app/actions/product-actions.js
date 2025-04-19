"use server";

import { appConfig } from "@/app/utils/config";
import { convertFormDataToJson, getYupErrors } from "@/app/utils/form-validation";
import { revalidatePath } from "next/cache";

import * as Yup from "yup";
import {redirect} from "next/navigation";

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

    const fields = convertFormDataToJson(formData);


    if (!fields) {
        throw new Error("Form verisi çözümlenemedi");
    }

    try {

       CreateSchema.validateSync(fields, { abortEarly: false });

        const response = await fetch(`${appConfig.apiURL}/products`, {
            method: "POST",
            body: JSON.stringify(fields),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Ürün oluşturulurken bir hata oluştu");
        }



    } catch (error) {
        console.error("Ürün oluşturma hatası:", error);

        if (error instanceof Yup.ValidationError) {
            return getYupErrors(error.inner);
        }

        return {
            message: "Something went wrong",
            errors: {
                common: error.message || "Bilinmeyen bir hata oluştu",
            },
        };
    }

    // 3. Başarılı durumda cache temizleme ve yönlendirme
    revalidatePath("/products");
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
};


export const updateProductAction = async (prevState, formData) => {

    const fields = convertFormDataToJson(formData);

    try {
        FormSchema.validateSync(fields, { abortEarly: false });
        //throw new Error('something went wrong')

        const resp = await fetch(`${appConfig.apiURL}/products/${fields.id}`, {
            method: "PUT",
            body: JSON.stringify(fields),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!resp.ok) {
            const data = await resp.json();
            throw new Error(data.message);
        }
    } catch (error) {
        if (error instanceof Yup.ValidationError) {
            return getYupErrors(error.inner);
        }

        return {
            message: "Something went wrong",
            errors: {
                common: error.message,
            },
        };
    }

    revalidatePath("/products");
    revalidatePath(`/products/${fields.id}`);
    revalidatePath("/dashboard/products");
    revalidatePath(`/dashboard/products/${fields.id}`);
    redirect("/dashboard/products");
};


export const deleteProductAction = async (id) => {
    try {
        if (!id) throw new Error("id is missing");

        const res = await fetch(`${appConfig.apiURL}/products/${id}`, {
            method: "DELETE",
        });

        if (!res.ok) {
            const data = await res.json();
            throw new Error(data.message);
        }
    } catch (error) {
        return {
            message: "Something went wrong",
            errors: {
                common: error.message,
            },
        };
    }

    revalidatePath("/products");
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
};