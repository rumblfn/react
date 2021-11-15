import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_SHOW_PROFILE } from "../../store/profile";
import Checkbox from '@mui/material/Checkbox';

const profilePageStyles = {
    alignItems: 'flex-start',
    display: 'flex',
    margin: "30px",
}

export const Profile = () => {
    const dispatch = useDispatch();
    const isShow = useSelector((state) => state.profile.isShow)
    const profileName = useSelector((state) => state.profile.profileName)

    return (
        <div style={profilePageStyles}>
            <h3>{profileName}</h3>
            <Checkbox sx={{ mt: -1, ml: 1 }} checked={isShow} onChange={() => {
                dispatch({
                    type: TOGGLE_SHOW_PROFILE
                })
            }}/>
        </div>
    )
}