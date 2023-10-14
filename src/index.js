document.addEventListener("DOMContentLoaded", () => {
  let text;
  const submitForm = (e) =>{
      e.preventDefault();
      // access the text content
    text = document.querySelectorAll("input")[0].value;

    console.log(text);
    todoFunc(text);
    form.reset();
       let p = document.createAttribute('p');   
       p.innerText = document.querySelectorAll("input")[0].value;
       form.appendChild(p);
      console.log(document.body.appendChild(p));
      }
  
  let form = document.getElementById('create-task-form');
  form.addEventListener("submit", submitForm );
  form.reset();
  
  
  function todoFunc(text){
    let li = document.createElement('li');
    let btn = document.createElement('button');
    btn.addEventListener('click',handleDelete);
    btn.textContent = 'x';
    btn.style.color = 'red';
    li.textContent = `${text} `;
    li.appendChild(btn);
    
    console.log(li);
    document.querySelector('#tasks').appendChild(li);
  }
  // Delete using a button
 const handleDelete = (e) => {
      e.target.parentNode.remove();
 };
 
});
