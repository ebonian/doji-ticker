import cors from "cors";
import express from "express";
import { getPropertyValue, setPropertyValue } from "@/libs/ctrl/control";

const PORT = 4000;

async function main() {
    const app = express();

    app.use(
        cors({
            origin: ["https://ticker.doji.space", "http://localhost:3000"],
        })
    );
    app.use(express.json());

    app.get("/", (req, res) => {
        res.send("Hello World!");
    });

    app.post("/get-prop-value", async (req, res) => {
        const body = req.body;
        const indice = parseInt(body.indice) as 2 | 3 | 4;

        const propertyValue = await getPropertyValue(indice);

        if (propertyValue.status !== "Success") {
            res.status(400).send(propertyValue);
            return;
        }

        res.status(200).send(propertyValue);
    });

    app.post("/set-prop-value", async (req, res) => {
        const body = req.body;
        const indice = parseInt(body.indice) as 2 | 3 | 4;
        const value = (body.value as string).toLowerCase();

        const propertyValue = await setPropertyValue(indice, value);

        if (propertyValue.status !== "Success") {
            res.status(400).send(propertyValue);
            return;
        }

        res.status(200).send(propertyValue);
    });

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

main().catch((err) => {
    console.error(err);
});
