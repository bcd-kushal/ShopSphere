function getTimeDateByID(id){

    // day = 10,12
    // month = 16,18
    // year = 22,26
    // hours = 30,32
    // mins = 36,38
    // secs = 42,44
    // millis = 48,...

    const day = id.substring(10,12);
    const month = id.substring(16,18);
    const year = id.substring(22,26);
    const hours = id.substring(30,32);
    const mins = id.substring(36,38);
    const secs = id.substring(42,44);
    const millis = id.substring(48);

    return {
        "id": id,
        "date": `${day}-${month}-${year}`,
        "time": `${hours}:${mins}:${secs}:${millis}`,
        "datetime": `${day}-${month}-${year},${hours}:${mins}:${secs}:${millis}`
    }
}


export default getTimeDateByID;