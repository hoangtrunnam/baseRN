export type AuthState = {
  isLoggedIn: boolean
  is_first_time: boolean
  is_temp_password: boolean
  is_have_pin: boolean
  isLoading: boolean
  is_ekyc: boolean
  is_verified_email: boolean
  is_temp_pin: boolean
  expires_in: number | null
  is_not_first_time_login: boolean
  navigationAfterAuth: any
  step: number
}
