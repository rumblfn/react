export const TOGGLE_SHOW_PROFILE = 'TOGGLE_SHOW_PROFILE';
export const CHANGE_PROFILE_NAME = 'CHANGE_PROFILE_NAME'

export const changeProfileName = (newName) => ({
    type: CHANGE_PROFILE_NAME,
    payload: newName,
})