const sgMail = require('@sendgrid/mail');
const sgClient = require('@sendgrid/client');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgClient.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (options) => {
    const msg = {
        to: options.email,
        from: process.env.EMAIL_FROM,
        subject: options.subject,
        html: options.html,
    };

    try {
        await sgMail.send(msg);
        console.log(`Email sent successfully to ${options.email}`);
    } catch (error) {
        console.error('Error sending email:', error);
        if (error.response) {
            console.error(error.response.body)
        }
    }
};

const addContactToSendGrid = async (user) => {
    try {
        const data = {
            list_ids: [process.env.SENDGRID_LIST_ID],
            contacts: [
                {
                    email: user.email,
                    first_name: user.fullName.split(' ')[0],
                    last_name: user.fullName.split(' ').slice(1).join(' '),
                    // phone_number custom field would go here if configured in SendGrid
                }
            ]
        };
        const request = {
            url: `/v3/marketing/contacts`,
            method: 'PUT',
            body: data
        }
        await sgClient.request(request); // CORRECTED: Use sgClient.request
        console.log(`Successfully added ${user.email} to SendGrid contact list.`);
    } catch (error) {
        console.error('Error adding contact to SendGrid:', error);
        if (error.response) {
            console.error(error.response.body);
        }
    }
};

module.exports = { sendEmail, addContactToSendGrid };
