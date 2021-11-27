import { useSelector, useDispatch } from 'react-redux';
import firebase from "firebase";
import { auth } from '../../firebase'
import { ProfileView } from "./presentationComponent";

export const Profile = () => {
    const dispatch = useDispatch();
    const isShow = useSelector((state) => state.profile.isShow)
    const profileName = useSelector((state) => state.profile.profileName)

    const sign_out = () => {
        firebase.auth().signOut().then()
    }

    const profileAuth = auth.currentUser.uid
    const profileEmail = auth.currentUser.email
    return (
        <ProfileView
            profileName={profileName}
            dispatch={dispatch}
            profileAuth={profileAuth}
            profileEmail={profileEmail}
            sign_out={sign_out}
            isShow={isShow}
        />
    )
}