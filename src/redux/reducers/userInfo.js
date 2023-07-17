const USER_LOGIN = 'userInfo/LOGIN';
const USER_LOGOUT = 'userInfo/LOGOUT';

const initialState = {
    isLogin: false,
    userName: null,
    userId: null,
    deskId: null
}


export const userLogin = ({ userName, userId, deskId }) => {
    return {
        type: USER_LOGIN,
        userName,
        userId,
        deskId
    }
}

export const userLogout = () => {
    return {
        type: USER_LOGOUT
    }
}



const userInfo = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                isLogin: true,
                userName: action.userName,
                userId: action.userId,
                deskId: action.deskId
            }
        case USER_LOGOUT:
            return initialState;
        default:
            return state;
    }
}

export default userInfo;