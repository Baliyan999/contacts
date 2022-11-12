<template>
    <header class="header">
        <transition name="header__notes" mode="out-in">
            <div class="header__notes" v-if="header">
                <select class="header__select" @change="changeLan($event.target.value)">
                    <option v-for="lan in state.langs" :key="lan" :selected="lan === state.curLang">{{lan}}</option>
                </select>
                <h2 class="header__title">{{lang[lg].contacts}}</h2>
                <button class="header__search" @click="header = false">
                    <img src="@/assets/img/search.svg" alt="">
                </button>
            </div>
            <form class="header__form" v-else>
                <a href="#" class="back" @click.prevent="header = true; search = ''">
                    <img src="@/assets/img/back.svg" alt="">
                </a>
                
                <input type="text" :placeholder="lang[lg].placeholder" name="search" class="header__input" required v-model="search">

                <a href="#" class="close" @click.prevent="header = true; search = ''">
                    <img src="@/assets/img/close.svg" alt="">
                </a>
            </form>
        </transition>
    </header>
</template>

<script setup>
    import { ref } from '@vue/reactivity';
    import { computed } from '@vue/runtime-core';
    import { state, lang } from '../store';

    const header = ref(true);
    const search = computed({
        get: () => state.value.search,
        set: val => state.value.search = val
    });
    const lg = computed(() => state.value.curLang);
    function changeLan(lan) {
        state.value.curLang = lan;
        localStorage.lang = lan;
    }

</script>