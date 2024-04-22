import express from "express";
import morgan from "morgan";
import { Signale } from "signale";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDatabase } from "./database/mongodb";

import { bookRouter } from "./book/infrastructure/routes/BookRouter";
import { userRouter } from "./user/infrastructure/routes/UserRouter";
import { authRouter } from "./user/infrastructure/routes/AuthRouter";
import { posessionRouter } from "./book/infrastructure/routes/PosessionRouter";
import { orderRouter } from "./order/infrastructure/routes/OrderRouter";

dotenv.config();

const PORT = process.env.SERVER_PORT ?? 3000;

const app = express();

const signale = new Signale();

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Origin",
            "Accept",
            "X-Requested-With",
            "Access-Control-Allow-Origin",
            "Access-Control-Allow-Headers",
            "Access-Control-Allow-Methods",
        ],
    })
);

app.use(express.json());
app.use(morgan("dev"));
app.use("/books", bookRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/posessions", posessionRouter);
app.use("/orders", orderRouter);

app.listen(PORT, async () => {
    await connectToDatabase();
    signale.success("Server online in port " + PORT);
});
