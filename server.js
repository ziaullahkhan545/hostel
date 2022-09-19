const express = require('express');
const cors = require('cors');

const PORT = 5000;

const app = express();
app.use(cors());

app.listen(PORT, () => `Server running on port ${PORT}`);