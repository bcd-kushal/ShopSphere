export default function timeRN() {
    /* let currentDate = new Date();

    let formattedDate = currentDate.toISOString();

    let milliseconds = formattedDate.substring(20, 26);
    let timezoneOffset = formattedDate.substring(26);

    let finalFormattedDate = `${formattedDate.substring(0, 19)}${milliseconds}${timezoneOffset}`;
 */
    return new Date().toISOString();
}
