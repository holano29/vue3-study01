<template>
    <p>
        <RouterLink to="/" class="btn btn-outline-secondary">Back to the List</RouterLink>
    </p>
    <div>
        <form @submit.prevent="onSubmit">
            <h1>{{ model.id ? "Edit Post" : "Create New Post" }}</h1>
            <div class="mb-3">
                <input type="text"
                    class="form-control"
                    v-model="model.title"
                    placeholder="Post Title"/>
            </div>

            <div class="mb-3">
                <textarea type="text"
                    class="form-control"
                    v-model="model.body"
                    placeholder="Post Body">
                </textarea>
            </div>

            <p>
                <button
                    :disabled="!model.title || !model.body"
                    class="btn btn-success"
                    type="submit">Submit</button>
            </p>
        
        </form>
    </div>
</template>

<script setup>

import {ref, onMounted} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const route = useRoute();
const router = useRouter();


const model = ref({
    id: "",
    title: "",
    body: "",
});

onMounted(async () => {
    if(!route.params.id){
        return;
    }

   model.value =  await store.dispatch('getSinglePost', route.params.id)

    // fetch("https://jsonplaceholder.typicode.com/posts/" + route.params.id)
    //     .then((res) => res.json())
    //     .then((post) => {
    //     model.value = post;
    // });
});


function onSubmit(){
    store.dispatch('savePosts', model.value)
        .then(() => {
            router.push("/");
        }
    );


    // if(model.value.id){
    //     fetch("https://jsonplaceholder.typicode.com/posts/" + model.value.id, {
    //         method: "PUT",
    //         body: JSON.stringify(model.value),
    //     })
    //     .then((res) => res.json())
    //     .then((res) => router.push("/"));

    // } else {
    //     fetch("https://jsonplaceholder.typicode.com/posts/" + model.value.id, {
    //         method: "POST",
    //         body: JSON.stringify(model.value),
    //     })
    //     .then((res) => res.json())
    //     .then((res) => {
    //         router.push("/");
    //     });
    // }
}

</script>


<style>
</style>