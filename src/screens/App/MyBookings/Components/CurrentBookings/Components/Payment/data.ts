import languages from "values/languages"

export const Data =(lang:string)=>{
    return {
        price:300,
        others:50,
        paidBy:languages[lang].fawry
    }
}