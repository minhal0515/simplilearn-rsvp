
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = "RSVPs";

export async function submitToAirtable(data: { email: string}) {
    const res = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            records: [
                {
                    fields: {
                        
                        Email: data.email
                    }
                }
            ]
        })
    });
    const text = await res.text();
    console.log("Airtable response:", res.status, text);
    if (!res.ok) {
        throw new Error("Failed to submit to Airtable");
    }
}