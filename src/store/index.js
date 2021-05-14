// import { createApp } from 'vue'
// import { createStore } from 'vuex'
// createApp(App).use(createStore)

// 생성한 모듈 가져오기
import ExModule from '@/store/modules/ExModule.js'

const store = {
	modules: {
        ExModule: ExModule,
    },
}

export default store