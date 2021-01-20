import Parse from 'parse';

class Appointment 
{
    constructor(parseAppointment) 
    {
        this.daysOfWeek = ["א", "ב", "ג", "ד", "ה", "ו", "ש"];

        this.id = parseAppointment.id;
        this.appDateTime = parseAppointment.get("appDateTime");   // new Date(appDateTime);
        this.doctorId = parseAppointment.get("doctorId");       
        this.doctorName = parseAppointment.get("doctorId") == undefined ? "" : parseAppointment.get("doctorId").get("fname") + " " + parseAppointment.get("doctorId").get("lname"); 
        this.pacientId = parseAppointment.get("pacientId");
        this.pacientName =  parseAppointment.get("pacientId") == undefined ? "" : parseAppointment.get("pacientId").get("fname")+ " " + parseAppointment.get("pacientId").get("lname"); 
        this.comments = parseAppointment.get("comments");        
        this.createdAt =  parseAppointment.get("createdAt");   // new Date(createdAt);
        this.updatedAt =  parseAppointment.get("updatedAt"); 
        this.updatedBy = parseAppointment.get("updatedBy");


        this.appDuration = 29;  // duration of appointment in minutes
    }

    // if some months or days of the month are single-digit it adds leading 0 to do them as double-digit.
    pad (n) {
        return n < 10 ? '0' + n : n;
    }

    get appDate() {
        const date = this.appDateTime.getDate();
        const month = this.appDateTime.getMonth(); 
        const year = this.appDateTime.getFullYear();

        return this.pad(date) + "/" + this.pad(month+1) + "/" + year;
      }

    get appStartTime()
    {
        const dateArr = this.appDateTime.toString().split(" ");
        return dateArr[4].substring(0, 5);
    }

    get appEndTime()
    {
        const newTimeValue = this.appDateTime.getTime();
        return new Date(newTimeValue + this.appDuration * 60 * 1000);
    }

    get appWeekDay()
    {
        const newDay = this.appDateTime;
        return this.daysOfWeek[newDay.getDay()];
    }

}
export default Appointment;