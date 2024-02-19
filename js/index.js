let container = document.querySelector(`.container`);
// это "предыдущая" карточка
let button = document.querySelector(`.button`)
function play(){
    let div = document.querySelectorAll(`div`);
    div.classList.remove(`d-none`)
    for(let i = container.children.length; i>=0;i--){
        container.appendChild(container.children[Math.random() * i | 0]);
        
    }
    
    // если карточка не выбрана, то должна быть пустая строка
    let prevNode = ``;
    
    container.addEventListener(`click`, function(evt){
        let node = evt.target;
        // если элемент закрыт
        if (node.classList.contains(`item_closed`)) {
                // открываем его
                node.classList.remove(`item_closed`);
            
                // если открытых карточек нет
                if (prevNode == ``) {
                // запоминаем текущую карточку
                prevNode = node;
            
                } else if (
                         // если открыли две одинаковые карточки
                    prevNode.classList.contains(`item1`) && node.classList.contains(`item1`)) {
                    node.classList.add(`d-none`);
                    prevNode.classList.add(`d-none`);
                    prevNode = ``;
                }else if (
                    // если открыли две одинаковые карточки
               prevNode.classList.contains(`item2`) && node.classList.contains(`item2`)) {
               node.classList.add(`d-none`);
               prevNode.classList.add(`d-none`);
               prevNode = ``;
               }else {
            
                // если открыли не одинаковую карточку
                // закрываем предыдущую
                prevNode.classList.add(`item_closed`);
                // запоминаем новую карточку
                prevNode = node;
            }
        }
    });
}
play()    
button.addEventListener(`click`, play)   
