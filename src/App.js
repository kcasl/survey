import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import { json } from "./json";
import axios from 'axios';

function App() {
    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
        const parsed_response = JSON.parse(JSON.stringify(sender.data, null, 3));

        const name = parsed_response.name
        const personalnum = parsed_response.personalnum
        const asbl = parsed_response.asbl
        const email = parsed_response.email
        const needs = parsed_response.needs

        axios.post('/send', {
            name: name,
            personalnum: personalnum,
            asbl: asbl,
            email: email,
            needs: needs
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    return (<Survey model={survey} />);
}

export default App;
