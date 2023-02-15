
// search-bar
const searchlan = () => {

   let filter = document.getElementById('myinput').value.toUpperCase();

   let ul = document.getElementById('myid');
   let li = document.getElementsByTagName('li');

   for (var i = 0; i < li.length; i++) {
      let find = li[i];

      let textvalue = find.textContent || find.innerHTML;

      if (textvalue.toUpperCase().indexOf(filter) > -1) {
         li[i].style.display = "block";

      } else {
         li[i].style.display = "none";
      }
   }
}