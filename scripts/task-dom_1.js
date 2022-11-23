
    let list = document.querySelector('ul');
    let list_elem = document.querySelector('li');        
    
    let width = parseInt(getComputedStyle(document.querySelector('.carusel__item'),null).width,10);   
    let view_width = parseInt(getComputedStyle(document.querySelector('.carusel'),null).width,10);

    let view_count = view_width/width;
    let all_elem_count = list.children.length;

    let pos = 0;

      document.querySelector('#prev').onclick = function(event) {        
        pos += width;
        if (pos>=0)pos=0;        
        list.style.marginLeft = pos + 'px';        
        list.style.transition = '0.5s';
        event.preventDefault();
      };
  
      document.querySelector('#next').onclick = function(event) {        
        pos -= width;
        if (pos<=-width*(all_elem_count-view_count)) pos=-width*(all_elem_count-view_count);        
        list.style.transition = '0.5s';
        list.style.marginLeft = pos + 'px';        
        //  for (let k=pos; k<=width * count; k++){             
        //      list.style.marginLeft = pos + 'px';        
        //  }
        event.preventDefault();
      };

