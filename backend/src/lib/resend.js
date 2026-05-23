import { Resend } from "resend";
import { ENV } from "./env.js";

// Initialize Resend client only if API key is provided, to prevent crash on boot
export const resendClient = ENV.RESEND_API_KEY ? new Resend(ENV.RESEND_API_KEY) : null;

if (!resendClient) {
  console.warn("WARNING: RESEND_API_KEY is not defined in environment variables. Email sending will be disabled.");
}

export const sender = {
  email: ENV.EMAIL_FROM || "no-reply@talkflow.com",
  name: ENV.EMAIL_FROM_NAME || "TalkFlow",
};
