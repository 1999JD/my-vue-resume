import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './scss/all.scss'

import {library} from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome, faGithub,faGoogle,faFacebook,faMedium} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'


library.add(faFontAwesome,faGithub,faGoogle,faFacebook,faMedium)



createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')