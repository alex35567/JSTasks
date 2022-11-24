
parent=document.querySelector('.btn');
parent.addEventListener('click', modal(parent,'Модальное окно'));


function modal(selector, text){
    // const base_el = document.querySelector(selector);
    let overlay=null;
    let newItem=null;

    selector.addEventListener('click', function(e) {
        if (overlay!=null)
            if (overlay == e.target) {
                selector.removeChild(overlay);            
                selector.removeChild(newItem); 
            }
        if (selector !== e.target) return;
        overlay = document.createElement('div');
        selector.appendChild(overlay);  
        overlay.style.position="absolute";    
        overlay.style.top="0";    
        overlay.style.bottom="0";
        overlay.style.left="0";
        overlay.style.right="0";
        overlay.style.opacity="0.4";
        overlay.style.backgroundColor="black";

        newItem = document.createElement('div');
        selector.appendChild(newItem);        
        // newItem.classList.add('modal');
        newItem.textContent = text;
        
        newItem.style.position="absolute";    
        newItem.style.top="50%";

        let left_modal = (document.documentElement.clientWidth/2 - newItem.offsetWidth/2)/document.documentElement.clientWidth*100;

        newItem.style.left=left_modal.toString()+'%';

        newItem.style.borderRadius="10%";
        newItem.style.padding="10px 10px";
        newItem.style.height="10%";
        newItem.style.border="2px solid green";
        newItem.style.backgroundColor="black";
        newItem.style.color="white";        


        const newItem_x=document.createElement('a');
        // newItem_x.classList.add('modal__close');

        newItem_x.style.position="relative";
        newItem_x.style.display="block";
        newItem_x.style.bottom="38px";
        newItem_x.style.left="111px";
        newItem_x.style.content="x";
        newItem_x.style.fontSize="20px";
        newItem_x.style.width="20px";
        newItem_x.style.height="20px";
        newItem_x.style.borderRadius="50%";
        newItem_x.style.textAlign="center";
        newItem_x.style.backgroundColor="red";
        newItem_x.style.color="yellow";
        newItem_x.style.cursor="pointer";


        newItem_x.textContent='x';
        newItem.appendChild(newItem_x);        
        newItem_x.addEventListener('click', function(event) {
            event.preventDefault();
            selector.removeChild(overlay);            
            selector.removeChild(newItem); 
        });
    })    

}

