
import mongoose from "mongoose";
import app from "./app"
import config from "./config";


//database connection
async function bootstrap() {
    try {
        await mongoose.connect(`${config.database_url}`);
        console.log(`🛢 Database connection successful`);
        app.listen(config.port, () => {
            console.log(`Application listening on port http//:localhost:${config.port}`);
        });
    } catch (err) {
        console.log(`Failed to connect database`, err);
    }
}
bootstrap();
