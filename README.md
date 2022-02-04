# Restaurant Reservation System (POS)
## Live Demo:  
[Restaurant Reservation System](https://safe-savannah-22253.herokuapp.com/dashboard)

> You have been hired as a full stack developer at _Periodic Tables_, a startup that is creating a reservation system for fine dining restaurants. The software is designed for restaurant personnell use only and its purpose is for managing reservations. Customers will not have access to the system.


## User Stories and Program Features

> User Stories were supplied from a restaurant manager's needs to move from a manual system to an automated system of managing reservations.

Users (restaurant personnel, only) can access the system, which has:

- A dashboard that shows the current date and time and helps maintain order through the day as reservations arrive, are seated, and as they leave the table.

![DashboardPic](https://user-images.githubusercontent.com/69811018/152446940-07aa6c0b-6caa-4bd8-bb52-de6b1effd6f2.png)

- The ability to create a new reservation, with customer contact details. Checks are in place to ensure reservations entered meet specific requirements (within operating hours, future dates versus previous dates, 30 minutes after opening and 30 minutes before closing).

![ResoPreventions](https://user-images.githubusercontent.com/69811018/152447021-a2a267f1-0e95-4cd8-9d53-9ef66b7c8cd2.png)

- The ability to create instances of each table and seating capacity readily available so customers may be seated upon arrival.

![AssignToTable](https://user-images.githubusercontent.com/69811018/152447355-6b9e70b6-a9e2-4b32-8e2e-30c6dd42d1fe.png)

- The ability to update a reservation when changes are requested.

![EditReservation](https://user-images.githubusercontent.com/69811018/152447419-1a6c4eb8-57c5-4404-adb0-b64f4ec633af.png)

- A search function that finds matches/partial matches of phone numbers.

![PhoneSearch](https://user-images.githubusercontent.com/69811018/152447438-1e167333-3281-4723-b599-64cdd81160dc.png)

- Functionality to manage the status of reservations as they arrive and are seated, and when they finish and leave the table.

![ResStatus](https://user-images.githubusercontent.com/69811018/152447456-db86f474-4e50-4de7-9e89-90207f40fe96.png)

## Initial Set-Up

Initial set-up is simple! User can add table names and seating capacity using the "New Table" function

![New Table](https://user-images.githubusercontent.com/69811018/152447747-95aa5216-0616-464a-9fb2-6c51a6031aa2.png)

## Technologies Used
Back-end

Node
Express
Knex
PostgreSQL (via ElephantSQL)
Jest
Front-end

React (router, hooks, error boundaries, etc...)
Bootstrap
e2e tests

## API BASE_URL: https://restaurant-reser-backend.herokuapp.com/

|              Endpoint                  |                                Description                                      | 
| ---------------------------------------|---------------------------------------------------------------------------------| 
|GET /reservations                       | Returns all reservations                                                        |.   
|POST /reservations                      | Creates and returns new reservations                                            | 
|GET /reservations?date='YYYY-MM-DD'     | Returns reservations by date                                                    | 
|GET /reservations/:reservationId        | Returns reservations matching Id                                                | 
|GET /reservations?mobile_number=123     | Returns reservations with matching/partial matching phone numbers               | 
|PUT /reservations/:reservationId        | Updates and returns reservations with matching Id                               | 
|PUT /reservations/:reservationId/status | Updates status of a reservation                                                 | 
|POST /tables                            | Creates and returns new table                                                   |  
|PUT /tables:table_id/seat               | Updates table with reservation ID and changes status to 'occupied'              | 
|Delete /tables:table_id/seat            | updates a table by deleting reservationId and changes table's status to "free"  | 

## Installation
1. Fork and clone this repository.
2. Run cp ./back-end/.env.sample ./back-end/.env.
3. Update the ./back-end/.env file with db connections. You can set some up for free with ElephantSQL database instances.
4. Run cp ./front-end/.env.sample ./front-end/.env.
5. You should not need to make changes to the ./front-end/.env file unless you want to connect to a backend at a location other than http://localhost:5000.
6. Run npm install to install project dependencies.
7. Run npm run start:dev from the back-end directory to start your server in development mode.
8. Run npm start from the front-end directory to start the React app at http://localhost:3000.
