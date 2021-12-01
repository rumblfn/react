import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { ProfileViewComponentIds, ProfileView} from "./presentationComponent";
import {render} from "@testing-library/react";

const isShow = false
const profileName = 'Profile Name'
const sign_out = () => {}
const profileAuth = ''
const profileEmail = ''
const component = render(
    <ProfileView
        profileName={profileName}
        profileAuth={profileAuth}
        profileEmail={profileEmail}
        sign_out={sign_out}
        isShow={isShow}
    />
)
describe('ProfileView', () => {
    it('корректное имя пользователя', () => {
        expect(component.queryByTestId(ProfileViewComponentIds.profileName))
            .toHaveTextContent('Profile Name')
    });
    it('корректное состояние чек-бокса', () => {
        const checkbox = component.queryByTestId(ProfileViewComponentIds.profileCheckBox)
        expect(checkbox.checked)
            .toEqual(isShow)
    });
})