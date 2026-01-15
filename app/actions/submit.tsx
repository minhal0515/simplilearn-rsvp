"use server";
import {submitToAirtable} from "@/lib/airtable";

export async function submitRSVP(formData: FormData) {
    const email = formData.get("email") as string;
    if(!email) {
        throw new Error(" Email is required");
    }
    
    await submitToAirtable({ email });
}