function dis(val)
{
    document.getElementById("edu").value+=val
}
function solve()
{
    let x=document.getElementById("edu").value
    let y=eval(x)
    document.getElementById("edu").value=y
}
function clr()
{
    document.getElementById("edu").value=""
}
 function del() {
      var input = document.getElementById("edu");
      input.value = input.value.substring(0, input.value.length - 1);
    }

  
  
