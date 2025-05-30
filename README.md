## Notes Manager Application

Backend API endpoints created for the Notes Manager Application

## API Endpoints :

GET - /api/notes - Retrieves all the notes and return it as an array
POST - /api/notes - Adds the note to the mongodb with the below fields
{
title (String, required)
description (String, required)
createdAt (Date, default to current date)
}

## Tech Stack :
Express JS - for node js backend
nodemon : to run the server
mongodb : Database

