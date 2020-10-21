import React from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";

const model = new Survey.Model({
  elements: [
    { type: "text", name: "customerName", title: "What is your name?", isRequired: true }
  ]
});

const GetStartedQuestions = () => {

  const onComplete = (survey, options) => {
    console.log("Survey results: " + JSON.stringify(survey.data));
  }

  return (
    <Survey.Survey model={model} onComplete={onComplete} />
  )
}

export default GetStartedQuestions;