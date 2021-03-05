<template>
    <div>
        <b-col>
            <b-card
                :title="name"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Curso de Vue.JS"
                style="max-width: 20rem;"
                img-top
                tag="article"
                class="mb-2"
                border-variant="primary"
                header="Primary"
                header-bg-variant="primary"
                header-text-variant="white"
                align="center">
                <b-card-text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio atque aut ipsam accusamus? Expedita consectetur, error dolore, sed reprehenderit rem necessitatibus possimus quas quae reiciendis, perferendis unde provident ad dolor?
                </b-card-text>
                <b-button variant="primary">Comprar</b-button>
            </b-card>
      </b-col>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>