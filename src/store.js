import {ref, reactive} from 'vue';
const state = ref({
    showModal: false,
    notes: localStorage.notes ? JSON.parse(localStorage.notes) : [],
    search: '',
    modalTitle: '',
    modalDescr: '',
    modalEmail: '',
    modalTag: '',
    curID: null,
    langs: ['RU', 'EN'],
    curLang: localStorage.lang ? localStorage.lang : 'RU'
});

const lang = reactive({
    RU: {
        add: 'Добавить',
        edit: 'Изменить',
        cancel: 'Отмена',
        contacts: 'Контакты',
        contact: 'контакт',
        allContacts: 'Все контакты',
        noContacts: 'Нет контактов',
        list: 'Список',
        grid: 'Сетка',
        delete: 'Удалить',
        change: 'Редактировать',
        note: 'заметку',
        placeholder: 'Поиск...',
        name: 'Ф.И.О.',
        phoneNumber : 'Номер телефона',
        email : 'Email (не обязательно)',
        tag : 'Тег',
    },
    EN: {
        add: 'Add',
        edit: 'Edit',
        cancel: 'Cancel',
        contacts: 'Contacts',
        contact: 'contact',
        allContacts: 'All contacts',
        noContacts: 'No contacts',
        list: 'List',
        grid: 'Grid',
        delete: 'Delete',
        change: 'Redact',
        note: 'Note',
        placeholder: 'Search...',
        name: 'Full name',
        phoneNumber : 'Phone number',
        email : 'Email (not necessarily)',
        tag : 'Tag',
    }
});

const save = () => localStorage.notes = JSON.stringify(state.value.notes);

const addNote = note => {
    state.value.notes.push(note);
    save();
}
const editNote = (id, obj) => {
    let idx = state.value.notes.findIndex(c => c.id == id);
    state.value.notes[idx] = obj;
    save();
}
const removeNote = id => {
    let idx = state.value.notes.findIndex(c => c.id == id);
    state.value.notes.splice(idx, 1);
    save();
}

export {
    state,
    lang,
    addNote,
    editNote,
    removeNote
};