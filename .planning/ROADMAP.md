# Lộ trình triển khai - Nodewarden on Cloudflare

## Giai đoạn 1: Chuẩn bị & Thiết lập hạ tầng
- [x] **Phase 1: Fork & Cấu hình GitHub**
    - Fork repo `shuaiplus/nodewarden`.
    - Thiết lập GitHub Actions để tự động đồng bộ upstream.
- [x] **Phase 2: Khởi tạo dịch vụ Cloudflare**
    - Tạo bucket R2 cho đính kèm và backup.
    - Chuẩn bị domain/subdomain trỏ về Cloudflare.

## Giai đoạn 2: Triển khai & Cấu hình NodeWarden
- [ ] **Phase 3: Deploy Workers**
    - Kết nối Cloudflare với GitHub repo.
    - Triển khai Workers đầu tiên.
- [ ] **Phase 4: Cấu hình biến môi trường & Secret**
    - Thiết lập `JWT_SECRET`.
    - Cấu hình kết nối D1 và R2.
    - Thiết lập Admin Token (nếu cần).

## Giai đoạn 3: Kiểm thử & Tối ưu
- [ ] **Phase 5: Kiểm tra tính năng**
    - Đăng ký tài khoản admin.
    - Test đồng bộ với Bitwarden App.
    - Kiểm tra đính kèm và backup.
- [ ] **Phase 6: Bảo mật nâng cao (Zero Trust)**
    - Cấu hình Cloudflare Access/Zero Trust để bảo vệ trang quản trị (Optional).
    - Tối ưu hóa Rate Limit.
