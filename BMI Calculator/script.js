const form = document.querySelector('form')

form.addEventListener('submit',function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)

    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results')

    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = "Please give a valid height."
    }else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight."
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        // to display results
        if(bmi<18.6){
            results.innerHTML = `<span>Your BMI index is: ${bmi}. And,You are Underweight.</span>`
        }else if(bmi>18.6 && bmi<24.9){
            results.innerHTML = `<span>Your BMI index is: ${bmi}. And,You are Fit.</span>`
        }else{
            results.innerHTML = `<span>Your BMI index is: ${bmi}. And,You are Obese.</span>`
        }
    }
})