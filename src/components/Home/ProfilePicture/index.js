import "./index.scss"
import Profile from "../../../assets/images/profile.jpg"

const ProfilePicture = () => {
    return (
        <div className="img-container">
            <img src={Profile} alt='profile'></img>

        </div>
    )
}

export default ProfilePicture