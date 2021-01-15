class Appointment 
{
    constructor(id, appDateTime, doctorId, pacientId, comments, createdBy, createdAt) 
    {
        this.daysOfWeek = ["א", "ב", "ג", "ד", "ה", "ו", "ש"];

        this.id = id;
        this.appDateTime = new Date(appDateTime);
        this.doctorId = doctorId;        
        this.pacientId = pacientId;
        this.comments = comments;        
        this.createdBy = createdBy;
        this.createdAt = new Date(createdAt);
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