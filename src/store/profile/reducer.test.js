import {profileReducer} from "./reducer";
import {changeProfileName, TOGGLE_SHOW_PROFILE} from "./actions";

const initialValue = {
    isShow: false,
    profileName: 'user name',
}

it('isShow in Profile reducer  should be toggled', () => {
    let newState = profileReducer(initialValue, {type: TOGGLE_SHOW_PROFILE});
    expect(newState.isShow).toBe(true)
})

it('correct changing name', () => {
    let newState = profileReducer(initialValue, changeProfileName('profile name'));
    expect(newState.profileName).toBe('profile name')
})
