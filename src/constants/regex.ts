export const regex = {
  // phục vụ cho test
  hh_mm: /(([0-1][0-9])|([2][0-3])):([0-5][0-9])/,
  hh_mm_hh_mm: /(([0-1][0-9])|([2][0-3])):([0-5][0-9])-(([0-1][0-9])|([2][0-3])):([0-5][0-9])/,
  // phục vụ cho match
  hh_mm_g: /(([0-1][0-9])|([2][0-3])):([0-5][0-9])/g,
  hh_mm_hh_mm_g: /(([0-1][0-9])|([2][0-3])):([0-5][0-9])-(([0-1][0-9])|([2][0-3])):([0-5][0-9])/g,
}