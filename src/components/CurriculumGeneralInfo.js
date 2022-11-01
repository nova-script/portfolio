
/* Images */
import profilePicture from '../assets/img/curriculum/profile.jpg';

function CurriculumGeneralInfo() {
    return (
        <div className="col-12 col-md-4 px-5 py-5 text-light" id="general">
                <img className="img-thumbnail mb-5" src={profilePicture} alt=""/>
                <h5>ABOUT ME</h5>
                <small>Age: 22yo</small><br/>
                <small>Gender: Male</small><br/>

                <br/>
                <br/>

                <h5>CONTACT</h5>
                <small><i className="fas fa-map-marker-alt pr-2"></i> Brazil - Federal District</small><br/>
                <small><i className="fas fa-mobile-alt pr-2"></i> +55 061 985 680 433</small><br/>
                <small><i className="far fa-envelope pr-2"></i> joseguilhermefmoura@gmail.com</small><br/>
                <small><i className="fab fa-telegram-plane pr-2"></i> @joseguilherme</small><br/>
                <br/>
                <br/>

                <h5>INTERESTS</h5>
                <div className="row">
                    <div className="col-6">
                        <small>Problem Solving</small><br/>
                        <small>Philosophy</small><br/>
                        <small>Physical Activities</small><br/>
                    </div>
                    <div className="col-6">
                        <small>Drawings</small><br/>
                        <small>Cinema</small><br/>
                        <small>Video-games</small><br/>
                    </div>
                </div>
            </div>
    )
}

export default CurriculumGeneralInfo;