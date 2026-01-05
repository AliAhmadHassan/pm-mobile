$(document).ready(function () {

    $("[itag='btnSave']").on("touchend", function (e) {
       
        CommonScripts.ShowLoader("Loading...");
        var FormID = $(this).attr("formid");
        CheckValidation(function(status){
            if(status == true) {
                SubmitPage(FormID, "Save",$("[itag='btnSave']"));
            }
        });
        e.preventDefault();
    });

    $("[itag='btnSendForReview']").on("touchend", function (e) {
       CommonScripts.ShowLoader("Loading...");
        var FormID = $(this).attr("formid");
        CheckValidation(function(status){
            if(status == true) {
                SubmitPage(FormID, "Review", $("[itag='btnSendForReview']"));
            }
        });
        e.preventDefault();
    });

    $("[itag='btnTest']").on("touchend", function (e) {                              
        CommonScripts.ShowLoader("Loading...");
        var FormID = $(this).attr("formid");
        CheckValidation(function(status){
            if(status == true) {
                SubmitPage(FormID, "Test",$("[itag='btnTest']"));
            }
        });
        e.preventDefault();
    });

    $("[itag='btnSendToSAP']").on("touchend", function (e) {                                       
        CommonScripts.ShowLoader("Loading...");
        var FormID = $(this).attr("formid");
        CheckValidation(function(status){
            if(status == true) {
                SubmitPage(FormID, "SAP",$("[itag='btnSendToSAP']"));
            }
        });
        e.preventDefault();
    });

    /* Added for Start Workflow by Abhishek Bedre on 05-08-2017 */ 
    $("[itag='btnStartWorkflow']").on("touchend", function (e) { 
        CommonScripts.ShowLoader("Loading..."); 
        var FormID = $(this).attr("formid"); 
        CheckValidation(function(status){ 
            if(status == true) { 
                SubmitPage(FormID, "Workflow",$("[itag='btnStartWorkflow']")); 
            } 
        }); 
        e.preventDefault(); 
    });

    $("[itag='btnDelete']").on("touchend", function (e) {                           
        CommonScripts.ShowLoader("Loading...");
        BLProcessFile.DeleteRecord();
        e.preventDefault();
    });

    $(document).on("touchend", "[itag='inserttestdata']",function (e) {
        $(".listdetailtableNew tbody").html("");
        $(".cancelbtn").hide();
        $('#Form20190517185044934 [itable="header"] input[imapvalue="R"]').val("4019134");$('#Form20190517185044934 [itable="header"] input[imapvalue="P"]').val("206ETEBARUR1-PDO19-DLO02-CEN02");$('#Form20190517185044934 [itable="header"] input[imapvalue="N"]').val("TESTE GINW PR ABC123");$('#Form20190517185044934 [itable="header"] input[imapvalue="K"]').val("X");$('#Form20190517185044934 [itable="header"] input[imapvalue="C"]').attr("data-date", moment("2019-05-17","YYYY-MM-DD").format($('#Form20190517185044934 [itable="header"] input[imapvalue="C"]').attr("data-date-format")));$('#Form20190517185044934 [itable="header"] input[imapvalue="G"]').val("13:00:00");$('#Form20190517185044934 [itable="header"] input[imapvalue="E"]').attr("data-date", moment("2019-05-17","YYYY-MM-DD").format($('#Form20190517185044934 [itable="header"] input[imapvalue="E"]').attr("data-date-format")));$('#Form20190517185044934 [itable="header"] input[imapvalue="I"]').val("17:00:00");$('#Form20190517185044934 [itable="header"] input[imapvalue="S"]').val("X");$('#Form20190517185044934 [itable="header"] input[imapvalue="Q"]').val("X");$('#Form20190517185044934 [itable="header"] input[imapvalue="O"]').val("X");$('#Form20190517185044934 [itable="header"] input[imapvalue="L"]').val("X");$('#Form20190517185044934 [itable="header"] input[imapvalue="D"]').val("X");$('#Form20190517185044934 [itable="header"] input[imapvalue="H"]').val("X");$('#Form20190517185044934 [itable="header"] input[imapvalue="F"]').val("X");$('#Form20190517185044934 [itable="header"] input[imapvalue="J"]').val("X");$('#Form20190517185044934 [itable="header"] input[imapvalue="A"]').val("10142591");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="AU"]').val("0002");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="BA"]').val("ALTERAÇÃO ATIVIDADE");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="AW"]').val("PM-ACAO");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="AY"]').val("0470");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="BC"]').attr("data-date", moment("2019-05-17","YYYY-MM-DD").format($('#Form20190517185044934 [itable="Detail0"] input[imapvalue="BC"]').attr("data-date-format")));$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="BE"]').val("13:00:00");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="BG"]').attr("data-date", moment("2019-05-17","YYYY-MM-DD").format($('#Form20190517185044934 [itable="Detail0"] input[imapvalue="BG"]').attr("data-date-format")));$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="BI"]').val("17:00:00");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="AV"]').val("0002");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="BB"]').val("X");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="AX"]').val("X");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="AZ"]').val("X");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="BD"]').val("X");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="BF"]').val("X");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="BH"]').val("X");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="BJ"]').val("X");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="AH"]').val("0001");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="AJ"]').val("0001");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="AL"]').val("0024");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="AN"]').val("TESTE PROCESS RUNNER 17-05");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="AP"]').val("PM-CAUSA");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="AR"]').val("0110");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="AI"]').val("0001");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="AM"]').val("0024");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="AK"]').val("X");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="AO"]').val("X");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="AQ"]').val("X");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="AS"]').val("X");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="U"]').val("0001");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="W"]').val("0001");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="BM"]').val("TESTE DE ALTERAÇÃO PROCESS RUNNER");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="AC"]').val("PM-DEFEI");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="AE"]').val("0110");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="Y"]').val("PM-OBJET");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="AA"]').val("0040");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="V"]').val("0001");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="X"]').val("X");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="BN"]').val("X");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="AD"]').val("X");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="AF"]').val("X");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="Z"]').val("X");$('#Form20190517185044934 [itable="Detail0"] input[imapvalue="AB"]').val("X"); var AddToList = $("button[itag='AddToList']");BLProcessFile.AddUpdateItemToList("Detail0_DetailData0", AddToList, "ADD");
        e.preventDefault();
    });

    document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady() {
    if(AppVersion.replace(/\./g,'') < 414){
        navigator.notification.alert("Process app is not compatible with current version of InnoweraApp. Please update InnoweraApp from AppStore.", function(){
            CommonScripts.GoBack();
        }, "Information", "OK");
    }
    var sesUserSettings = JSON.parse(sessionStorage.UserSettings);
    //Load Record
    var strDataID = CommonScripts.QueryStringParams("DataID");

    if (strDataID) {
        BLProcessFile.GetProcessData(strDataID, GetProcessDataError, GetProcessDataSuccess);

        function GetProcessDataError(jsonError) {
            CommonScripts.PrintConsole(jsonError);
        }

        function GetProcessDataSuccess(jsonResult) {
            if (jsonResult) {
                if (jsonResult.rows.length > 0) {
                    BLProcessFile.PaintValues(jsonResult.rows.item(0), PaintValuesError, PaintValuesSuccess);
                } else {
                    CommonScripts.PrintConsole("No record found.");
                }
            } else {
                CommonScripts.PrintConsole("DB object is null");
            }
        }

        function PaintValuesError(josnError) {

        }

        function PaintValuesSuccess(jsonSuccess) {

        }
    }
}

