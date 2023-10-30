// let a=0;
// a=Number.parseInt(a);

function disp(a)
{
document.getElementById("int").value+=a
}
function exe()
{
    document.getElementById("int").value=eval(document.getElementById("int").value)
}
function clr()
{
document.getElementById("int").value=""
}