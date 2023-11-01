class Counters {

    counterLoad(counterID, counterNumEnd) {
        let counts = setInterval(updated);
        let upto = 0;

        function updated() {
            let count = document.getElementById(counterID);
            count.innerHTML = ++upto;
            if (upto === counterNumEnd) {
                clearInterval(counts);
            }
        }
    }
}