function SubmitPage(FormID, PostType,eleMainPage) {
    $("input").blur();
    $("textarea").blur();
    
     $("#MenuAction").attr("data-mfb-state","close");
        $(".mfb-component__button--main").addClass("m-progress");
        var imgPath = eleMainPage.children("img").attr("src")
        $(".mfb-component__button--main").children(".mfb-component__main-icon--resting").attr("src",imgPath)
        $(".mfb-component__button--main").css("background",eleMainPage.css("background"));


    var IsTestRun = 0, IsSave = 0, IsDirectPost = 0, IsReview = 0, IsReset = 0;
    var strAction = "";

    switch (PostType) {
        case "SAP":
            IsDirectPost = 1;
            strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
            break;
        case "Test":
            IsTestRun = 1;
            strAction = $("[itag='btnTest']").attr("data-mfb-label");
            break;
        case "Save":
            IsSave = 1;
            strAction = $("[itag='btnSave']").attr("data-mfb-label");
            break;
        case "Review":
            IsReview = 1;
            strAction = $("[itag='btnSendForReview']").attr("data-mfb-label");
            break;
        case "Reset":
            IsReset = 1;
            break;
        /* Added in InnoweraApp 5.1.2 by Abhishek Bedre on 05-08-2017 */
        case "Workflow":
            IsDirectPost = 1;
            strAction = $("button[itag='btnStartWorkflow']").attr("data-mfb-label");
            break;
    }

    var UserNote = $("#" + FormID + " textarea[itag='txtusernote']").val();
    var FileType = $("#" + FormID).attr("ifiletype");

    if (PostType == "reset") {
        BLProcessFile.ResetForm();
        return;
    }

    var jsonInformation = {};
    jsonInformation.PostType = PostType;
    jsonInformation.ProcessType = FileType;
    jsonInformation.FormID = FormID;
    jsonInformation.Action = strAction;

    jsonInformation.IsTestRun = IsTestRun;
    jsonInformation.IsReviewData = IsReview; //IsReviewData
    jsonInformation.IsSave = IsSave;
    jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

    jsonInformation.UserNote = UserNote;

    jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
    jsonInformation.DataID = CommonScripts.GetGUID();

    jsonInformation.AdditionalData = [];
    jsonInformation.AutoShowresult = 1;
    jsonInformation.IsDoNotSaveInSentbox = 0;
    jsonInformation.IsUpdate = 0;
    //jsonInformation.MYSAPSSO2 = 0;

    var arrHeader = BLProcessFile.GetHeader(jsonInformation);
    var arrFooter = BLProcessFile.GetFooter(jsonInformation);

    /* Generate the object to be save or to send to IWMS  */
    jsonInformation.HeaderData = JSON.stringify(arrHeader);
    jsonInformation.LoopData = JSON.stringify(arrFooter);

    /* Added in InnoweraApp 5.1.2 by Abhishek bedre on 05-08-2017 */
    if(PostType.toLowerCase() == "workflow") {
        jsonInformation.IsStartWorkflow = 1;
        jsonInformation.TemplateSheetName  = $("#hdnTemplateSheetName").val().trim();
    }

    BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

    function ProcessOperationError(jsonError) {
        CommonScripts.HideLoader();
        $(".mfb-component__main-icon--resting").attr("src","../../../new_images/ellipsis.png")
        $(".mfb-component__button--main").removeClass("m-progress");
        $(".mfb-component__button--main").removeAttr("style");
        $("#MainButton").removeAttr("data-mfb-label")
        CommonScripts.PrintConsole(jsonError);
        var parameterofQuery = ["Error", "PS-03", "Error while processing record. [" + JSON.stringify(jsonError) + "]"];
        CommonScripts.SaveLog(parameterofQuery, 1, CommonScripts.OpenGeneralDB());
		
        // This will show the exact message if available from the IWMS server otherwise
        // will show the default message.
        if (jsonError.responseJSON && jsonError.responseJSON.ExceptionMessage) {
            navigator.notification.alert(jsonError.responseJSON.ExceptionMessage, null, "Information", "OK");
        } else {
            navigator.notification.confirm("There is an error while processing record. Please contact to your IT Administrator.",function(btnIndex) {
                navigator.notification.alert(JSON.stringify(jsonError), null, "Information", "OK");
            },"Information", "OK");
        }
		
        /*navigator.notification.confirm("There is an error while processing record. Please contact to your IT Administrator.",
		function (btnIndex) {
		   ErrorDetails(btnIndex, jsonError);
		}, "Information", ["OK", "Details"]);
		
        function ErrorDetails(btnIndex, jsonError) {
            if (btnIndex == 2) {
                if (jsonError.responseJSON && jsonError.responseJSON.ExceptionMessage) {
                    navigator.notification.alert(jsonError.responseJSON.ExceptionMessage, null, "Critical error", "OK");
                } else {
                    navigator.notification.alert(JSON.stringify(jsonError), null, "Critical error", "OK");
                }
            }
        }*/
    }


    function ProcessOperationSuccess(jsonRecordWithResult) {
        CommonScripts.HideLoader();
        $(".mfb-component__main-icon--resting").attr("src","../../../new_images/ellipsis.png")
        $(".mfb-component__button--main").removeClass("m-progress");
        $(".mfb-component__button--main").removeAttr("style");
        $("#MainButton").removeAttr("data-mfb-label")
        var endDate = new Date();
        CommonScripts.PrintConsole("Total time for Processing : " + ((endDate - startedDate) / 1000));
        CommonScripts.PrintConsole("Mobile Process time : " + (((endDate - startedDate) - (processExecutionEnd - processExecutionStarted)) / 1000));
        /* This event is for customisation. Need to handle if there is any task after this */
        var parameterofQuery = ["Success", "PS-06", "Post Process has been successfully done."];
        CommonScripts.SaveLog(parameterofQuery, 1, CommonScripts.OpenGeneralDB());
        CommonScripts.PrintConsole("Process Completed");
        CommonScripts.PrintConsole(jsonRecordWithResult);
    }
}
