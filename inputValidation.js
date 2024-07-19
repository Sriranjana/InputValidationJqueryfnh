
class ClsInputValidation {
    #baseContainer
    #initParam
    #descriptionDiv
    #labelDiv
    #inputDiv
    // #isFilled
    #span



    constructor(param) {
        this.#initParam = param;
        this.#initialParams()//iniliazing the params using this function


        this.#baseContainer = $('<div>').css({ marginTop: "20px", width: this.#initParam.width, height: this.#initParam.height })  //BaseContainer Created


        this.#descriptionDiv = $('<div>').text(this.#initParam.description).css({ width: "100%", textAlign: "center", fontSize: "25px" }) //Description div Created

        this.#labelDiv = $("<label>").text(this.#initParam.label).css({ float: "left", height: "20px", fontSize: "20px", border: "1px solid red" })  //label Div

        this.#inputDiv = ($("<input>").css({ placeholder: "Enter your Name", float: "right", height: "20px", width: "30%" })) //input  Div
        this.#span = $("<sup>").css({ fontSize: "30px" }); //this is used for required
        this.#baseContainer.append(this.#descriptionDiv, this.#labelDiv, this.#inputDiv, this.#span) //Appending the input,desc,label to the baseContainer

        /**
         * suppressLabel
         */
        if (this.#initParam.suppressLabel) {
            this.#labelDiv.text("")
        }
        /**
         * aligning the label
         */

        if (this.#initParam.labelTextAlignment === "1")   //aligning  to the center
            this.#labelDiv.css({ textAlign: "center" })
        else if (this.#initParam.labelTextAlignment === "0") //aligning  to the left
            this.#labelDiv.css({ textAlign: "left" })
        else if (this.#initParam.labelTextAlignment === "2")  //aligning  to the right
            this.#labelDiv.css({ textAlign: "right" })


        /**
         * Label POsition
         */


        if (this.#initParam.labelPosition === "top") {
            this.#baseContainer.append(this.#descriptionDiv, this.#labelDiv, this.#inputDiv, this.#span)
        }
        else if (this.#initParam.labelPosition === "left") {
            this.#labelDiv.css({ float: "left", width: this.#initParam.leftDivWidth })
            this.#inputDiv.css({ float: "right", width: `calc(100%-${this.#initParam.leftDivWidth})` })
            this.#baseContainer.append(this.#descriptionDiv, this.#labelDiv, this.#inputDiv, this.#span)
        }
        else if (this.#initParam.labelPosition === "right") {
            this.#labelDiv.css({ float: "right", width: this.#initParam.leftDivWidth })
            this.#inputDiv.css({ float: "left", width: `calc(100%-${this.#initParam.leftDivWidth})` })

            this.#baseContainer.append(this.#descriptionDiv, this.#inputDiv, this.#span, this.#labelDiv)

        }


        /**
         * initializing the input field based on the type
         */

        if (this.#initParam.key === "mobile")
            this.#inputDiv.attr({ type: "tel" })

        if (this.#initParam.key === "email")
            this.#inputDiv.attr({ type: "email" })
        if (this.#initParam.key === "password")
            this.#inputDiv.attr({ type: "password" })

        if (this.#initParam.key === "dob")
            this.#inputDiv.attr({ type: "date" })
        if (this.#initParam.key === "Numeric")
            this.#inputDiv.attr({ type: "number" })



        /**
         * Placeholder
         */

        this.#inputDiv.attr({ placeholder: this.#initParam.placeholder })



        this.ToolTipText()
        this.Disabled()
        this.#inputDiv.change(this.ValidatingInputField) //validating input Field whenever user doing change event

        this.#inputDiv.click(this.ValidatingInputField) //validating the input field whenever user click the inputfield


    }

    /**
     * InitialParams Function is used to passing as param when param is empty
     */
    #initialParams = () => {
        if (!this.#initParam.labelPosition) {
            this.#initParam.labelPosition = "right"
        }
        if (!this.#initParam.description) {
            this.#initParam.description = ""
        }
        if (!this.#initParam.label) {
            this.#initParam.label = ""
        }
        if (!this.#initParam.placeholder) {
            this.#initParam.placeholder = ""
        }
        if (!this.#initParam.suppressLabel) {
            this.#initParam.suppressLabel = false;
        }
        if (!this.#initParam.toolTipText) {
            this.#initParam.toolTipText = ""
        }
        if (!this.#initParam.height) {
            this.#initParam.height = "auto"
        }
        if (!this.#initParam.width) {
            this.#initParam.width = "100%"
        }
        if (!this.#initParam.leftDivWidth) {
            this.#initParam.leftDivWidth = "0%"
        }
        if (!this.#initParam.labelTextAlignment) {
            this.#initParam.labelTextAlignment = "1"
        }

        if (!this.#initParam.maxLength) {
            this.#initParam.maxLength = 0
        }
        if (!this.#initParam.minLength) {
            this.#initParam.minLength = 0
        }
        if (!this.#initParam.max) {
            this.#initParam.max = 0
        }
        if (!this.#initParam.min) {
            this.#initParam.Mmn = 0
        }

        if (this.#initParam.disabled == null) {
            this.#inputDiv.attr({ disabled: "false" })
        }
        if (this.#initParam.required == null) {
            this.#initParam.required = false
        }
        if (!this.#initParam.decimal) {
            this.#initParam.decimal = 2;

        }


    }


    /**
     * 
     * validating input field
     */

    ValidatingInputField = () => {
        let data = this.#inputDiv.val() //Storing the value of the input field


        let key = this.#initParam.key   //Storing key ex:Fname,Lname,....

        switch (key) {

            case "FirstName":
                if (data === "") {
                    this.required()
                }
                else {

                    if (data.match(/^[A-Za-z]+$/)) {
                        this.#span.text("")
                        this.successMessage()
                    }
                    else {
                        this.errorMessage()

                    }
                }
                break;

            case "LastName":
                if (data === "") {
                    this.required()
                }
                else {
                    if (data.match(/^[A-Za-z]+$/)) {
                        this.#span.text("")
                        this.successMessage()

                    }
                    else {
                        this.errorMessage()
                    }
                }
                break;


            case "email":
                if (data === "") {
                    this.required()
                }
                else {
                    this.#span.text("")

                    if (data.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
                        this.#span.text("")

                        this.successMessage()
                    }
                    else {
                        this.errorMessage()
                    }
                }
                break;

            case "mobile":
                if (data === "") {
                    this.required()
                }
                else {
                    if (data.match(/^\d{10}$/)) {
                        this.#span.text("")

                        this.successMessage()
                    }
                    else {
                        this.errorMessage()
                    }
                }
                break;

            case "password":
                if (data === "") {
                    this.required()
                }
                else {
                    this.#span.text("")

                    if (data.length > 5) {
                        this.#span.text("")

                        this.successMessage()
                    }
                    else {
                        this.errorMessage()
                    }
                }
                break;


            case "dob":
                if (data === "") {
                    this.required()
                }
                else {
                    this.#span.text("")
                    if (data < "2003-01-01") {
                        this.#span.text("")
                        this.successMessage()
                    }
                    else {
                        this.errorMessage()
                    }
                }
                break;
            case "none":
                if (data === "") {
                    this.required()
                }
                else {
                    this.#span.text("")
                    if (data) {
                        this.#inputDiv.attr({ maxLength: null })
                        this.successMessage()
                        this.#span.text("")
                    }
                    else {
                        this.errorMessage()
                    }
                }
                break;
            case "Numeric":
                if (data === "") {
                    this.required()
                }
                else {
                    this.#span.text("")
                    if (data >= this.#initParam.min && data <= this.#initParam.max) {
                        this.successMessage()
                        this.#span.text("")
                    }
                    else {
                        this.errorMessage()
                    }
                }
                break;

            case "Zipcode":
                if (data === "") {
                    this.required()
                }
                else {
                    this.#span.text("")
                    if (data.match(/^\d{6}$/) && data[0] !== "0") {
                        this.successMessage()
                        this.#span.text("")
                    }
                    else {
                        this.errorMessage()
                    }
                }
                break;
            case "AlphaNumeric":
                if (data === "") {
                    this.required()
                }
                else {
                    this.#span.text("")

                    if (data.match(/^[A-Za-z.,&@]+$/) && data.length <= this.#initParam.maxLength && data.length >= this.#initParam.minLength) {
                        this.successMessage()
                        this.#span.text("")
                    }
                    else {
                        this.errorMessage()


                    }
                }
                break;

            case "Decimal":
                if (data === "") {
                    this.required()
                }
                else {
                    this.#span.text("")

                    let dArr = data.split(".");
                    if (dArr.length === 2) {
                        if (dArr[0].match(/^[0-9]+$/) && dArr[1].match(/^[0-9]+$/)) {
                            if (dArr[1].length === this.#initParam.decimal) {
                                this.successMessage()
                                this.#span.text("")
                            }
                            else {
                                this.errorMessage()
                            }
                        }
                        else {
                            this.errorMessage()
                            this.required()
                        }
                    }
                    else {
                        this.errorMessage()
                    }
                }



        }


    }

    // ..................................................







    /**
     *
     successMessage() is used to display the success field
     */

    successMessage() {

        this.#inputDiv.css({ border: "2px solid green" })

    }


    /**
     * errorMessage() field is used to display the errors
     */
    errorMessage() {
        this.#inputDiv.css({ border: "2px solid red" })

    }


    /**
     * required() is used to make the input field required
     */
    required() {
        if (this.#initParam.required === true)
            this.#span.text("*").css({ color: "red" })
    }

    /**
     * suppressLabel() is used to hide the label based on the value
     */
    // suppressLabel() {

    // }

    /**
     * tooltipText() is used to add the tooltip to the label
     */
    ToolTipText() {
        if (this.#initParam.toolTipText) {
            this.#labelDiv.attr({ title: this.#initParam.toolTipText })

        }
    }






    /**
     * Disabled() is used to disable the input
     */

    Disabled() {
        if (this.#initParam.disabled) {
            this.#inputDiv.attr({ disabled: "true" }).css({ border: "2px solid gray" })
        }

    }

    /**
     * this Function is used to align the label based on the user input
     */









    /** 
     *  val() returns the value of an input  */

    val() {
        //    console.log(this.#inputDiv.val())
        return this.#inputDiv.val();
    }



    /**
     * clear()  
     * @clears the input field
     */
    clear() {
        return this.#inputDiv.val("")
    }


    /**
     * getDesign()
     * @returns  baseContainerdiv
     */
    getDesign() {
        return this.#baseContainer
    }


    /**
     * isFilled() returns boolean if the input field is empty it returns false, return true if the input Field is not Empty
     */
    isFilled() {
        return this.#inputDiv === true
    }

}


// email = new ClsInputValidation({ description: "Email", label: "email", key: "Zipcode", disabled: false, maxLength: 10, required: true, toolTipText: "Email", leftDivWidth: "40%", labelTextAlignment: "1", labelPosition: "right", max: 2m, Min: 10, decimal: 4 })
// $('body').append(email.getDesign())

