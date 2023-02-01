# Health care consulting ticket service.

```bash

git clone https://github.com/pierslabs/medical-appointment-ticket.git

or

git clone git@github.com:pierslabs/medical-appointment-ticket.

```
### Run with docker
Install dependencies

```bash
  docker-compose up 
```

http




### Run Local without docker
Install dependencies

```bash
chmod +x installDep.sh

./.installDep.sh
```

client and server

```bash

npm run dev
```

## Urls

Register the name and table of the worker

- http://localhost:5173/login

Simulates the desktop used for customer service

- http://localhost:5173/desktop

Simulates screen with attended tickets and a history with past tickets

- http://localhost:5173/queque

simulates screen to ask for a turn

- http://localhost:5173/create
