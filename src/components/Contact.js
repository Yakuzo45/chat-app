import './Contact.css';
import Online from './Online';

function Contact()
{
    const name = 'Devon Beck';
    const avatar = 'https://randomuser.me/api/portraits/men/20.jpg';
    const isOnline = true;

    return (
        <div className="Contact">
            <img src={avatar} className="avatar"/>
            <div>
                <p className="name">{name}</p>
                <Online isOnline={isOnline}/>
            </div>
        </div>
    );
}

export default Contact;