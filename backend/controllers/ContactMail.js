//sendMail
const sendMail = require("../config/sendMail");

const sendContactMail = async (req, res) => {
    const { Name, Email, Subject,  Message } = req.body;
    
    const mailContent = `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2>Hello Admin,</h2>
        <p>You have received a new query. Details are as follows:</p>
        <table style="border-collapse: collapse; width: 100%;">
          <tr>
            <td style="padding: 8px; font-weight: bold;">Name:</td>
            <td style="padding: 8px;">${Name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Email:</td>
            <td style="padding: 8px;">${Email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Message:</td>
            <td style="padding: 8px;">${Message}</td>
          </tr>
        </table>
        <p>Regards,<br>${process.env.APP_NAME}</p>
      </body>
    </html>
    `;

    sendMail(process.env.ADMIN_EMAIL, Subject, mailContent);
    res.status(200).json({
        success: true,
        message: "Mail sent successfully"
    });
}

module.exports = {sendContactMail};