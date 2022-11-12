<template>
   <transition name="modal">
        <div class="modal" @click="cleanModal">
            <div class="modal__content" @click.stop>
                <h3 class="modal__title">{{id ? lang[lg].edit : lang[lg].add}} {{lang[lg].contact}}</h3>
                <form action="" class="modal__form" @submit.prevent="send">
                    <input type="text" :placeholder="lang[lg].name" required class="modal__input" v-model="title">
                    <input type="tel" class="modal__input" :placeholder="lang[lg].phoneNumber" required v-model="phone">
                    <!-- <input type="text" class="modal__input" :placeholder="lang[lg].tag" v-model="tag"> -->
                    <input type="email" :placeholder="lang[lg].email" class="modal__input" v-model="email">
                    <div class="modal__btns">
                        <a href="#" class="modal__cancel" @click.prevent="cleanModal">{{lang[lg].cancel}}</a>
                        <button class="modal__btn">{{id ? lang[lg].edit : lang[lg].add}}</button>
                    </div>
                </form>
            </div>
        </div>
   </transition>
</template>
<script setup>
    import {state, lang, editNote, addNote} from '../store';
    import {v4 as uuidv4} from 'uuid';
    import { computed } from '@vue/runtime-core';
    const title = computed({
        get: () => state.value.modalTitle,
        set: val => state.value.modalTitle = val
    });
    const email = computed({ //
        get: () => state.value.modalEmail,
        set: val => state.value.modalEmail = val
    });
    // const tag = computed({ //
    //     get: () => state.value.modalTag,
    //     set: val => state.value.modalTag = val
    // });
    const phone = computed({
        get: () => state.value.modalPhone,
        set: val => state.value.modalPhone = val
    });
    const id = computed({
        get: () => state.value.curID,
        set: val => state.value.curID = val
    });
    const lg = computed(() => state.value.curLang);
    function send(){
        const obj = {
            title: title.value,
            email: email.value, //
            // tag: tag.value, //
            phone: phone.value,
            date: new Date().toLocaleDateString(),
            id: id.value || uuidv4()
        };
        if(id.value) editNote(id.value, obj)
        else addNote(obj);
        cleanModal();
    }
    function cleanModal(){
        title.value = '';
        phone.value = '';
        email.value = ''; //
        // tag.value = ''; //
        id.value = null;
        state.value.showModal = false;
    }

</script>