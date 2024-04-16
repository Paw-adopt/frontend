import Server from "./providers/server";
import * as functions from 'firebase-functions';
import express from "express";
import cors from "cors";

const app = new Server({
    // port: 5000,
    env: "development",
    controllers: [],
    middlewares: [
        express.json(),
        express.urlencoded({ extended: true }),
        cors()
    ]
});

export const api = functions.https.onRequest(app.getApp());


