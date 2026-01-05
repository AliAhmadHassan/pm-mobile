var filename;
var extension;
var countid = 1;
var currenturl;
var Isdelete;
var Ismodal;
var ServerPath = localStorage.Server; // <=  Innowerawms URL 
$(document).ready(function() {

    $("#but_select").parent().remove();
    $("#but_take").parent().remove();
    var Ischeckcapture = false;
    var imageURI;
    var j = "";
	
	// Capture Image from device//
    $("[id='but_take']").on("touchend", function(e) {
        captureImage();
        Ischeckcapture = true;
        e.preventDefault();
    });
	
// Capture Image from device//
    function captureImage() {
        navigator.camera.getPicture(captureSuccess, captureError, {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI
        });
    }
	
    //Success-Capture Image from device //
    function captureSuccess(mediaFiles) {
        j = mediaFiles;
        var filename = mediaFiles.substring(mediaFiles.lastIndexOf('/') + 1);
        var fileExtension = filename.replace(/^.*\./, '');
        $('#Form20190315154307877 [itable="Detail0"] input[imapvalue="J"]').val();
        $('#Form20190315154307877 [itable="Detail0"] input[imapvalue="I"]').val(fileExtension);
        $('#Form20190315154307877 [itable="Detail0"] input[imapvalue="K"]').val(filename);
        $('#Form20190315154307877 [itable="Detail0"] input[imapvalue="L"]').val(filename);

    }

	//Error-Capture Image from device//
    function captureError(error) {
        var msg = 'An error occurred during capture: ' + error.code;

        if (error.code == 3) {
            msg = "Camrea is closed so not capture the photo";
            navigator.notification.alert(msg, null, 'Error');
        } else {
            navigator.notification.alert(msg, null, 'Error');
        }
    }
	
	
       // Choose Gallary from device//
    $("[id='but_select']").on("touchend", function(e) {

        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            destinationType: Camera.DestinationType.FILE_URI
        });

        Ischeckcapture = false;
        e.preventDefault();
    });
	

	   // Start-Adding of selected file from open file dialog, to List(Grid-objectLinks)//
    $("[id='Addtolist']").on("touchend", function(e) {
        var length = $("#Attachment > tbody > tr").length;
        if ($("#Attachment > tbody > tr:eq(" + length + ")").find("td:eq(2)").text() == "") {
            $("#Attachment > tbody > tr:eq(" + length + ")").remove();
            $('#Form20190315154307877 [itable="Detail0"] input[imapvalue="I"]').addClass("errorTextbox");
        }

        UploadImageOnServer(j);

        $('#Form20190315154307877 [itable="Detail0"] input[imapvalue="J"]').val("DMS_C1_ST");
		$("#Attachment>tbody>tr").find("td:eq(0)").children().remove();
		$("#Attachment>tbody>tr").find("td:eq(0)").removeAttr("style");
		$("#Attachment>tbody>tr").find("td:eq(0)").append('<a onclick="deletefromserver(this);"class="CustomImageIcons DeleteButton"></a>');
     
        e.preventDefault();
    });
	//End//

	 //Start -validation of required value for originals//
    $("[id='AddTolist']").on("touchend", function(e) {

        var length = $("#DetailData1 > tbody > tr").length - 1;
        if ($("#DetailData1 > tbody > tr:eq(" + length + ")").find("td:eq(2)").text() == "") {
            $("#DetailData1 > tbody > tr:eq(" + length + ")").remove();


            $('#Form20190315154307877 [itable="Detail1"] input[imapvalue="O"]').addClass("errorTextbox");

        }
        $('#Form20190315154307877 [itable="Detail1"] input[imapvalue="N"]').val("IFLOT");
        e.preventDefault();
    });
//End//
	
	//Success-Choose Gallary from device//
    function onSuccess(imageURI) {
        j = imageURI;
        var filename = imageURI.substring(imageURI.lastIndexOf('/') + 1);
        var fileExtension = filename.replace(/^.*\./, '');
        $('#Form20190315154307877 [itable="Detail0"] input[imapvalue="J"]').val();
        $('#Form20190315154307877 [itable="Detail0"] input[imapvalue="I"]').val(fileExtension);
        $('#Form20190315154307877 [itable="Detail0"] input[imapvalue="K"]').val(filename);
        $('#Form20190315154307877 [itable="Detail0"] input[imapvalue="L"]').val(filename);

    }
//End//
	
	//Fail-Choose Gallary from device//
    function onFail(message) {

        navigator.notification.alert('Failed because: ' + message, null, 'Error');
    }
