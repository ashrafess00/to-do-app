let btncrete = document.getElementById("btnid");
let cr = document.getElementById("createNewList");
let container2 = document.getElementById("container2");
// let container3 = document.getElementById("container3");
let itemsCounter = 0;
let itamesLeft = document.getElementById("itemsleft");

let activeitems = document.getElementById("activeitems");
let completeditems = document.getElementById("Completeditems");
let allitems = document.getElementById("allitems");
let clearitems = document.getElementById("clearitems");

let activelists = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",

  "",
  "",
  "",
  "",

  "",
  "",
  "",
  "",

  "",
  "",
  "",
  "",
];
let completedlists = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];
let lists = [];

let all = document.createElement("div");
let acCon = document.createElement("div");
acCon.className = "d-flex flex-column";

let coCon = document.createElement("div");
coCon.className = "d-flex flex-column";

let isdark = false;
/////////////////////////////////
let activeobj = {
  comple: true,
  it: [],
};
/////////////////////////////////
function fun() {
  if (cr.value.length == 0) {
    //////////////
  } else {
    let iscompleted = true;
    itemsCounter += 1;

    itamesLeft.innerHTML = `${itemsCounter} items left`;

    let divCon = document.createElement("div");
    divCon.classList = "container d-flex align-items-center";
    divCon.classList.add("tasks");

    let btn = document.createElement("button");
    btn.className = "btnn";
    let span = document.createElement("span");

    let listText = document.createTextNode(cr.value);

    span.appendChild(listText);

    divCon.appendChild(btn);
    divCon.appendChild(span);

    lists.push(divCon);
    if (isdark) {
      divCon.classList.add("container-dark");
    }

    activelists.splice(lists.indexOf(divCon), 1, divCon);

    divCon.addEventListener("click", function () {
      btn.classList.toggle("btnn-style");
      span.classList.toggle("completed");

      if (iscompleted) {
        iscompleted = false;
        itemsCounter -= 1;
        itamesLeft.innerHTML = `${itemsCounter} items left`;

        activelists.splice(lists.indexOf(divCon), 1, "");
        completedlists.splice(lists.indexOf(divCon), 1, divCon);
      } else {
        iscompleted = true;
        itemsCounter += 1;
        itamesLeft.innerHTML = `${itemsCounter} items left`;

        completedlists.splice(lists.indexOf(divCon), 1, "");
        activelists.splice(lists.indexOf(divCon), 1, divCon);
      }
    });
    allitems.click();
    cr.value = "";
  }
}
//////////////////////////////////////////////////////////////////
activeitems.addEventListener("click", function () {
  console.log("hi");
  container2.style.display = "none";
  container2.classList.remove("d-flex");

  coCon.style.display = "none";
  acCon.style.display = "flex";
  coCon.classList.remove("d-flex");

  for (i = 0; i < activelists.length; i++) {
    if (activelists[i] == "") {
      continue;
    } else {
      acCon.appendChild(lists[activelists.indexOf(activelists[i])]);
    }
  }
  document.querySelector(".bottom1").appendChild(acCon);
});
//////
completeditems.addEventListener("click", function () {
  container2.style.display = "none";
  container2.classList.remove("d-flex");
  ///
  acCon.style.display = "none";
  acCon.classList.remove("d-flex");

  coCon.style.display = "flex";

  for (i = 0; i < completedlists.length; i++) {
    if (completedlists[i] == "") {
      continue;
    } else {
      coCon.appendChild(lists[completedlists.indexOf(completedlists[i])]);
    }
  }
  document.querySelector(".bottom1").appendChild(coCon);
});
////////////
allitems.addEventListener("click", function () {
  container2.style.display = "flex";
  container2.classList.add("d-flex");
  acCon.style.display = "none";
  coCon.style.display = "none";

  for (i = 0; i < lists.length; i++) {
    if (lists[i] == "") {
      continue;
    } else {
      container2.appendChild(lists[i]);
    }
  }
});

let test = 0;

clearitems.addEventListener("click", function () {
  allitems.click();
  for (let i = 0; i < completedlists.length; i++) {
    if (completedlists[i] !== "") {
      completedlists.splice(i, 1, "");
      lists.splice(i, 1, "");
    } else {
      continue;
    }
  }
  for (i = 0; i < container2.children.length; i++) {
    if (container2.children[i].lastChild.classList.contains("completed")) {
      container2.children[i].remove();
      i = 0;
    } else {
      continue;
    }
  }
});

//to dark mode
let moon = document.getElementById("todark");
let background = document.querySelector(".background");
let containerid = document.querySelector(".container");
let bottom2 = document.querySelector(".bottom2");

moon.addEventListener("click", function () {
  if (isdark == false) {
    isdark = true;
    moon.setAttribute("src", "images/icon-sun.svg");
  } else {
    isdark = false;
    moon.setAttribute("src", "images/icon-moon.svg");
  }
  document.querySelector(".filter").classList.toggle("filter-dark");
  background.classList.toggle("background-dark");
  containerid.classList.toggle("container-dark");
  document.body.classList.toggle("body-dark");
  document.querySelector(".inpu").classList.toggle("inpu-dark");
  bottom2.classList.toggle("bottom2-dark");
  for (let i = 0; i < container2.children.length; i++) {
    container2.children[i].classList.toggle("container-dark");
  }
});
