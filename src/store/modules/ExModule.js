const loggingStore = {
    namespaced: true,
    state: { // data
        UserLogging: {
            user_idx: '',
            user_nick: '',
            user_name: '',
            user_img: '',
            user_email: '',
            user_phone: '',
            user_addr: '',
            user_addr_number: '',
            app_version: ''
        }
    },
    getters: { // computed
        GE_ShowUserLogging: state => state.UserLogging
    },
    mutations: { // methods (state값 변경하기)
        MU_AddUserLogging: function (state, payload) {
            state.UserLogging = payload
        },
        MU_UpdateAppVersion: function (state, ver) {
            state.UserLogging.app_version = ver
        },
        // 로그아웃, 회원탈퇴 -> 유저데이터 초기화
        MU_ResetUserData: function (state) {
            state.UserLogging = {
                user_idx: '',
                user_nick: '',
                user_name: '',
                user_img: '',
                user_email: '',
                user_phone: '',
                user_addr: '',
                user_addr_number: '',
                app_version: ''
            }
        }
    },
    actions: {  // 비동기 mutations 실행

    },
    modules: {

    }
}

export default loggingStore
