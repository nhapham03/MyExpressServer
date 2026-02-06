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

## Testing

Run the test suite:

```bash
npm test
```

The test suite includes:

- **3+ Normal Test Cases:** Testing standard functionality
- **3+ Edge Test Cases:** Testing boundary conditions and special scenarios
- **Conditional Routing Tests:** Verifying random behavior

### Test Coverage

The test suite covers:

1. ✅ Basic route responses
2. ✅ Dynamic parameter handling
3. ✅ Query string processing
4. ✅ Regular expression matching
5. ✅ 404 error handling
6. ✅ Special characters in URLs
7. ✅ URL encoding
8. ✅ Empty query strings
9. ✅ Conditional routing randomness

## Project Structure

```
express-web-server/
├── server.js           # Main application file
├── server.test.js      # Test suite
├── package.json        # Project dependencies
└── README.md          # Documentation
```

## Environment Variables

- `PORT`: Server port (default: 3000)

Example:

```bash
PORT=5000 npm start
```

## Manual Testing Examples

Using curl:

```bash
# Test root path
curl http://localhost:3000/

# Test about page
curl http://localhost:3000/about

# Test dynamic route
curl http://localhost:3000/user/alice

# Test query strings
curl "http://localhost:3000/get?name=test&id=123"

# Test conditional routing (try multiple times)
curl http://localhost:3000/foo

# Test regular expression routes
curl http://localhost:3000/user
curl http://localhost:3000/username

# Test 404
curl http://localhost:3000/notfound
```

Using a browser:

- Navigate to `http://localhost:3000/`
- Try different routes in the address bar
- Watch the console for query parameter logs

## Technologies Used

- **Express.js** - Web framework
- **Node.js** - Runtime environment
- **Jest** - Testing framework
- **Supertest** - HTTP testing library

## Author

Created as part of a Node.js/Express.js learning assignment.

## License

ISC

## Video Demonstration

[Link to YouTube demonstration video will be added here]

The video demonstrates:

- Server startup
- All route functionalities
- Test execution showing passed test cases
- Both normal and edge case scenarios
