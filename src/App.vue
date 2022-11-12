<template>
    <Header/>
    <Notes :notes= "filterContactName" />
    <Modal v-show="state.showModal" />
    <a href="#" class="add__note" @click.prevent="state.showModal = true">
      <img src="@/assets/img/add-note.svg" alt="">
    </a>
</template>
<script setup>
    import '@/assets/styles/main.scss';
    import Header from '@/components/Header.vue'
    import Notes from '@/components/Notes.vue';
    import Modal from '@/components/Modal.vue';
    import { state } from './store';
    import { computed } from '@vue/runtime-core';
    
    //поиск по имени
    const filterContactName = computed(() => { //filterNotes
      return state.value.search ? 
        state.value.notes.filter(c => c.title.toLowerCase().includes(state.value.search.toLowerCase()))
        : state.value.notes;
    })
    //поиск по тегам
    const filterContactTag = computed(() => { //filterTag
      return state.value.search ? 
        state.value.notes.filter(c => c.tag.toLowerCase().includes(state.value.search.toLocaleLowerCase()))
        : state.value.notes;
    })
    
</script>