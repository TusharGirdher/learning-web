import dotenv from "dotenv";
dotenv.config();
import dbconnect from './db/index.js';
//require('dotenv').config({path: "./env"});
console.log("Starting server...");
dbconnect();