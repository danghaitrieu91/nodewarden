# Dự án: Nodewarden on Cloudflare

## Tầm nhìn
Triển khai hệ thống quản lý mật khẩu Bitwarden (self-hosted) hoàn toàn trên hạ tầng Serverless của Cloudflare (Workers, D1, R2) bằng NodeWarden. Giải pháp này giúp loại bỏ chi phí VPS, đơn giản hóa việc bảo trì và đảm bảo tính riêng tư dữ liệu.

## Mục tiêu
- Cài đặt thành công NodeWarden lên Cloudflare Workers.
- Cấu hình cơ sở dữ liệu D1 và lưu trữ R2 cho tệp đính kèm/backup.
- Thiết lập quy trình tự động cập nhật và sao lưu.
- Đảm bảo hệ thống hoạt động ổn định và tương thích với các ứng dụng Bitwarden chính thức.

## Tech Stack
- **Runtime:** Cloudflare Workers
- **Database:** Cloudflare D1
- **Storage:** Cloudflare R2
- **Frontend:** Preact + Vite (tích hợp sẵn trong NodeWarden)
- **CI/CD:** GitHub Actions (cho cập nhật tự động)

## Tài liệu tham khảo
- [Hướng dẫn cài đặt từ BIBICA.NET](https://bibica.net/cai-dat-nodewarden-bitwarden-server-tren-cloudflare-workers/)
- [Repository gốc: shuaiplus/nodewarden](https://github.com/shuaiplus/nodewarden)
