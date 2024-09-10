// Vue Js
const { createApp } = Vue;
 createApp({
    data() {
        return {
            // Creo oggetti REATTIVI di persone
             contacts: [
                { "name": "Michele", "avatar": "./img/avatar_1.png", "visible": true, "messages": [ { "date": "10/01/2020 15:30:55", "message": "Hai portato a spasso il cane?", "status": "sent" }, { "date": "10/01/2020 15:50:00", "message": "Ricordati di stendere i panni", "status": "sent" }, { "date": "10/01/2020 16:15:22", "message": "Tutto fatto!", "status": "received" } ] },
                { "name": "Fabio", "avatar": "./img/avatar_4.png", "visible": true, "messages": [ { "date": "20/03/2020 16:30:00", "message": "Ciao come stai?", "status": "sent" }, { "date": "20/03/2020 16:30:55", "message": "Bene grazie! Stasera ci vediamo?", "status": "received" }, { "date": "20/03/2020 16:35:00", "message": "Mi piacerebbe ma devo andare a fare la spesa.", "status": "sent" } ] },
                { "name": "Samuele", "avatar": "./img/avatar_3.png", "visible": true, "messages": [ { "date": "28/03/2020 10:10:40", "message": "La Marianna va in campagna", "status": "received" }, { "date": "28/03/2020 10:20:10", "message": "Sicuro di non aver sbagliato chat?", "status": "sent" }, { "date": "28/03/2020 16:15:22", "message": "Ah scusa!", "status": "received" } ] },
                { "name": "Alessandro B.", "avatar": "./img/avatar_4.png", "visible": true, "messages": [ { "date": "10/01/2020 15:30:55", "message": "Lo sai che ha aperto una nuova pizzeria?", "status": "sent" }, { "date": "10/01/2020 15:50:00", "message": "Si, ma preferirei andare al cinema", "status": "received" } ] },
                { "name": "Alessandro L.", "avatar": "./img/avatar_5.png", "visible": true, "messages": [ { "date": "10/01/2020 15:30:55", "message": "Ricordati di chiamare la nonna", "status": "sent" }, { "date": "10/01/2020 15:50:00", "message": "Va bene, stasera la sento", "status": "received" } ] },
                { "name": "Claudia", "avatar": "./img/avatar_io.png", "visible": true, "messages": [ { "date": "10/01/2020 15:30:55", "message": "Ciao Claudia, hai novità?", "status": "sent" }, { "date": "10/01/2020 15:50:00", "message": "Non ancora", "status": "received" }, { "date": "10/01/2020 15:51:00", "message": "Nessuna nuova, buona nuova", "status": "sent" } ] },
                { "name": "Federico", "avatar": "./img/avatar_7.png", "visible": true, "messages": [ { "date": "10/01/2020 15:30:55", "message": "Fai gli auguri a Martina che è il suo compleanno!", "status": "sent" }, { "date": "10/01/2020 15:50:00", "message": "Grazie per avermelo ricordato, le scrivo subito!", "status": "received" } ] },
                { "name": "Davide", "avatar": "./img/avatar_8.png", "visible": true, "messages": [ { "date": "10/01/2020 15:30:55", "message": "Ciao, andiamo a mangiare la pizza stasera?", "status": "received" }, { "date": "10/01/2020 15:50:00", "message": "No, l'ho già mangiata ieri, ordiniamo sushi!", "status": "sent" }, { "date": "10/01/2020 15:51:00", "message": "OK!!", "status": "received" } ] },
                { "name": "Luca", "avatar": "./img/avatar_1.png", "visible": true, "messages": [ { "date": "10/01/2020 15:30:55", "message": "Hai visto il nuovo film?", "status": "sent" }, { "date": "10/01/2020 15:50:00", "message": "Non ancora, ma mi interessa.", "status": "received" }, { "date": "10/01/2020 16:15:22", "message": "Dobbiamo assolutamente vederlo!", "status": "sent" } ] },
                { "name": "Marco", "avatar": "./img/avatar_3.png", "visible": true, "messages": [ { "date": "28/03/2020 10:10:40", "message": "Hai sentito l'ultima canzone?", "status": "received" }, { "date": "28/03/2020 10:20:10", "message": "No, ma mi interessa!", "status": "sent" }, { "date": "28/03/2020 16:15:22", "message": "Te la mando subito.", "status": "received" } ] },
                { "name": "Sara", "avatar": "./img/avatar_io.png", "visible": true, "messages": [ { "date": "10/01/2020 15:30:55", "message": "Hai visto il nuovo ristorante in città?", "status": "sent" }, { "date": "10/01/2020 15:50:00", "message": "Sì, ma non ho ancora avuto tempo di andare.", "status": "received" } ] },
                { "name": "Francesco", "avatar": "./img/avatar_5.png", "visible": true, "messages": [ { "date": "10/01/2020 15:30:55", "message": "Non dimenticare il regalo per il compleanno.", "status": "sent" }, { "date": "10/01/2020 15:50:00", "message": "Lo farò, grazie per il promemoria!", "status": "received" } ] },
                { "name": "Martina", "avatar": "./img/avatar_io.png", "visible": true, "messages": [ { "date": "10/01/2020 15:30:55", "message": "Hai visto la nuova serie?", "status": "sent" }, { "date": "10/01/2020 15:50:00", "message": "Sì, è fantastica!", "status": "received" }, { "date": "10/01/2020 15:51:00", "message": "Sono d'accordo, la consiglio!", "status": "sent" } ] },
                { "name": "Andrea", "avatar": "./img/avatar_7.png", "visible": true, "messages": [ { "date": "10/01/2020 15:30:55", "message": "Facciamo una videochiamata stasera?", "status": "sent" }, { "date": "10/01/2020 15:50:00", "message": "Ottima idea, ci vediamo online!", "status": "received" } ] },
                { "name": "Chiara", "avatar": "./img/avatar_io.png", "visible": true, "messages": [ { "date": "10/01/2020 15:30:55", "message": "Andiamo al mare questo weekend?", "status": "received" }, { "date": "10/01/2020 15:50:00", "message": "Sì, non vedo l'ora!", "status": "sent" }, { "date": "10/01/2020 15:51:00", "message": "Perfetto, ci organizziamo!", "status": "received" } ] },
                { "name": "Giovanni", "avatar": "./img/avatar_1.png", "visible": true, "messages": [ { "date": "05/07/2021 14:25:30", "message": "Hai visto l'ultimo match?", "status": "sent" }, { "date": "05/07/2021 14:50:00", "message": "Sì, è stato incredibile!", "status": "received" }, { "date": "05/07/2021 15:15:22", "message": "Dobbiamo vederlo insieme la prossima volta!", "status": "sent" } ] },
                { "name": "Anna", "avatar": "./img/avatar_io.png", "visible": true, "messages": [ { "date": "11/08/2021 16:45:00", "message": "Hai completato il progetto?", "status": "sent" }, { "date": "11/08/2021 16:55:30", "message": "Quasi, mancano solo alcune rifiniture.", "status": "received" }, { "date": "11/08/2021 17:10:00", "message": "Perfetto, fammi sapere quando è finito.", "status": "sent" } ] },
                { "name": "Luigi", "avatar": "./img/avatar_3.png", "visible": true, "messages": [ { "date": "23/09/2021 09:30:20", "message": "Hai già preparato la presentazione?", "status": "received" }, { "date": "23/09/2021 09:40:10", "message": "Sto ancora lavorando su alcuni dettagli.", "status": "sent" }, { "date": "23/09/2021 10:05:45", "message": "Fammi sapere se hai bisogno di aiuto.", "status": "received" } ] },
                { "name": "Giulia", "avatar": "./img/avatar_io.png", "visible": true, "messages": [ { "date": "20/03/2020 16:30:00", "message": "Hai programmato il viaggio?", "status": "sent" }, { "date": "20/03/2020 16:30:55", "message": "Sì, è tutto pronto!", "status": "received" }, { "date": "20/03/2020 16:35:00", "message": "Ottimo, non vedo l'ora!", "status": "sent" } ] },
                { "name": "Elena", "avatar": "./img/avatar_io.png", "visible": true, "messages": [ { "date": "18/10/2021 11:20:55", "message": "Hai visto l'ultimo episodio della serie?", "status": "sent" }, { "date": "18/10/2021 11:40:00", "message": "Sì, era davvero emozionante!", "status": "received" } ] },
                
            ], 
            selectedContact : null ,
            newMessage: "",  
            searchContacts : "",
            messageIndex: null,
            show: false,
            darkMode: true
        }
    },
    mounted() {
        this.selectedContact = this.contacts[0];
        this.filteredContacts = this.contacts;

        if (this.darkMode) {
            document.body.classList.add('dark-mode');
        }
    },

    computed: {
        // Computed per mostrare solo i contatti che iniziano per la stessa lettere digitata dall'utente nella search bar con aggiornamento reattivo
        filteredContacts() {
            if (this.searchContacts) {
                return this.contacts.filter(contact => 
                    contact.name.toLowerCase().startsWith(this.searchContacts.toLowerCase())
                );
            } else {
                return this.contacts;
            }
        }
    },

    methods: {
        // Metodo per visualizzare e nascondere l'opzione di cancellare i messaggi
        toggleDelete(index) {
            if (this.messageIndex === index) {
                this.show = !this.show;
                this.messageIndex = null; 
            } else {
                this.show = true;
                this.messageIndex = index;
            }
        },

        // Metodo per cancellare i messaggi (solo quelli inviati dall'utente)
        deleteMessage() {
            if (this.selectedContact && this.messageIndex !== null) {
                this.selectedContact.messages.splice(this.messageIndex, 1);
                this.show = false;
                this.messageIndex = null;
            }
        },

        currentContact(contact){
            this.selectedContact = contact
        },

        // Aggiungo il nuovo messaggio digitato dall'uttente 
        setNewMessages(){
            if (this.newMessage.trim() !== "") {
                const messageObj = {
                    date: new Date().toLocaleString(),
                    message: this.newMessage,
                    status: 'sent'          
                  }
                  this.selectedContact.messages.push(messageObj) 
                  this.newMessage = ""; 
                  
                  // Aggiungo il messaggio di risposta un secondo dopo che l'utente invia il messaggio 
                  setTimeout(() =>{
                    const responseMessageObg = {
                        date: new Date().toLocaleString(),
                        message: 'Ok!',
                        status: 'received'  
                    }
                    this.selectedContact.messages.push(responseMessageObg)
                }, 1000)
            }
        },

        formatTime(dateString) {
            // Estrai solo l'ora e i minuti dalla stringa di data
            const timePart = dateString.split(' ')[1];  
            const [hours, minutes] = timePart.split(':');  
            return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;  
        },

        // Funzione che prende l'ultimo messaggio e relativo orario della chat 
        getLastMessage(contact) {
            if (contact.messages.length > 0) {
                const lastMessage = contact.messages[contact.messages.length - 1];
                return `${lastMessage.message} (${this.formatTime(lastMessage.date)})`;
            }
            return 'Nessun messaggio recente';
        },

        // Funzione che attiva o disattiva la dark mode
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            document.body.classList.toggle('dark-mode', this.darkMode);
        },
    },
 }).mount('#app')


