

// Strings

export const INFO = time() + " [INFO]"
export const ERROR = time() + " [ERROR]"
export const SOCKET = time() + " [SOCKET]"

// Values

export const SOCKET_TIME_OUT = 1000 * 20

function time(){
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }
    let date =  new Date();
    date.setHours(date.getUTCHours()+4);
    return date.toLocaleString("ru", options)
}