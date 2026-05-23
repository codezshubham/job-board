export const sendEmail = async (
  toEmail: string,
  subject: string,
  htmlContent: string
) => {
  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY || "",
      },
      body: JSON.stringify({
        sender: {
          name: "Rojgar Sync Notifications",
          email: "notifications@yourdomain.com", // Remember to change this to your verified sender!
        },
        to: [{ email: toEmail }],
        subject: subject,
        htmlContent: htmlContent,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Brevo Email Error Response:", data);
      return { success: false, error: data };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Brevo Email Request Error:", error);
    return { success: false, error };
  }
};
