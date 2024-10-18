function time() {
    const now = new Date(); // Get the current date and time

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hours = 0, set it to 12 (midnight or noon)

    // Add leading zeros to minutes and seconds if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    return formattedTime;
}

function updateText(id, newText) {
    document.getElementById(id).innerHTML = newText;
}

function testButton() {
    updateText("testButton", "--> " + time());
}

