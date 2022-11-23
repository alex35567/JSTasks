
    let list = document.querySelector('ul');
    let list_elem = document.querySelector('li');
    let pos = 0;
    let width = 50;
    let view_count = 3;
    let all_elem_count = 7;

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

