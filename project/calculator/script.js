const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.innerText;

        // AC
        if (value === "AC") {
            display.value = "";
        }

        // DELETE
        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        }

        // Equal
        else if (value === "=") {

            try {
                if (display.value === "") {
                    return;
                }

                display.value = eval(display.value);
            } 
            catch (error) {
                display.value = "Error";
            }
        }

        // Percentage
        else if (value === "%") {

            try {
                display.value = eval(display.value) / 100;
            } 
            catch (error) {
                display.value = "Error";
            }
        }

        // Numbers and operators
        else {
            display.value += value;
        }

    });

});