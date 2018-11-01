

// Strings

export const INFO = time() + " [INFO]"
export const ERROR = time() + " [ERROR]"
export const SOCKET = time() + " [SOCKET]"

// Values

export const SOCKET_TIME_OUT = 1000 * 20

function time(){
    let date =  new Date();
    var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }   
    return date.toLocaleString("ru", options) 
}