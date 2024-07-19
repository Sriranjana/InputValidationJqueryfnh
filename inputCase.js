
 inputCase=[]

inputCase.push(new ClsInputValidation({description:"First Name",label:"First Name",key:"FirstName",disabled: false, required: true,toolTipText:"FirstName", leftDivWidth: "40%", labelTextAlignment: "1", labelPosition: "right",height:"40px",placeholder:"FirstName",suppressLabel:true}))

inputCase.push(new ClsInputValidation({description:"Last Name",label:"Last Name",key:"LastName",disabled: false, required: true,toolTipText:"LastName", leftDivWidth: "40%", labelTextAlignment: "2", labelPosition: "right",height:"40px",placeholder:"LastName",suppressLabel:false}))

inputCase.push( new ClsInputValidation({ description: "Email", label: "email", key: "email", disabled: false, required: true, toolTipText: "Email", leftDivWidth: "40%", labelTextAlignment: "1", labelPosition: "right",height:"40px" ,placeholder:"email",suppressLabel:false}))

inputCase.push(new ClsInputValidation({description:"Phone Number",label:"Phone",key:"mobile",disabled:false,required:true,toolTipText:"Phone Number",leftDivWidth:"40%",labelTextAlignment: "1", labelPosition: "right",height:"40px" ,placeholder:"Phone Number",suppressLabel:false}))

inputCase.push( new ClsInputValidation({description:"",label:"Password",key:"password",disabled:false,required:true,toolTipText:"Password",leftDivWidth:"40%",labelTextAlignment: "1", labelPosition: "right",height:"40px" ,placeholder:"Password",suppressLabel:false}))

inputCase.push(new ClsInputValidation({
    description:"Date Of Birth",label:"Date of Birth",key:"dob",disabled:false,required:true,toolTipText:"Date of Birth",leftDivWidth:"40%",labelTextAlignment: "1", labelPosition: "right",height:"40px" ,placeholder:"Date of Birth",suppressLabel:false
}))
inputCase.push(new ClsInputValidation({
    description:"",label:"None",key:"none",disabled:false,required:false,toolTipText:"",leftDivWidth:"40%",labelTextAlignment: "1", labelPosition: "right",height:"40px" ,placeholder:"None",suppressLabel:false
}))
inputCase.push(new ClsInputValidation({
    description:"Numeric",label:"Numeric",key:"Numeric",disabled:false,required:true,toolTipText:"Numeric",leftDivWidth:"40%",labelTextAlignment: "1", labelPosition: "right",height:"40px" ,placeholder:"Numeric",suppressLabel:false,min:2,max:25
}))
inputCase.push(new ClsInputValidation({
    description:"Zipcode",label:"Zipcode",key:"Zipcode",disabled:false,required:true,toolTipText:"Zipcode",leftDivWidth:"40%",labelTextAlignment: "1", labelPosition: "right",height:"40px" ,placeholder:"Zipcode",suppressLabel:false
}))


inputCase.push(new ClsInputValidation({
    description:"AlphaNumeric",label:"AlphaNumeric",key:"AlphaNumeric",disabled:false,required:true,toolTipText:"AlphaNumeric",leftDivWidth:"40%",labelTextAlignment: "1", labelPosition: "right",height:"40px" ,placeholder:"AlphaNumeric",suppressLabel:false,MaxLength:15,MinLength:9
}))

inputCase.push(new ClsInputValidation({
    description:"Decimal",label:"Decimal",key:"Decimal",disabled:false,required:true,toolTipText:"Decimal",leftDivWidth:"40%",labelTextAlignment: "1", labelPosition: "right",height:"40px" ,placeholder:"Decimal",suppressLabel:false,decimal:4
}))

inputCase.map((element)=>{
    return $('body').append(element.getDesign(),$("<br>"))

})



// inputCase.forEach(case=>  $('body').append(case.getDesign()))



