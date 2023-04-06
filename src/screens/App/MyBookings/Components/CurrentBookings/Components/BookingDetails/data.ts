import languages from "values/languages"

export const Data=(lang:string)=>{
    return {
        experience:languages[lang].drivingActivity,
        numOfPerson:languages[lang].numOfPerson,
        date:languages[lang].onlyDate
    }
}