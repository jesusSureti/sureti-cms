<script lang="ts">

    let addingNewFaq: boolean = false;
</script>

<h1>Dashboard</h1>

<button on:click={() => (addingNewFaq = true)}>Add a new Faq</button>

{#if addingNewFaq}
    <div>
        <label for="">Titulo</label>
        <input type="text" placeholder="título del Faq">

        <label for="">Cuerpo</label>
        <input type="text" placeholder="Resp/Descrip">

        <label for="">Tags</label>
        <input type="text" placeholder="tag">

        <!-- Debe ser un select con options -->
        <label for="">Categoria</label>
        <input type="text" placeholder="Inve/Prest/"> 

        <!-- Debe ser un select con options -->
        <label for="">Plataforma</label> 
        <input type="text" placeholder="título del Faq">

        <label for="">Author</label>
        <input type="text" placeholder="título del Faq">

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
