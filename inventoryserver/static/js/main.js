function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name"+no);
 var description=document.getElementById("description"+no);
 var quantity=document.getElementById("quantity"+no);
 var added_on=document.getElementById("added_on"+no);
	
 var name_data=name.innerHTML;
 var description_data=description.innerHTML;
 var quantity_data=age.innerHTML;
 var added_on_data=age.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 description.innerHTML="<input type='text' id='description_text"+no+"' value='"+description_data+"'>";
 quantity.innerHTML="<input type='text' id='quantity_text"+no+"' value='"+quantity_data+"'>";
 added_on.innerHTML="<input type='text' id='added_on_text"+no+"' value='"+added_on_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var description_val=document.getElementById("description_text"+no).value;
 var quantity_val=document.getElementById("quantity_text"+no).value;
 var added_on_val=document.getElementById("added_on_text"+no).value;

 document.getElementById("name"+no).innerHTML=name_val;
 document.getElementById("description"+no).innerHTML=description_val;
 document.getElementById("quantity"+no).innerHTML=quantity_val;
 document.getElementById("added_on"+no).innerHTML=added_on_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_description=document.getElementById("new_description").value;
 var new_quantity=document.getElementById("new_quantity").value;
 var new_added_on=document.getElementById("new_added_on").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name"+table_len+"'>"+new_name+"</td><td id='description"+table_len+"'>"+new_description+"</td><td id='quantity"+table_len+"'>"+new_quantity+"</td><td id='added_on"+table_len+"'>"+new_added_on+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_description").value="";
 document.getElementById("new_quantity").value="";
 document.getElementById("new_added_on").value="";
}
