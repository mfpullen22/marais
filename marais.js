//Criteria arrays and image criteria to disable
var clinArray = document.querySelectorAll(".clin"); 
var csfArray = document.querySelectorAll(".csf");
var imgArray = document.querySelectorAll(".img");
var elseArray = document.querySelectorAll(".else");
var imgDis = [];
imgDis = document.querySelectorAll(".img");
var criteria3crit =[]
crit = document.querySelectorAll(".criteria3");
var inputDis = document.querySelector("input.imgDisable")

//Score variables
var clinicalScore = 0;
var csfScore = 0;
var imgScore = 0;
var elseScore = 0;
var total = 0

//Adjusted score variacles
var clinAdj = 0;
var csfAdj = 0;
var imgAdj = 0;
var elseAdj = 0;

//Criteria math (4 sets)
for(var i = 0; i < clinArray.length; i++){
    clinArray[i].addEventListener("change", function() {
        if(this.checked){
            clinicalScore = clinicalScore + Number(this.value);
            calculateTotal();
        } else {
            clinicalScore = clinicalScore - Number(this.value);
            calculateTotal();
        }
    });
  }

for(var i = 0; i < csfArray.length; i++){
    csfArray[i].addEventListener("change", function() {
        if(this.checked){
            csfScore = csfScore + Number(this.value);
            calculateTotal();
        } else {
            csfScore = csfScore - Number(this.value);
            calculateTotal();
        }
    });
  }

for(var i = 0; i < imgArray.length; i++){
    imgArray[i].addEventListener("change", function() {
        if(this.checked){
            imgScore = imgScore + Number(this.value);
            calculateTotal();
        } else {
            imgScore = imgScore - Number(this.value);
            calculateTotal();
        }
    });
  }

$(".imgDisable").change(function(){
    $(".img").prop("checked", false);
    for(var i = 0; i < imgDis.length; i++){
        imgDis[i].toggleAttribute("disabled");
    }
    for(var i = 0; i < crit.length; i++){
        if(inputDis.checked){
          crit[i].style.color = "#000";
          crit[i].style.fontStyle = "normal";
        } else {
          crit[i].style.color = "gray";
          crit[i].style.fontStyle = "italic";
        }
      }
    imgScore = 0;
    calculateTotal();
});

for(var i = 0; i < elseArray.length; i++){
    elseArray[i].addEventListener("change", function() {
        if(this.checked){
            elseScore = elseScore + Number(this.value);
            calculateTotal();
        } else {
            elseScore = elseScore - Number(this.value);
            calculateTotal();
        }
    });
  }

//Changing total and text output at the bottom of the calcualtor)
function resultText(){
    var scoreNum = document.querySelector("#totalScore");
    var interp = document.querySelector("#interpretation");
    if(inputDis.checked){
        if(total >= 12 && csfAdj > 1){
            scoreNum.textContent = total;
            scoreNum.style.color = "rgb(186, 28, 17)";
            interp.textContent = "Probable TBM";
            interp.style.color = "rgb(186, 28, 17)";
        } else if(total >= 12 && imgAdj > 1){
            scoreNum.textContent = total;
            scoreNum.style.color = "rgb(186, 28, 17)";
            interp.textContent = "Probable TBM";
            interp.style.color = "rgb(186, 28, 17)";
        } else if(total >=6) {
            scoreNum.textContent = total;
            scoreNum.style.color = "rgb(184, 152, 11)";
            interp.textContent = "Possible TBM";
            interp.style.color = "rgb(184, 152, 11)";
        } else {
            scoreNum.textContent = total;
            scoreNum.style.color = "rgb(13, 107, 14)";
            interp.textContent = "Unlikely TBM";
            interp.style.color = "rgb(13, 107, 14)";
        }  
    } else {
        if(total >= 10 && csfAdj > 1){
            scoreNum.textContent = total;
            scoreNum.style.color = "rgb(186, 28, 17)";
            interp.textContent = "Probable TBM";
            interp.style.color = "rgb(186, 28, 17)";
        } else if(total >= 10 && imgAdj > 1) {
            scoreNum.textContent = total;
            scoreNum.style.color = "rgb(186, 28, 17)";
            interp.textContent = "Probable TBM";
            interp.style.color = "rgb(186, 28, 17)";
        } else if(total >=6) {
            scoreNum.textContent = total;
            scoreNum.style.color = "rgb(184, 152, 11)";
            interp.textContent = "Possible TBM";
            interp.style.color = "rgb(184, 152, 11)";
        } else {
            scoreNum.textContent = total;
            scoreNum.style.color = "rgb(13, 107, 14)";
            interp.textContent = "Unlikely TBM";
            interp.style.color = "rgb(13, 107, 14)";
        }  
    }
}
//Calculating the total score

function calculateTotal(){
    if(clinicalScore > 6) {
        clinAdj = 6;
    } else {
        clinAdj = clinicalScore;
    }
    if(csfScore > 4) {
        csfAdj = 4;
    } else {
        csfAdj = csfScore;
    }
    if(imgScore > 6) {
        imgAdj = 6;
    } else {
        imgAdj = imgScore;
    }
    if(elseScore > 4) {
        elseAdj = 4;
    } else {
        elseAdj = elseScore;
    }
    total = clinAdj + csfAdj + imgAdj + elseAdj;
    resultText();
}
