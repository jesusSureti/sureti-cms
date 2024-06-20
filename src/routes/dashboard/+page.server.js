import { sql } from "$lib/db";

export const load = async () => {
    let succes = await sql`select * from faqs;`

    console.log(succes);
}