import axios from "axios";
import { writable } from "svelte/store";

export const state = writable({
    faqs: [],
    current_faq: {},
    faq_id: ""
})

export const api = {
    async getFaqs() {
      return new Promise ((resolve) => {
        axios.get('/api/faqs').then((response) => {
            console.log("SUCCESS - getFaqs", response.data.data);
            resolve(response.data.data);
        })
        .catch((error) => {
            console.log("ERROR - getFaqs");
            console.log(error.response);
            resolve(false);
        });
      })
    },
    async createFAQ(payload: {
        faq_id: "",
        author: "",
        body: "",
        categories: "",
        creation_date: "",
        platforms: "",
        tags: "",
        title: "",
        update_date: ""
    }) {
        return new Promise ((resolve) => {
            axios.post('/api/faqs', payload).then((response) => {
                console.log("SUCCESS - createFaq", response.data.data);
                resolve(response.data.data);
            })
            .catch((error) => {
                console.log("ERROR - createFaq");
                console.log(error.response);
                resolve(false);
            });
          })
      }
}