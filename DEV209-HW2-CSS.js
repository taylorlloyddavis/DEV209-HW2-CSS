// JavaScript source code
        // Arrays to store original and transformed words
    let originalWords = [];
    let transformedWords = [];

    // Function to ask user for words and display on Page 1
    function displayOriginalWords() {
            const wordList = document.getElementById("wordList");

    for (let i = 0; i < 3; i++) {
        let word = prompt("Enter a word:");
    originalWords.push(word);
    let listItem = document.createElement("li");
    listItem.textContent = word;
    wordList.appendChild(listItem);
            }
        }

    // Function to transform words and display on Page 2
    function transformWords() {
        // Swap first and last letters using array.map and the provided code
        transformedWords = originalWords.map(function (oneWord) {
            return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0);
        });

    // Display transformed words on Page 2
    const transformedList = document.getElementById("transformedList");
    transformedList.innerHTML = "";
    transformedWords.forEach(function (word) {
        let listItem = document.createElement("li");
    listItem.textContent = word;
    transformedList.appendChild(listItem);
            });

    // Hide Page 1 and show Page 2
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
        }

    // Function to reset and go back to Page 1
    function resetPage() {
        // Clear transformed words array
        transformedWords = [];

    // Hide Page 2 and show Page 1
    document.getElementById("page2").style.display = "none";
    document.getElementById("page1").style.display = "block";
        }

    // Initial function call to display original words
    displayOriginalWords();

