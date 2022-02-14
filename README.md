# Request Parser
Utility to parse incoming JSON, Form requests without difficulty. This parser will act as a middleware and parses form data using express-formidable and JSON using express. You need not handle each and every request manually.
## Installation

```npm i @naren_codes/request-parser```

### Usage

```javascript
const app = require('express');

const { getParser } = require("@naren_codes/request-parser");

app.use(getParser()); // Custom Parser to parse form data and json

// Now all the requests will be parsed and handled automatically

// Refer express-formidable( for form data ) and express( for JSON ) documentation to use the parsed values

```