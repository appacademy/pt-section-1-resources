# M1-W2-D3

- Helper Functions

## Practice Session 1 (SOLO, 30m)

- Two Dimensional Product
- Popper
- Choose Primes

## Helper Functions

### Code that is NOT broken into helper functions

```js
// don't worry about fully understanding this code block

// Look at how nested and squished it is!

// passwordValidation function needs to:
// 1. check length is less than 15 and greater than 4
// 2. check to make sure there is no white space 
// 3. check to see if it includes at least one letter
// 4. check to see if it includes at least one number
// 5. password argument is a string
// 6. function should return true if password passes validation
// 7. function should return false if password fails validation

function passwordValidation(password){
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let number = "0123456789";
    if(password.length > 4 && password.length < 15){
        if(password.split(' ').join('').length !== 0){
            for(let i = 0; i < password.length; i++){
                let char = password[i];
                if(alphabet.includes(char)){
                    for(let j = 0; j < password.length; j++){
                        let char2 = password[j];
                        if(number.includes(char2)){
                            return true
                        }
                    }
                }
            }

        }
    }
    return false
};

```
### Code that IS broken into helper functions 

```js
// Again, don't worry about fully understanding every line of code

// More code, but the tradeoff of writing less code later because we can reuse the helper functions  
// and our passwordValidation function is more readable 
// It reads more like english than code due to the names of our helper functions

function checkLength(str){
    if(str.length < 15 && str.length > 4){
        return true
    }
    return false
}

function checkWhiteSpace(str){
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        if(char !== " "){
            return true
        }
    }
    return false
}

function checkAlpha(char){
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(alphabet.includes(char)){
        return true
    }
    return false
}

function checkNums(char){
    let number = "0123456789";
    if(number.includes(char)){
        return true
    }
    return false
}

function passwordValidation(password){
    let alpha = false;
    let num = false;
    if(checkLength(password) && checkWhiteSpace(password)){
        for(let i = 0; i < password.length; i++){
            let char = password[i];
            if(checkAlpha(char)){
                alpha = true
            }
            if(checkNums(char)){
                num = true
            }
            if(alpha && num){
                return true
            }
        }
    }
    return false
};

```

## Practice Session 2 (COLLAB)

- Longest Word
- Abbreviate
- Product Array

## Practice Session 3 (Until EOD)

- Abbreviate Words
- Contains Word
- Uncompress
- Hipsterfy
