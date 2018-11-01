// Strings

export const INFO = time() + " [INFO]"
export const ERROR = time() + " [ERROR]"
export const SOCKET = time() + " [SOCKET]"

// Values

export const SOCKET_TIME_OUT = 1000 * 60 * 30

// Support functions

function time(){
    const date =  new Date();
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }
    const timezone = date.getTimezoneOffset()/60 
    date.setHours(date.getHours()+4+timezone)    
    return date.toLocaleDateString("en-US", options)
}