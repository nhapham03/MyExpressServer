# Express Web Server - Assignment

A simple yet comprehensive Express.js web server demonstrating various routing techniques, including basic routes, dynamic parameters, query strings, conditional routing, regular expressions, and error handling.

## Features

- ✅ Basic routing (`/`, `/about`)
- ✅ Conditional routing with `next()` middleware (`/foo`)
- ✅ Regular expression routes (`/user(name)?`)
- ✅ Dynamic route parameters (`/user/:username`)
- ✅ Query string handling (`/get`)
- ✅ 404 error handling
- ✅ Comprehensive test suite with Jest and Supertest

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/nhapham03/MyExpressServer.git
cd ExpressServer
```

2. Install dependencies:

```bash
npm install
```

## Running the Server

Start the server with:

```bash
npm start
```

The server will run on port 3000 by default. You can access it at `http://localhost:3000`

For development with auto-restart on file changes:

```bash
npm run dev
```

## Available Routes

### 1. Root Path

- **URL:** `GET /`
- **Response:** `"Hello World"`
- **Example:** `http://localhost:3000/`

### 2. About Page

- **URL:** `GET /about`
- **Response:** `"About page"`
- **Example:** `http://localhost:3000/about`

### 3. Conditional Routing

- **URL:** `GET /foo`
- **Response:** Randomly returns either:
  - `"sometimes this"` (50% chance)
  - `"and sometimes that"` (50% chance)
- **Example:** `http://localhost:3000/foo`

### 4. Regular Expression Route

- **URL:** `GET /user` or `GET /username`
- **Response:** `"User route matched"`
- **Examples:**
  - `http://localhost:3000/user`
  - `http://localhost:3000/username`

### 5. Dynamic Route with Parameter

- **URL:** `GET /user/:username`
- **Response:** `"Hello {username}"`
- **Example:** `http://localhost:3000/user/john` → `"Hello john"`

### 6. Query String Handling

- **URL:** `GET /get?param1=value1&param2=value2`
- **Response:** `"Check console for query parameters"`
- **Note:** Query parameters are logged to the console
- **Example:** `http://localhost:3000/get?name=John&age=25`

### 7. 404 Error Handler

- **URL:** Any undefined route
- **Response:** `"404 - Not Found"`
- **Example:** `http://localhost:3000/nonexistent`


## Project Structure

```
express-web-server/
├── server.js           # Main application file
├── server.test.js      # Test suite
├── package.json        # Project dependencies
└── README.md          # Documentation
```


## Author

Created as part of a Node.js/Express.js learning assignment.

## License

ISC

## Video Demonstration

[Link to YouTube demonstration video will be added here]

The video demonstrates:

- Server startup
- All route functionalities
