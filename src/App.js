import React, {Component} from 'react';
import Event from "./components/Event/Event";
import {getEventsList, PORTION_SIZE} from "./assets/variables";

class App extends Component {
    constructor() {
        super();
        this.state = {
            portion: 1
        };

        this.incrementPortion = this.incrementPortion.bind(this);
    }

    incrementPortion(event) {
        this.setState((state) => {
            return {portion: state.portion+1}
        });
        event.preventDefault();
    }

    render() {
        let eventsLoaders = [];
        for(let i = 0; i< this.state.portion; i++){
            eventsLoaders.push(
                getEventsList((data) => {
                    return (
                        data.map((event) =>
                            <Event event={event} key={event.id}/>
                        )
                    )
                }, {limit: PORTION_SIZE, offset: i * PORTION_SIZE}, i)
            );
        }
        return (
            <div className={"events-container"}>
                <div className={"events-list-header"}>История событий</div>
                <div className={"event-list"}>
                    {
                        eventsLoaders
                    }
                    <button onClick={this.incrementPortion} className={"button"}>Еще</button>
                </div>
                </div>
        )
    }
}

export default App;
