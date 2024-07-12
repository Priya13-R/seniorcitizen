function filterSeniorCitizens() {
    const ageInput = document.getElementById('ageInput').value;
    const personList = document.getElementById('personList');
    const people = personList.getElementsByTagName('li');

    for (let i = 0; i < people.length; i++) {
        const person = people[i];
        const age = parseInt(person.textContent.match(/Age: (\d+)/)[1]);

        if (age >= 65) {
            person.style.display = 'none';
        } else {
            person.style.display = 'list-item';
        }
    }
}
