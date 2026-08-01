import Handlebars from "handlebars";
import gameListTemplate from "bundle-text:../temlates/game-list.hbs";
import studentsListTemplate from "bundle-text:../temlates/students.hbs";
import countriesListTemplate from "bundle-text:../temlates/countries.hbs"; // Fixed typo

import { gameList, students, countries } from "./data";

// DOM Elements
const gameContainer = document.querySelector("[data-game-container]");
const studentsContainer = document.querySelector("[data-students-container]");
const countriesContainer = document.querySelector("[data-countries-container]"); // Fixed typo

// Register Helpers
Handlebars.registerHelper("inc", (value) => value + 1);

// 1. Render Games
const createGameMarkup = Handlebars.compile(gameListTemplate);
const gameMarkup = createGameMarkup(gameList);
gameContainer.insertAdjacentHTML("afterbegin", gameMarkup);

// 2. Render Students
const createStudentMarkup = Handlebars.compile(studentsListTemplate);
const studentsMarkup = createStudentMarkup(students);
studentsContainer.innerHTML = studentsMarkup;

// 3. Render Countries
const createCountryMarkup = Handlebars.compile(countriesListTemplate);
const countriesMarkup = createCountryMarkup(countries);
countriesContainer.innerHTML = countriesMarkup;
