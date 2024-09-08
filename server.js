import mongoose from 'mongoose';
import { app } from './app.js';

const port = process.env.PORT || 3000;
const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('db connection successful'));

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