//End//
   
    $("[itag='btnSave']").on("touchend", function(e) {

        CommonScripts.ShowLoader("Loading...");
        var FormID = $(this).attr("formid");
        CheckValidation(function(status) {
            if (status == true) {
                SubmitPage(FormID, "Save", $("[itag='btnSave']"));
            }
        });
        e.preventDefault();
    });

    $("[itag='btnSendForReview']").on("touchend", function(e) {
        CommonScripts.ShowLoader("Loading...");
        var FormID = $(this).attr("formid");
        CheckValidation(function(status) {
            if (status == true) {
                SubmitPage(FormID, "Review", $("[itag='btnSendForReview']"));
            }
        });
        e.preventDefault();
    });

    $("[itag='btnTest']").on("touchend", function(e) {
        CommonScripts.ShowLoader("Loading...");
        var FormID = $(this).attr("formid");
        CheckValidation(function(status) {
            if (status == true) {
                SubmitPage(FormID, "Test", $("[itag='btnTest']"));
            }
        });
        e.preventDefault();
    });

    $("[itag='btnSendToSAP']").on("touchend", function(e) {
        CommonScripts.ShowLoader("Loading...");
        var FormID = $(this).attr("formid");
        CheckValidation(function(status) {
            if (status == true) {
                SubmitPage(FormID, "SAP", $("[itag='btnSendToSAP']"));
            }

        });
        e.preventDefault();
    });

    /* Added for Start Workflow by Abhishek Bedre on 05-08-2017 */
    $("[itag='btnStartWorkflow']").on("touchend", function(e) {
        CommonScripts.ShowLoader("Loading...");
        var FormID = $(this).attr("formid");
        CheckValidation(function(status) {
            if (status == true) {
                SubmitPage(FormID, "Workflow", $("[itag='btnStartWorkflow']"));
            }
        });
        e.preventDefault();
    });

    $("[itag='btnDelete']").on("touchend", function(e) {
        CommonScripts.ShowLoader("Loading...");
        BLProcessFile.DeleteRecord();
        e.preventDefault();
    });

    $(document).on("touchend", "[itag='inserttestdata']", function(e) {
        $(".listdetailtableNew tbody").html("");
        $(".cancelbtn").hide();
        $('#Form20190315154307877 [itable="header"] input[imapvalue="A"]').val("DCU");
        $('#Form20190315154307877 [itable="header"] input[imapvalue="B"]').val("00");
        $('#Form20190315154307877 [itable="header"] input[imapvalue="C"]').val("000");
        $('#Form20190315154307877 [itable="header"] input[imapvalue="D"]').val("Testing - BAPI");
        $('#Form20190315154307877 [itable="header"] input[imapvalue="E"]').val("");
        $('#Form20190315154307877 [itable="header"] input[imapvalue="F"]').val("001");
        $('#Form20190315154307877 [itable="header"] input[imapvalue="G"]').attr("data-date", moment("2019-03-15", "YYYY-MM-DD").format($('#Form20190315154307877 [itable="header"] input[imapvalue="G"]').attr("data-date-format")));
        $('#Form20190315154307877 [itable="Detail1"] input[imapvalue="N"]').val("IFLOT");
        e.preventDefault();
    });

    document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady() {
    if (AppVersion.replace(/\./g, '') < 414) {
        navigator.notification.alert("Process app is not compatible with current version of InnoweraApp. Please update InnoweraApp from AppStore.", function() {
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

 //Start - Deletion of selected File from IWMS Server when user clicks on delet button in grid during data entry //
function deletefromserver(e) {

    navigator.notification.confirm(
        "Are you sure want to remove selected ?", DeleteConfirm, 'Confirmation', 'Yes,No');

    function DeleteConfirm(buttonIndex) {
        if (parseInt(buttonIndex) == 1) {
            var CurrentdeletedFile = $(e).closest('tr').children('td:eq(3)').text();
            FileDeleteFromserver("false", CurrentdeletedFile);
            $(e).closest('tr').remove();
        }
    }

}
//End//

 // Start - Get Image Data and will upload on server.//
function UploadImageOnServer(imageURI) {
     var lengthoftr = $("#Attachment > tbody > tr").length - 1;
    if ($("#Attachment > tbody > tr:eq(" + lengthoftr + ")").find("td:eq(2)").text() == "") {
        $("#Attachment > tbody > tr:eq(" + lengthoftr + ")").remove();
        $('#Form20190315154307877 [itable="Detail0"] input[imapvalue="O"]').addClass("errorTextbox");
    } else {
        try {
            var ImagUrl = "";
            ImagUrl = imageURI;
            var options = new FileUploadOptions();
            options.fileKey = "UploadedFile";
            var imagefilename = Number(new Date()) + ".jpg";
            options.fileName = imagefilename;
            options.chunkedMode = false;

            var ft = new FileTransfer();

            ft.upload(ImagUrl, "" + ServerPath + "/api/Utility/UploadFile", function(result) {
                    var path = (result.response).split("\"")[1].replace(/\\\\/g, '\\');
                    var filename = ImagUrl.substring(ImagUrl.lastIndexOf('/') + 1);
                    var fileExtension = filename.replace(/^.*\./, '');
                    var desc=$("#Attachment > tbody > tr:eq("+lengthoftr+")").find("td:eq(4)").html();;
                   
                    $("#Attachment > tbody > tr:eq(" + lengthoftr + ")").find("td:eq(3)").text(path);
                    if ($("#Attachment > tbody > tr >td").length == 5) {
                        $("#Attachment > tbody > tr:eq("+lengthoftr+")").append('<td>../' + filename + '</td><td>'+desc+'</td>');
                    } else {
                        $("#Attachment > tbody > tr:eq("+lengthoftr+")").append('<td>../ ' + filename + '</td><td>'+desc+'</td>');	 
                    }

                    $("#Attachment tbody tr [itag='Edit']").hide();
					 $("#Attachment tbody tr [itag='Delete']").hide();
                    $("#Attachment > tbody > tr").find("td:eq(3)").hide();
					$("#Attachment > tbody > tr").find("td:eq(4)").hide();

                },
                function(error) {
                    navigator.notification.alert(JSON.stringify(error), null, 'Error');

                }, options);
        } catch (err) {
            navigator.notification.alert(err.message);
        }
    }
}
//End//

 //Start -Deletion of file from IWMS server on sucessfull upload to SAP//
function FileDeleteFromserver(Isdelete, SelectedFileForDelete) {
    var fileListFromRemove = [];

    if (Isdelete == "true") {

        $("#Attachment> tbody > tr").find("td:eq(3)").each(function() {

            var Filepathforremove = $(this).html();

            fileListFromRemove.push(Filepathforremove);

        });
    } else {

        fileListFromRemove.push(SelectedFileForDelete);
    }

    var arrDataToUpload = fileListFromRemove;
    $.ajax({
        url: ServerPath + "/api/CustomAction/RemoveUploadedFile/",
        type: "POST",
        dataType: "json",
        beforeSend: function(xhr) {},
        data: {
            DataArray: JSON.stringify(arrDataToUpload)
        },
        success: function(result) {

            console.log(result);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(textStatus);
        }
    });
        $("#deletecrow").removeAttr("onclick");
        $("#deletecrow").attr("onclick", "deletefromserver(this);");
}
//End//

function SubmitPage(FormID, PostType, eleMainPage) {
    $("input").blur();
    $("textarea").blur();

    $("#MenuAction").attr("data-mfb-state", "close");
    $(".mfb-component__button--main").addClass("m-progress");
    var imgPath = eleMainPage.children("img").attr("src")
    $(".mfb-component__button--main").children(".mfb-component__main-icon--resting").attr("src", imgPath)
    $(".mfb-component__button--main").css("background", eleMainPage.css("background"));

    var IsTestRun = 0,
        IsSave = 0,
        IsDirectPost = 0,
        IsReview = 0,
        IsReset = 0;
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
    // alert(JSON.stringify(arrFooter));
    /* Added in InnoweraApp 5.1.2 by Abhishek bedre on 05-08-2017 */
    if (PostType.toLowerCase() == "workflow") {
        jsonInformation.IsStartWorkflow = 1;
        jsonInformation.TemplateSheetName = $("#hdnTemplateSheetName").val().trim();
    }

    BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

    function ProcessOperationError(jsonError) {
        CommonScripts.HideLoader();
        $(".mfb-component__main-icon--resting").attr("src", "../../../new_images/ellipsis.png")
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
            navigator.notification.confirm("There is an error while processing record. Please contact to your IT Administrator.", function(btnIndex) {
                navigator.notification.alert(JSON.stringify(jsonError), null, "Information", "OK");
            }, "Information", "OK");
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
        $(".mfb-component__main-icon--resting").attr("src", "../../../new_images/ellipsis.png")
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
        if (jsonRecordWithResult.ResultObject.SapMessage[0].MsgType == "S") {
            FileDeleteFromserver("true", "");
        }

    }
}