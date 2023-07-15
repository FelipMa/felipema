import sgMail from "@sendgrid/mail";

export async function sendEmail(text: string) {
	if (process.env.SENDGRID_API_KEY) {
		sgMail.setApiKey(process.env.SENDGRID_API_KEY);
	}

	const msg = {
		to: "felipeapenburg@gmail.com",
		from: "felipeapenburg@gmail.com",
		subject: "Contato pelo site!",
		text: text,
	};

	try {
		const res = await sgMail.send(msg);
		console.log(res);
		return res[0].statusCode;
	} catch (error: any) {
		console.log(error);
		console.log(error.response.body);
		return error.code;
	}
}
