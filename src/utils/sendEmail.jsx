import { MailServiceClient } from "@sendgrid/client";

const sendEmail = async (body) => {
  try {
    const client = new MailServiceClient();
    client.setApiKey(process.env.SENDGRID_API_KEY);
    const request = {
      body: {
        personalizations: [
          { to: [{ email: "kumarashishranjan4971@gmail.com" }] },
        ],
        to: { email: "kumarashishranjan4971@gmail.com" },
        from: { email: "kumarashishranjan4971@gmail.com" },
        subject: "Email from Portfolio!",
        content: [{ type: "text/plain", value: body }],
      },
    };
    await client.send(request);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
};

export default sendEmail;
