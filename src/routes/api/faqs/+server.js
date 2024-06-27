import { getFAQs, createFAQ } from "$lib/crud";
import axios from "axios"


/** @type {import('./$types').RequestHandler} */

export const GET = async () => {

    //getUserActivationMFA
   try {
       let res = await getFAQs()

       console.log('DATA', res);
       
       return new Response(JSON.stringify({data: res}), {status: 200});

     } catch (error) {

       console.error('Error processing request:', error);
       return new Response(JSON.stringify({message: error}), {status: 400});
     }
}

// export async function POST({ request }) {
//   const data = await request.json();
//   const newFAQ = await createFAQ(data);
//   return { body: newFAQ };
// }