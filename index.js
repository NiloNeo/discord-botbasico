import 'dotenv/config';
import { client } from "./2.Embed/server.js";

client.login(process.env.TOKEN);