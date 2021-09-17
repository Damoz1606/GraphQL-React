import app from './app';
import { connect } from './config/database.config';

connect();

app.listen(app.get("port"), () => {
    console.log(`Server on port: ${app.get("port")}`);
});