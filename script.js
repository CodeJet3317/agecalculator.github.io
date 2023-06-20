function calculateAge() {
    var birthDate = new Date(document.getElementById('birthDate').value);
    var targetDate = new Date(document.getElementById('targetDate').value);
    var ageDuration = targetDate - birthDate;

    var years = Math.floor(ageDuration / (1000 * 60 * 60 * 24 * 365));
    ageDuration -= years * (1000 * 60 * 60 * 24 * 365);

    var months = Math.floor(ageDuration / (1000 * 60 * 60 * 24 * 30));
    ageDuration -= months * (1000 * 60 * 60 * 24 * 30);

    var days = Math.floor(ageDuration / (1000 * 60 * 60 * 24));
    ageDuration -= days * (1000 * 60 * 60 * 24);

    var result = years + " years, " + months + " months, " + days + " days, ";
    document.getElementById('result').innerText = result;
}