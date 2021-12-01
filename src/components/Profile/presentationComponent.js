import Checkbox from "@mui/material/Checkbox";
import {TOGGLE_SHOW_PROFILE} from "../../store/profile";
import Button from "@mui/material/Button";

export const ProfileViewComponentIds = {
    profileName: 'ProfileView_profileName',
    profileCheckBox: 'ProfileView_profileCheckBox',
}

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

export const ProfileView = ({profileName, dispatch, profileAuth, profileEmail, sign_out, isShow}) => {
    return (
        <div style={profilePageStyles}>
            <div style={divWithCheckBoxStyles}>
                <h3 data-testid={ProfileViewComponentIds.profileName}>{profileName}</h3>
                <Checkbox
                    sx={{ mt: -1, ml: 1 }}
                    checked={isShow}
                    onChange={() => {
                        dispatch({
                            type: TOGGLE_SHOW_PROFILE
                        })
                    }}
                />
                <input
                    data-testid={ProfileViewComponentIds.profileCheckBox}
                    type="checkbox"
                    checked={isShow}
                    onChange={() => {
                        dispatch({
                            type: TOGGLE_SHOW_PROFILE
                        })
                    }}
                />
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