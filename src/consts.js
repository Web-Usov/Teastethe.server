

// Strings

export const INFO = time() + " [INFO]"
export const ERROR = time() + " [ERROR]"
export const SOCKET = time() + " [SOCKET]"

// Values

export const SOCKET_TIME_OUT = 1000 * 20

function time(){
    let date =  new Date();
    date.setHours(date.getUTCHours()+4);
    return date.getFullYear() + '-' +  date.getMonth() +'-' + date.getDay()+ ' '+ (date.getHours() < 10 ? '0' : '') + date.getHours() + ':' + date.getMinutes() + ':' + (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
}