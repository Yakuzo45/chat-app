import './Online.css';

function Online(param)
{
    if (param.isOnline === true) {
        return (
            <div className="status">
                <span className="status-online"></span>
                <p className="status-text">Online</p>
            </div>
        );
    } else {
        return (
            <div className="status">
                <span className="status-offline"></span>
                <p className="status-text">Offline</p>
            </div>
        );
    }
}

export default Online;