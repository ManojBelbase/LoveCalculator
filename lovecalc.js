let checkBtn = document.getElementById("checklove");
checkBtn.addEventListener("click", checkloveper);

function checkloveper() {
  let yourName = document.getElementById("yourname").value;
  let loveName = document.getElementById("lovename").value;
  if (yourName == "") {
    alert("Enter Your Name");
    document.getElementById("yourname").innerHTML = "Please Enter Your Name";
  } else if (yourName.length <= 2) {
    alert("Atleast 3 character is required");
  } else if (!isNaN(yourName)) {
    alert("Please Enter only charater");
  } else if (loveName == "") {
    alert("Enter Love Name");
  } else if (loveName.length <= 2) {
    alert("Atleast 3 character is required");
  } else if (!isNaN(loveName)) {
    alert("Please Enter only charater");
  } else {
    let loveData = Math.random() * 100;
    loveData = Math.floor(loveData);
    document.getElementById("lovepercent").value = loveData + "%";

    if(loveData>=0 && loveData<=40){
      document.getElementById('relation').innerHTML=' 🥺 Sad Relationship 🥺';
    }else if(loveData>=40 && loveData<=75){
      document.getElementById("relation").innerHTML=" 👍 Good Relationship 👍";
    }else if(loveData>=75 && loveData<=100){
      document.getElementById('relation').innerHTML =' 💖 Lovely Relationship 💖';
    }
  }
 
}
function RefreshPage() {
  if (confirm("Are you sure? You Want to Refresh ??")) {
    location.reload();
  }
}
