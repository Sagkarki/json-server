
window.addEventListener('load', ()=>{
  const form = document.querySelector("#add_new");
  const input = document.querySelector(".new-info-input");
  const list_el = document.querySelector(".data-info-container")

form.addEventListener('submit', (e) =>{
  e.preventDefault();

  const data = input.value;

  const data_el = document.createElement('div');
  data_el.classList.add('input-event-name');
  
  const data_content_el = document.createElement('div');
  data_content_el.classList.add('input-start-date');
  
  data_el.appendChild(data_content_el);

const data_input_el = document.createElement('input');
		data_input_el.classList.add('text');
		data_input_el.type = 'date';
		data_input_el.value = data;
    task_input_el.setAttribute('readonly', 'readonly');
  data_content_el.appendChild(data_input_el);
	
  const data_input_el2 = document.createElement('input');
		data_input_el2.classList.add('text');
		data_input_el2.type = 'date';
		data_input_el2.value = data;
    data_input_el2.setAttribute('readonly', 'readonly');
    data_content_el2.appendChild(data_input_el);

    const data_edit_el = document.createElement('button');
		data_edit_el.classList.add('edit');
		data_edit_el.innerText = 'EDIT';

		const data_delete_el = document.createElement('button');
		data_delete_el.classList.add('delete');
		data_delete_el.innerText = 'Delete';

		data_content_el.appendChild(data_edit_el);
    data_content_el.appendChild(data_delete_el);

    list_el.appendChild(data_el);
    input.value = '';

    data_edit_el.addEventListener('click', (e) => {
			if (data_edit_el.innerText.toLowerCase() == "edit") {
				data_edit_el.innerText = "SAVE";
				data_input_el.removeAttribute("readonly");
				data_input_el.focus();
			} else {
				data_edit_el.innerText = "EDIT";
				data_input_el.setAttribute("readonly", "readonly");
			}
		});
    data_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(data_el);
		});

})

});






function getData(){
     return fetch("db.json")
    .then(response =>response.json())
    .then(db =>{
       
        return db;
    })
}
function showData(data){
    console.log(data);
    let dataContainer = document.querySelector(".data-container");
    let dataHTML = "";
    // if(typeof(db) === "string"){db = JSON.parse(db)}
    
    data.forEach(dat =>{
       dataHTML += `
       <div class="data-info-container">
        <div class="input-event-name">
          <input disabled value="${eventName}" />
        </div>
        <div class="input-start-date">
          <input type="date" value="${startDate}" />
        </div>
        <div class="input-end-date">
          <input type="date" value="${endDate}" />
        </div>
        <div class="buttons">
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </div>
       
       `
    })
    console.log(dataHTML)
}
 getData().then(db =>{
     showData(db);
 });