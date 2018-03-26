import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {

  questions: Question[];

  constructor() {
    /* 
    this.questions = [
      {
        text: 'What is your name?',
        answer: 'My name is Tom Holt.',
        hide: true
      },
      {
        text: 'What is your favourite color?',
        answer: 'My favourite color is Black.',
        hide: true
      },
      {
        text: 'What is your favourite language?',
        answer: 'My favourite language is JavaScript.',
        hide: true
      }
    ];
    */
  }

  // Get questions form local storage
  getQuestions() {
    if(localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }
  
  // Add questions to Local storage
  addQuestion(question: Question) {
    this.questions.unshift (question);

    // Init local variable
    let questions;

    if(localStorage.getItem('questions') === null) {
      questions = [];
      // Push new question
      questions.unshift(question);
      // Set new array to LS
      localStorage.setItem('questions', JSON.stringify(questions));

    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      // Add the new question
      questions.unshift(question);
      // Re set the LS
      localStorage.setItem('questions', JSON.stringify(questions));

    }
    
  }
  
  // Remove questions form local storage
  removeQuestion(question:Question) {
    for(let i = 0; i < this.questions.length; i++) {
      if(question == this.questions[i]) {
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }

}
