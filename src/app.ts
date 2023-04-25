import cors from "cors";
import express from "express";
import { getPropertyValue, setPropertyValue } from "@/libs/ctrl/control";

const PORT = 4000;

async function main() {
    const app = express();

    app.use(cors());
    app.use(express.json());

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
        const value = body.value;

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
