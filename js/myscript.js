let cardFileNames = ["ask", "cook", "do", "drink", "eat", "forget", "give", "know", "order", "study", "take", "write"]
let arabicFileExtension = ".png"
let illustrationFileExtension = ".jpg"
let knowFileExtension = ".png"
let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"]
let letterFileExtension = ".png"
let numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"]
let numberFileExtension = ".png"

let arabicFolderName = "arabic"
let illustrationsFolderName = "illustrations"

let numbersFolderName = "numbers"
let lettersFolderName = "letters"
let imageFolderName = "images"

let arabicPath = imageFolderName + "/" + arabicFolderName
let illustrationsPath = imageFolderName + "/" + illustrationsFolderName
let numbersPath = imageFolderName + "/" + numbersFolderName
let lettersPath = imageFolderName + "/" + lettersFolderName

//let html = <img src="images\A.png" alt="alt text not yet done" onclick="reactToImageClick()">
function makeFileNames(path, fileNames, fileExtension) {
  return fileNames.map( (name) => path + "/" + name + fileExtension )
}

let arabicFileNames = makeFileNames(arabicPath, cardFileNames, arabicFileExtension)
let illustrationFileNames = makeFileNames(illustrationsPath, cardFileNames, illustrationFileExtension)
let letterFileNames = makeFileNames(numbersPath, letters, letterFileExtension)
let numberFileNames = makeFileNames(lettersPath, numbers, numberFileExtension)

// let card = {}
// card.faceImage = "A.png"
alert(arabicFileNames)

illustrationFileNames.map((fileName) => addImageToDom(fileName, "illustrations"))
arabicFileNames.map((fileName) => addImageToDom(fileName, "arabic"))

function addImageToDom(imageSrc, parentId) {
  var img = document.createElement('img');
  img.setAttribute('src', imageSrc);
  img.setAttribute('alt', imageSrc);
  img.setAttribute('onclick', 'reactToImageClick()');
  document.getElementById(parentId).appendChild(img);
}


// { [
//   "card" : {
//     "name": "ask"
//     "faceImage": "A.png",
//     "backImage": "ask.jpg"
//   },
//   "card" : {
//     "faceImage": faceImage,
//     "backImage": backImage
//   }
// ]
//
// }




// div.innerHTML = document.getElementById('blockOfStuff').innerHTML;
// document.getElementById('targetElement').appendChild(div);


//function reactToImageClick()
