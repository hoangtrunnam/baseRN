export const baseUrl = 'https://daisei-cloud.vw-dev.com' // dev cloud
export const baseUrlPortal = 'https://daisei-potal.vw-dev.com' // dev portal

// export const baseUrl = 'https://daisei-cloud-stage.d-dxlab.com' // stage cloud
// export const baseUrlPortal = 'https://daisei-portal-stage.d-dxlab.com' // stage portal

// export const baseUrl = 'https://daisei-cloud.d-dxlab.com' // prod cloud
// export const baseUrlPortal = 'https://daisei-portal.d-dxlab.com' // prod portal

export const urlImage = `${baseUrl}/storage/`
export const urlImagePortal = `${baseUrlPortal}/storage/`

export const baseUrlElearning = 'https://e-learning-stage.d-dxlab.com' // dev + stage giữ nguyên (web view)
// export const baseUrlElearning = 'https://e-learning.d-dxlab.com' // production

export const timeout = 1200000 // 120s

export const APIs = {
  REFRESH_TOKEN: 'api/auth/refreshToken',
  apiLogin: '/api/auth/mobile/login',
  apiGetTokenElearning: '/api/auth/login-ds-portal',
  apiGetListCompany: '/api/mobile/company/list-all',
  apiGetDetailDepartmentInfo: '/api/mobile/department',
  apiGetListBase: '/api/company/list-all-base',
  apiGetListDepartment: '/api/mobile/department',
  apiPostContact: '/api/contact',
  apiPostDeviceToken: '/api/user/save-token-fcm',
  apiPostPhoneToGetOtp: '/api/send-otp',
  apiPostVerifyOtpCode: '/api/verify-otp',
  apiPostResetPassword: '/api/auth/reset-password',
  apiGetNews: '/api/mobile/notices',
  apiGetListVideo: '/api/mb/video',
  apiSalaryByMonth: '/api/my-salary',
}
