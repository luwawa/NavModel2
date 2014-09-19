/* Author:

*/
var step=0;   
   
$(document).ready(function(){
 $("#thumbnail").draggable({ axis: "x" });
 $("#readNav").click(showReadingView);
 $("#rehearseNav").click(showRehearseView);
 $("#presentNav").click(showPresenterView);
 $("#takeNote").click(function() {showNotesView(1)});
 $("#addNote").click(function() {showNotesView(0)});
 $("#arrow").click(showEditView);
 $("#back").click(function(){pvNavigation(1)});
 $("#forward").click(function(){pvNavigation(0)});


});





function showReadingView(){
    //toggle logo and arrow
 $("#logo").hide();
 $("#arrow").show();
    //change view lable
 $("#lablePPT").hide();
 $("#lableReading").show();
 $("#lablePresenting").hide();
 $("#lableRehearsing").hide();
    //change navbar
  $("#editNavbar").hide();
 $("#readNavbar").show();
 $("#pvNavbar").hide();
 $("#rvNavbar").hide();
    //change view content
 $("#editView").hide();
 $("#readingView").show();
 $("#rpView").hide();
 $("#notesView").hide();
}
function showEditView(){
    //toggle logo and arrow
 $("#logo").show();
 $("#arrow").hide();
    //change view lable
 $("#lablePPT").show();
 $("#lableReading").hide();
 $("#lablePresenting").hide();
 $("#lableRehearsing").hide();
    //change navbar
 $("#editNavbar").show();
 $("#readNavbar").hide();
 $("#pvNavbar").hide();
 $("#rvNavbar").hide();
    //change view content
 $("#editView").show();
 $("#readingView").hide();
 $("#rpView").hide();
 $("#notesView").hide();
}
function showRehearseView(){
    //toggle logo and arrow
 $("#logo").hide();
 $("#arrow").show();
    //change view lable
 $("#lablePPT").hide();
 $("#lableReading").hide();
 $("#lablePresenting").hide();
 $("#lableRehearsing").show();
    //change navbar
  $("#editNavbar").hide();
 $("#readNavbar").hide();
 $("#pvNavbar").hide();
 $("#rvNavbar").show();
    //change view content
 $("#editView").hide();
 $("#readingView").hide();
 $("#rpView").show();
 $("#notesView").hide();
}
function showPresenterView(){
    //toggle logo and arrow
 $("#logo").hide();
 $("#arrow").show();
    //change view lable
 $("#lablePPT").hide();
 $("#lableReading").hide();
 $("#lablePresenting").show();
 $("#lableRehearsing").hide();
    //change navbar
 $("#editNavbar").hide();
 $("#readNavbar").hide();
 $("#pvNavbar").show();
 $("#rvNavbar").hide();
    //change view content
 $("#editView").hide();
 $("#readingView").hide();
 $("#rpView").show();
 $("#notesView").hide();
}

function showNotesView(takeOrAdd){
    //toggle logo and arrow
 $("#logo").hide();
 $("#arrow").show();
    //change view lable
 $("#lablePPT").hide();
 $("#lableReading").hide();

    //change navbar
 $("#editNavbar").hide();
 $("#readNavbar").hide();
 if (takeOrAdd==1){
     $("#pvNavbar").show();
     $("#rvNavbar").hide();
     $("#lablePresenting").show();
     $("#lableRehearsing").hide();
    }
 else{
     $("#pvNavbar").hide();
     $("#rvNavbar").show();
     $("#lablePresenting").hide();
     $("#lableRehearsing").show();
    }
    //change view content
 $("#editView").hide();
 $("#readingView").hide();
 $("#rpView").hide();
 $("#notesView").show();
}

function pvNavigation(direction){
if (direction==0){
    renderSlides();
    if (step==6){
        step=0;
        }
    else {
        step +=1;
        }
    }
else{
    if (step==0){
        step=0;
        }   
    else{
        step -=1;
        }
    }
    renderSlides();
}

function renderSlides()
{
if (step==0){
    $("#s01").show();
    $("#s01_s1").hide();
    $("#s01_s2").hide();
    $("#s01_s3").hide();
    $("#s01_s4").hide();
    $("#s02").hide();
    $("#s03").hide();

    }
else if (step==1){
    $("#s01").hide();
    $("#s01_s1").show();
    $("#s01_s2").hide();
    $("#s01_s3").hide();
    $("#s01_s4").hide();
    $("#s02").hide();
    $("#s03").hide();

    }
else if (step==2){
    $("#s01").hide();
    $("#s01_s1").hide();
    $("#s01_s2").show();
    $("#s01_s3").hide();
    $("#s01_s4").hide();
    $("#s02").hide();
    $("#s03").hide();

    }
else if (step==3){
    $("#s01").hide();
    $("#s01_s1").hide();
    $("#s01_s2").hide();
    $("#s01_s3").show();
    $("#s01_s4").hide();
    $("#s02").hide();
    $("#s03").hide();

    }
else if (step==4){
    $("#s01").hide();
    $("#s01_s1").hide();
    $("#s01_s2").hide();
    $("#s01_s3").hide();
    $("#s01_s4").show();
    $("#s02").hide();
    $("#s03").hide();

    }
else if (step==5){
    $("#s01").hide();
    $("#s01_s1").hide();
    $("#s01_s2").hide();
    $("#s01_s3").hide();
    $("#s01_s4").hide();
    $("#s02").show();
    $("#s03").hide();

    }
else {
    $("#s01").hide();
    $("#s01_s1").hide();
    $("#s01_s2").hide();
    $("#s01_s3").hide();
    $("#s01_s4").hide();
    $("#s02").hide();
    $("#s03").show();

    }
}