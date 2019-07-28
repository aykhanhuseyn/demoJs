var std = [
    {
        name: "a",
        email: "a",
    },
    {
        name: "a",
        email: "b",
    }
]

var scr = [
    {
        email: "a",
        score: 24
    },
    {
        email: "b",
        score: 27
    },
    {
        email: "a",
        score: 24
    },
    {
        email: "b",
        score: 3
    }
]

jf = 0;
for(let f of scr) {
	if(f.email == std[1].email){
		jf += f.score;
	}
}

function addStudent(){
    std.push(
        {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value
        }
    );
    document.getElementById('students').innerHTML += createRow();
}

function createRow(){
    return `
    <tr>
        <td scope="col">#</td>
        <td scope="col">${document.getElementById('name').value}</td>
        <td scope="col">${document.getElementById('surname').value}</td>
        <td scope="col">${document.getElementById('email').value}</td>
        <td scope="col">${document.getElementById('birthday').value}</td>
    </tr>
    `
}

