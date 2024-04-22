export const errorCodeTransfer = (code: number | string): string => {
  switch (code) {
    case 2040:
      return 'error2040'
    case 2039:
      return 'error2039'
    case 2030:
      return 'error2030'
    case 2020:
      return 'error2020'
    case 2019:
      return 'error2019'
    case 2018:
      return 'error2018'
    case 2015:
      return 'error2015'
    case 2014:
      return 'error2014'
    case 2008:
      return 'error2008'
    case 1002:
    case 2001:
      return 'error2001'
    case 1009:
      return 'error1009'
    case 1006:
      return 'error1006'
    case 1005:
      return 'error1005'
    case 1003:
      return 'error1003'
    case 1004:
      return 'error1004'
    case '1004_suggest':
      return 'error1004_suggest'
    case '1003_suggest':
      return 'error1003_suggest'
    case 404:
      return 'error404'
    case 401:
      return 'error401'
    case 400:
      return 'error400'
    case 2032:
      return 'error2032'
    case 100:
    default:
      return 'error100'
  }
}
