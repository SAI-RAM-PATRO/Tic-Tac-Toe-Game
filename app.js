let boxes = document.querySelectorAll(".box");
let reset_button = document.querySelector("#reset_button");
let newgame_button = document.querySelector("#newgame_button");
let msg_container = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");


let turn0 = true;

const winpatterns = [


	[0,1,2],
	[0,3,6],
	[0,4,8],
	[1,4,7],
	[2,5,8],
	[2,4,6],
	[3,4,5],
	[6,7,8],


];

const resetgame = () => {
	turn0 = true;
	count = 0 ;
	enabledboxes();
	msg_container.classList.add("hide");
};


boxes.forEach((box) => {

	box.addEventListener("click", () => {
		console.log("box was clicked");
		if(turn0){
			box.innerText = "O";
			
			turn0 = false;

		}else{
			box.innerText = "X";
			turn0 = true;
		}

		box.disabled=true;

		checkwinner();

	});

});

const disabledboxes = () => {
	for(let box of boxes)

	box.disabled= true;

}
const enabledboxes = () => {
	for(let box of boxes){

	box.disabled= false;
	box.innerText = "";
	}
}


const showwinnwer = (winner) => {
	msg.innerText = `Congratulations, The Winner is ${winner}`;
	msg_container.classList.remove("hide");
	disabledboxes();
}

	const checkwinner = ()=>{
		for (let pattern of winpatterns){
			let pas1val = boxes[pattern[0]].innerText;
			let pas2val = boxes[pattern[1]].innerText;
			let pas3val = boxes[pattern[2]].innerText;

			if(pas1val!="" && pas2val != ""&& pas3val!=""){
				if(pas1val===pas2val && pas2val===pas3val){
					console.log("winner");
					showwinnwer(pas1val);
				}
			}

		}
	};

	newgame_button.addEventListener("click", resetgame);
reset_button.addEventListener("click", resetgame);
