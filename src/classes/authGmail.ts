
import fs from "fs";
import { ImapFlow } from "imapflow";
import path from "path";

const configPath = path.resolve(__dirname, "../../config.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
const confEmail = config.email;
const pass = config.password;

export async function authorize() {
  const client = new ImapFlow({
    host: "imap.gmail.com",
    port: 993,
    secure: true,
    auth: {
      user: confEmail,
      pass: pass,
    },
    logger: false,
  });

  try {
    await client.connect();
    return client;
  } catch (err) {
    console.error("Error connecting to IMAP server", err);
    throw err;
  }
}

