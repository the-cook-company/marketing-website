import { NextApiHandler } from "next";
import { createTransport } from "nodemailer";
import { privateEnvironmentVariables } from "util/environment-variables";

const handler: NextApiHandler = async (req, res) => {
  const { body, method } = req;

  const { name, email, message } = JSON.parse(body);
  console.log(name, email, message);

  if (method === "POST") {
    console.log("METHOD: POST");
    try {
      const transport = createTransport({
        host: privateEnvironmentVariables.smtpHost.value,
        port: parseInt(privateEnvironmentVariables.smtpPort.value),
        auth: {
          user: privateEnvironmentVariables.smtpUsername.value,
          pass: privateEnvironmentVariables.smtpPassword.value,
        },
      });

      console.log("sending...");

      await transport.sendMail({
        from: privateEnvironmentVariables.contactEmailFrom.value,
        to: privateEnvironmentVariables.contactEmailTo.value,
        subject: privateEnvironmentVariables.contactEmailSubject.value,
        text: `
      name: ${name}
      email: ${email}
      message: ${message}
      `,
      });

      console.log("worked!");

      res.status(200).end();
    } catch (e) {
      console.log(e);
      res.status(400).end();
    }
  }
};

export default handler;
