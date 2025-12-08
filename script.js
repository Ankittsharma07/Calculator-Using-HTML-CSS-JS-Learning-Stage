let String = "";
let displayString = "";
let buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach((buttons) => {
    buttons.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            String = eval(String)
            document.querySelector('input').value = String;
        }
        else if (e.target.innerHTML == 'AC') {
            String = "";
            document.querySelector('input').value = String;
        }
        else if (e.target.innerHTML == 'DEL') {
            String = String.slice(0, -1);
            document.querySelector('input').value = String;
        }
        else if (e.target.innerHTML == '%') {
            String = eval(String) / 100;
            document.querySelector('input').value = String;
        }
        else {
            let clicked = e.target.innerHTML;

            if (clicked === '÷') {
                String += '/';
                displayString += '÷';
            }
            else if (clicked === '×') {
                String += '*';
                displayString += '×';
            }
            else {
                String += clicked;
            }
            document.querySelector('input').value = string;
        }

    })
})
