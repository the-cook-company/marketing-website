import { NextApiHandler } from "next";
import { createTransport } from "nodemailer";
import { privateEnvironmentVariables } from "util/environment-variables";

const handler: NextApiHandler = async (req, res) => {
  const { body, method } = req;

  const { name, email, message } = JSON.parse(body);

  if (method === "POST") {
    try {
      const transport = createTransport({
        host: privateEnvironmentVariables.smtpHost.value,
        port: parseInt(privateEnvironmentVariables.smtpPort.value),
        auth: {
          user: privateEnvironmentVariables.smtpUsername.value,
          pass: privateEnvironmentVariables.smtpPassword.value,
        },
      });

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

      res.status(200).end();
    } catch (e) {
      console.log(e);
      res.status(400).end();
    }
  }
};

export default handler;
