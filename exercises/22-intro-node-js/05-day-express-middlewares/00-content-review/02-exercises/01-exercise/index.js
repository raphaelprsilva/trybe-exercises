const express = require('express');
const bodyParser = require('body-parser');

const nonExistentRouter = require('./routers/nonExistentRouter');
const userRouter = require('./routers/userRouter');
const postsRouter = require('./routers/postsRouter');
const teamsRouter = require('./routers/teamsRouter');

const app = express();

app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/posts', postsRouter);
app.use('/teams', teamsRouter);

app.all('*', nonExistentRouter);

app.listen(3000, () => console.log('Listening on port 3000.'));
