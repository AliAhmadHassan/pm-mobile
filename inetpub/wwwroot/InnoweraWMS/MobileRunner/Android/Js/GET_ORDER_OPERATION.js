$(document).ready(function() {

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
        //$('#hdnNOrdem').val($('#txtNOrdem').val());
        if (FormID == "Form20180910132854285")
          $('#hdnNOrdem').val($('#txtNOrdem').val());
        SubmitPage(FormID, "SAP", $("[itag='btnSendToSAP']"));
      }
    });
    e.preventDefault();
  });

  $("[itag='btnConfirmOrdem']").on("touchend", function(e) {
    CommonScripts.ShowLoader("Loading...");
    var FormID = $(this).attr("formid");
    CheckValidation(function(status) {
      if (status == true) {
        SubmitPage(FormID, "SAP", $("[itag='btnConfirmOrdem']"));
      }
    });
    e.preventDefault();
  });

  // function nPessoalSair(){
  //   $('#Form20180910125356586 input[imapvalue="A"]').val($('#Form20180910123018529 input[imapvalue="E"]').val());
  //   //SubmitPage('Form20180910125356586', "SAP", $('#Form20180910123018529 input[imapvalue="E"]'));
  // }

  $("[itag='btnGetPernrName']").on("touchend", function(e) {
    CommonScripts.ShowLoader("Loading...");
    var FormID = $(this).attr("formid");
    CheckValidation(function(status) {
      if (status == true) {

        $('#Form20180910125356586 input[imapvalue="A"]').val($('#Form20180910123018529 input[imapvalue="E"]').val());
        SubmitPage(FormID, "SAP", $("[itag='btnSendToSAP']"));
      }
    });
    e.preventDefault();
  });

  $('#Form20180910125356586 .datacontent').bind("DOMSubtreeModified DOMNodeInserted DOMNodeRemoved", function(){
    $('#spnNomePessoal').text($(this).find('td[aria-describedby="tableGrid_ENAME"]').text());
    $('div[itag="dvAction"]').hide();
    $('div[itag="dvMsg"]').hide();
  });

  $('#cb_txt7').change(function(){
      if($(this).is(":checked"))
          $('#Form20180910123018529 input[imapvalue="N"]').val("X");
      else
          $('#Form20180910123018529 input[imapvalue="N"]').val("");
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
    $('#Form20180910132854285 [itable="header"] input[imapvalue="A"]').val("8000004821");
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



    if (FormID == "Form20180910132854285") {
      $('#Form20180910132854285 tbody tr').each(function() {
        $(this).click(function() {
          $('#Form20180910123018529 input[imapvalue="A"]').val($('#hdnNOrdem').val());
          $('#Form20180910123018529 input[imapvalue="B"]').val($(this).find('td').get(0).innerText);
          $('#Form20180910123018529 input[imapvalue="C"]').val($('#Form20180910132854285 input[imapvalue="B"]').val());
          $('#Form20180910123018529 input[imapvalue="G"]').val('H');

          $('#Form20180910123018529 input[imapvalue="H"]').val($(this).find('td').get(8).innerText);
          $('#Form20180910123018529 input[imapvalue="I"]').val($(this).find('td').get(9).innerText);


          var horaInicio = $(this).find('td').get(9).innerText;

          if(horaInicio.length > 0)
            $('#Form20180910123018529 input[imapvalue="I"]').val(
              horaInicio.substring(0,2) + ":" +
              horaInicio.substring(2,4) + ":" +
              horaInicio.substring(4,6));
          else
            $('#Form20180910123018529 input[imapvalue="I"]').val(horaInicio);

          $("input, textarea").attr('readonly', false);
          $("#Form20180910123018529").show();
          $("#Form20180910132854285").hide();
          BLProcessFile.SetHeightProcessFile();
          $("[itag='btnGetPernrName']").removeClass("disabledbutton");
        });
      });


      //Luciene required replace the table to alert
      var tabela = $('#Form20180910132854285 div[itag="fldstResp"] table thead tr th:contains("Ctg")');
      if($(tabela).length > 0){
        tabela = $(tabela).parent().parent().parent();
         if($(tabela).find('tbody').text() != "")
          alert($(tabela).find('tbody').find('td').get(3).innerText);

        $(tabela).html("");
      }

      //Luciene required replace dvAction and dvMsg to alert



    }
    if (FormID == "Form20180910123018529") {
      // alert($('#Form20180910123018529 div[itag="dvMsg"]').text());
      //alert(jsonRecordWithResult.ResultObject.SapMessage.get(0).MsgText);
      alert(JSON.stringify(jsonRecordWithResult.ResultObject.SapMessage[0].MsgText));
    }

    if (FormID == "Form20180910125356586") {
      gArrColumnName = ["ENAME"];


      // $('label[itag="spnNomePessoal"]').html("teste");
      // alert(jsonRecordWithResult);
      // $('label[itag="spnNomePessoal"]').val("teste2");
      // alert(jsonRecordWithResult.ResultObject.SapReturnTable);
      // alert(jsonRecordWithResult.ResultObject.SapReturnTable[0].ENAME);
      // $('#spnNomePessoal').html($(result).attr("SapReturnTable")[0].ENAME);
    }

    $('div[itag="dvAction"]').hide();
    $('div[itag="dvMsg"]').hide();
  }
}
