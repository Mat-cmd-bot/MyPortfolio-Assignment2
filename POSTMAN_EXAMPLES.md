# Postman / Thunder Client Test Examples

Base URL:
http://localhost:3000

## Root test
GET http://localhost:3000/
Expected response:
{
  "message": "Welcome to My Portfolio application."
}

## Contacts
POST http://localhost:3000/api/contacts
Body JSON:
{
  "firstname": "Matheyos",
  "lastname": "Wolde",
  "email": "matheyos@example.com"
}

GET http://localhost:3000/api/contacts
GET http://localhost:3000/api/contacts/:id
PUT http://localhost:3000/api/contacts/:id
DELETE http://localhost:3000/api/contacts/:id
DELETE http://localhost:3000/api/contacts

## Projects
POST http://localhost:3000/api/projects
Body JSON:
{
  "title": "React Portfolio",
  "firstname": "Matheyos",
  "lastname": "Wolde",
  "email": "matheyos@example.com",
  "completion": "2026-07-15",
  "description": "Personal portfolio application using React and Express."
}

GET http://localhost:3000/api/projects
GET http://localhost:3000/api/projects/:id
PUT http://localhost:3000/api/projects/:id
DELETE http://localhost:3000/api/projects/:id
DELETE http://localhost:3000/api/projects

## Qualifications
POST http://localhost:3000/api/qualifications
Body JSON:
{
  "title": "AI Software Engineering Technology",
  "firstname": "Matheyos",
  "lastname": "Wolde",
  "email": "matheyos@example.com",
  "completion": "2027-12-20",
  "description": "Advanced diploma program focused on software engineering and artificial intelligence."
}

GET http://localhost:3000/api/qualifications
GET http://localhost:3000/api/qualifications/:id
PUT http://localhost:3000/api/qualifications/:id
DELETE http://localhost:3000/api/qualifications/:id
DELETE http://localhost:3000/api/qualifications

## Users
POST http://localhost:3000/api/users
Body JSON:
{
  "name": "Matheyos Wolde",
  "email": "matheyos@example.com",
  "password": "Password123"
}

GET http://localhost:3000/api/users
GET http://localhost:3000/api/users/:id
PUT http://localhost:3000/api/users/:id
DELETE http://localhost:3000/api/users/:id
DELETE http://localhost:3000/api/users

## Authentication
POST http://localhost:3000/api/auth/signin
Body JSON:
{
  "email": "matheyos@example.com",
  "password": "Password123"
}

Copy the returned token.

GET http://localhost:3000/api/auth/protected
Header:
Authorization: Bearer PASTE_TOKEN_HERE

GET http://localhost:3000/api/auth/signout
