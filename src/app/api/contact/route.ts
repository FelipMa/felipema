import { sendEmail } from "@/functions/sendEmail";

export async function POST(request: Request) {
	const { name, email, subject, message } = await request.json();
	const text = `Nome: ${name} \nEmail: ${email} \nAssunto: ${subject} \nMensagem: ${message}`;

	try {
		const res = await sendEmail(text);
		console.log(res);
		return new Response(res, { status: res });
	} catch (error) {
		console.error(error);
		return new Response("Error sending email", { status: 500 });
	}
}
