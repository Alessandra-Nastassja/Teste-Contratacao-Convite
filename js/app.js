window.onload = function what() {

    document.querySelector('#event_starts_at').onchange = function () {
        var selectedValue = this.value;
        document.getElementById('event-short-weekday-hour').innerHTML = selectedValue;
    }

    document.getElementById("event_date").onkeypress = function (e) {
        var data = document.getElementById('event_date').value;
        if (data.length == 2) {
            data = data + '/';
            document.forms[0].data.value = data;
            return true;
        }
        if (data.length == 5){
            data = data + '/';
            document.forms[0].data.value = data;
            return true;
        }
    }
};