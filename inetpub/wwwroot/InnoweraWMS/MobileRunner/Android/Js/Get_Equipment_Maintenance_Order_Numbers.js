$(document).ready(function () {

	var inputStatus = 0;

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
		var value = $(this).attr("id");
		if(value == "reset"){
			if (inputStatus == 1) {
				navigator.notification.confirm("This will clear/reset all the data you have entered. Do you want to do so?", function(btnIndex)
				{
					if (btnIndex == 1) {
						$("[name='txt1']").val("");
						$("#divGrid").hide();
						$("#MainButton").trigger("touchend");
						$("[itable='tblDataDE']").show();
						$("#msg").hide();
						inputStatus = 0;
					}
				}, "Confirmation", "Yes, No");
			}
			else{
				navigator.notification.alert("There is no data to clear.", null, "Information", "OK");
				return;
			}
		}
		else if(value == "btnSendToSAP"){
			CommonScripts.ShowLoader("Loading...");
			var FormID = $(this).attr("formid");
			CheckValidation(function(status){
				if(status == true) {
					inputStatus = 1;
					SubmitPage(FormID, "SAP",$("[itag='btnSendToSAP']"));
					$("#msg").show();
				}
			});
			e.preventDefault();
		}
    });

    $("[itag='btnDelete']").on("touchend", function (e) {                           
        CommonScripts.ShowLoader("Loading...");
        BLProcessFile.DeleteRecord();
        e.preventDefault();
    });

    $(document).on("touchend", "[itag='inserttestdata']",function (e) {
        $('#Form20170506124951974 div[itable="header"] input[imapvalue="A"]').val("PC03");
		$(".listdetailtableNew tbody").html("");
        $(".cancelbtn").hide();
        
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
        if(jsonError.status!=0 && jsonError.statusText.toLowerCase()!="abort")
        {
          navigator.notification.confirm("There is an error while process record. Please contact to your administrator.",

          function (btnIndex) {
            ErrorDetails(btnIndex, jsonError);
          }, "Information", ["OK", "Details"]);
        }
        function ErrorDetails(btnIndex, jsonError) {
            if (btnIndex == 2) {
                if (jsonError.responseJSON && jsonError.responseJSON.ExceptionMessage) {
                    navigator.notification.alert(jsonError.responseJSON.ExceptionMessage, null, "Critical error", "OK");
                } else {
                    navigator.notification.alert(JSON.stringify(jsonError), null, "Critical error", "OK");
                }
            }
        }
    }

    function ProcessOperationSuccess(jsonRecordWithResult) {
		
		//Comment by Akash Patel because show button of "Reset & SenToSAP" button...
		
		// if(PostType == "SAP"){
		// for(var i = 0 ; i < jsonRecordWithResult.ResultObject.SapMessage.length ;i++){
			// if(jsonRecordWithResult.ResultObject.SapMessage[i].MsgType == "S")
			// {
				// var BackButton = '<li style="display:list-item"><a href="#" itag="btnBack" data-mfb-label="Back" class="mfb-component__button--child ui-bar-b ui-link" ontouchstart="$(\'.backbutton\').trigger(\'touchstart\');"><img src="../../../new_images/action_back.png" alt="" class="mfb-component__child-icon ion-social-twitter"></a></li>'
	         	// $(".mfb-component__list").prepend(BackButton)
				// $("#btnSendToSAP").css("display","none");
				// $("#btnReset").css("display","none");
			// }
			// else
			// {
				// $("#btnSendToSAP").css("display","block");
				// $("#btnReset").css("display","block");
			// }
		// }}
				
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
