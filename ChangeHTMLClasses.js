export function changeHTMLClasses(element, classes, action) {
    function singleClassAction(singleClassName) {
        switch (action) {
            case "add":
                element.classList.add(singleClassName);
                break;
            case "remove":
                element.classList.remove(singleClassName);
                break;
        }
    }
    switch (typeof classes) {
        case "string":
            singleClassAction(classes, action);
            break;
        case "object":
            for (let i = 0; i < classes.length; i++) {
                singleClassAction(classes[i], action);
            }
            break;
    }
    if (action === "remove" && element.classList.value === "") {
        element.removeAttribute("class");
    }
}