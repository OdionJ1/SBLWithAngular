
export class EmailValidator {

    static isValidEmail(email: string): boolean {
        if(email.includes(" ")){
            return false
        }

        if(email.indexOf("@") > 0 && email.indexOf(".") > 0){
            return !this.hasMultiple('@', email) && (email.includes("com") || email.includes("co.uk") || email.includes("ac.uk"))
        } else {
            return false
        }
    
    }

    private static hasMultiple = (value: string, searchString: string): boolean => {
        let resultArr: string[] = []
        let searchArr: string[] = searchString.split('')

        searchArr.forEach(str => {
            if(str === value){
                resultArr.push(str)
            }
        })

        if(resultArr.length > 1){
            return true
        }

        return false
    }
}