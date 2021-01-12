class Appointment 
{
    constructor(id, appDateTime, doctorId, pacientId, comments, createdBy, createdAt) 
    {
        this.daysOfWeek = ["א", "ב", "ג", "ד", "ה", "ו", "ש"];

        this.id = id;
        this.appDateTime = appDateTime;
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
        const currentDate = new Date(this.appDateTime);
        const date = currentDate.getDate();
        const month = currentDate.getMonth(); 
        const year = currentDate.getFullYear();

        return date + "/" + (month+1) + "/" + year;
      }

    get appStartTime()
    {
        const newDate = new Date(this.appDateTime);
        const dateArr = newDate.toString().split(" ");
        return dateArr[4].substring(0, 5);
    }

    get appEndTime()
    {
        const newTimeValue = new Date(this.appDateTime).getTime();
        return new Date(newTimeValue + this.appDuration * 60 * 1000);
    }

    get appWeekDay()
    {
        const newDay = new Date(this.appDateTime);
        return this.daysOfWeek[newDay.getDay()];
    }

}
export default Appointment;