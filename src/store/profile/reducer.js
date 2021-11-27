import { TOGGLE_SHOW_PROFILE } from './actions';

const initialValue = {
    isShow: false,
    profileName: 'user name',
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
