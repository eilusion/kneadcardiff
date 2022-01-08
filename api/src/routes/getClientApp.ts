import * as express from "express";
import ReactDOMServer = require("react-dom/server"); 
import { getClientAppIndex } from "./getClientAppIndex";

export const getClientApp = (request: express.Request, response: express.Response) => {
    const appMarkup = ReactDOMServer.renderToStaticMarkup(
        getClientAppIndex({})
    );

    disableBrowserCacheLoading(response);
    response.send(`<!DOCTYPE html>${appMarkup}`);
};

const disableBrowserCacheLoading = (response: express.Response) => {
    response.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    response.set("Pragma", "no-cache");
    response.set("Expires", "0");
    response.set("Surrogate-Control", "no-store");
};
