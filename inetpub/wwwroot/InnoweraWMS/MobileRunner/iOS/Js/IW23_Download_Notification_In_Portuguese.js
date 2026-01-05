$(document).ready(function () {
	$("input[name='txt1']").change(function(e){
		$("#btnPreview").css("pointer-events","");
	});
	
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

    $("[itag='btnDelete']").on("touchend", function (e) {                           
        CommonScripts.ShowLoader("Loading...");
        BLProcessFile.DeleteRecord();
        e.preventDefault();
    });

    $(document).on("touchend", "[itag='inserttestdata']",function (e) {
       $('#Form20161012060531190 div[itable="header"] input[imapvalue="A"]').val("10001720");
	   $("#btnPreview").css("pointer-events","");
        e.preventDefault();
    });
	
	$(document).on("touchend", "[itag='btnReset']",function (e) {
       $("#Form20161012060531190 a[itag='btnSendToSAP']").removeClass("disabledbutton");
		$("a[itag='inserttestdata']").removeClass("disabledbutton");
    });
		
	$("#lstPriority1").change(function(){
		var lst = $("#lstPriority1").val();			
		$("#Form20161013145139055 input[imapvalue='F']").val(lst);
	});
	var lst = $("#lstPriority1").val();			
	$("#Form20161013145139055 input[imapvalue='F']").val(lst);	
	
	
	$("input[type='checkbox']").css({"position": "relative", "margin":0});
	$("#breakdown").parent().css({"width":"35px","float":"left"});
	$("#Form20161013145139055 input[imapvalue='H']").parent().css({"border":"0px"})
	$("#breakdown").change(function(){
		if($("#breakdown").prop("checked")){
			$("#Form20161013145139055 input[imapvalue='H']").val("X");
		} else {
			$("#Form20161013145139055 input[imapvalue='H']").val("");
		}
	});	
	
	
	$("#lstPriority1-button").width($(".input-sm").width());
    document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady() {
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
            if(FormID == "Form20161012060531190") {
				strAction = $("#btnPreview").html();
			} else {
				strAction = $("#MenuAction [itag='btnSendToSAP']").attr("data-mfb-label");	
			} 
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
	jsonInformation.IsCustomizedButtons = 1;	
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
        		
		if(jsonError.status!=0 && jsonError.statusText.toLowerCase()!="abort") {
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
		
		$("#Form20161013145139055, #MenuAction").show();
		BLProcessFile.SetHeightProcessFile();
		
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
		
		if(FormID == "Form20161012060531190") {
			$(".btncontainer").removeClass("disabledbutton");
            $("input, textarea").attr('readonly', false);
			$("input, textarea").removeClass("greyColor");
			$('button[type="submit"]').css("opacity", "1");
			$('button[type="button"]').css("opacity", "1");
			$('input[type="button"]').parent().css("opacity", "1");
			$(".datacontent a").css("opacity","1");
			$("#dvLogonShortcuts").css("opacity", "1");
			$("#Form20161013145139055 a").removeClass("disabledbutton");
			$("#dvLogonShortcuts a").removeClass("disabledbutton");
         	$("#dvLogonShortcuts select").removeClass("disabledbutton");
			$("button").removeClass("disabledbutton");
            $(".addtolistedit").removeClass("disabledbutton");
           	$(".addtolistdelete").removeClass("disabledbutton");                     
			$('#Form20161013145139055 div[itable="header"] input[imapvalue="A"]').val($('#Form20161012060531190 div[itable="header"] input[imapvalue="A"] ').val());
			$('#Form20161013145139055 div[itable="header"] input[imapvalue="D"]').val($('#Form20161012060531190 div[itable="tblDownloadedData"] input[imapvalue="D"] ').val());
			$('#Form20161013145139055 div[itable="header"] input[imapvalue="C"]').val($('#Form20161012060531190 div[itable="tblDownloadedData"] input[imapvalue="C"] ').val());
			$('#Form20161013145139055 div[itable="header"] input[imapvalue="H"]').val($('#Form20161012060531190 div[itable="tblDownloadedData"] input[imapvalue="I"] ').val());
			
			if ($('#Form20161012060531190 div[itable="tblDownloadedData"] input[imapvalue="I"] ').val() == "X") {
				$("#breakdown").prop("checked",true)
			} else {
				$("#breakdown").prop("checked",false)
			}	
											
			// $('#Form20161013145139055 div[itable="header"] input[imapvalue="I"]').val($('#Form20161012060531190 div[itable="tblDownloadedData"] input[imapvalue="J"] ').val());
			$('#Form20161013145139055 [itable="header"] input[imapvalue="I"]').attr("data-date", moment("2012/01/25", "YYYY-MM-DD").format($('#Form20161013145139055 [itable="header"] input[imapvalue="I"]').attr("data-date-format")));
			$('#Form20161013145139055 [itable="header"] input[imapvalue="G"]').attr("data-date", moment("2016/12/15", "YYYY-MM-DD").format($('#Form20161013145139055 [itable="header"] input[imapvalue="G"]').attr("data-date-format")));
			//$('#Form20170207103726968 [itable="header"] input[imapvalue="I"]').attr("data-date", moment($('#Form20161012060531190 div[itable="tblDownloadedData"] input[imapvalue="J"] ').val(), "YYYY-MM-DD").format($('#Form20161013145139055 [itable="header"] input[imapvalue="I"]').attr("data-date-format")));
			$('#Form20161013145139055 div[itable="header"] input[imapvalue="J"]').val($('#Form20161012060531190 div[itable="tblDownloadedData"] input[imapvalue="K"] ').val());
			$('#Form20161013145139055 div[itable="header"] input[imapvalue="B"]').val($('#Form20161012060531190 div[itable="tblDownloadedData"] input[imapvalue="B"] ').val());
			$('#Form20161013145139055 div[itable="header"] input[imapvalue="F"]').val($('#Form20161012060531190 div[itable="tblDownloadedData"] input[imapvalue="G"] ').val());
			$("#lstPriority1").val($('#Form20161012060531190 div[itable="tblDownloadedData"] input[imapvalue="G"] ').val());
			$("#lstPriority1").parent().children("span").html($("#lstPriority1 option:selected").text());
			$("#lstPriority1-button").css("height","20px");
			//$('#Form20161013145139055 div[itable="header"] input[imapvalue="G"]').val($('#Form20161012060531190 div[itable="tblDownloadedData"] input[imapvalue="H"] ').val());
			//$('#Form20170207103726968 [itable="header"] input[imapvalue="G"]').val($('#Form20161012060531190 div[itable="tblDownloadedData"] input[imapvalue="H"] ').val("12/12/2017"));
			//$('#Form20170207103726968 [itable="header"] input[imapvalue="G"]').attr("data-date", moment($('#Form20161012060531190 div[itable="tblDownloadedData"] input[imapvalue="H"] ').val(), "YYYY-MM-DD").format($('#Form20161013145139055 [itable="header"] input[imapvalue="G"]').attr("data-date-format")));
			
			$('#Form20161013145139055 div[itable="header"] input[imapvalue="E"]').val($('#Form20161012060531190 div[itable="tblDownloadedData"] input[imapvalue="E"] ').val());
			$( ".tableExpand" ).collapsible( "expand" );
			$('#Form20161013145139055 div[itable="header"] input').parent().removeClass('greyColor');
			$("#MenuAction a").removeClass("disabledbutton");			
			$('#Form20161012060531190 a[itag="btnSendToSAP"]').removeClass("disabledbutton");
			$('a[itag="inserttestdata"]').removeClass("disabledbutton");
			
		}
		
		if(FormID == "Form20161013145139055") {
			/*var starDate = $('#Form20161013145139055  input[imapvalue="G"] ').val().split("/");
			starDate = starDate[0]+"."+starDate[1]+"."+starDate[2]; 			
			$('#Form20161013145139055  input[imapvalue="G"] ').val(starDate)								
			var endDate = $('#Form20161013145139055 input[imapvalue="I"] ').val().split("/");
			endDate = endDate[0]+"."+endDate[1]+"."+endDate[2];			
			$('#Form20161013145139055  input[imapvalue="I"] ').val(endDate);*/
			
			$('#Form20161013145139055 div[itable="header"] input').parent().addClass('greyColor');
			$('input, button').attr('disabled', 'disabled');	
			$("button").removeClass("disabledbutton");				
			$("button").css("opacity","0.5");
			$("input[type='checkbox']").css({"position": "relative", "margin":0,"height":"22px","width":"22px"});
			$('#breakdown').attr('style', function(i,s) { return s + 'position: relative !important;' });
			$("#breakdown").attr('disabled', 'disabled');	
			$("#Form20161013145139055 input[type='checkbox']").parent().removeClass('greyColor');
			
			$("#SendtoSAP").parent().remove();
		    $('[itag="btnSendForReview"]').parent().remove();
		    $('[itag="btnTest"]').parent().remove();
		    $('[itag="btnSave"]').parent().remove();
		    $('[itag="btnReset"]').parent().remove();
		    var BackButton = '<li style="display:list-item"><a href="#" itag="btnBack" data-mfb-label="Back" class="mfb-component__button--child ui-bar-b ui-link" onclick="CommonScripts.GoBack();"><img src="../../../new_images/action_back.png" alt="" class="mfb-component__child-icon ion-social-twitter"></a></li>'
		    $(".mfb-component__list").prepend(BackButton)
		}
		
		$("#btnPreview").removeAttrs("style");
    }
}
