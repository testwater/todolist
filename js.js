const todoInput=document.querySelector(".todo-input");const addTodo=document.querySelector(".add");const todoList=document.querySelector(".todo-list");let todoItems=[];document.addEventListener("DOMContentLoaded",getTodoList);addTodo.addEventListener("click",addTodoItem);todoList.addEventListener("click",deleteAndCheck);addEventListener("keyup",enter);const _0xb1d8=["6SyNGkU","setItem","227527MEqatx","remove","createElement","delete","190966ertOsm","1EPlwhs","parentElement","data","387063faeAWt","check","appendChild","innerHTML","1jvVGrC","140394tRIvTO","Field cannot be empty","indexOf","add","stringify","556298hZloJL","value","toggle","splice","classList","target","5MFtiRG","448477grvnJH","139644tMfWoj","2vhHkmN","done","2wzfHsX"];const _0x4fc2=function(_0x1ff5b6,_0x479701){_0x1ff5b6=_0x1ff5b6-102;let _0xb1d814=_0xb1d8[_0x1ff5b6];return _0xb1d814};(function(_0x272d43,_0x4d8894){const _0xe78fb3=_0x4fc2;while(!![]){try{const _0x4ff182=-parseInt(_0xe78fb3(126))+-parseInt(_0xe78fb3(113))*parseInt(_0xe78fb3(114))+-parseInt(_0xe78fb3(128))*parseInt(_0xe78fb3(133))+-parseInt(_0xe78fb3(125))*-parseInt(_0xe78fb3(105))+parseInt(_0xe78fb3(130))*-parseInt(_0xe78fb3(109))+-parseInt(_0xe78fb3(131))*-parseInt(_0xe78fb3(127))+parseInt(_0xe78fb3(106))*parseInt(_0xe78fb3(119));if(_0x4ff182===_0x4d8894)break;else _0x272d43["push"](_0x272d43["shift"]())}catch(_0x2055a7){_0x272d43["push"](_0x272d43["shift"]())}}})(_0xb1d8,530941);function addTodoItem(){const _0x356f2f=_0x4fc2;todoInput[_0x356f2f(120)]["trim"]()!==""?saveData():alert(_0x356f2f(115)),todoInput["value"]="",todoList[_0x356f2f(112)]="",display()}function display(){const _0x2224fc=_0x4fc2;for(let _0x347313=0;_0x347313<todoItems["length"];_0x347313++){let _0x560baa=document[_0x2224fc(103)]("li");_0x560baa[_0x2224fc(112)]=[todoItems[_0x347313]],todoList[_0x2224fc(111)](_0x560baa);const _0x130d51=document[_0x2224fc(103)]("button");_0x130d51[_0x2224fc(123)][_0x2224fc(117)]("check"),_0x130d51[_0x2224fc(112)]=_0x2224fc(129);const _0x1b2ad4=document[_0x2224fc(103)]("button");_0x1b2ad4["classList"][_0x2224fc(117)]("remove"),_0x1b2ad4[_0x2224fc(112)]=_0x2224fc(104),_0x560baa[_0x2224fc(111)](_0x130d51),_0x560baa[_0x2224fc(111)](_0x1b2ad4)}}function deleteAndCheck(_0x4e2878){const _0x1dddec=_0x4fc2;element=_0x4e2878[_0x1dddec(124)],element[_0x1dddec(123)][0]===_0x1dddec(110)&&element[_0x1dddec(107)][_0x1dddec(123)][_0x1dddec(121)]("checked"),element[_0x1dddec(123)][0]===_0x1dddec(102)&&(element[_0x1dddec(107)][_0x1dddec(102)](),todoIndex=element[_0x1dddec(107)]["firstChild"][_0x1dddec(108)],todoItems[_0x1dddec(122)](todoItems[_0x1dddec(116)](todoIndex),1),localStorage[_0x1dddec(132)]("todo-list",JSON[_0x1dddec(118)](todoItems)))}function saveData(){todoItems.push(todoInput.value);localStorage.setItem("todo-list",JSON.stringify(todoItems))}function getTodoList(){if(localStorage.getItem("todo-list")===null){todoItems=[]}else{todoItems=JSON.parse(localStorage.getItem("todo-list"))}display()}function enter(event){if(event.key==="Enter"){addTodoItem()}}