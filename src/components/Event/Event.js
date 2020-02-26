import React, {Component} from "react";
import Moment from 'react-moment';
import 'moment-timezone';
import {makeTypeIcon} from "../../assets/variables";

class Event extends Component {
    render() {
        const event = this.props.event;
        return (
            <div className={"event-item"}>
                <div className={"event-avatar"}>
                    <div className={"event-avatar-container"}>
                        <img src={event.image}/>
                    </div>
                    <div className={"event-type-icon"}>
                        {makeTypeIcon(event.user.type.name)}
                    </div>
                </div>
                <div className={"event-info"}>
                    <div>
                        <div>Вошел(-а) <strong>{event.user.name}</strong></div>
                        <div>{event.user.type.ru_name}</div>
                    </div>
                    <div className={"event-datetime"}>
                        <Moment format="DD.MM.YYYY HH:mm">{event.time}</Moment>
                    </div>
                </div>
            </div>
        );
    }
}

export default Event;