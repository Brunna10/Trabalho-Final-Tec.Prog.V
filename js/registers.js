load();

function load(){
    var loadIdNome = -1;
    var loadIdTel = -1;
    var loadIdEmail = -1;
    var loadIdDescricao = -1;

    var text;
    
    var newColNome = document.createElement('td');
    var newColTel = document.createElement('td');
    var newColEmail = document.createElement('td');
    var newColDescricao = document.createElement('td');

    var table = document.getElementById('tb-register');

    var cont = localStorage.length;

    for (cont; cont >= 0; cont -= 4){
        numOfRows = table.rows.length;
        newRow = table.insertRow(numOfRows);
        
        text = document.createTextNode(localStorage.getItem('NOME_'+loadIdNome.toString()));
        newColNome.appendChild(text);
        newColNome = newRow.insertCell();

        text = document.createTextNode(localStorage.getItem('TEL_'+loadIdTel.toString()));
        newColTel.appendChild(text);
        newColTel = newRow.insertCell();
       
        text = document.createTextNode(localStorage.getItem('EMAIL_'+loadIdEmail.toString()));
        newColEmail.appendChild(text);
        newColEmail = newRow.insertCell();

        text = document.createTextNode(localStorage.getItem('DESCRICAO_'+loadIdDescricao.toString()));
        newColDescricao.appendChild(text);
        newColDescricao = newRow.insertCell();
    
        loadIdNome++;
        loadIdTel++;
        loadIdEmail++;
        loadIdDescricao++;
    }
}