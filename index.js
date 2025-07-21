import "dotenv/config";

import { client } from "./1.Modulo/basico.js";

client.login(process.env.TOKEN);

