const init = (el) => {
    let btn = document.createElement("button");
    btn.innerText = "Click me";
    btn.addEventListener('click', () => window.alert('click.app1'))

    el.append(btn)
}

export default init;
