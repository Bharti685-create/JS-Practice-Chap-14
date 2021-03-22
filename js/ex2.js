//const linkInfo = () => {
  //const linkElements = document.getElementsByTagName("a");
  //const numLinks = linkElements.length;
  //console.log(`Number of link elements: ${numLinks}`);
  // Display links if exist
  //if (numLinks > 0) {
    //console.log(linkElements[0].href);
  //};
  //if (numLinks > 1) {
    //console.log(linkElements[numLinks - 1].href);
  //};
//}

//linkInfo();

// Show if an element has a class
const has = (id, someClass) => {
  if (document.getElementById){
    console.log(document.getElementById(id).classList.contains(someClass));
  } else{
    console.error(`the id of the class is ${id}`)
  }

 

  // TODO: write the function code
};

has("saxophone", "woodwind");     // Should show true
has("saxophone", "brass");        // Should show false
has("trumpet", "brass");          // Should show true
has("contrabass", "chordophone"); // Should show an error message



