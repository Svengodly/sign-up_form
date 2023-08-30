let pass = document.querySelector("input[id=pass]");
let passMatch = document.querySelector("input[id=pass_match");



// if (document.querySelector("input[id=pass]").value == "") {
//     document.querySelector("p").innerText = "Blarg!";
// }
// if (document.querySelector("input[id=pass]").value == "test"){
//     document.querySelector("p").innerText = "Success!";
// }
pass.addEventListener("input", () => {
    let entered = pass.value;

    passMatch.setAttribute("pattern", `${entered}`);
})
