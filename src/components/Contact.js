import PropTypes from 'prop-types';
import './Contact.css';
import Online from './Online';

function Contact(params)
{
    return (
        <div className="Contact">
            <img src={params.avatar} className="avatar"/>
            <div>
                <p className="name">{params.name}</p>
                <Online isOnline={params.isOnline}/>
            </div>
        </div>
    );
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};


export default Contact;