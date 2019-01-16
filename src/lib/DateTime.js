export default class DateTime {
    constructor(date){
        date = null ? new Date() : date;

        this.state = {
            date : new Date(),
            daysOfWeek : [
                'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
            ],

            monthNames : [
                'January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
                'October', 'November', 'December'
            ]
        }
    }

    seconds(){
        return this.state.date.getSeconds();
    }

    minutes(){
        return this.state.date.getMinutes();
    }

    hours(){
        return this.state.date.getHours();
    }

    day(){
        return this.state.date.getDay();
    }

    dayOfWeek(){
        return this.state.daysOfWeek[this.state.date.getDay()];
    }

    month(){
        return this.state.monthNames[this.state.date.getMonth()];
    }

    year(){
        return this.state.date.getFullYear();
    }

    static dateString(date){
        var dateTime = new DateTime(date);
        return `${dateTime.dayOfWeek().substring(0,3)} ${dateTime.month()} ${dateTime.day()} ${dateTime.year()}`
    }

    static timeString(date) {
        var dateTime = new DateTime(date);
        return `${dateTime.hours()} : ${dateTime.minutes()} : ${dateTime.seconds()}`;
    }
}