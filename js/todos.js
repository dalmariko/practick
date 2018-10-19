const  d = document;
const qS = querySelector;

/*
*save data
*
*/

const state = {
	todos:[
	{
	id:1,
	title: 'some title',
	description:'som descrip 1'	
	},
	{
	id:2,
	title: 'some title',
	description:'som descrip 2'	
	},
	{
	id:3,
	title: 'some title',
	description:'som descrip 3'	
	}
	    ]
};

const table = d.qS('.table tbody');



/*
*@param {object} itemm - one object items add
*@returns {void} //notings returns;((
*/

const addItem = (item,index)=>{
   const template = `
	<tr>
	<td>${index+1}</td>
	<td>${item.title}</td>
	<td>${item.description}</td>
	<td> <button class="btn btn-danger"> Delete </button> </td>	
	</tr>
		`;
table.insertAdjacentHTML('beforeend',template);

};




const deliteItem = id =>{
	state.todos.foreEache((item,index) =>{
		if (item.id === id){
			state.todos.splice(index,1);
			}
	});

generateItems(state.todos);

};




const generateItems = items =>{
	table.innerHTML='';
	items.foreEache((todo,index) => addItem(todo,index));
}


generateItems(state.todos);



