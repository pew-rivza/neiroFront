import {Post} from 'react-axios'
import React from "react";
const SERVER = "http://127.0.0.1:9000";

export const PORTION_SIZE = 10;

export const getEventsList = (render, params = {}, key) =>
    <Post key={key} url={SERVER + "/api/event/get"} data={params}>
        {(error, response, isLoading, makeRequest, axios) => {
            if(error) {
                return (<div>Что-то пошло не так: {error.message}<br/>
                <button onClick={() => makeRequest({ params: { reload: true } })}>
                    Попробовать снова
                </button></div>)
            }
            else if(isLoading) {
                return (<div>Загрузка...</div>)
            }
            else if(response !== null) {
                return (
                    render(response.data)
                );
            }
            return ("")
        }}
    </Post>;

export function makeTypeIcon(type) {
    switch (type) {
        case "worker":
            return <i className="fa fa-briefcase"></i>;
        case "VIP-client":
            return <i className="fa fa-heart-o"></i>;
        case "client":
            return <i className="fa fa-user-o"></i>;
    }
}