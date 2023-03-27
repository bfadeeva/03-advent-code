fetch('input.txt')
  .then(response => response.text())
  .then(data => {
    
    // console.log(data)

    // 0
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
    console.log(alphabet);

    // 1
    const arr = data.split("\n");
    // console.log(arr);

    // 2
    let halfArray = [];
    for (let i = 0; i < arr.length; i++) {
      let miniArray = [arr[i].slice(0, arr[i].length / 2), arr[i].slice(arr[i].length / 2)]
      halfArray[i] = miniArray;
    };

    // console.log(halfArray);

    // 3
    let priorities = [];
    for (let i = 0; i < halfArray.length; i++) {
      for (let j = 0; j < halfArray[i][0].length; j++) {
        if (halfArray[i][1].includes(halfArray[i][0][j])) {
          priorities[i] = halfArray[i][0][j];
        };
      }
    }

    console.log(priorities)

    // 4
    let total = 0;
    let alphabetUpper = alpha.map((x) => String.fromCharCode(x));

      // this is wrong - why?
    for (let i = 0; i < priorities.length; i++) {
      //total += alphabet.indexOf(priorities[i]) + 1
      //total += alphabetUpper.indexOf(priorities[i]) + 28
      console.log(alphabet.indexOf(priorities[i]) + 1, alphabetUpper.indexOf(priorities[i]) + 28)
    }
    
    console.log(total)

  })
  .catch(error => {
    console.error(error);
  });

  // 0. create alphabet (array) !! (find explanation) !!
    // In the ASCII character encoding system, 
    // lowercase letters a-z have ASCII codes ranging from 97 to 122 (inclusive).
  // 1. change one big string to array of strings - one string per line 
  // 2. divide one string in half !! (find alternative iteration) !!
  // 3. check which letter is in both halfs and store it in 'priorities' array
  // 4. match its value from alphabet and add to total
      // How can I test if a letter in a string is uppercase or lowercase?
      // str.toUpperCase() === str && str.toLowerCase() !== str
  // 5. count total
