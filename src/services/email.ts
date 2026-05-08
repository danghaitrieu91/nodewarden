import { Env } from '../types';

export interface EmailRecipient {
  email: string;
  name?: string;
}

export interface EmailOptions {
  to: EmailRecipient[];
  subject: string;
  html: string;
  text?: string;
}

export class EmailService {
  private readonly apiKey: string | undefined;
  private readonly from: string | undefined;

  constructor(env: Env) {
    this.apiKey = env.EMAILIT_API_KEY;
    this.from = env.EMAIL_FROM;
  }

  async sendEmail(options: EmailOptions): Promise<boolean> {
    if (!this.apiKey || !this.from) {
      console.error('EmailService: EMAILIT_API_KEY or EMAIL_FROM is not configured.');
      return false;
    }

    const payload = {
      from: this.from,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
    };

    try {
      const response = await fetch('https://api.emailit.com/v2/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error(`EmailService: Failed to send email. Status: ${response.status}, Error: ${errorData}`);
        return false;
      }

      return true;
    } catch (error) {
      console.error('EmailService: Error sending email:', error);
      return false;
    }
  }

  async sendPasswordHint(email: string, hint: string): Promise<boolean> {
    return this.sendEmail({
      to: [{ email }],
      subject: 'Gợi ý mật khẩu Bitwarden của bạn',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px;">
          <h2 style="color: #175ddc;">Gợi ý mật khẩu Master Password</h2>
          <p>Chào bạn,</p>
          <p>Bạn đã yêu cầu gợi ý mật khẩu Master Password cho tài khoản Bitwarden (NodeWarden) của mình.</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 4px; margin: 20px 0; font-style: italic;">
            Gợi ý của bạn: <strong>${hint}</strong>
          </div>
          <p>Nếu bạn không thực hiện yêu cầu này, vui lòng bỏ qua email này.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #888;">Email này được gửi tự động từ hệ thống quản lý mật khẩu cá nhân của bạn.</p>
        </div>
      `,
      text: `Chào bạn, Gợi ý Master Password của bạn là: ${hint}. Nếu bạn không yêu cầu, vui lòng bỏ qua email này.`,
    });
  }
}
