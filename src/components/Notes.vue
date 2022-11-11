<template>
    <div class="notes">
        <div class="container">
            <div class="notes__nav">
                <h3 class="notes__title">{{notes.length ? lang[lg].allContacts : lang[lg].noContacts}}</h3>
                <button class="notes__checker" @click="grid = !grid">
                    <img src="@/assets/img/list.svg" alt="" v-if="grid">
                    <img src="@/assets/img/grid.svg" alt="" v-else>
                    <span>{{grid ? lang[lg].list : lang[lg].grid}}</span>
                </button>
            </div>
            <transition-group tag="div" class="notes__grid" :class="{column: !grid}" name="notes" appear>
                <OneNote v-for="note in notes" 
                    :key="note.id" 
                    :note="note"/>
            </transition-group>
        </div>
    </div>
</template>
<script setup>
    import { ref } from '@vue/reactivity';
    import { computed } from '@vue/runtime-core';
    import { state, lang } from '../store';
    import OneNote from './OneNote.vue';
    const grid = ref(false);
    const lg = computed(() => state.value.curLang);
    const props = defineProps({
        notes: {
            type: Array,
            default: []
        }
    });
</script>