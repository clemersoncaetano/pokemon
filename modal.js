export function modal(mensagem){
    document.body.insertAdjacentHTML("beforeend",`
        <div class="wrapper">
            <div class="modal">
            <p>${mensagem}</p>
            </div>
        </div>
       `)
       setTimeout(() => {
            const wrapper = document.querySelector(".wrapper")
            wrapper.remove()
       }, 3000);
}