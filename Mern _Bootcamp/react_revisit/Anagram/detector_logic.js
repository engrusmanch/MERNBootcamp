function checkAnagram() {
    const input1 = document.getElementById("word1").value.toLowerCase();
    const input2 = document.getElementById("word2").value.toLowerCase();
    const isAnagram = input1.split("").sort().join("") === input2.split("").sort().join("");
    document.getElementById("h1").textContent = isAnagram ? "Words are anagrams" : "Words are not anagrams";
  }
  