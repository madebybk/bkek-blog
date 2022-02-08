import axios from "axios"

const { SENDGRID_SECRET, SENDGRID_MAILING_ID } = process.env;

const handler = async (req: any, res: any) => {
    if (req.method !== "PUT") return;
    try {
        const result = axios.put(
            "https://api.sendgrid.com/v3/marketing/contacts",
            {
                contacts: [{ email: `${req.body.mail}` }],
                list_ids: [String(SENDGRID_MAILING_ID)],
            },
            {
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${String(SENDGRID_SECRET)}`,
                }
            });
        res.status(200).send({
            message: "Congrats! Your subscription's been submitted."
        });
    } catch (err) {
        res.status(500).send({
            message: "Sorry! Something's wrong with your subscription. Contact BK at bhun.kim98@gmail.com"
        });
    }
}

export default handler