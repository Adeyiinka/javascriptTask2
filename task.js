
    let data = [
        {   principal: 2500,
            time: 1.8
        },
            
        {   principal: 1000,
            time: 5
        }, 
        
        {   principal: 3000,
            time: 1
        },   
        {   principal: 2000, 
            time: 3}
        ];
    
        function interestCalculator (myarr) {
            myarr.forEach( 
                {
                let rate;
                if (principal >= 2500 && time > 1 && time <3){
                     rate = 3
                    }
            else if (principal >= 2500 && time >=3){
                     rate = 4
                    }
            else if (principal < 2500 || time <=1){
                    rate = 2
                    }
            else {
                    rate = 1
            }
            let interest =(principal * rate * time)/100;
            let interestData=[
                { 
                principal: ("")},
                {rate: ("")},
                {time: ("")},
                {interest: ("")}
                
            ];
            console.log("interestData")

            return interestData;
           });
        }
        interestCalculator(myarr)
