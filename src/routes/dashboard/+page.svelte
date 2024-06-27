<script lang="ts">
    import { onMount } from "svelte";
    import { api as faqApi } from "../../stores/faqs.store";


    let addingNewFaq: boolean = false;
    let faq = {
        faq_id: "",
        author: "",
        body: "",
        categories: "",
        creation_date: "",
        platforms: "",
        tags: "",
        title: "",
        update_date: ""
    }
    let faqs = []

    const createFaq = () => {
        faq.creation_date = new Date().toISOString.substring(0, 10) // Guardamos la fecha de hoy como fecha de creación
        faq.update_date = faq.creation_date // le ponemos la misma fecha de creación 
    } 

    
    onMount(async ()  => {
        console.log("hi");
        
        let res = await faqApi.getFaqs()
        console.log("RES", res)
        faqs = res
        console.log("faqs", faqs);
    })
</script>

<h1>Dashboard</h1>

{#each faqs as faq}
    <p>{faq.title}</p>
    <p>{faq.body}</p>
    <p>{faq.author}</p>
    <p>{faq.categories}</p>
    <p>{faq.platforms}</p>
    <p>{faq.tags}</p>
    <p>{faq.creation_date}</p>
    <p>{faq.update_date}</p>
    
{/each}

<button on:click={() => (addingNewFaq = true)}>Add a new Faq</button>

{#if addingNewFaq}
    <div>
        <label for="">Titulo</label>
        <input type="text" placeholder="título del Faq" bind:value={faq.title}>

        <label for="">Cuerpo</label>
        <input type="text" placeholder="Resp/Descrip" bind:value={faq.body}>

        <label for="">Tags</label>
        <input type="text" placeholder="tag" bind:value={faq.tags}>

        <!-- Debe ser un select con options -->
        <label for="">Categoria</label>
        <input type="text" placeholder="Inve/Prest/" bind:value={faq.categories}> 

        <!-- Debe ser un select con options -->
        <label for="">Plataforma</label> 
        <input type="text" placeholder="título del Faq" bind:value={faq.platforms}>

        <label for="">Author</label>
        <input type="text" placeholder="título del Faq" bind:value={faq.author}>

    </div>
    <!-- <Modal
        {showModal}
        on:close={(e) => {
            showModal = false;
        }}
    >
        <div slot="header">
            <div class="modal-header">
                <h4>Agrega el nuevo Faq</h4>
            </div>
        </div>
        <div slot="body">
            <div class="modal-body">
                
                
            </div>
        </div>
    </Modal> -->
{/if}
