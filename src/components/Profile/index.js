import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_SHOW_PROFILE } from "../../store/profile";
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import firebase from "firebase";
import { auth } from '../../firebase'

const profilePageStyles = {
    alignItems: 'flex-start',
    display: 'flex',
    margin: "30px",
    justifyContent: 'space-between',
}

const divWithCheckBoxStyles = {
    display: 'flex',
}

const middleDiv = {
    display: 'flex',
    flexDirection: 'column',
}

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
        <div style={profilePageStyles}>
            <div style={divWithCheckBoxStyles}>
                <h3>{profileName}</h3>
                <Checkbox sx={{ mt: -1, ml: 1 }} checked={isShow} onChange={() => {
                    dispatch({
                        type: TOGGLE_SHOW_PROFILE
                    })
                }}/>
            </div>
            <div style={middleDiv}>
                <p>Profile auth (name): {profileAuth}</p>
                <p>Profile email: {profileEmail}</p>
            </div>
            <Button variant="outlined" color="error" onClick={sign_out}>
                sign out
            </Button>
        </div>
    )
}