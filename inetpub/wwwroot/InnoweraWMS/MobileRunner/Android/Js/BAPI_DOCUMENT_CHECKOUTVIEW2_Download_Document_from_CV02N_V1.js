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
        $('#Form20190322145328258 [itable="header"] input[imapvalue="A"]').val("0000000000000010000000354");
		$('#Form20190322145328258 [itable="header"] input[imapvalue="C"]').val("000");
		$('#Form20190322145328258 [itable="header"] input[imapvalue="B"]').val("DCU");
		$('#Form20190322145328258 [itable="header"] input[imapvalue="D"]').val("00");
		$('#Form20190322145328258 [itable="header"] input[imapvalue="E"]').val("C:/inetpub/wwwroot/InnoweraWMS/DownloadFiles/");
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


// Download File From Server and File store in device //
function downloadFileFromServer(e) {
   var fileTransfer = new FileTransfer();
   var _currentPath=e.attributes.filePath.value;
   var viewPath = localStorage.Server + _currentPath.split("/")[4]+"/"+_currentPath.split("/")[5];
   var uri = encodeURI(viewPath);
    var fileURL = cordova.file.applicationStorageDirectory + "files/img/" +_currentPath.split("/")[5];
   fileTransfer.download(
      uri, fileURL, function(entry) {
		  var getPosition = $(e).offset();
		  var paths=entry.toURL().substr(7);
		   PlatformSpecific.ShowFileOpenDialog(paths,getPosition.top, getPosition.left); // view downloaded File
           
      },
		
      function(error) {
         console.log("download error source " + error.source);
         console.log("download error target " + error.target);
         console.log("download error code" + error.code);
		   navigator.notification.alert("Error"+ error.source);
		  
      },
		
      false, {
         }
   );
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
		
		// Add button for view downloaded File// 
		 var path;
		  $("[itag=tblResDataundefined]").attr("id", "tblResult");
		  $("#tblResult>tbody>tr").find("td:eq(4)").hide();
			$("#tblResult>thead>tr").find("th:eq(4)").hide();
		for(var i=0; i<$("#tblResult>tbody>tr").length; i++)
		{
			path=$("#tblResult>tbody>tr:eq("+i+")>td:eq(4)").html();
			 $("#tblResult>tbody>tr:eq(" + i + ")").append('<td><a onclick="downloadFileFromServer(this);" filePath =' + path + ' id="select"  class="ui-btn ui-icon-search ui-btn-icon-left ui-shadow ui-corner-all" style="background-color: black;border-color: #ddd; width:1px; height:20px;"></a></td>');
		
				
		}
		
		//End//
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
