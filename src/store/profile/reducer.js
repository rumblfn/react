import { TOGGLE_SHOW_PROFILE } from './action';

const initialValue = {
    isShow: false,
    profileName: 'profile page',
}

export const profileReducer = (state = initialValue, action) => {

    switch (action.type) {
        case TOGGLE_SHOW_PROFILE: {
            return {...state, isShow: !state.isShow}
        }

        default: {
                return state;
            }
    }
}
