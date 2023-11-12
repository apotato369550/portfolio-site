import { initializeApp } from 'firebase/app'
import { getDatabase, ref } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCoAiGwO--zcxdOB5YLwgGF8yBBH8MNB38",
    authDomain: "portfolio-contact-form-a14bc.firebaseapp.com",
    databaseURL: "https://portfolio-contact-form-a14bc-default-rtdb.firebaseio.com",
    projectId: "portfolio-contact-form-a14bc",
    storageBucket: "portfolio-contact-form-a14bc.appspot.com",
    messagingSenderId: "518913668704",
    appId: "1:518913668704:web:f14c17cab24d942e0fb505",
    measurementId: "G-86GEWEGY6Z"
};

export const app = initializeApp(firebaseConfig);
export const contactFormDatabase = ref(getDatabase(app), 'sample-contact-form');
