import React, {Component} from 'react';
import Event from "./components/Event/Event";
import {getEventsList, PORTION_SIZE} from "./assets/variables";

class App extends Component {
    constructor() {
        super();
        this.state = {
            portion: 1
        };
        this.lastEvents = [null];
        this.incrementPortion = this.incrementPortion.bind(this);
    }

    incrementPortion(event) {
        this.setState((state) => {
            return {portion: state.portion + 1}
        });
        event.preventDefault();
    }

    render() {
        let eventsLoaders = [];
        for (let i = 0; i < this.state.portion; i++) {
            eventsLoaders.push(
                getEventsList((data, reload) => {
                    this.lastEvents[i] = data;
                    setTimeout(reload, 1000);
                    return (
                        <>
                            {
                                data.map((event) => {
                                    return (
                                        <Event event={event} key={event.id}/>
                                    )
                                })
                            }
                            {i === this.state.portion-1 && data.length >= PORTION_SIZE ?
                                <button onClick={this.incrementPortion} className={"button"}>Еще</button>
                                : ""
                            }
                        </>
                    )
                }, {limit: PORTION_SIZE, offset: i * PORTION_SIZE}, i, this.lastEvents)
            );
        }
        return (
            <div className={"events-container"}>
                <div className={"events-list-header"}>История событий</div>
                <div className={"event-list"}>
                    {
                        eventsLoaders
                    }
                </div>
            </div>
        )
    }
}

export default App;
