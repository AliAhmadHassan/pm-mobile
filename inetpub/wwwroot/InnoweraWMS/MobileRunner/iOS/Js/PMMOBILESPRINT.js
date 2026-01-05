var isChrome = navigator.appVersion.indexOf('Chrome') > 0? true : false;//!!window.chrome && !!window.chrome.webstore;
var zindex = 100;

function getLocation() {
	alert("Testando GeoLocation");
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		alert("Geolocation is not supported by this browser.");
	}
}

function showPosition(position) {
	alert("Latitude: " + position.coords.latitude);
	alert("Longitude: " + position.coords.longitude);
}

$(document).ready(function () {
	
	
		


	$('#divDisplayOrders').hide();
	
	$('#divMenu').hide();
	$('#divGET_EQUNR').hide();
	$('#divGET_ORDERS').hide();
	$('#btnDiv_GET_ORDERS').hide();
	$('#divDisplayOrderDetails').hide();
	$('#btnDiv_GET_ORDERS_DETAILS').hide();
	$('#divDisplaySecurityFormCheck').hide();
	$('#divDisplayGetText').hide();
	$('#divDisplayGet_Warranty').hide();
	$('#ddlTipoAtividadeManutencao').hide();
	$('#modalLocalInstalacao').hide();
	$('#modalEquipamento').hide();
	$('#modalOperacaoDetail').hide();
	$('#modalMaterialDetail').hide();
	$('#divDisplayNotif').hide();
	$('#modalOperacaoESub').hide();
	$('#modalNPessoal').hide();
	$('#modalHierarquia').hide();
	$('#exibeEquipamentoCaracteristicas').hide();
	$('#exibeEquipamentoPontosMedicao').hide();
	$('#exibeEquipamentoAnexo').hide();
	$('#exibeEquipamentoEndereco').hide();
	$('#modalCausaDesvio').hide();

	$('#divDisplayOrderDetails #lblLocalInstalacao').hide();
	$('#divDisplayOrderDetails #lblDescLocalInstalacao').hide();

	$('#divDisplayOrderDetails #lblDescCodEquipamento').hide();
	$('#divDisplayOrderDetails #lblCodEquipamento').hide();
	$('#divDisplayOrderDetails #btnCancel').hide();
	$('#divDisplayNotifCausas').hide();



	$("[itag='btnDisplayOrders']").on("click touchend", function (e) {
		if (!isChrome)
			CommonScripts.ShowLoader("Loading...");
		$('#divDisplayOrders').hide();
		$('#divMenu').hide();
		$('#divGET_EQUNR').hide();
		$('#divGET_ORDERS').hide();
		$('#btnDiv_GET_ORDERS').hide();
		$('#divDisplayOrderDetails').hide();
		$('#btnDiv_GET_ORDERS_DETAILS').hide();
		$('#divDisplaySecurityFormCheck').hide();
		$('#divDisplayGetText').hide();
		$('#divDisplayGet_Warranty').hide();
		$('#divMainScreen').hide();

		$('#divDisplayOrders').show();

		$('#divDisplayOrders #txtOrderNumber').val("");
		$('#divDisplayOrders #txtCentroDeTrabalho').val("");
		$('#divDisplayOrders #txtEquipmentNumber').val("");
		$('#divDisplayOrders #txtInventoryNumber').val("");
		$('#divDisplayOrders #txtLocalDeInstalação').val("");


		$('#divGET_ORDERS .panel-heading .panel-title').text("Exibir Ordem - Lista");
		$('#divDisplayOrders .panel-heading .panel-title').text("Exibir Ordem");

		$('#divDisplayOrderDetails .panel-heading .panel-title').text("Exibir Ordem - Detalhada");
		$('#divDisplayGetText .panel-heading .panel-title').text("Exibir Ordem - Texto Descritivo");
		$('#txtIW39').val("X");
		$('#divIW39').hide();

		if (!isChrome)
			CommonScripts.HideLoader();
		e.preventDefault();

	});

	$("[itag='btnModifyOrders']").on("click touchend", function (e) {
		if (!isChrome)
			CommonScripts.ShowLoader("Loading...");
		$('#divDisplayOrders').hide();
		$('#divMenu').hide();
		$('#divGET_EQUNR').hide();
		$('#divGET_ORDERS').hide();
		$('#btnDiv_GET_ORDERS').hide();
		$('#divDisplayOrderDetails').hide();
		$('#btnDiv_GET_ORDERS_DETAILS').hide();
		$('#divDisplaySecurityFormCheck').hide();
		$('#divDisplayGetText').hide();
		$('#divDisplayGet_Warranty').hide();
		$('#divMainScreen').hide();

		$('#divDisplayOrders').show();

		$('#divDisplayOrders #txtOrderNumber').val("");
		$('#divDisplayOrders #txtCentroDeTrabalho').val("");
		$('#divDisplayOrders #txtEquipmentNumber').val("");
		$('#divDisplayOrders #txtInventoryNumber').val("");
		$('#divDisplayOrders #txtLocalDeInstalação').val("");

		$('#divGET_ORDERS .panel-heading .panel-title').text("Modificar Ordem - Lista");
		$('#divDisplayOrders .panel-heading .panel-title').text("Modificar Ordem");

		$('#divDisplayOrderDetails .panel-heading .panel-title').text("Modificar Ordem - Detalhada");
		$('#divDisplayGetText .panel-heading .panel-title').text("Modificar Ordem - Texto Descritivo");

		$('#txtIW39').val("");
		$('#divIW39').hide();

		if (!isChrome)
			CommonScripts.HideLoader();
		e.preventDefault();

	});

	$("[itag='btnDisplayNotif']").on("click touchend", function (e) {
		btnDisplayNotif();
		e.preventDefault();

	});

	$("[itag='btnEstornoConfirmacao']").on("click touchend", function (e) {
		if (!isChrome)
			CommonScripts.ShowLoader("Loading...");



		$('#divMainScreen').hide();
		$('#divDisplayOrders').hide();
		$('#divEstornarConfirmacao').show();

		$('#divEstornarConfirmacao #divEstornarConfirmacaoTable #tbTeste tbody').html('');
		$('#divEstornarConfirmacao #accordionEstornarConfirmacao #txtNOrdem').val('');
		$('#divEstornarConfirmacao #divEstornarConfirmacaoTable').hide();

		$('.customButtonRunTime').remove();
		$('#divEstornarConfirmacao #menu').append(
			'<a class="customButtonRunTime imageButton" onclick="\
				$(\'#divEstornarConfirmacao\').hide();\
				$(\'#divMainScreen\').show();\
				$(\'.customButtonRunTime\').remove();"><div class="menu-button"><div class="imagem"><img class="Voltar"/></div><div class="descricao">Voltar</div></div></a>'
		);

		$('#divEstornarConfirmacao #menu').append('<a class="imageButton customButtonRunTime" onclick="\
			call_GetEstornarConfirmacaoList($(\'#divEstornarConfirmacao #txtNOrdem\').val())" ><div class="menu-button"><div class="imagem"><img class="Avancar"/></div><div class="descricao">Avançar</div></div></a>');


		if (!isChrome)
			CommonScripts.HideLoader();
		e.preventDefault();

	});

	$("[itag='btnDisplayEquipamento']").on("click touchend", function (e) {
		if (!isChrome)
			CommonScripts.ShowLoader("Loading...");

		//$('#divMainScreen').hide();
		//$('#divDisplayOrders').hide();
		$('#exibeEquipamentoDadosGerais').show(); $('#exibeEquipamentoCaracteristicas').hide();$('#exibeEquipamentoPontosMedicao').hide(); $('#exibeEquipamentoAnexo').hide(); $('#exibeEquipamentoEndereco').hide();
		$('#divExibirEquipamento input[type="text"]').val('');
		$('#divExibirEquipamento input[type="number"]').val('');
		$('#divExibirEquipamento #exibeEquipamentoAnexo #tblExibeEquipamentoAnexo tbody').html('');
		$('#divExibirEquipamento #exibeEquipamentoCaracteristicas #tblExibeEquipamentoCaracteristicas tbody').html('');
		$('#divExibirEquipamento #exibeEquipamentoPontosMedicao #tblExibeEquipamentoPontoMedicao tbody').html('');
		$('#divExibirEquipamento #imgGarantia').hide();
		showPanel('#divExibirEquipamento');

		// $('.customButtonRunTime').remove();
		// $('#divEstornarConfirmacao #menu').append(
		// 	'<a class="customButtonRunTime button" onclick="\
		// 		$(\'#divEstornarConfirmacao\').hide();\
		// 		$(\'#divMainScreen\').show();\
		// 		$(\'.customButtonRunTime\').remove();">voltar</a>'
		// );

		// $('#divEstornarConfirmacao #menu').append('<a class="button customButtonRunTime" onclick="\
		// 	call_GetEstornarConfirmacaoList($(\'#divEstornarConfirmacao #txtNOrdem\').val())" >Executar</a>');


		if (!isChrome)
			CommonScripts.HideLoader();
		e.preventDefault();

	});
	$("[itag='btnExibirLocalInstalacao']").on("click touchend", function (e) {
		if (!isChrome)
			CommonScripts.ShowLoader("Loading...");

		$('#exibeLocalInstalacaoDadosGerais').show(); $('#exibeLocalInstalacaoCaracteristicas').hide();$('#exibeLocalInstalacaoPontosMedicao').hide(); $('#exibeLocalInstalacaoAnexo').hide(); $('#exibeLocalInstalacaoEndereco').hide(); $('#exibeLocalInstalacaoEstrutura').hide();
		$('#divExibeLocalInstalacao input[type="text"]').val('');
		$('#divExibeLocalInstalacao input[type="number"]').val('');
		$('#divExibeLocalInstalacao #exibeLocalInstalacaoAnexo table tbody').html('');
		$('#divExibeLocalInstalacao #exibeLocalInstalacaoCaracteristicas #tblExibeLocalInstalacaoCaracteristicas tbody').html('');
		$('#divExibeLocalInstalacao #exibeLocalInstalacaoPontosMedicao #tblExibeLocalInstalacaoPontoMedicao tbody').html('');
		$('#divExibeLocalInstalacao #exibeLocalInstalacaoEstrutura #tblExibeLocalInstalacaoEstrutura tbody').html('');
		showPanel('#divExibeLocalInstalacao')

	});

	$("[itag='btnExecute_GET_ORDERS']").on("touchend", function (e) {
		if (!isChrome)
			CommonScripts.ShowLoader("Loading...");
		var oNumber = $("#divGET_ORDERS #hdfNrOrdem").val();
		if (oNumber == null || oNumber == undefined || oNumber == "") {
			
			alert("Favor selecionar uma ordem.")
			if (!isChrome)
				CommonScripts.HideLoader();
			e.preventDefault();
			return;
		}

		if($("#divGET_ORDERS #hdfDivDestino").val() == "#divConfirmacaoColetiva"){
			CommonScripts.ShowLoader("Loading...");
			$("#divGET_ORDERS").hide();
			$("#divConfirmacaoColetiva #divTelaCampos #txtOrdem").val(oNumber);
			$("#divConfirmacaoColetiva").show();	
			$("#divConfirmacaoColetiva #btnVoltar").removeAttr('readonly');
			$("#divConfirmacaoColetiva #btnAvancar").removeAttr('readonly');
			$("#divConfirmacaoColetiva #btnListarConfirmacoes").removeAttr('readonly');
			CommonScripts.HideLoader();
		} else {
			call_Check_Order(oNumber);
		}
	});

	$("[itag='btnBack']").on("click touchend", function (e) {
		if (!isChrome)
			CommonScripts.ShowLoader("Loading...");
		$('#divDisplayOrders').hide();
		$('#divMenu').hide();
		$('#divMainScreen').show();
		if (!isChrome)
			CommonScripts.HideLoader();
		e.preventDefault();

	});

	$("[itag='btnBackGrid']").on("click touchend", function (e) {
		if (!isChrome) CommonScripts.ShowLoader("Loading...");
		$('#divDisplayOrders').hide();
		$('#divMenu').hide();
		$('#divGET_EQUNR').hide();
		$('#divGET_ORDERS').hide();
		$('#btnDiv_GET_ORDERS').hide();
		$('#divDisplayOrderDetails').hide();
		$('#btnDiv_GET_ORDERS_DETAILS').hide();
		$('#divDisplaySecurityFormCheck').hide();
		$('#divDisplayGetText').hide();
		$('#divDisplayGet_Warranty').hide();
		$('#divDisplayOrders').show();
		if (!isChrome) CommonScripts.HideLoader();
		e.preventDefault();

	});

	$("[itag='btnExecute']").on("click touchend", function (e) {
		
		if (!isChrome) 
			CommonScripts.ShowLoader("Loading...");
		var txtInventoryNumberValue = document.getElementById("txtInventoryNumber").value;
		var txtEquipmentNumber = document.getElementById("txtEquipmentNumber").value;
		call_GET_ADDRESS();

		if (!isChrome) 
			CommonScripts.HideLoader();
		e.preventDefault();

	});

	$('[itag="btnBack_SecurityFormCheck"]').on("click touchend", function (e) {
		if (!isChrome) CommonScripts.ShowLoader("Loading...");
		//ActiveGrid("Form20181002001415050");

		$('#divDisplayOrders').hide();
		$('#divMenu').hide();
		$('#divGET_EQUNR').hide();
		$('#divGET_ORDERS').hide();
		$('#btnDiv_GET_ORDERS').hide();
		$('#divDisplayOrderDetails').hide();
		$('#btnDiv_GET_ORDERS_DETAILS').hide();
		$('#divDisplaySecurityFormCheck').hide();
		$('#divDisplayGetText').hide();
		$('#divDisplayGet_Warranty').hide();
		$('#divDisplayOrders').show();
		if (!isChrome) CommonScripts.HideLoader();
		e.preventDefault();
	});

	$('[itag="btnBack_GET_ORDERS_DETAILS"]').on("click touchend", function (e) {
		if (!isChrome) CommonScripts.ShowLoader("Loading...");
		//ActiveGrid("Form20181002001415050");

		$('#divDisplayOrders').hide();
		$('#divMenu').hide();
		$('#divGET_EQUNR').hide();
		$('#divGET_ORDERS').hide();
		$('#btnDiv_GET_ORDERS').hide();
		$('#divDisplayOrderDetails').hide();
		$('#btnDiv_GET_ORDERS_DETAILS').hide();
		$('#divDisplaySecurityFormCheck').hide();
		$('#divDisplayGetText').hide();
		$('#divDisplayGet_Warranty').hide();
		$('#divDisplayOrders').show();
		if (!isChrome) CommonScripts.HideLoader();
		e.preventDefault();
	});


	$('[itag="btnBack_GET_ORDERS"]').on("click touchend", function (e) {
		if (!isChrome) CommonScripts.ShowLoader("Loading...");
		//ActiveGrid("Form20181002001415050");

		$('#divDisplayOrders').hide();
		$('#divMenu').hide();
		$('#divGET_EQUNR').hide();
		$('#divGET_ORDERS').hide();
		$('#btnDiv_GET_ORDERS').hide();
		$('#divDisplayOrderDetails').hide();
		$('#btnDiv_GET_ORDERS_DETAILS').hide();
		$('#divDisplaySecurityFormCheck').hide();
		$('#divDisplayGetText').hide();
		$('#divDisplayGet_Warranty').hide();
		$('#divDisplayOrders').show();
		if (!isChrome) CommonScripts.HideLoader();
		e.preventDefault();
	});


	$('[itag="btnBack_Warranty"]').on("click touchend", function (e) {
		if (!isChrome) CommonScripts.ShowLoader("Loading...");
		$('#divDisplayGet_Warranty').hide();
		$('#divDisplaySecurityFormCheck').show();
		if (!isChrome) CommonScripts.HideLoader();
		e.preventDefault();
	});

	$('[itag="btnExecute_GET_ORDERS_DETAILS"]').on("click touchend", function (e) {
		if (!isChrome) CommonScripts.ShowLoader("Loading...");

		$('#lblGetText').html(
			$('[itag="btnExecute_GET_ORDERS_DETAILS"]').attr('message')
		);

		$('#divDisplayOrderDetails').hide();
		showPanel($('#divDisplayGetText'));



		if (!isChrome) CommonScripts.HideLoader();
		e.preventDefault();
	});

	$('[itag="btnBack_Get_Text"]').on("click touchend", function (e) {
		if (!isChrome) CommonScripts.ShowLoader("Loading...");

		$('#divDisplayOrderDetails').show();
		$('#divDisplayGetText').hide();

		if (!isChrome) CommonScripts.HideLoader();
		e.preventDefault();
	});

	$('[itag="btnWARRANTY_SecurityFormCheck"]').on("click touchend", function (e) {
		if (!isChrome) CommonScripts.ShowLoader("Loading...");

		var oNumber = GetRowData_GET_Equip();
		if (oNumber == undefined || oNumber == "")
			alert("Favor selecionar uma linha de Garantia");
		else
			call_GetWarranty(oNumber);

		if (!isChrome) CommonScripts.HideLoader();
		e.preventDefault();
	});


	$('[itag="btnConfirm_SecurityFormCheck"]').on("touchend", function (e) {
		CommonScripts.ShowLoader("Loading...");
		$('#divDisplaySecurityFormCheck').hide();
		var oNumber = $('#Form20181016150505334 #txtNrOrder').val();
		call_GET_ORDER_DETAILS(oNumber);

		//call_Check_Order(oNumber);
		CommonScripts.HideLoader();
		e.preventDefault();
	});

	$("[itag='btnSave']").on("click touchend", function (e) {

		if (!isChrome) CommonScripts.ShowLoader("Loading...");
		var FormID = $(this).attr("formid");
		CheckValidation(function (status) {
			if (status == true) {
				SubmitPage(FormID, "Save", $("[itag='btnSave']"));
			}
		});
		e.preventDefault();
	});

	$("[itag='btnSendForReview']").on("click touchend", function (e) {
		if (!isChrome) CommonScripts.ShowLoader("Loading...");
		var FormID = $(this).attr("formid");
		CheckValidation(function (status) {
			if (status == true) {
				SubmitPage(FormID, "Review", $("[itag='btnSendForReview']"));
			}
		});
		e.preventDefault();
	});

	$("[itag='btnTest']").on("click touchend", function (e) {
		if (!isChrome) CommonScripts.ShowLoader("Loading...");
		var FormID = $(this).attr("formid");
		CheckValidation(function (status) {
			if (status == true) {
				SubmitPage(FormID, "Test", $("[itag='btnTest']"));
			}
		});
		e.preventDefault();
	});

	$("[itag='btnSendToSAP']").on("click touchend", function (e) {
		if (!isChrome) CommonScripts.ShowLoader("Loading...");
		var FormID = $(this).attr("formid");
		CheckValidation(function (status) {
			if (status == true) {
				SubmitPage(FormID, "SAP", $("[itag='btnSendToSAP']"));
			}
		});
		e.preventDefault();
	});

	/* Added for Start Workflow by Abhishek Bedre on 05-08-2017 */
	$("[itag='btnStartWorkflow']").on("click touchend", function (e) {
		if (!isChrome) CommonScripts.ShowLoader("Loading...");
		var FormID = $(this).attr("formid");
		CheckValidation(function (status) {
			if (status == true) {
				SubmitPage(FormID, "Workflow", $("[itag='btnStartWorkflow']"));
			}
		});
		e.preventDefault();
	});

	$("[itag='btnDelete']").on("click touchend", function (e) {
		if (!isChrome) CommonScripts.ShowLoader("Loading...");
		BLProcessFile.DeleteRecord();
		e.preventDefault();
	});

	$("[itag='btnDetalheOrdemDadosOrdem']").on("click touchend", function (e) {
		$("#divDisplayOrderDetails #divDadosOrdem").show();
		$("#divDisplayOrderDetails #divEquipamento").show();
		$("#divDisplayOrderDetails #divNotasAvarias").show();

		$("#divDisplayOrderDetails #divMateriais").hide();
		$("#divDisplayOrderDetails #divOperacoes").hide();
		$("#divDisplayOrderDetails #divAnexo").hide();
		$("#divDisplayOrderDetails #divEndereco").hide();


	});

	$("[itag='btnDetalheOrdemOperacao']").on("click touchend", function (e) {
		$("#divDisplayOrderDetails #divDadosOrdem").hide();
		$("#divDisplayOrderDetails #divEquipamento").hide();
		$("#divDisplayOrderDetails #divNotasAvarias").hide();

		$("#divDisplayOrderDetails #divOperacoes").show();
		$("#divDisplayOrderDetails #divMateriais").hide();
		$("#divDisplayOrderDetails #divAnexo").hide();
		$("#divDisplayOrderDetails #divEndereco").hide();

	});

	$("[itag='btnDetalheOrdemMateriais']").on("click touchend", function (e) {
		$("#divDisplayOrderDetails #divDadosOrdem").hide();
		$("#divDisplayOrderDetails #divEquipamento").hide();
		$("#divDisplayOrderDetails #divNotasAvarias").hide();

		$("#divDisplayOrderDetails #divOperacoes").hide();
		$("#divDisplayOrderDetails #divMateriais").show();
		$("#divDisplayOrderDetails #divAnexo").hide();
		$("#divDisplayOrderDetails #divEndereco").hide();

	});

	$("[itag='btnDetalheOrdemAnexo']").on("click touchend", function (e) {
		$("#divDisplayOrderDetails #divDadosOrdem").hide();
		$("#divDisplayOrderDetails #divEquipamento").hide();
		$("#divDisplayOrderDetails #divNotasAvarias").hide();

		$("#divDisplayOrderDetails #divOperacoes").hide();
		$("#divDisplayOrderDetails #divMateriais").hide();
		$("#divDisplayOrderDetails #divAnexo").show();
		$("#divDisplayOrderDetails #divEndereco").hide();
	});

	$("[itag='btnDetalheOrdemEndereco']").on("click touchend", function (e) {
		$("#divDisplayOrderDetails #divDadosOrdem").hide();
		$("#divDisplayOrderDetails #divEquipamento").hide();
		$("#divDisplayOrderDetails #divNotasAvarias").hide();

		$("#divDisplayOrderDetails #divOperacoes").hide();
		$("#divDisplayOrderDetails #divMateriais").hide();
		$("#divDisplayOrderDetails #divAnexo").hide();
		$("#divDisplayOrderDetails #divEndereco").show();
	});

	$("[itag='btnConfirmacaoColetiva']").on("click touchend", function (e) {
		$('#divDisplayOrders').hide();
		$('#divMenu').hide();
		$('#divGET_EQUNR').hide();
		$('#divGET_ORDERS').hide();
		$('#btnDiv_GET_ORDERS').hide();
		$('#divDisplayOrderDetails').hide();
		$('#btnDiv_GET_ORDERS_DETAILS').hide();
		$('#divDisplaySecurityFormCheck').hide();
		$('#divDisplayGetText').hide();
		$('#divDisplayGet_Warranty').hide();
		$('#divMainScreen').hide();

		$('#divDisplayOrders').hide();
		$('#divConfirmacaoColetiva').show();

		$('.customButtonRunTime').remove();
		$('#divDisplayNotif #menu').append(
			'<a class="customButtonRunTime imageButton" onclick="\
			$(\'#divDisplayNotif\').hide();\
			$(\'#divMainScreen\').show();\
			$(\'.customButtonRunTime\').remove();">	<div class="menu-button">\
			<div class="imagem">\
				<img class="Voltar"/>\
			</div>\
			<div class="descricao">\
				Voltar\
			</div>\
		</div></a>'
		);

		$('#divDisplayNotif #menu').append('<a class="imageButton customButtonRunTime" onclick="\
		call_Nota($(\'#divDisplayNotif #txtNotifNumber\').val())" ><div class="menu-button"><div class="imagem"><img class="Avancar"/></div><div class="descricao">Avançar</div></div></a>');


		$('#divConfirmacaoColetiva #divTelaListaConfirmacao').hide();
		$('#divConfirmacaoColetiva #divTelaCampos').show();

	});

	$(document).on("click touchend", "[itag='inserttestdata']", function (e) {
		$(".listdetailtableNew tbody").html("");
		$(".cancelbtn").hide();
		$('#Form20181004192116851 [itable="header"] input[imapvalue="A"]').val("4920");
		$('#Form20181004192116851 [itable="header"] input[imapvalue="B"]').val("3000");
		$('#Form20181004192116851 [itable="header"] input[imapvalue="C"]').val("3000");
		$('#Form20181004192116851 [itable="header"] input[imapvalue="D"]').val("PLNT");
		$('#Form20181004192116851 [itable="header"] input[imapvalue="E"]').val("62130");
		$('#Form20181004192116851 [itable="header"] input[imapvalue="F"]').val("A2");
		$('#Form20181004192116851 [itable="header"] input[imapvalue="G"]').val("ZB03");
		$('#Form20181004192116851 [itable="header"] input[imapvalue="H"]').val("FVVD");
		$('#Form20181004192116851 [itable="header"] input[imapvalue="I"]').val("SAR");
		$('#Form20181004192116851 [itable="header"] input[imapvalue="J"]').val("ZB03");
		e.preventDefault();
	});


	

	document.addEventListener("deviceready", onDeviceReady, false);
});

function btnDisplayNotif(){
	if (!isChrome)
	CommonScripts.ShowLoader("Loading...");

	$('#divDisplayNotifDetail').show();
	$('#divDisplayNotifCausas').hide();
	$('#divDisplayNotifAtividade').hide();
	$('#divDisplayNotifAnexo').hide();
	$('#divDisplayNotifItens').hide();

$('#divDisplayNotif input[type="text"]').val("");
//$('#divDisplayOrders').hide();
showPanel($('#divDisplayNotif'));

$('.customButtonRunTime').remove();
$('#divDisplayNotif #menu').append(
	'<a class="customButtonRunTime imageButton" onclick="\
	$(\'#divDisplayNotif\').hide();\
	$(\'.customButtonRunTime\').remove();"><div class="menu-button"><div class="imagem"><img class="Voltar"/></div><div class="descricao">Voltar</div></div></a>'
);

$('#divDisplayNotif #menu').append('<a class="imageButton customButtonRunTime" onclick="\
call_Nota($(\'#divDisplayNotif #txtNotifNumber\').val())" ><div class="menu-button"><div class="imagem"><img class="Avancar"/></div><div class="descricao">Avançar</div></div></a>');

if (!isChrome)
	CommonScripts.HideLoader();
}

function onDeviceReady() {
	if (AppVersion.replace(/\./g, '') < 414) {
		navigator.notification.alert("Process app is not compatible with current version of InnoweraApp. Please update InnoweraApp from AppStore.", function () {
			if (!isChrome) CommonScripts.GoBack();
		}, "Information", "OK");
	}
	var sesUserSettings = JSON.parse(sessionStorage.UserSettings);
	//Load Record
	var strDataID = CommonScripts.QueryStringParams("DataID");

	if (strDataID) {
		BLProcessFile.GetProcessData(strDataID, GetProcessDataError, GetProcessDataSuccess);

		function GetProcessDataError(jsonError) {
			if (!isChrome) CommonScripts.PrintConsole(jsonError);
		}

		function GetProcessDataSuccess(jsonResult) {
			if (jsonResult) {
				if (jsonResult.rows.length > 0) {
					BLProcessFile.PaintValues(jsonResult.rows.item(0), PaintValuesError, PaintValuesSuccess);
				} else {
					if (!isChrome) CommonScripts.PrintConsole("No record found.");
				}
			} else {
				if (!isChrome) CommonScripts.PrintConsole("DB object is null");
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
			navigator.notification.confirm("There is an error while processing record. Please contact to your IT Administrator.", function (btnIndex) {
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
	}
}

/* Added for Convert To SAPTable by Hiren Taior on 26-09-2018 */
function convertToSAPTable(Data, tableidx) {
	try {

		var columnName = [];

		var headerRow = Data[tableidx][0];
		for (var k = 0; k < headerRow.length; k++) {

			columnName.push(headerRow[k]);
		}

		var DataRow = Data[tableidx][1];
		var DataValue = [];

		for (var i = 0; i < DataRow.length; i++) {

			DataValue.push(DataRow[i]);
		}

		var SapTable = [];
		var obj = {};

		for (var p = 0; p < DataValue.length; p++) {

			for (var j = 0; j < columnName.length; j++) {
				obj[columnName[j]] = DataValue[p][j];

				//console.log("obj");
				//console.log(obj);                         
			}

			SapTable.push(obj);
			obj = {};
		}

		//console.log(JSON.stringify(SapTable));
		return SapTable;

	} catch (e) {
		alert(JSON.stringify(e));
	}
}

// /* Added for Row Data from Grid by Hiren Taior on 28-09-2018 */
// function GetRowData_GET_ORDERS() {
// 	var myGrid = $('#tableGrid'),
// 		selRowId = myGrid.jqGrid('getGridParam', 'selrow'),
// 		celValue = myGrid.jqGrid('getCell', selRowId, 'Nº ordem');
// 	//alert(celValue);
// 	return celValue;
// }

/* Added for Row Data from Grid by Ali Hassan on 17-10-2018 */
function GetRowData_GET_Equip() {
	var myGrid = $('#tableGrid'),
		selRowId = myGrid.jqGrid('getGridParam', 'selrow'),
		celValue = myGrid.jqGrid('getCell', selRowId, 'Nº equipamento');
	//alert(celValue);
	return celValue;
}

function divDisplayOrderDetails_btnEdit() {
	try{
		//var teste = $('#divNotasAvarias');
		//alert($(teste).html());

		$('#divDisplayOrderDetails #TxtCentroTrabalho').removeAttr('readonly');
		$('#divDisplayOrderDetails #TxtTipoAtividadeManutencao').removeAttr('readonly');
		$('#divDisplayOrderDetails #TxtGrpPlanej').removeAttr('readonly');
		//$('#divDisplayOrderDetails #TxtLocalInstalacao');
		//$('#divDisplayOrderDetails #TxtCodEquipamento');
		$('#divDisplayOrderDetails #TxtInicioBase').removeAttr('readonly');
		$('#divDisplayOrderDetails #TxtFimBase').removeAttr('readonly');
		$('#divDisplayOrderDetails #TxtBreveOrdem').removeAttr('readonly');

		$('#divDisplayOrderDetails #ddlTipoAtividadeManutencao').removeAttr('readonly');


		if ($('#divDisplayOrderDetails #TxtNota').val() != "") {
			$('#divDisplayOrderDetails #TxtInicioAvariaData').removeAttr('readonly');
			$('#divDisplayOrderDetails #TxtInicioAvariaHora').removeAttr('readonly');
			$('#divDisplayOrderDetails #TxtFimAvariaData').removeAttr('readonly');
			$('#divDisplayOrderDetails #TxtFimAvariaHora').removeAttr('readonly');
			$('#divDisplayOrderDetails #cbxParada').removeAttr('readonly');
			$('#divDisplayOrderDetails #cbxParada').show();
			$('#divDisplayOrderDetails #imgCbxParada').hide();
		}
		$('#divDisplayOrderDetails #lblLocalInstalacao').text($('#divDisplayOrderDetails #TxtLocalInstalacao').val());
		$('#divDisplayOrderDetails #lblDescLocalInstalacao').text($('#divDisplayOrderDetails #TxtDescLocalInstalacao').val());
		$('#divDisplayOrderDetails #lblDescCodEquipamento').text($('#divDisplayOrderDetails #TxtDescCodEquipamento').val());
		$('#divDisplayOrderDetails #lblCodEquipamento').text($('#divDisplayOrderDetails #TxtCodEquipamento').val());
		$('#divDisplayOrderDetails #TxtCentroCentroTrabalho').hide();
		$('#divDisplayOrderDetails #TxtDescCentroTrabalho').hide();
		$('#divDisplayOrderDetails #ddlCentroTrabalho').show();
		$('#divDisplayOrderDetails #TxtCentroTrabalho').hide();
		$('#divDisplayOrderDetails #TxtGrpPlanej').hide();
		$('#divDisplayOrderDetails #ddlGrpPlanej').show();
		$('#divDisplayOrderDetails #TxtCentroPlanej').hide();
		$('#divDisplayOrderDetails #TxtDescGrpPlanej').hide();
		$('#divDisplayOrderDetails #ddlTipoAtividadeManutencao').show();
		
		$('#divDisplayOrderDetails #panelTipoAtividade').hide();
		$('#divDisplayOrderDetails #panelTipoAtividadeEdit').show();
		$('#divDisplayOrderDetails #panelGrpPlanej').hide();
		$('#divDisplayOrderDetails #panelGrpPlanejEdit').show();
		$('#divDisplayOrderDetails #panelCentroTrabalho').hide();
		$('#divDisplayOrderDetails #panelCentroTrabalhoEdit').show();

		//$('#divDisplayOrderDetails #TxtLocalInstalacao').removeClass('form-control');
		$('#divDisplayOrderDetails #TxtLocalInstalacao').hide();

		$('#divDisplayOrderDetails #lblDescCodEquipamento').show();
		$('#divDisplayOrderDetails #lblCodEquipamento').show();
		$('#divDisplayOrderDetails #lblDescLocalInstalacao').show();
		$('#divDisplayOrderDetails #lblLocalInstalacao').show();
		$('#divDisplayOrderDetails #panelLocalInstalacao').show();
		$('#divDisplayOrderDetails #imgLocalInstalacao').hide();

		
		$('#divDisplayOrderDetails #TxtDescLocalInstalacao').hide();

		
		//$('#divDisplayOrderDetails #imgCodEquipamento').hide();
		$('#divDisplayOrderDetails #TxtCodEquipamento').hide();
		$('#divDisplayOrderDetails #panelCodEquipamento').show();
//
		
		$('#divDisplayOrderDetails #TxtDescCodEquipamento').hide();
		$('#divDisplayOrderDetails #btnSave').show();
		$('#divDisplayOrderDetails #btnEdit').hide();
		$('#divDisplayOrderDetails #btnCancel').show();
		$('#btnModificacaoMaterial').show();


		call_MATCHCODE_IW32();
	} catch(e){
		alert(JSON.stringify(e));
	}
}

function divDisplayOrderDetails_btnCancel() {
	try{
		//var teste = $('#divNotasAvarias');
		//alert($(teste).html());

		$('#divDisplayOrderDetails #TxtCentroTrabalho').attr('readonly', 'readonly');
		$('#divDisplayOrderDetails #TxtTipoAtividadeManutencao').attr('readonly', 'readonly');
		$('#divDisplayOrderDetails #TxtGrpPlanej').attr('readonly', 'readonly');
		//$('#divDisplayOrderDetails #TxtLocalInstalacao');
		//$('#divDisplayOrderDetails #TxtCodEquipamento');
		$('#divDisplayOrderDetails #TxtInicioBase').attr('readonly', 'readonly');
		$('#divDisplayOrderDetails #TxtFimBase').attr('readonly', 'readonly');
		$('#divDisplayOrderDetails #TxtBreveOrdem').attr('readonly', 'readonly');

		$('#divDisplayOrderDetails #ddlTipoAtividadeManutencao').attr('readonly', 'readonly');


		if ($('#divDisplayOrderDetails #TxtNota').val() != "") {
			$('#divDisplayOrderDetails #TxtInicioAvariaData').attr('readonly', 'readonly');
			$('#divDisplayOrderDetails #TxtInicioAvariaHora').attr('readonly', 'readonly');
			$('#divDisplayOrderDetails #TxtFimAvariaData').attr('readonly', 'readonly');
			$('#divDisplayOrderDetails #TxtFimAvariaHora').attr('readonly', 'readonly');
			$('#divDisplayOrderDetails #cbxParada').attr('readonly', 'readonly');
			$('#divDisplayOrderDetails #cbxParada').hide();
			$('#divDisplayOrderDetails #imgCbxParada').show();
		}
		$('#divDisplayOrderDetails #lblLocalInstalacao').text($('#divDisplayOrderDetails #TxtLocalInstalacao').val());
		$('#divDisplayOrderDetails #lblDescLocalInstalacao').text($('#divDisplayOrderDetails #TxtDescLocalInstalacao').val());
		$('#divDisplayOrderDetails #lblDescCodEquipamento').text($('#divDisplayOrderDetails #TxtDescCodEquipamento').val());
		$('#divDisplayOrderDetails #lblCodEquipamento').text($('#divDisplayOrderDetails #TxtCodEquipamento').val());
		$('#divDisplayOrderDetails #TxtCentroCentroTrabalho').show();
		$('#divDisplayOrderDetails #TxtDescCentroTrabalho').show();
		$('#divDisplayOrderDetails #ddlCentroTrabalho').hide();
		$('#divDisplayOrderDetails #TxtCentroTrabalho').show();
		$('#divDisplayOrderDetails #TxtGrpPlanej').show();
		$('#divDisplayOrderDetails #ddlGrpPlanej').hide();
		$('#divDisplayOrderDetails #TxtCentroPlanej').show();
		$('#divDisplayOrderDetails #TxtDescGrpPlanej').show();
		$('#divDisplayOrderDetails #ddlTipoAtividadeManutencao').hide();
		
		$('#divDisplayOrderDetails #panelTipoAtividade').show();
		$('#divDisplayOrderDetails #panelTipoAtividadeEdit').hide();
		$('#divDisplayOrderDetails #panelGrpPlanej').show();
		$('#divDisplayOrderDetails #panelGrpPlanejEdit').hide();
		$('#divDisplayOrderDetails #panelCentroTrabalho').show();
		$('#divDisplayOrderDetails #panelCentroTrabalhoEdit').hide();

		//$('#divDisplayOrderDetails #TxtLocalInstalacao').removeClass('form-control');
		$('#divDisplayOrderDetails #TxtLocalInstalacao').show();

		$('#divDisplayOrderDetails #lblDescCodEquipamento').hide();
		$('#divDisplayOrderDetails #lblCodEquipamento').hide();
		$('#divDisplayOrderDetails #lblDescLocalInstalacao').hide();
		$('#divDisplayOrderDetails #lblLocalInstalacao').hide();
		$('#divDisplayOrderDetails #panelLocalInstalacao').hide();
		$('#divDisplayOrderDetails #imgLocalInstalacao').show();

		
		$('#divDisplayOrderDetails #TxtDescLocalInstalacao').show();

		
		//$('#divDisplayOrderDetails #imgCodEquipamento').hide();
		$('#divDisplayOrderDetails #TxtCodEquipamento').show();
		$('#divDisplayOrderDetails #panelCodEquipamento').hide();
//
		
		$('#divDisplayOrderDetails #TxtDescCodEquipamento').show();
		$('#divDisplayOrderDetails #btnSave').hide();
		$('#divDisplayOrderDetails #btnEdit').show();
		$('#divDisplayOrderDetails #btnCancel').hide();

		$('#btnModificacaoMaterial').hide();
	} catch(e){
		alert(JSON.stringify(e));
	}
}

function divDisplayOrderDetails_btnSave(){
	if ($('#divDisplayOrderDetails #divNotasAvarias #TxtNota').val() != "") {
		call_IW32_NOTIF_DATA_MODIFY();
	} else {
		call_IW32_MODIFY_ORDER_HEADER();
	}
}

function call_MATCHCODE_IW32() {
	try {

		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181205111621500";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost	

		jsonInformation.UserNote = UserNote;
		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;

		//Gat value from the form control
		var txtNOrdem = $('#divDisplayOrderDetails #txtNOrdem').val();
		txtNOrdem = "000000000000" + txtNOrdem;
		txtNOrdem = txtNOrdem.substring(txtNOrdem.length - 12, txtNOrdem.length);

		var temp = [];
		var tempHeader = ['A'];
		var tempItem = [txtNOrdem];
		temp.push(tempHeader);
		temp.push(tempItem);

		var arrHeader = temp;
		var arrFooter = "";

		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();
			alert("Error");
			alert(JSON.stringify(jsonError));
		}

		function ProcessOperationSuccess(jsonRecordWithResult) {
			//Mark: MATCHCODE_IW32 - RunProcess_V2

			//alert(JSON.stringify(jsonRecordWithResult));
			
			var ddlCentroTrabalho = $('#divDisplayOrderDetails #ddlCentroTrabalho');
			var ddlCentroTrabalho2 = $('#modalOperacaoDetail #ddlCentroTrabalho');
			var ddlGrpPlanej = $('#divDisplayOrderDetails #ddlGrpPlanej');
			var ddlTipoAtividadeManutencao = $('#divDisplayOrderDetails #ddlTipoAtividadeManutencao');

			var selectedCentroTrabalho = $('#divDisplayOrderDetails #TxtCentroTrabalho').val();
			var selectedCentroTrabalho2 = $('#modalOperacaoDetail #hdfCentroTrabalho').val();
			var selectedGrpPlanej = $('#divDisplayOrderDetails #TxtGrpPlanej').val();
			var selectedTipoAtividadeManutencao = $('#divDisplayOrderDetails #TxtTipoAtividadeManutencao').val();


			$(ddlCentroTrabalho).empty();
			$(ddlGrpPlanej).empty();
			$(ddlTipoAtividadeManutencao).empty();
			$(ddlCentroTrabalho2).empty();

			jsonRecordWithResult.ResultObject.ReturnTableCollection[2][1].forEach(item => {
				var optionSelected = selectedCentroTrabalho == item[0] ? "selected=\"true\"" : "";
				var optionSelected2 = selectedCentroTrabalho2 == item[0] ? "selected=\"true\"" : "";

				$(ddlCentroTrabalho).append("<option value='" + item[0] + "' " + optionSelected + ">" + item[0] + " - " + item[1] + "</option>");
				$(ddlCentroTrabalho2).append("<option value='" + item[0] + "' " + optionSelected2 + ">" + item[0] + " - " + item[1] + "</option>");
			});

			jsonRecordWithResult.ResultObject.ReturnTableCollection[3][1].forEach(item => {
				var optionSelected = selectedGrpPlanej == item[0] ? "selected=\"true\"" : "";
				$(ddlGrpPlanej).append("<option value='" + item[0] + "' " + optionSelected + ">" + item[0] + " - " + item[1] + "</option>");
			});

			jsonRecordWithResult.ResultObject.ReturnTableCollection[4][1].forEach(item => {
				var optionSelected = selectedTipoAtividadeManutencao == item[0] ? "selected=\"true\"" : "";
				$(ddlTipoAtividadeManutencao).append("<option value='" + item[0] + "' " + optionSelected + ">" + item[0] + " - " + item[1] + "</option>");
			});

			$(ddlTipoAtividadeManutencao).find('option[value="selectedTipoAtividadeManutencao"]').attr('selected', true);
			
			CommonScripts.HideLoader();
		}


	} catch (e) {
		alert("Error Try:" + JSON.stringify(e));
	}
}

/* Added for call process file GET_EQUNR by Hiren Taior on 02-10-2018 */
function call_GET_EQUNR() {
	try {

		var PostType = "SAP";
		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				//strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				strAction = "";
				break;
		}

		var UserNote = "";
		var FileType = "Data Extractor";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20180927230137502";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;

		//Gat value from the form control
		var InventoryNumber = document.getElementById("txtInventoryNumber").value;

		//Preparing Data for processFile
		var arrHeader = 'A->' + InventoryNumber;
		var arrFooter = "";

		// Generate the object to be save or to send to IWMS  
		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);


	} catch (e) {
		alert(JSON.stringify(e));
		CommonScripts.HideLoader();
	}

	function ProcessOperationError(jsonError) {
		alert(JSON.stringify(jsonError));
		CommonScripts.HideLoader();
	}


	function ProcessOperationSuccess(jsonRecordWithResult) {
		CommonScripts.ShowLoader("Loading...");
		var result = jsonRecordWithResult.ResultObject.SapReturnTable;
		//alert(JSON.stringify(result));
		var data;
		for (key in result) {
			if (result.hasOwnProperty(key)) {
				var value = JSON.stringify(result[key]);
				data = JSON.parse(value);
				document.getElementById("txtEquipmentNumber").value = data.EQUNR;
			}
		}

		CommonScripts.HideLoader();
	}


}

/* Added for call process file GET_ADDRESS by Hiren Taior on 03-10-2018 */
function call_GET_ADDRESS() {
	
	$("#divGET_ORDERS #hdfNrOrdem").val('');
	try {

		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181002001415050";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost	

		jsonInformation.UserNote = UserNote;

		//jsonInformation.ProcessFile = "GET_ORDERS.iff";
		//jsonInformation.ProcessCode = "ZPMF_GET_ORDERS_IW39";

		
		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		//alert("Passo 1");

		//Gat value from the form control
		var EquipmentNumber = document.getElementById("txtEquipmentNumber").value;
		var txtOrderNumber = document.getElementById("txtOrderNumber").value;
		var txtCentroDeTrabalho = document.getElementById("txtCentroDeTrabalho").value;
		var txtInventoryNumber = document.getElementById("txtInventoryNumber").value;
		var txtLocalDeInstalação = document.getElementById("txtLocalDeInstalação").value;
		var txtIW39 = document.getElementById("txtIW39").value;


		var column = ['A', 'B', 'E', 'F', 'C', 'D'];
		var row = [txtOrderNumber, EquipmentNumber, txtInventoryNumber, txtIW39, txtLocalDeInstalação, txtCentroDeTrabalho];
		var temp = [];
		temp.push(column);
		temp.push(row);

		var arrHeader = temp;
		var arrFooter = "";

		//alert(JSON.stringify(arrHeader));

		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);

		/* Added in InnoweraApp 5.1.2 by Abhishek bedre on 05-08-2017 
		if (PostType.toLowerCase() == "workflow") {
			jsonInformation.IsStartWorkflow = 1;
			jsonInformation.TemplateSheetName = $("#hdnTemplateSheetName").val().trim();
		}*/

		//alert(JSON.stringify(jsonInformation));

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			debugger;
			CommonScripts.HideLoader();
			alert("Error");
			alert(JSON.stringify(jsonError));
		}

		function ProcessOperationSuccess(jsonRecordWithResult) {
			debugger;
			CommonScripts.HideLoader();
			//alert("Success");
			//var result = jsonRecordWithResult.ResultObject.SapReturnTable;
			var result = jsonRecordWithResult.ResultObject.ReturnTableCollection;

			//alert(JSON.stringify(result));
			DataBinding($("#divGET_ORDERS table[itable='tblDataDE']"), result[0], true, true);

			
			$("#divGET_ORDERS table[itable='tblDataDE']").find('tbody tr').on('touchend', function(e){
				$("#divGET_ORDERS table[itable='tblDataDE'] tbody tr").css('background-color', 'white');
				$(this).css('background-color', 'silver');

				var colunas = $(this).find('td')

				$('#divGET_ORDERS #hdfNrOrdem').val(colunas[0].innerText);
			});

			// // alert(JSON.stringify(result[0]));
			// // DataBinding($('#Form20181002001415050 [itable="tblDataDE"]'), result[0]);

			// //CommonScripts.PrintConsole(jsonRecordWithResult);	
			// var _SAPTable = convertToSAPTable(result, 0);
			// //alert("_SAPTable");
			// //alert(JSON.stringify(_SAPTable));

			// // Paint Grid
			 $('#divGET_ORDERS').show();
			 $('#btnDiv_GET_ORDERS').show();
			// // $('#divDisplayOrders').hide();
			// // return ;
			// var sapReturnTable = _SAPTable;
			// var columns = [];
			// var columnNames = []

			// if ($("#" + jsonRecordWithResult.FormID + " table[itable='tblDataDE']").has('tbody')) {
			// 	var arrDataColumn = $("#" + jsonRecordWithResult.FormID + " table[itable='tblDataDE'] > thead > tr > th")
			// 	for (i = 0; i < arrDataColumn.length; i++) {
			// 		columnNames.push($(arrDataColumn[i]).html());
			// 		columns.push($(arrDataColumn[i]).attr("imatno"));
			// 	}
			// } else {
			// 	$("#" + jsonRecordWithResult.FormID + " table[itable='tblDataDE']").append("<tbody></tbody>");
			// }

			// //Configure the jqGrid
			// var strJqGrid = '<div id="divGrid" class="divGrid">' +
			// 	'<table id="tableGrid">' +
			// 	'<tr><td/></tr>' +
			// 	'</table>' +
			// 	'<div id="divPager">' +
			// 	'</div>' +
			// 	'</div>';

			// $("#" + jsonRecordWithResult.FormID + " table[itable='tblDataDE']").hide();
			// $("#divGrid").remove();
			// //ActiveGrid(jsonRecordWithResult.FormID);
			// $("#" + jsonRecordWithResult.FormID + " .datacontent").append(strJqGrid);

			// var arrTableColumnLabel = []
			// var arrTableColumnData = []

			// for (var j = 0; j < columns.length; j++) {

			// 	arrTableColumnLabel.push(columnNames[j]);
			// 	arrTableColumnData.push({
			// 		"name": columns[j],
			// 		"align": "center",
			// 		"index": columns[j],
			// 		"searchoptions": {
			// 			"sopt": ['cn', 'nc', 'bw', 'bn', 'ew', 'en']
			// 		}
			// 	});
			// }

			// //Check for the Date column
			// for (var i = 0; i < sapReturnTable.length; i++) {
			// 	tempArr = {};
			// 	// for (key in sapReturnTable[i]) {
			// 	var value = sapReturnTable[i]["Ordem-PM: Data de referência"];
			// 	if (value) {
			// 		//alert(value);
			// 		sapReturnTable[i]["Ordem-PM: Data de referência"] = Convert_yyyyMMdd(sapReturnTable[i]["Ordem-PM: Data de referência"]);
			// 		// if (CheckingDate(value.toString())) {
			// 		// 	CommonScripts.GetDateInDeviceFormat(new Date(value), 0, sapReturnTable[i], "Ordem-PM: Data de referência");
			// 		// }
			// 	}
			// 	// }
			// }

			// if (jsonRecordWithResult.ResultObject.IsAttachment == 0) {
			// 	var jsonJQGridValues = {
			// 		ColumnLabel: arrTableColumnLabel,
			// 		ColumnData: arrTableColumnData,
			// 	}

			// 	setTimeout(function () {
			// 		CommonScripts.ShowLoader("Loading data...");
			// 		CommonScripts.BindJQGrid(sapReturnTable, jsonJQGridValues, false, function () {
			// 			CommonScripts.HideLoader();
			// 			$("#divGrid .ui-btn").addClass("ui-alt-icon");
			// 			if (DeviceType == "Tablet") {
			// 				var setHeight = $(window).height() - 400;
			// 				$("#gview_tableGrid").css("height", setHeight);
			// 				var setTableHeight = setHeight - 80;
			// 				$("#divGrid div[data-role='content']").css("height", setTableHeight);
			// 				if (BLProcessFile.SetHeightProcessFile) {
			// 					BLProcessFile.SetHeightProcessFile();
			// 				}
			// 			}

			// 			cbGridLoadComplete(jsonRecordWithResult);
			// 		}, cbOnSortCol);
			// 	}, 100);

			// }

			$('#divDisplayOrders').hide();
			CommonScripts.HideLoader();

		}


	} catch (e) {
		alert("Error Try:" + JSON.stringify(e));
	}
}

/* Added for call process file GET_ORDER_DETAILS by Hiren Taior on 04-10-2018 */
function call_GET_ORDER_DETAILS(oNumber) {
	call_GET_ORDER_DETAILS(oNumber, false);
}
function call_GET_ORDER_DETAILS(oNumber, dataOnly) {
	try {
		var OrderNumber = oNumber;
		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181227152511643";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		var column = ['A'];
		var row = [oNumber];
		var temp = [];
		temp.push(column);
		temp.push(row);

		var arrHeader = temp;
		var arrFooter = "";

		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();
			alert(JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) {
			try{




				var result = jsonRecordWithResult.ResultObject.ReturnTableCollection;





				$('[itag="btnExecute_GET_ORDERS_DETAILS"]').attr('message', '');
				var indexText = [];
				for (let i = 0; i < result[3][1].length; i++) {
					const element = result[3][1][i];
					if (element[3] == "0000000000") {
						var textmessage = "";
						for (let i = element[4] - 1; i < element[5] - 1; i++) {
							const lineMessage = result[4][1][i];
							textmessage += lineMessage[1] + "<br/>"
						}
						if (element[2] == "" && element[1] == "" && element[0] != "") {
							$('[itag="btnExecute_GET_ORDERS_DETAILS"]').attr('message', textmessage);
						} else if (element[1] != "" && element[0] != "") {
							var tableTemp = $('#divDisplayOrderDetails #divOperacoes table[itable="tblDataDE"] tbody tr');
							tableTemp.each(function() {
								const columns = $(this).find('td');

								if (columns[0].innerText.trim() == element[1] && columns[1].innerText.trim() == element[2]) {

									
									$(this).find('td[imatno="link"]').append("<img src='../../images/logs_16.png' />");
									$(this).find('td[imatno="link"] img').attr('message', textmessage);
									$(this).find('td[imatno="link"] img').click(function() {
										showDescritiveText($(this).attr('message'));
									});
									
								}
							});
							console.log(JSON.stringify(tableTemp));
						}
					}
				}


				




				/*INICIO - Francisco Silva: 14/12/2018 */
				var dtSourceMateriais = result[1][1];
				for (var i = 0; i < dtSourceMateriais.length; i++) {
					if (dtSourceMateriais[i][9] == 'X') {
						dtSourceMateriais.splice(i, 1);
						i = 0;
						dtSourceMateriais = result[1][1];
					}
				}

				DataBinding($('#tblDataMateriais'), result[1]);

				$('#tblDataMateriais').find('tbody tr').each(function(){
					var colunas = $(this).find('td');
					colunas[3].innerText = colunas[3].innerText.replace('.', ',');
				});

				$('#tblDataMateriais').find('tbody tr').on('touchend', function(e){
					var colunas = $(this).find('td');
					$('#tblDataMateriais tbody tr').css('background-color', '');

					$(this).css('background-color', 'silver');

					$('#divDisplayOrderDetails #divMateriais #btnEdit').show();
					$('#divDisplayOrderDetails #divMateriais #btnDelete').show();

					$('#modalMaterialDetail #txtItem').val(colunas[0].innerText);
					$('#modalMaterialDetail #txtMaterial').val(colunas[1].innerText);
					$('#modalMaterialDetail #txtNReserva').val(colunas[9].innerText);
					$('#modalMaterialDetail #txtNItemReserva').val(colunas[10].innerText);
					$('#modalMaterialDetail #txtCentro').val(colunas[7].innerText);
					$('#modalMaterialDetail #txtDeposito').val(colunas[6].innerText);
					$('#modalMaterialDetail #txtNOperacao').val(colunas[8].innerText);
					$('#modalMaterialDetail #txtQuantidade').val(colunas[3].innerText.replace(',', '.'));

					//$('#modalEquipamento #hdfCodEquipamento').val(colunas[0].innerText);
					//$('#modalEquipamento #hdfDescCodEquipamento').val(colunas[1].innerText);
					//$('#modalEquipamento #hdfNInventario').val(colunas[2].innerText);

				});
				/*FIM - Francisco Silva: 14/12/2018 */

				var _SAPTable = convertToSAPTable(result, 2);

				//Get Value for Form Field ---------------------------------------------
				var resultSAP_TBL = jsonRecordWithResult.ResultObject.SapReturnTable;
				//alert(JSON.stringify(resultSAP_TBL));
				var data;
				for (key in resultSAP_TBL) {
					if (resultSAP_TBL.hasOwnProperty(key)) {
						var value = JSON.stringify(resultSAP_TBL[key]);
						data = JSON.parse(value);
						//alert(JSON.stringify(data));
						//document.getElementById("txtNºordem").value = data.D;
						$('#btnDiv_GET_ORDERS_DETAILS #txtTpOrder').val(data.C)
						$('#btnDiv_GET_ORDERS_DETAILS #TxtBreveOrdem').val(data.E)
						$('#btnDiv_GET_ORDERS_DETAILS #txtNOrdem').val(data.D.replace(/^0+/, ''))
						$('#btnDiv_GET_ORDERS_DETAILS #TxtTipoAtividadeManutencao').val(data.O)
						$('#btnDiv_GET_ORDERS_DETAILS #TxtDescricaoTipoAtividade').val(data.P)

						$('#btnDiv_GET_ORDERS_DETAILS #TxtGrpPlanej').val(data.Q)
						$('#btnDiv_GET_ORDERS_DETAILS #TxtCentroPlanej').val(data.R)
						$('#btnDiv_GET_ORDERS_DETAILS #TxtDescGrpPlanej').val(data.S)

						$('#btnDiv_GET_ORDERS_DETAILS #TxtCentroTrabalho').val(data.T)
						$('#btnDiv_GET_ORDERS_DETAILS #TxtCentroCentroTrabalho').val(data.U)
						$('#btnDiv_GET_ORDERS_DETAILS #TxtDescCentroTrabalho').val(data.V)

						$('#btnDiv_GET_ORDERS_DETAILS #TxtLocalInstalacao').val(data.W)
						$('#btnDiv_GET_ORDERS_DETAILS #TxtDescLocalInstalacao').val(data.X)

						$('#btnDiv_GET_ORDERS_DETAILS #TxtCodEquipamento').val(data.Y.replace(/^0+/, ''))
						$('#btnDiv_GET_ORDERS_DETAILS #TxtDescCodEquipamento').val(data.Z)
						$('#btnDiv_GET_ORDERS_DETAILS #TxtNInventario').val(data.AA)


						$('#btnDiv_GET_ORDERS_DETAILS #TxtInicioBase').val(InvertDDAndMM(data.AB))
						$('#btnDiv_GET_ORDERS_DETAILS #TxtFimBase').val(InvertDDAndMM(data.AC))
						$('#btnDiv_GET_ORDERS_DETAILS #TxtNotificador').val(data.AL)

						$('#btnDiv_GET_ORDERS_DETAILS #TxtNota').val(data.AD.replace(/^0+/, ''))
						if(data.AE!= null && data.AE != "")
							$('#btnDiv_GET_ORDERS_DETAILS #TxtInicioAvariaData').val(InvertDDAndMM(data.AE));
						$('#btnDiv_GET_ORDERS_DETAILS #TxtInicioAvariaHora').val(data.AG)
						if(data.AF!= null && data.AF != "")
							$('#btnDiv_GET_ORDERS_DETAILS #TxtFimAvariaData').val(InvertDDAndMM(data.AF));
						$('#btnDiv_GET_ORDERS_DETAILS #TxtFimAvariaHora').val(data.AH)

						$('#btnDiv_GET_ORDERS_DETAILS #cbxParada').attr('checked', data.AI == "X" ? true : false)
						$('#btnDiv_GET_ORDERS_DETAILS #cbxParada').hide();
						if(data.AI == "X")
							$('#btnDiv_GET_ORDERS_DETAILS #imgCbxParada').attr('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFc0lEQVR42sWWe1BUVRzHv/tiAQ2B5aEZOprIlA7SUA4Sbg64zVRaxJi6PtD1AUlKKC4PF4GFBUGwVAi1EpIc05wQawpmcAwdSoWxGgdb1Ez+ECNRUBCWXfbRuWfbW7sul2Uch9/MmXt/3/2d/X3O75x7zuFhjI33lP+/grRNDtr3pB349/lUAZYEBgaelMlkdmJnZyfOnDnDJF/kHGDaGincIIOF//wTpb9REy1bODfQ39+flUwmE2pra6HX6xc5r0Dw6rjpc2YnRUgjwubPmiKJmOELsZAJ4o2qVE3nzyIzeSNiYmLs9NbWVrRqO07D1BNr0xwAFBWKtCSFO7H4iGfh7iaAkEeS862hrkKkJKyGUdcLPz8/Vuvr60N9fT0wfdlh/Hlig3OAmYpjSdmpcuZ1+cuT4CbkQSjggc/ng+9i8gtk9Du3boRUKrXTGxsbMWepEj+evf4VrletGBZgc66SArw1WwKRgA8R3wbh2vgzPlgLU383JBIJq3V0dMDg9wKk8Zkozy3hBtiiTqMA0TN9qCTgMcnhEsAvPzWiNDMBkZGRrGY0GplVjxVFNfAJCkFZzm5ugOQ8K8C8aRNcLPp/Vpq+AYKBe/Dx8WE1rVaL+bEKTIySY8hswf7sEQBSNBkUIGzy+FElb710Dp+pNyE8PJzVent7oRd5I7X0CFrv9MNosWBvVhE3QGrBDgoQEuA5KoByFVnYvR3w9vamvtlsRktLCzbkfoo5kQtxo0sHMwHYoyrkBlDuUlGAIB93l5Nrm8+hOj8BoaGhrMbseMFRsVikSKX+7Qd6WAhASWYBN0BaURYF0N2+ikt1x9Fcd8wuJHr5Fry5TmmnVeYmwnjvJry8vKhvMBhw5coVZB5pgmTSFKp19RspwO4MDTdAxu5sCtBwSIWuq01sSW3W1taG1eovEPxSFPWvXT6PY3nrERISwsbcunULC+LT8erieFZ7qDcRAKAoLY8bYEdpLgW4fe03VCvfQXBwMIRCIRvS398Pt+dCsTTjE+qfKEzE0J3fMW7cOOrrdDpYJNOxMqfK6XQVbs/lBsjao5bb3AunD6PpyyIEBQXZhTEjlGuOw2jQ4xuNAlOnTmUXXnt7O5aoKjFzbrRTAE1qDjfAzo/y5P+X6j7Pxx+NX7Pzy9jAwAD8Z72GIb0OD2+2wMPDg+o9PT0IW5yABStSMJzlb8vmBsjZq7ED+Lu9DQeTYsAcqwKBgNXv3r1LnwEBAfTJHLVdXV3YdvRXPOMbMCyAOiWLG0C9v0Du2KmFfAk/lKXB19eX1Zi5Zg4psVhM/e7ubry+qQDzFq8Bl+Ukq7gB8soK5c46NlSX4Ofj++Dp+fgGRS4Y5Jt/G8vSyzCSZW/ZwQ2QX17kFEA/0AdN7AyIRCI6ckeAdaW1mBY6b0SAnZszuAEKKorlw3XWXmzA0ayVdC3YIJi5l65SQhafOmJyxlRJ6dwAuw6WUAABOX4F5ELieAqfr6nEqT3bKQCzszFN/a0WXpJApwnJAQiT0QIT80Is830lN0DxoVK5WEwuIm6kEQDrwmfCLGxY7YFifFdRQN/X5lVg/rurnKS29iEFwhABGDKYyVSZkZ64nRtgf/XHFMCdNKGQTy8j9umtdrG+lozaDy++EuV05LY+ZG8ilxIzBvVWgOT4rVwAa8r3VRWvk0i8PNxE1ikQ8B8Pc92Y0lunwDBkwf37vboPFemVuH5ksyMAU2hPTI6Llb33RuKq9XHh3t7j3Zl1wHP1NjocAgNA5v/Bg0eDRw/XXG44WXcIHTWnyE860kw2AGYvnUSaBBNl0XCfMBd8weiuRCOZ2fQIgw+b0dlwlnj3SPuLtEH7CgDiJ6i3y0VhEjtWYMxszAH+AUtwMj/vgXQcAAAAAElFTkSuQmCC');
						else
							$('#btnDiv_GET_ORDERS_DETAILS #imgCbxParada').attr('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB4ElEQVR42u2XvU7CUBTHb/lIg9iUpAwKpCREJgdd9RVcfABdWHRj0NhnqMGBTRcWfQAXH8G46uCEIdAAmiBDacESvjynWmKIFGpvQ0w4yS+X3JKcX+69uf2XIQsuZinwy9wmsA2sUe71BjwCz3YCO9ls9jCTyewlk0mR4zjCMF9/scZ5azQajUdd10m5XFYKhcJdPp+/humHaQLHxWLxPBwOc9FolPj9/j81n5QYDoek0WiQdrutpdPpM5i6nCZwUq/Xc/hDEATi8/nM5m4ELJrNpjnGYrFTeHQxUyASiYwF3G4BroCqqs4EeJ4fT7rdAqxWq+VMAA8gzcKD6EgADiJVgU6n40wgFApRFTAMw5kAy7JUBbrdrjnOLRAMBqkK9Ho9ZwLWJUSrBoOBMwGvaqZAtVr1VCCRSNgLVCoVTwXgJbcUWAr8EwG3YcQqK5BgJphLQFGUHN6CCEogbgobI3gTIqIo2gvUarVcIBAgCK1IhgL9ft8kHo/bChyVSiUZ0hCPAlZzGpkQm0MsU1OplASPriYF8M2zAuxKknQA0XwfEtGq2+X/uQ2apukQyW9lWb6BqXvgAxhYApg+1gEB2AI2vudoFjZ8AZ6Ad+AVMCZXgCXef65hUjUmV2BhtXCBT0IuJjAHUCe+AAAAAElFTkSuQmCC');



						$('#btnDiv_GET_ORDERS_DETAILS #TxtDuracao').val(data.AJ)
						$('#btnDiv_GET_ORDERS_DETAILS #TxtDuracaoUnidadeTempo').val(data.AK)
						/*INICIO - Francisco Silva: 14/12/2018 */
						$('#btnDiv_GET_ORDERS_DETAILS #txtEndRua').val(data.BL);
						$('#btnDiv_GET_ORDERS_DETAILS #txtEndNumero').val(data.BM);
						$('#btnDiv_GET_ORDERS_DETAILS #txtEndBairro').val(data.BN);
						$('#btnDiv_GET_ORDERS_DETAILS #txtEndCEP').val(data.BO);
						$('#btnDiv_GET_ORDERS_DETAILS #txtEndCidade').val(data.BP);
						//$('#btnDiv_GET_ORDERS_DETAILS #txtEndPaisSigla').val(data.BQ);
						$('#btnDiv_GET_ORDERS_DETAILS #txtEndPaisDescricao').val(data.BR);
						//$('#btnDiv_GET_ORDERS_DETAILS #txtEndRegiaoSigla').val(data.BS);
						$('#btnDiv_GET_ORDERS_DETAILS #txtEndRegiaoDescricao').val(data.BT);

						// $('#btnDiv_GET_ORDERS_DETAILS #TxtEndRua').text(data.BL);
						// $('#btnDiv_GET_ORDERS_DETAILS #TxtEndNumero').text(data.BM);
						// $('#btnDiv_GET_ORDERS_DETAILS #TxtEndBairro').text(data.BN);
						// $('#btnDiv_GET_ORDERS_DETAILS #TxtEndCEP').text(data.BO);
						// $('#btnDiv_GET_ORDERS_DETAILS #TxtEndCidade').text(data.BP);
						// $('#btnDiv_GET_ORDERS_DETAILS #TxtEndPaisSigla').text(data.BQ);
						// $('#btnDiv_GET_ORDERS_DETAILS #TxtEndPaisDescricao').text(data.BR);
						// $('#btnDiv_GET_ORDERS_DETAILS #TxtEndRegiaoSigla').text(data.BS);
						// $('#btnDiv_GET_ORDERS_DETAILS #TxtEndRegiaoDescricao').text(data.BT);
						/*FIM - Francisco Silva: 14/12/2018 */
					}
				}

				//------------------- END Form Field -----------------------------------

				// Paint Grid -----------------------------------------------------------
				//if(!dataOnly)
				{
					$('#divGET_ORDERS').hide();
					$('#btnDiv_GET_ORDERS').hide();
					$('#modalLocalInstalacao').hide();
					$('#modalEquipamento').hide();
					$('#modalOperacaoDetail').hide();
					$('#modalMaterialDetail').hide();
					
					
					$('#btnDiv_GET_ORDERS_DETAILS').show();
					$('#divDisplayOrderDetails').show();
					$('#divDisplayOrderDetails').show();


					$("#divDisplayOrderDetails #divDadosOrdem").show();
					$("#divDisplayOrderDetails #divEquipamento").show();
					$("#divDisplayOrderDetails #divNotasAvarias").show();

					$("#divDisplayOrderDetails #divOperacoes").hide();
					$("#divDisplayOrderDetails #divMateriais").hide();
					$("#divDisplayOrderDetails #divAnexo").hide();
					$("#divDisplayOrderDetails #divEndereco").hide();
					$('#divDisplayOrderDetails #panelTipoAtividadeEdit').hide();
					$('#divDisplayOrderDetails #panelGrpPlanejEdit').hide();
					$('#divDisplayOrderDetails #panelCentroTrabalhoEdit').hide();
					$('#divDisplayOrderDetails #panelLocalInstalacao').hide();
					$('#divDisplayOrderDetails #panelCodEquipamento').hide();
					$('#divDisplayOrderDetails #btnSave').hide();
					$('#divDisplayOrderDetails #btnEdit').show();
					$('#divDisplayOrderDetails #btnCancel').hide();
					$('#divDisplayOrderDetails #divMateriais #btnEdit').hide();
					$('#divDisplayOrderDetails #divMateriais #btnDelete').hide();
				}
				var sapReturnTable = _SAPTable;	
				var columns = [];
				var columnNames = []

				//alert(JSON.stringify(jsonRecordWithResult.FormID));

				if ($("#" + jsonRecordWithResult.FormID + " table[itable='tblDataDE']").has('tbody')) {
					var arrDataColumn = $("#" + jsonRecordWithResult.FormID + " table[itable='tblDataDE'] > thead > tr > th")
					for (i = 0; i < arrDataColumn.length; i++) {
						columnNames.push($(arrDataColumn[i]).html());
						columns.push($(arrDataColumn[i]).attr("imatno"));
					}
				} else {
					$("#" + jsonRecordWithResult.FormID + " table[itable='tblDataDE']").append("<tbody></tbody>");
				}

				//Configure the jqGrid
				var strJqGrid = '<div id="divGrid" class="divGrid">' +
					'<table id="tableGrid">' +
					'<tr><td/></tr>' +
					'</table>' +
					'<div id="divPager">' +
					'</div>' +
					'</div>';

				$("#" + jsonRecordWithResult.FormID + " table[itable='tblDataDE']").hide();

				
				$("#divGrid").remove();
				//ActiveGrid(jsonRecordWithResult.FormID);
				$("#" + jsonRecordWithResult.FormID + " .datacontent").append(strJqGrid);
				//$("#" + jsonRecordWithResult.FormID).append(strJqGrid);

				var arrTableColumnLabel = [];
				var arrTableColumnData = [];

				for (var j = 0; j < columns.length; j++) {

					arrTableColumnLabel.push(columnNames[j]);
					arrTableColumnData.push({
						"name": columns[j],
						"align": "center",
						"index": columns[j],
						"searchoptions": {
							"sopt": ['cn', 'nc', 'bw', 'bn', 'ew', 'en']
						}
					});
				}

				
				//Check for the Date column
				for (var i = 0; i < sapReturnTable.length; i++) {
					tempArr = {};
					for (key in sapReturnTable[i]) {
						var value = sapReturnTable[i][key];
						if (value) {
							if (CheckingDate(value.toString())) {
								CommonScripts.GetDateInDeviceFormat(new Date(value), 0, sapReturnTable[i], key);
							}
						}
					}
				}
				if (jsonRecordWithResult.ResultObject.IsAttachment == 0) {
					var jsonJQGridValues = {
						ColumnLabel: arrTableColumnLabel,
						ColumnData: arrTableColumnData,
					}


					setTimeout(function () {
						CommonScripts.ShowLoader("Loading data...");
						CommonScripts.BindJQGrid(sapReturnTable, jsonJQGridValues, false, function () {
							CommonScripts.HideLoader();
							$("#divGrid .ui-btn").addClass("ui-alt-icon");
							if (DeviceType == "Tablet") {
								var setHeight = $(window).height() - 400;
								$("#gview_tableGrid").css("height", setHeight);
								var setTableHeight = setHeight - 80;
								$("#divGrid div[data-role='content']").css("height", setTableHeight);
								if (BLProcessFile.SetHeightProcessFile) {
									BLProcessFile.SetHeightProcessFile();
								}
							}

							cbGridLoadComplete(jsonRecordWithResult);

							result = jsonRecordWithResult.ResultObject;
							//alert("Success: " + JSON.stringify(result));
							//$('[itag="btnExecute_GET_ORDERS_DETAILS"]').attr('message', 'testeasd');
							//$('[itag="btnExecute_GET_ORDERS_DETAILS"]').show();





							$('[itag="btnExecute_GET_ORDERS_DETAILS"]').attr('message', '');
							var indexText = [];
							for (let i = 0; i < result.ReturnTableCollection[3][1].length; i++) {
								const element = result.ReturnTableCollection[3][1][i];
								if (element[3] == "0000000000") {

									var textmessage = "";
									for (let i = element[4] - 1; i < element[5] ; i++) {

										const lineMessage = result.ReturnTableCollection[4][1][i];
										textmessage += lineMessage[1] + "<br/>"
									}


									if (element[2] == "" && element[1] == "" && element[0] != "") {
										$('[itag="btnExecute_GET_ORDERS_DETAILS"]').attr('message', textmessage);
									} else if (element[1] != "" && element[0] != "") {
										//debugger;

										var tableTemp = $('#divDisplayOrderDetails #tableGrid tr');
										tableTemp.each(function () {
											const columns = $(this).find('td');
											// alert("columns[0].innerText.trim(): '" + columns[0].innerText.trim() + "'");
											// alert("element[1]: '" + element[1] + "'");
											// alert("columns[1].innerText.trim(): '" + columns[1].innerText.trim() + "'");
											// alert("element[2]: '" + element[2] + "'");
											if (columns[0].innerText.trim() == element[1] && columns[1].innerText.trim() == element[2]) {
												//debugger;

												var colImg = $(this).find('td').get(7);
												$(colImg).append("<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAE+ElEQVR42q1Wa1CUVRh+zrdXdhEQViBtNTEcCZDFRDPNG+I9UWt0wqkhL2VokkpiQyqKlxSaGvOCGYiUlxlHS8fJaUZl8sKUoyiy7MAyEKINXpdiuOwuu/v2fqsWMq3DZOeb5/txvvc8z3mf95x3V6D7Q8+Yy5jKiGEEMtoZVsYZxneMxq6LRDfJF6hU6s1Jk6eETp02neJN8SIkJJgcDoeoqbHi7OnTdPjQAYfNZvuSY9cz7N0VUDD2xsbFv5u9cQsGx0RDrVJRc0uLaG2zk0qlFMFBAVBIErXy3OZNOfi2eP+vvGYa40F3BHaNHD1u8da8L9ArpCcsNfU4UVqJ63fdcJIS8LjQV9eBSSYjxgw3oYdeh+KiAmSvW3uJ146VM3mawIwXIiJ/yC/Yj/BQgzh57jKOVbkxfcxQmhIXJgz+amqxu0RJ1QMcOltO/T31Im32WI4NoU3r1wrO5DPm+MSXgDxfuTFvR9TkiYl0vswiCislvJ00GHqtivir/JA3jt9ul4cOnq8VxuZrSJ87gXQapZgw9jU71yTCl8CoiMhB577aUyh7jhVHzRgQGw8/Ldui4CVSp2UkKxC75cEvV6uRNtCO0cPjUVyQj907d2T6Elg3/Y23sj9avgIVtQ2UWekv/IP00OnV0GqVXFxJ8HiYgVsW8BA6PKK52YHY+5doxaxRovFmHd5JmfuTL4ED76WvTpk5MxknK27RrqZQAa0K0HAGKomglIRSIZGSjZKYW2KL4HQLsrvQ/04FrRn3ojAE6pA4esRvvgS+T8tYkzwxaQKOW+9jn6MP4MfkskVqPrlKifcuHtnjAe+ez4vLi8jbFnyaEAZjuAHjRw2740tgX8qCpakzkpNx5V4b5TqeF9CpHopoFAQVF0Li8srlZu/hYJ/4RKGtAy/fukbL4sKFXqPAm69PqvYlsHLEuMm5ixYv4aJKWPwgBM5g7gyyiDcLyTvvzcDplgUgk6PFiXn1F5AU1Q+3G2qxeuWyY74EooINYZWZG/JERL8+tOdGszjTNxphwVrOgo+phjNQcJE9nEEHk7e7qOkPhzBYLViu/pP4UorDRXtw6uTx+U+7aKeTUxYmjk9MorDQEJFl4243JBYRgdonBTiDplYnlZvrxKIGM4xB/qQkl0h/P/VuR4fT5z34mPFh1OAhxjmpaRTgrxPhYQYUtbrRGBdLA/oYRADXwu7yiHpbC9pLL9PspjsiUKmE3k9LO/NyREX51YXMUfBvAtv6RkRmLFqyHEPiYhEQEIAfS0qh02oR3isYDo8bdTo/NGk1ULfb8dw9G3qq1WhpbeMYDY4Uf43S8yVFzDP/cUvoQj4wIyNrA0YmmIQ/N6+Si5do26Zs8ZJpGGLih0KlVHovmMQdlIdgQKNWU9O9RnH0QCHV19Xky9kz3F0FtvLOV2Vk5eDVBBNxZxRl5mr8fKGU8nPX3eTvVi584sAYE3ob+wm9vgd53C5hu38b1eZyqqupquKY1YwTnXcsOtvyiNzbdq8w+dXrFhz8Zjt+v1G7imPyGIPwsNdHM4Lw5C/aRbkzdfVbFshiW3L+scUPZWYrlV23CCYnJpeJV+E/Dlmg4fPdxcYxI4f9bUtZhYUO7t0umDz3WcgfCxz9YGn6LLlzXjFbO9sik2c+C/ljAfnfwak581Jf6T0gWhzZn//MtnQVwCORQkYCQz5mm/8Pcnn8BdofAzKB5Z7nAAAAAElFTkSuQmCC' />");
												$(this).find('td img').attr('message', textmessage);
												$(this).find('td img').click(function () {
													CommonScripts.ShowLoader("Loading...");

													$('#lblGetText').html(
														$(this).attr('message')
													);

													$('#divDisplayOrderDetails').hide();
													showPanel($('#divDisplayGetText'));

													CommonScripts.HideLoader();
													e.preventDefault();
												});
											}
										});

										console.log(JSON.stringify(tableTemp));
									}
								}
							}



							



							CommonScripts.HideLoader();
						}, cbOnSortCol);
					}, 100);

				}
			
				DataBinding($('#divDisplayOrderDetails #divAnexo table[itable="tblDataAnexos"]'), result[0], true, true);
				$('#divDisplayOrders').hide();

				//$('#divDisplayOrderDetails input[type="text"]').attr('disabled', 'disabled');
				

				// setTimeout(function () {
				// 	call_GET_GET_NOTIFICATION(OrderNumber);
				// }, 200);
			}
			catch(e){
				alert(e.stack);
			}

		}


	} catch (e) {
		alert(JSON.stringify(e));
	}

}

function modalOperacaoDetailBtnEdit(){
	var myGrid = $('#tableGrid'),
		selRowId = myGrid.jqGrid('getGridParam', 'selrow'),
		txtOper = myGrid.jqGrid('getCell', selRowId, 'Nº operação'),
		txtSubOper = myGrid.jqGrid('getCell', selRowId, 'Suboperação'),
		ddlCentroTrabalho = myGrid.jqGrid('getCell', selRowId, 'Centro de trabalho'),
		txtCentro = myGrid.jqGrid('getCell', selRowId, 'Centro de trabalho'),
		txtTxtBreveOperacao = myGrid.jqGrid('getCell', selRowId, 'Txt.breve operação'),
		txtEquipamento = myGrid.jqGrid('getCell', selRowId, 'Nº equipamento'),
		txtLocalInstalacao = myGrid.jqGrid('getCell', selRowId, 'Local de instalação');

	if(txtOper == undefined || txtOper == ""){
		alert("Favor selecionar uma operação.");
		return;
	}

	$('#modalOperacaoDetail #txtOper').val(txtOper);
	$('#modalOperacaoDetail #txtSubOper').val(txtSubOper);
	$('#modalOperacaoDetail #hdfCentroTrabalho').val(ddlCentroTrabalho);
	$('#modalOperacaoDetail #txtCentro').val(txtCentro);
	$('#modalOperacaoDetail #txtTxtBreveOperacao').val(txtTxtBreveOperacao);
	$('#modalOperacaoDetail #txtEquipamento').val(txtEquipamento);
	$('#modalOperacaoDetail #txtLocalInstalacao').val(txtLocalInstalacao);
	$('#modalOperacaoDetail').show();
	$('#divDisplayOrderDetails').hide();

	call_MATCHCODE_IW32();

}

function modalOperacaoDetailBtnSave(){
	
	
		try {
			var IsTestRun = 0,
				IsSave = 0,
				IsDirectPost = 1,
				IsReview = 0,
				IsReset = 0;
			var strAction = "";
			var PostType = "SAP";
	
			switch (PostType) {
				case "SAP":
					IsDirectPost = 1;
					strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
					break;
			}
	
			var UserNote = "";
			var FileType = "BAPI/RFM";
	
			if (PostType == "reset") {
				BLProcessFile.ResetForm();
				return;
			}
	
			var jsonInformation = {};
			jsonInformation.PostType = PostType;
			jsonInformation.ProcessType = FileType;
			jsonInformation.FormID = "Form20181205110521276";
			jsonInformation.Action = strAction;
	
			jsonInformation.IsTestRun = IsTestRun;
			jsonInformation.IsReviewData = IsReview; //IsReviewData
			jsonInformation.IsSave = IsSave;
			jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost
	
			jsonInformation.UserNote = UserNote;
	
			jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
			jsonInformation.DataID = CommonScripts.GetGUID();
	
			jsonInformation.AdditionalData = [];
			jsonInformation.AutoShowresult = 0;
			jsonInformation.IsDoNotSaveInSentbox = 0;
			jsonInformation.IsUpdate = 0;
			jsonInformation.DoNotDisableForm = 1;
			//jsonInformation.MYSAPSSO2 = 0;
			var headerTemp = [];
			var headerHeader = [];
			var headerItem = []
			headerTemp.push(headerHeader);
			headerTemp.push(headerItem);
	
			var HeaderData = headerTemp;
	
			var footerIndice0 = [];
			var footerIndice1 = [];
			var footerCampos = ["C", "D", "E", "F", "Z", "AB", "AD", "AL", "AF", "AJ", "AH", "AA", "AC", "AN", "AE", "AM", "AG", "AK", "AI"];

			var txtNOrdem = "000000000000" + $('#Form20181016150505334 #txtNrOrder').val();
			var txtOper = "    " + $('#modalOperacaoDetail #txtOper').val();
			var txtSubOper = "    " + $('#modalOperacaoDetail #txtSubOper').val();
			var ddlCentroTrabalho2 = $('#modalOperacaoDetail #ddlCentroTrabalho').val();
			var txtCentro = $('#modalOperacaoDetail #txtCentro').val();
			var txtTxtBreveOperacao = $('#modalOperacaoDetail #txtTxtBreveOperacao').val();
			var txtEquipamento = $('#modalOperacaoDetail #txtEquipamento').val();
			var txtLocalInstalacao = $('#modalOperacaoDetail #txtLocalInstalacao').val();
			///debugger;


			txtNOrdem = txtNOrdem.substring(txtNOrdem.length - 12, txtNOrdem.length);
			txtOper = txtOper.substring(txtOper.length - 4, txtOper.length);
			txtSubOper = txtSubOper.substring(txtSubOper.length - 4, txtSubOper.length);

			var OBJECTKEY = txtNOrdem;
			OBJECTKEY += txtOper;
			OBJECTKEY += txtSubOper;
			var footerValores = ["000001", "OPERATION", "CHANGE", OBJECTKEY, txtOper, txtSubOper, ddlCentroTrabalho2, txtCentro, txtTxtBreveOperacao, txtEquipamento, txtLocalInstalacao, "X", "X", "X", "X", "X", "X", "X", "X"];
			var footerSave = ["000001", "", "SAVE", OBJECTKEY, "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

			footerIndice1.push(footerCampos);
			footerIndice1.push(footerValores);
			footerIndice1.push(footerSave);

			footerIndice0.push(footerIndice1)

			var FooterData = footerIndice0;
			//alert("FooterData: " + JSON.stringify(FooterData));
			/* Generate the object to be save or to send to IWMS  */
			jsonInformation.HeaderData = JSON.stringify(HeaderData);
			jsonInformation.LoopData = JSON.stringify(FooterData);
	
			BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);
	
			function ProcessOperationError(jsonError) {
				CommonScripts.HideLoader();
	
				alert("Error: " + JSON.stringify(jsonError));
			}
	
	
			function ProcessOperationSuccess(jsonRecordWithResult) {
				//alert(JSON.stringify(jsonRecordWithResult.ResultObject));
	
				var result = jsonRecordWithResult.ResultObject.ReturnTableCollection;
	
				var message = "";
				var contemErro = false;
				var contemMessage = false;
	
				result[0][1].forEach(item => {
					message += item[0] + "\t\t" + item[1] + "\r\n";
					if(item[0] == "E")
						contemErro = true;
					contemMessage = true;
				});
	
				message += "\r\n\r\n" + result[0][0][0];
	
				if(contemMessage)
					alert(message);
				else
					alert("Processado com sucesso.");
				
				if(!contemErro){
					var oNumber = $('#Form20181016150505334 #txtNrOrder').val();
					call_GET_ORDER_DETAILS(oNumber, true);
					$('#modalOperacaoDetail').hide();
					$('#divDisplayOrderDetails').show();
				}
			}
	
		} catch (e) {
			alert(JSON.stringify(e));
		}
}

/* Added for call process file _GET_NOTIFICATION by Hiren Taior on 04-10-2018 */
function call_GET_GET_NOTIFICATION(OrderNumber) {
	try {
		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181003230721394";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		var column = ['A'];
		var row = [OrderNumber];
		var temp = [];
		temp.push(column);
		temp.push(row);

		var arrHeader = temp;
		var arrFooter = "";

		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();
			alert(JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) {

			//alert("Success");

			//Get Value for Form Field ---------------------------------------------

			var resultSAP_TBL = jsonRecordWithResult.ResultObject.SapReturnTable;
			//alert(JSON.stringify(resultSAP_TBL));
			var data;
			for (key in resultSAP_TBL) {
				if (resultSAP_TBL.hasOwnProperty(key)) {
					var value = JSON.stringify(resultSAP_TBL[key]);
					data = JSON.parse(value);
					//alert(JSON.stringify(data));
					document.getElementById("txtCódigoParada").value = data.C;
					document.getElementById("txtInícioDaAvariaData").value = data.D;
					document.getElementById("txtDataFinAvaria").value = data.E;
					document.getElementById("txtHoraIniAvaria").value = data.F;
					document.getElementById("txtHoraFinAvaria").value = data.G;
					document.getElementById("txtDuraçãodaParada").value = data.H;
					document.getElementById("txtNotificador").value = data.I;

				}
			}

			setTimeout(function () {
				call_GetText(OrderNumber);
			}, 200);
			//------------------- END Form Field -----------------------------------
		}
	} catch (e) {
		alert(JSON.stringify(e));
	}

}

/* Added for call process file _Check_Order by Ali Hassan on 2018-10-17 */
function call_Check_Order(OrderNumber) {
	try {
		$('#divDisplayOrderDetails').hide();
		$('#divDisplayOrders').hide();
		$('#divGET_ORDERS').hide();

		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181016150505334";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		$('#Form20181016150505334 #txtNrOrder').val(OrderNumber);

		var column = ['A'];
		var row = [OrderNumber];
		var temp = [];
		temp.push(column);
		temp.push(row);

		//alert(JSON.stringify(temp));
		var arrHeader = temp;
		var arrFooter = "";

		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();
			alert(JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) {
			CommonScripts.HideLoader();
			//alert("Success");

			//Get Value for Form Field ---------------------------------------------




			//------------------- END Form Field -----------------------------------

			//------------------- Grid ---------------------------------------------
			{
				var result = jsonRecordWithResult.ResultObject.ReturnTableCollection;

				if (result[0][1].length == 0) {
					var oNumber = $('#Form20181016150505334 #txtNrOrder').val();
					call_GET_ORDER_DETAILS(oNumber);
					return
				}

				var _SAPTable = convertToSAPTable(result, 0);
				var sapReturnTable = _SAPTable;
				var columns = [];
				var columnNames = []

				//alert(JSON.stringify(jsonRecordWithResult.FormID));

				if ($("#" + jsonRecordWithResult.FormID + " table[itable='tblDataDE']").has('tbody')) {
					var arrDataColumn = $("#" + jsonRecordWithResult.FormID + " table[itable='tblDataDE'] > thead > tr > th")
					for (i = 0; i < arrDataColumn.length; i++) {
						columnNames.push($(arrDataColumn[i]).html());
						columns.push($(arrDataColumn[i]).attr("imatno"));
					}
				} else {
					$("#" + jsonRecordWithResult.FormID + " table[itable='tblDataDE']").append("<tbody></tbody>");
				}

				//Configure the jqGrid
				var strJqGrid = '<div id="divGrid" class="divGrid" style="width:100% !important; min-width: 100% !important">' +
					'<table id="tableGrid" style="width:100% !important; min-width: 100% !important">' +
					'<tr><td/></tr>' +
					'</table>' +
					'<div id="divPager">' +
					'</div>' +
					'</div>';

				$("#" + jsonRecordWithResult.FormID + " table[itable='tblDataDE']").hide();
				$("#divGrid").remove();
				//ActiveGrid(jsonRecordWithResult.FormID);
				$("#" + jsonRecordWithResult.FormID + " .datacontent").append(strJqGrid);
				// $("#" + jsonRecordWithResult.FormID).append(strJqGrid);

				var arrTableColumnLabel = [];
				var arrTableColumnData = [];

				for (var j = 0; j < columns.length; j++) {

					arrTableColumnLabel.push(columnNames[j]);
					arrTableColumnData.push({
						"name": columns[j],
						"align": "center",
						"index": columns[j],
						"width": "400px",
						"searchoptions": {
							"sopt": ['cn', 'nc', 'bw', 'bn', 'ew', 'en']
						}
					});
				}

				//Check for the Date column
				for (var i = 0; i < sapReturnTable.length; i++) {
					tempArr = {};
					for (key in sapReturnTable[i]) {
						var value = sapReturnTable[i][key];
						if (value) {
							if (CheckingDate(value.toString())) {
								CommonScripts.GetDateInDeviceFormat(new Date(value), 0, sapReturnTable[i], key);
							}
						}
					}
				}
				if (jsonRecordWithResult.ResultObject.IsAttachment == 0) {
					var jsonJQGridValues = {
						ColumnLabel: arrTableColumnLabel,
						ColumnData: arrTableColumnData,
					}

					setTimeout(function () {
						CommonScripts.ShowLoader("Loading data...");
						CommonScripts.BindJQGrid(sapReturnTable, jsonJQGridValues, false, function () {
							CommonScripts.HideLoader();
							$("#divGrid .ui-btn").addClass("ui-alt-icon");
							if (DeviceType == "Tablet") {
								var setHeight = $(window).height() - 400;
								$("#gview_tableGrid").css("height", setHeight);
								var setTableHeight = setHeight - 80;
								$("#divGrid div[data-role='content']").css("height", setTableHeight);

								if (BLProcessFile.SetHeightProcessFile) {
									BLProcessFile.SetHeightProcessFile();
								}
							}



							cbGridLoadComplete(jsonRecordWithResult);
						}, cbOnSortCol);
					}, 100);

				}


				$('#divDisplaySecurityFormCheck').show();

			}
			// -------------------------- End Grid ------------------------------------------
		}
	} catch (e) {
		alert(JSON.stringify(e));
	}
}

/* Added for call process file _Check_Order by Ali Hassan on 2018-10-17 */
function call_GetWarranty(nEquip) {
	//alert(nEquip);
	try {
		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181016100404381";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		var column = ['A'];
		var row = [nEquip];
		var temp = [];
		temp.push(column);
		temp.push(row);

		//alert(JSON.stringify(temp));
		var arrHeader = temp;
		var arrFooter = "";

		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();
			alert(JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) {
			CommonScripts.HideLoader();

			//------------------- END Form Field -----------------------------------

			//------------------- Grid ---------------------------------------------
			var result = jsonRecordWithResult.ResultObject.ReturnTableCollection;
			//alert(JSON.stringify(result));
			var tableHeaders = result[0][0];
			var tableDatas = result[0][1];

			var columnsOrdem = [];
			var arrDataColumn = $('#' + jsonRecordWithResult.FormID + ' table[itable="tblDataDE"] thead tr th');

			for (i = 0; i < arrDataColumn.length; i++) {
				columnsOrdem.push(tableHeaders.indexOf($(arrDataColumn[i]).attr("imatno")));
			}

			var tableBody = $('#' + jsonRecordWithResult.FormID + ' table[itable="tblDataDE"] tbody');
			$(tableBody).html("");

			for (let l = 0; l < tableDatas.length; l++) {
				var line = tableDatas[l];
				var tableLines = "<tr>";
				for (let c = 0; c < arrDataColumn.length; c++) {
					var column = line[columnsOrdem[c]];
					tableLines += "<td>" + column + "</td>";
				}
				tableLines += "</tr>";
				$(tableBody).append(tableLines);
			}

			$('#divDisplaySecurityFormCheck').hide();
			$('#divDisplayGet_Warranty').show();
			// -------------------------- End Grid ---------------------------------
		}
	} catch (e) {
		alert(JSON.stringify(e));
	}
}

/* Added for call process file _Check_Order by Ali Hassan on 2018-10-31 */
function call_GetText(nOrdem) {
	//alert(nEquip);
	try {
		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181024111116308";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		var column = ['A'];
		var row = [nOrdem];
		var temp = [];
		temp.push(column);
		temp.push(row);


		var arrHeader = temp;
		var arrFooter = "";

		//alert("Header: " + JSON.stringify(arrHeader));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) {


			//------------------- END Form Field -----------------------------------

			//------------------- Grid ---------------------------------------------
			var result = jsonRecordWithResult.ResultObject;
			//alert("Success: " + JSON.stringify(result));
			$('[itag="btnExecute_GET_ORDERS_DETAILS"]').attr('message', 'testeasd');
			//$('[itag="btnExecute_GET_ORDERS_DETAILS"]').show();





			$('[itag="btnExecute_GET_ORDERS_DETAILS"]').attr('message', '');
			var indexText = [];
			for (let i = 0; i < result.ReturnTableCollection[0][1].length; i++) {
				const element = result.ReturnTableCollection[0][1][i];
				if (element[3] == "0000000000") {
					var textmessage = "";
					for (let i = element[9] - 1; i < element[10] - 1; i++) {
						const lineMessage = result.ReturnTableCollection[1][1][i];
						textmessage += lineMessage[1] + "<br/>"
					}


					if (element[2] == "" && element[1] == "" && element[0] != "") {
						$('[itag="btnExecute_GET_ORDERS_DETAILS"]').attr('message', textmessage);
					} else if (element[1] != "" && element[0] != "") {
						//debugger;
						var tableTemp = $('#divDisplayOrderDetails #tableGrid tr');
						tableTemp.each(function () {
							const columns = $(this).find('td');

							if (columns[0].innerText.trim() == element[1] && columns[1].innerText.trim() == element[2]) {
								//debugger;
								var colImg = $(this).find('td').get(7);
								$(colImg).append("<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAE+ElEQVR42q1Wa1CUVRh+zrdXdhEQViBtNTEcCZDFRDPNG+I9UWt0wqkhL2VokkpiQyqKlxSaGvOCGYiUlxlHS8fJaUZl8sKUoyiy7MAyEKINXpdiuOwuu/v2fqsWMq3DZOeb5/txvvc8z3mf95x3V6D7Q8+Yy5jKiGEEMtoZVsYZxneMxq6LRDfJF6hU6s1Jk6eETp02neJN8SIkJJgcDoeoqbHi7OnTdPjQAYfNZvuSY9cz7N0VUDD2xsbFv5u9cQsGx0RDrVJRc0uLaG2zk0qlFMFBAVBIErXy3OZNOfi2eP+vvGYa40F3BHaNHD1u8da8L9ArpCcsNfU4UVqJ63fdcJIS8LjQV9eBSSYjxgw3oYdeh+KiAmSvW3uJ146VM3mawIwXIiJ/yC/Yj/BQgzh57jKOVbkxfcxQmhIXJgz+amqxu0RJ1QMcOltO/T31Im32WI4NoU3r1wrO5DPm+MSXgDxfuTFvR9TkiYl0vswiCislvJ00GHqtivir/JA3jt9ul4cOnq8VxuZrSJ87gXQapZgw9jU71yTCl8CoiMhB577aUyh7jhVHzRgQGw8/Ldui4CVSp2UkKxC75cEvV6uRNtCO0cPjUVyQj907d2T6Elg3/Y23sj9avgIVtQ2UWekv/IP00OnV0GqVXFxJ8HiYgVsW8BA6PKK52YHY+5doxaxRovFmHd5JmfuTL4ED76WvTpk5MxknK27RrqZQAa0K0HAGKomglIRSIZGSjZKYW2KL4HQLsrvQ/04FrRn3ojAE6pA4esRvvgS+T8tYkzwxaQKOW+9jn6MP4MfkskVqPrlKifcuHtnjAe+ez4vLi8jbFnyaEAZjuAHjRw2740tgX8qCpakzkpNx5V4b5TqeF9CpHopoFAQVF0Li8srlZu/hYJ/4RKGtAy/fukbL4sKFXqPAm69PqvYlsHLEuMm5ixYv4aJKWPwgBM5g7gyyiDcLyTvvzcDplgUgk6PFiXn1F5AU1Q+3G2qxeuWyY74EooINYZWZG/JERL8+tOdGszjTNxphwVrOgo+phjNQcJE9nEEHk7e7qOkPhzBYLViu/pP4UorDRXtw6uTx+U+7aKeTUxYmjk9MorDQEJFl4243JBYRgdonBTiDplYnlZvrxKIGM4xB/qQkl0h/P/VuR4fT5z34mPFh1OAhxjmpaRTgrxPhYQYUtbrRGBdLA/oYRADXwu7yiHpbC9pLL9PspjsiUKmE3k9LO/NyREX51YXMUfBvAtv6RkRmLFqyHEPiYhEQEIAfS0qh02oR3isYDo8bdTo/NGk1ULfb8dw9G3qq1WhpbeMYDY4Uf43S8yVFzDP/cUvoQj4wIyNrA0YmmIQ/N6+Si5do26Zs8ZJpGGLih0KlVHovmMQdlIdgQKNWU9O9RnH0QCHV19Xky9kz3F0FtvLOV2Vk5eDVBBNxZxRl5mr8fKGU8nPX3eTvVi584sAYE3ob+wm9vgd53C5hu38b1eZyqqupquKY1YwTnXcsOtvyiNzbdq8w+dXrFhz8Zjt+v1G7imPyGIPwsNdHM4Lw5C/aRbkzdfVbFshiW3L+scUPZWYrlV23CCYnJpeJV+E/Dlmg4fPdxcYxI4f9bUtZhYUO7t0umDz3WcgfCxz9YGn6LLlzXjFbO9sik2c+C/ljAfnfwak581Jf6T0gWhzZn//MtnQVwCORQkYCQz5mm/8Pcnn8BdofAzKB5Z7nAAAAAElFTkSuQmCC' />");
								$(this).find('td img').attr('message', textmessage);
								$(this).find('td img').click(function () {
									CommonScripts.ShowLoader("Loading...");

									$('#lblGetText').html(
										$(this).attr('message')
									);

									$('#divDisplayOrderDetails').hide();
									showPanel($('#divDisplayGetText'));

									CommonScripts.HideLoader();
									e.preventDefault();
								});
							}
						});

						console.log(JSON.stringify(tableTemp));
					}
				}
			}
			CommonScripts.HideLoader();
		}
	} catch (e) {
		alert(JSON.stringify(e));
	}
}

function showDescritiveText(e) {
	$('#divLongMessage div[itag="tblDataDE"]').html("");
	$('#divLongMessage div[itag="tblDataDE"]').append(e);
	$('#myModalLongMessage').modal('show');
}

function call_Nota(NumeroNota) {
	try {

		$('#divDisplayNotif #txtNotifNumber').val(NumeroNota);


		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181026182217193";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		var column = ['A'];
		var row = [NumeroNota];
		var temp = [];
		temp.push(column);
		temp.push(row);


		var arrHeader = temp;
		var arrFooter = "";

		//alert("Header: " + JSON.stringify(arrHeader));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) {


			//------------------- Grid ---------------------------------------------
			var result = jsonRecordWithResult.ResultObject;


			var tempTextLong = "";

			for (let i = 0; i < result.ReturnTableCollection[
					3][1].length; i++) {
				const item = result.ReturnTableCollection[
					3][1][i];

				tempTextLong += item + "</br>";
			}

			$(
				"#divDisplayNotifDetail #txtTextoLongNota"
			).attr('message', tempTextLong);


			$("#divDisplayNotifDetail #txtNota")
				.val(result.SapReturnTable[0].C);
			$(
				"#divDisplayNotifDetail #txtTextoBreveNota"
			).val(result.SapReturnTable[0].D);
			$(
				"#divDisplayNotifDetail #txtLocInst"
			).val(result.SapReturnTable[0].G);
			$(
				"#divDisplayNotifDetail #txtLocInstDesc"
			).val(result.SapReturnTable[0].H);
			$(
				"#divDisplayNotifDetail #txtEquip"
			).val(result.SapReturnTable[0].I);
			$(
				"#divDisplayNotifDetail #txtEquipDesc"
			).val(result.SapReturnTable[0].J);
			$(
				"#divDisplayNotifDetail #txtInicioAvariaData"
			).val(InvertDDAndMM(result.SapReturnTable[0].L));
			$(
				"#divDisplayNotifDetail #txtInicioAvariaHora"
			).val(result.SapReturnTable[0].M);
			$(
				"#divDisplayNotifDetail #txtFimAvariaData"
			).val(InvertDDAndMM(result.SapReturnTable[0].N));
			$(
				"#divDisplayNotifDetail #txtFimAvariaHora"
			).val(result.SapReturnTable[0].O);
			$(
				'#divDisplayNotifDetail #cbxParada'
			).attr('checked', result.SapReturnTable[
				0].K == "X" ? true :
				false)
			$(
				"#divDisplayNotifDetail #TxtDuracao"
			).val(result.SapReturnTable[0].P);
			$(
				"#divDisplayNotifDetail #TxtDuracaoUnidadeTempo"
			).val(result.SapReturnTable[0].Q);
			$('#accordionNotifDetail').show();

			$('#divDisplayNotifCausas').hide();
			$('#divDisplayNotifAtividade').hide();
			$('#divDisplayNotifAnexo').hide();
			$('#divDisplayNotifItens').hide();


			DataBinding($(
				'#divDisplayNotifItens #tbTeste'
			), result.ReturnTableCollection[
				2], true, true);

			

			$('#divDisplayNotifItens #tbTeste tbody tr').each(function(){
				if($(this).find('td').eq(8).text() == "X")
					$(this).hide();

				$(this).find('td').eq(7).css('cursor', 'pointer');
				$(this).find('td').eq(7).html('<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABxElEQVR42u2VTUREQQDHd7fSJVpKLElJSurUsUsfdOgQu3bTdigREd0iolNEdIuISB0q7erj0iH6uHTsVFKSklhSbHRJH9tv7Ds8Wd7M7LxdssvPn9n35vef2X1vvJ48f7yFAv+6wOntWBNx19Gw/JnzAshHiSTyeE53AHEpsQiVyENO1xstgLyGiEEdtFDgOWcFkHcRm1AF/chjMvdlXQCxmGMS5qAYtpBHZe/PqgDyMmIVwtZQAlop8Op6AeSNxA40W0MpCCLfV5lHqwDyoLXyctvwOvJh1bmUCiAuImZhCny2r5486a1PulYAeQWxAT0Zvj6DJTihRMJ4AeRthHij1Tpc+gNXcAQHlDk0VUCsuhe6Pek/nc/hlgcIU+DcSIE/ZQJEJ4xDe4ZLxKoHZR9F3afAT1xAtW1YbP88zCD/lp1Lt8AaMWQbeoMRxLuqc+n8BH3Enu1e8acLIb/RWYzqe0A8imLrA9ZQ3Fr5u45cp4A47QbgC6ZhAXlKV65UAHmE2AZxxkcRH2cjViqAXJzxl3APEeSPJuQqBcSp9wITyD9MyaUKIBdnvR/xikmxVAHkJUQ98ms35FI74PanUCDvBX4BHrKJIVDHuB0AAAAASUVORK5CYII=">');
				$(this).find('td').eq(7).on('click', function(){

					var nr = $(this).parent().find('td').eq(0).text();

					$('#divDisplayNotifCausas #tbTeste tbody tr').each(function(){
						if($(this).find('td').eq(0).text() == nr){
							$(this).show();
						} else {
							$(this).hide();
						}
					});

					showPanel('#divDisplayNotifCausas');
				  
				});
			});
			

			DataBinding($(
				'#divDisplayNotifCausas #tbTeste'
			), result.ReturnTableCollection[
				1], true, true);

			DataBinding($(
				'#divDisplayNotifAtividade #tbTeste'
			), result.ReturnTableCollection[
				0]);

			/*INICIO - Francisco Silva: 14/12/2018 */



			/*INICIO - Francisco Silva: 14/12/2018 */

			$('.customButtonRunTime').remove();
			$('#divDisplayNotif #menu').append(
				'<a class="customButtonRunTime imageButton" onclick="\
				$(\'#divDisplayNotif\').hide();\
				$(\'.customButtonRunTime\').remove();"><div class="menu-button"><div class="imagem"><img class="Voltar"/></div><div class="descricao">Voltar</div></div></a>'
			);

			$('#divDisplayNotif #menu').append('<a class="imageButton customButtonRunTime" onclick="\
				call_Nota($(\'#divDisplayNotif #txtNotifNumber\').val())" ><div class="menu-button"><div class="imagem"><img class="Avancar"/></div><div class="descricao">Avançar</div></div></a>');

			$('#divDisplayNotif #menu').append(
				'<a class="customButtonRunTime imageButton" onclick="\
				$(\'#divDisplayNotifDetail\').show();\
				$(\'#divDisplayNotifCausas\').hide();\
				$(\'#divDisplayNotifAtividade\').hide();\
				$(\'#divDisplayNotifAnexo\').hide();\
				$(\'#divDisplayNotifItens\').hide();\" ><div class="menu-button"><div class="imagem"><img class="DadosGerais"/></div><div class="descricao">Dados da Nota</div></div></a>'
			);

			$('#divDisplayNotif #menu').append(
				'<a class="customButtonRunTime imageButton" onclick="\
				$(\'#divDisplayNotifDetail\').hide();\
				$(\'#divDisplayNotifCausas\').hide();\
				$(\'#divDisplayNotifAtividade\').hide();\
				$(\'#divDisplayNotifAnexo\').hide();\
				$(\'#divDisplayNotifItens\').show();\" ><div class="menu-button"><div class="imagem"><img class="Itens"/></div><div class="descricao">Itens</div></div></a>'
			);

			// $('#divDisplayNotif #menu').append(
			// 	'<a class="customButtonRunTime imageButton" onclick="\
			// 	$(\'#divDisplayNotifDetail\').hide();\
			// 	$(\'#divDisplayNotif #divDisplayNotifItens\').hide();\
			// 	$(\'#divDisplayNotif #divDisplayNotifAtividade\').hide();\
			// 	$(\'#divDisplayNotif #divDisplayNotifAnexo\').hide();\
			// 	$(\'#divDisplayNotif #divDisplayNotifCausas\').show();\
			// 	" ><div class="menu-button"><div class="imagem"><img class="Causas"/></div><div class="descricao">Causas</div></div></a>'
			// );
			$('#divDisplayNotif #menu').append(
				'<a class="customButtonRunTime imageButton" onclick="\
				$(\'#divDisplayNotifDetail\').hide();\
				$(\'#divDisplayNotifItens\').hide();\
				$(\'#divDisplayNotifAtividade\').show();\
				$(\'#divDisplayNotifAnexo\').hide();\
				$(\'#divDisplayNotifCausas\').hide();\
				" ><div class="menu-button"><div class="imagem"><img class="Atividades"/></div><div class="descricao">Atividade</div></div></a>'
			);
			$('#divDisplayNotif #menu').append(
				'<a class="customButtonRunTime imageButton" onclick="\
				$(\'#divDisplayNotifDetail\').hide();\
				$(\'#divDisplayNotifItens\').hide();\
				$(\'#divDisplayNotifAtividade\').hide();\
				$(\'#divDisplayNotifAnexo\').show();\
				$(\'#divDisplayNotifCausas\').hide();\
				" ><div class="menu-button"><div class="imagem"><img class="Anexos"/></div><div class="descricao">Anexo</div></div></a>'
			);





			setTimeout(function () {
				call_NotaConverteDuracao($("#divDisplayNotifDetail #TxtDuracao").val());
			}, 100);

			CommonScripts.HideLoader();
		}
	} catch (e) {
		alert(JSON.stringify(e));
	}
}

function call_IW23_EXIBIR_ANEXO() {
	try {
		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20190114105418862";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		var txtNNota =  $('#divDisplayNotifDetail #txtNota').val();

		var column = ['A'];
		var row = [txtNNota];
		var temp = [];
		temp.push(column);
		temp.push(row);


		var arrHeader = temp;
		var arrFooter = "";

		//alert("Header: " + JSON.stringify(arrHeader));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) {
			var result = jsonRecordWithResult.ResultObject;

			DataBinding($('#divDisplayNotifAnexo #tbTeste'),  result.ReturnTableCollection[0], true, true);

			$('#divDisplayNotifAnexo #tbTeste tbody tr').each(function(){
				$(this).find('td').eq(5).css('cursor', 'pointer');
				$(this).find('td').eq(5).html('<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAdJJREFUeNqUk79rU1EcxT/3NfQlUEGjiEJx0UFSSikIChGXBEQQEnDxJYEqVpDmBYqT/Q9c7JLqUFyUbKJDBy3EqosOEowoKlJxEcFB4o+KYPPePQ7Nq42YtH7hC1/OPXw595x7jSR837/barVO0KeSyeQbY8zxarX6oetAEp7nKQxD9SrP81Sv11Uul9/5vj8siagdtliZTIZ8Pr9f0sNKpTIc4VteAJDNZsnlcgckLUZY7G/SxOzS+nzjYgaAdDpNsVjcSBv5Lw8kyVora63CMJTneYo86KfgBzAD3AS+dxTtAy4BF3peoSN7BTg2Wrkzj1QFwDjXR/3b553BxNQIPN/Mg5ln7782AXa4wf1fodn5M2ASOAvEXu0pzfdVMD69cA6gceVkw3XdrCQ9ffvp9eTckxQwBVzrGePE7BKhteO74u1F13UPRfjhg3tTa5M9A5aeC6Lo2tZsjxLopKUOZWUj/58KjOPUvq3Gjix//LJsjDEAl281PwMoCCsKwnW+kUShUFCtVsNx1vaNTS8YG7QFYCBQt1ePgaMv505t+pRNLLHNH4gPNWPxoQcDg4kU8AJIA4+6Ukgmk/dKpdKf77z7dDRd7XRUY0ADWI2A3wMAHHD/fBdBuocAAAAASUVORK5CYII="></img>');
				$(this).find('td').eq(5).on('click', function(){
					alert('Problema do DMS');
				});

			});
			
		}
	} catch (e) {
		alert(JSON.stringify(e));
	}
}

function call_NotaConverteDuracao(duracao) {
	try {
		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181031144153371";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		var column = ['A'];
		var row = [duracao];
		var temp = [];
		temp.push(column);
		temp.push(row);


		var arrHeader = temp;
		var arrFooter = "";

		//alert("Header: " + JSON.stringify(arrHeader));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) {
			var result = jsonRecordWithResult.ResultObject;
			$('#divDisplayNotifDetail #TxtDuracao').val(result.SapReturnTable[0].C);
			setTimeout(function () {
				call_NotaNInventario($("#divDisplayNotifDetail #txtEquip").val());
			}, 100);
		}
	} catch (e) {
		alert(JSON.stringify(e));
	}
}

function call_NotaNInventario(nEquipamento) {
	try {
		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181023180707676";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		var column = ['A'];
		var row = [nEquipamento];
		var temp = [];
		temp.push(column);
		temp.push(row);


		var arrHeader = temp;
		var arrFooter = "";

		//alert("Header: " + JSON.stringify(arrHeader));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) {
			var result = jsonRecordWithResult.ResultObject;
			$('#divDisplayNotifDetail #txtNInventario').val(result.SapReturnTable[0].C);

			call_IW23_EXIBIR_ANEXO();
		}
	} catch (e) {
		alert(JSON.stringify(e));
	}
}

function call_GetEstornarConfirmacaoList(nOrdem) {
	try {
		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "Data Extractor";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181024170949849";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		var arrHeader = "\"A->" + nOrdem + "\"";


		var arrFooter = "";

		//alert("Header: " + JSON.stringify(arrHeader));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = arrHeader;
		jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) {
			var result = jsonRecordWithResult.ResultObject;

			DataBinding($('#divEstornarConfirmacaoTable #tbTeste'), AdicionaColunasLink(ConvertFieldInTable(result.SapReturnTable)));
			$('#divEstornarConfirmacaoTable').show();
			$('#divEstornarConfirmacao #divConfirmOrderCancel').hide();

			// ajustaTabelaEstornaConfirmacao();
			// $('#887999283-pagination .fg-button').click(function(){
			// 	ajustaTabelaEstornaConfirmacao();
			// });

			$('#divEstornarConfirmacao #divMensagemConfirmacaoFinal').hide();
			$('#divEstornarConfirmacao #divRealmenteDeseja').hide();
			$('#Form20181024170949849 #menu').show();
		}

		// function ajustaTabelaEstornaConfirmacao(){
		// 	$('#divEstornarConfirmacaoTable #tbTeste tr').each(function(){
		// 			var AUERU = $(this).find('td, th').get(9);
		// 			var RMZHL_C = $(this).find('td, th').get(10);
		// 			$(AUERU).hide();
		// 			$(RMZHL_C).hide();
		// 		});


		// 		$('#divEstornarConfirmacaoTable #tbTeste tbody>tr').each(function(){
		// 			var campo = $(this).find('td').get(0);
		// 			var RUECK_C = $(this).find('td').get(4);
		// 			var RMZHL_C = $(this).find('td').get(10);
		// 			var AUERU = $(this).find('td').get(9);

		// 			var mensagem = "divRealmenteDeseja";
		// 			if($(AUERU).text() == "X")
		// 				mensagem = "divMensagemConfirmacaoFinal";


		// 			RUECK_C = $(RUECK_C).text();
		// 			RMZHL_C = $(RMZHL_C).text();

		// 			$(campo).html('<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACGUlEQVR42mNkwAKkXMQ5jRp0an+++/V+t9/hbgY8gBFdwGq6sZu0m8S0////y1/uuKF6c869B0QZoBKvIK5TrN7Pws0c8Z/hP+Ofr3+Xb9TbFcVAADDyqfAwmnTrpwjp8XcCNQr+/w8SBrL+/38DxBe/PPx65s3p9/ue73l14OW+N78wDLCZb5ojbisy+T9IE1gvhIXOBhr27sebnwvuznnYfX/+4xdwA/SqNG2UE+R2AT3DCVMOdwUWNpD89PHKp6xjIeeWwsPAqFXHXiZYciMDEwM/1D6G/3+hrmCEi0C9BiE/Xf+ceDzo/EJ4IGqXqRkqJsjuYGD+LwZS+njlM83Xh9994FbkUhaxEXTgN+BNZmBlUAQbBPYaw8er1bfkUaJRNV1BTTVXYRcDC4P8892vY87nXl0KkxM05mfT7VCfzi7NmgQNE4ZXu95EY6QDuTApGc1qlZ2/v/4+ss/qeDqyHL8uL4vJUt2r/5n/q4Gc8OHipyYMA0BAwkNUWCVPIfaI1+kJ6HLmG/UncSlz5oI88eH051qsBuADNseMl7HwsUSCXPB0+UtXkgxQyJFRVsiQvgxkcv77+f/suZirpkQbIJsoKaVUJLubkZFR6/+f/w/vT3zi9Gj+s3tEGaA7Vc1b2F5w9v9//0V+v/qz+F7/o/IXW9+8gSckXEAySFRKpVyh+v+v/5KfLnzZ/3rfu7XP1796hqwGAKcsBSgeA2sCAAAAAElFTkSuQmCC" style="cursor: pointer" onclick="\
		// 			$(\'#divEstornarConfirmacaoTable\').hide();\
		// 			$(\'#divEstornarConfirmacao #divMensagemConfirmacaoFinal\').hide();\
		// 			$(\'#divEstornarConfirmacao #divRealmenteDeseja\').hide();\
		// 			$(\'#Form20181024180401521 #txtConfirmacao\').val(\''+RUECK_C+'\');\
		// 			$(\'#Form20181024180401521 #txtNumConfirmacao\').val(\''+RMZHL_C+'\');\
		// 			$(\'#divEstornarConfirmacao #'+mensagem+'\').show();"/>');
		// 		});




		// 	}


		function AdicionaColunasLink(data) {


			var header = data[0];
			var rowsTable = data[1];

			var newHeader = [];
			newHeader.push("link");

			header.forEach(item => {
				newHeader.push(item);
			});

			var tabelaLinhas = [];
			rowsTable.forEach(row => {
				// debugger;
				var campo = row[0];
				var RUECK_C = row[2];
				var RMZHL_C = row[3];
				var AUERU = row[8];

				var mensagem = "divRealmenteDeseja";
				if (AUERU == "X")
					mensagem = "divMensagemConfirmacaoFinal";

				var novaLinha = [];
				novaLinha.push('<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACGUlEQVR42mNkwAKkXMQ5jRp0an+++/V+t9/hbgY8gBFdwGq6sZu0m8S0////y1/uuKF6c869B0QZoBKvIK5TrN7Pws0c8Z/hP+Ofr3+Xb9TbFcVAADDyqfAwmnTrpwjp8XcCNQr+/w8SBrL+/38DxBe/PPx65s3p9/ue73l14OW+N78wDLCZb5ojbisy+T9IE1gvhIXOBhr27sebnwvuznnYfX/+4xdwA/SqNG2UE+R2AT3DCVMOdwUWNpD89PHKp6xjIeeWwsPAqFXHXiZYciMDEwM/1D6G/3+hrmCEi0C9BiE/Xf+ceDzo/EJ4IGqXqRkqJsjuYGD+LwZS+njlM83Xh9994FbkUhaxEXTgN+BNZmBlUAQbBPYaw8er1bfkUaJRNV1BTTVXYRcDC4P8892vY87nXl0KkxM05mfT7VCfzi7NmgQNE4ZXu95EY6QDuTApGc1qlZ2/v/4+ss/qeDqyHL8uL4vJUt2r/5n/q4Gc8OHipyYMA0BAwkNUWCVPIfaI1+kJ6HLmG/UncSlz5oI88eH051qsBuADNseMl7HwsUSCXPB0+UtXkgxQyJFRVsiQvgxkcv77+f/suZirpkQbIJsoKaVUJLubkZFR6/+f/w/vT3zi9Gj+s3tEGaA7Vc1b2F5w9v9//0V+v/qz+F7/o/IXW9+8gSckXEAySFRKpVyh+v+v/5KfLnzZ/3rfu7XP1796hqwGAKcsBSgeA2sCAAAAAElFTkSuQmCC" style="cursor: pointer; width: 24px; header:24px" onclick="\
					$(\'#divEstornarConfirmacaoTable\').hide();\
					$(\'#Form20181024170949849 #menu\').hide();\
					$(\'#Form20181024170949849 #accordionEstornarConfirmacao\').hide();\
					$(\'#divEstornarConfirmacao #divMensagemConfirmacaoFinal\').hide();\
					$(\'#divEstornarConfirmacao #divRealmenteDeseja\').hide();\
					$(\'#Form20181024180401521 #txtConfirmacao\').val(\''+ RUECK_C + '\');\
					$(\'#Form20181024180401521 #txtNumConfirmacao\').val(\''+ RMZHL_C + '\');\
					$(\'#Form20181024180401521 #txtTextoConfirmacao\').val(\'\');\
					$(\'#divEstornarConfirmacao #'+ mensagem + '\').show();"/>');



				row.forEach(item => {


					novaLinha.push(item);
				});
				tabelaLinhas.push(novaLinha);
			});

			var novaTabela = [];
			novaTabela.push(newHeader);
			novaTabela.push(tabelaLinhas);

			return novaTabela;
		}
	} catch (e) {
		alert(JSON.stringify(e));
	}
}

function call_ConfirmOrderCancel() {
	try {
		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181024180401521";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		var auxA = $('#Form20181024180401521 #txtConfirmacao').val();
		var auxB = $('#Form20181024180401521 #txtNumConfirmacao').val();
		var auxC = $('#Form20181024180401521 #txtTextoConfirmacao').val();

		var column = ['A', 'B', 'C'];
		var row = [auxA, auxB, auxC];
		var temp = [];
		temp.push(column);
		temp.push(row);


		var arrHeader = temp;
		var arrFooter = "";

		// alert("Header: " + JSON.stringify(arrHeader));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);
		jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) {
			var result = jsonRecordWithResult.ResultObject;

			if ((result.SapReturnTable[0].G == "E") || (result.SapReturnTable[0].G == "A")) {
				alert(result.SapReturnTable[0].J);
				return false;
			}

			


			alert("Confirmação foi estornada");
			
			call_GetEstornarConfirmacaoList($('#divEstornarConfirmacao #txtNOrdem').val());
		}

	} catch (e) {
		alert(JSON.stringify(e));
	}
}

function call_ZPMF_MATCHCODE_LISTA_LOCAL() {
	try {
		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181205113939419";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		var txtCentroPlanej = $('#modalLocalInstalacao #divModalLocalInstalacao #txtCentroPlanej').val();
		var txtDenominacaoLocInstalacao = $('#modalLocalInstalacao #divModalLocalInstalacao #txtDenominacaoLocInstalacao').val();
		var txtIdentificacaoLocalInstalacao = $('#modalLocalInstalacao #divModalLocalInstalacao #txtIdentificacaoLocalInstalacao').val();

		var column = ['A', 'B', 'C'];
		var row = [txtIdentificacaoLocalInstalacao, txtDenominacaoLocInstalacao, txtCentroPlanej];
		var temp = [];
		temp.push(column);
		temp.push(row);


		var arrHeader = temp;
		var arrFooter = "";

		//alert("Header: " + JSON.stringify(arrHeader));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);
		jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) {
			var result = jsonRecordWithResult.ResultObject.ReturnTableCollection;

			var table = $('#modalLocalInstalacao table[itable="tblMatchCode"]');
			$('#modalLocalInstalacao #btnOk').hide();

			DataBinding($(table), result[0], true, true);

			$(table).find('tbody tr').on('touchend', function(e){
					var colunas = $(this).find('td');

					$('#modalLocalInstalacao table[itable="tblMatchCode"] tbody tr').css('background-color', 'white');
					
					$('#modalLocalInstalacao #btnOk').show();
					
					$(this).css('background-color', 'silver');
					$('#divModalLocalInstalacao #hdfLocalInstalacao').val(colunas[0].innerText);
					$('#divModalLocalInstalacao #hdfDenominacaoLocInstalacao').val(colunas[1].innerText);
					$('#divModalLocalInstalacao #hdfEndereco').val(colunas[2].innerText);
					$('#divModalLocalInstalacao #hdfEnderecoNumero').val(colunas[3].innerText);
					$('#divModalLocalInstalacao #hdfBairro').val(colunas[4].innerText);

					$('#divModalLocalInstalacao #hdfCEP').val(colunas[5].innerText);
					$('#divModalLocalInstalacao #hdfCidade').val(colunas[6].innerText);
					$('#divModalLocalInstalacao #hdfChavePais').val(colunas[7].innerText);
					$('#divModalLocalInstalacao #hdfRegiao').val(colunas[8].innerText);
					$('#divModalLocalInstalacao #hdfDenominacaoPais').val(colunas[9].innerText);
					$('#divModalLocalInstalacao #hdfDenominacao').val(colunas[10].innerText);
				});

			//alert(JSON.stringify(result));
		}

	} catch (e) {
		alert(JSON.stringify(e));
	}
}

function call_ZPMF_MATCHCODE_LISTA_EQUI() {
	try {
		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181205113425296";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		var txtNPrincipalImobilizado = $('#modalEquipamento #divModalEquipamento #txtNPrincipalImobilizado').val();
		var txtDenominacaoObjetoTecnico = $('#modalEquipamento #divModalEquipamento #txtDenominacaoObjetoTecnico').val();
		var txtNEquipamento = $('#modalEquipamento #divModalEquipamento #txtNEquipamento').val();
		var txtNInventario = $('#modalEquipamento #divModalEquipamento #txtNInventario').val();
		var txtCentroPlanejManutencao = $('#modalEquipamento #divModalEquipamento #txtCentroPlanejManutencao').val();

		var column = ['A', 'B', 'C', 'D', 'E'];
		var row = [txtNEquipamento, txtNPrincipalImobilizado, txtDenominacaoObjetoTecnico, txtNInventario, txtCentroPlanejManutencao];
		var temp = [];
		temp.push(column);
		temp.push(row);


		var arrHeader = temp;
		var arrFooter = "";

		//alert("Header: " + JSON.stringify(arrHeader));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);
		jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) {
			//alert(JSON.stringify(jsonRecordWithResult.ResultObject));

			var result = jsonRecordWithResult.ResultObject.ReturnTableCollection;

			$('#modalEquipamento #btnOk').hide();
			var table = $('#modalEquipamento table[itable="tblMatchCode"]');

			DataBinding($(table), result[0], true, true);

			$(table).find('tbody tr').on('touchend', function(e){
				var colunas = $(this).find('td');
				$('#modalEquipamento table[itable="tblMatchCode"] tbody tr').css('background-color', 'white');

				$(this).css('background-color', 'silver');

				$('#modalEquipamento #btnOk').show();

				$('#modalEquipamento #hdfCodEquipamento').val(colunas[0].innerText);
				$('#modalEquipamento #hdfDescCodEquipamento').val(colunas[1].innerText);
				$('#modalEquipamento #hdfNInventario').val(colunas[2].innerText);
				$('#modalEquipamento #hdfNPrincipalImobilizado').val(colunas[3].innerText);
				$('#modalEquipamento #hdfCentroPlanejamentoManutencao').val(colunas[4].innerText);

			});

			
		}

	} catch (e) {
		alert(JSON.stringify(e));
	}
}

function call_IW32_NOTIF_DATA_MODIFY(){
	try {
		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181226171611869";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		var TxtNota = $('#divDisplayOrderDetails #divNotasAvarias #TxtNota').val();
		var TxtInicioAvariaData = InvertDDAndMM($('#divDisplayOrderDetails #divNotasAvarias #TxtInicioAvariaData').val()).replace("/", ".").replace("/", ".");
		var TxtInicioAvariaHora = $('#divDisplayOrderDetails #divNotasAvarias #TxtInicioAvariaHora').val();
		var TxtFimAvariaData = InvertDDAndMM($('#divDisplayOrderDetails #divNotasAvarias #TxtFimAvariaData').val()).replace("/", ".").replace("/", ".");
		var TxtFimAvariaHora = $('#divDisplayOrderDetails #divNotasAvarias #TxtFimAvariaHora').val();
		var cbxParada = $('#divDisplayOrderDetails #divNotasAvarias #cbxParada').attr('checked') == "checked"? "X": "";


		var HeaderData = [];
		var HeaderCampos = ['K','C','G','E','I','L','D','H','F','J','A'];
		var HeaderValores = [cbxParada, TxtInicioAvariaData,TxtInicioAvariaHora,TxtFimAvariaData,TxtFimAvariaHora,'X','X','X','X','X',TxtNota];
		HeaderData.push(HeaderCampos);
		HeaderData.push(HeaderValores);

		var arrFooter = "";
		//alert("Header: " + JSON.stringify(HeaderData));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(HeaderData);
		jsonInformation.LoopData = JSON.stringify(arrFooter);
		jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) {
			//alert(JSON.stringify(jsonRecordWithResult.ResultObject));

			//var result = jsonRecordWithResult.ResultObject.ReturnTableCollection;

			call_IW32_MODIFY_ORDER_HEADER();
		}

	} catch (e) {
		alert(JSON.stringify(e));
	}
}

function call_IW32_MODIFY_ORDER_HEADER(){
	try {
		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181204163624234";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;
		var headerTemp = [];
		var headerHeader = [];
		var headerItem = []
		headerTemp.push(headerHeader);
		headerTemp.push(headerItem);

		var HeaderData = headerTemp;

		var txtNOrdem = $('#divDisplayOrderDetails #txtNOrdem').val();
		txtNOrdem = "000000000000" + txtNOrdem;
		txtNOrdem = txtNOrdem.substring(txtNOrdem.length - 12, txtNOrdem.length);

		var ddlCentroTrabalho = $('#divDisplayOrderDetails #ddlCentroTrabalho').val();
		var ddlTipoAtividadeManutencao = $('#divDisplayOrderDetails #ddlTipoAtividadeManutencao').val();
		var ddlGrpPlanej = $('#divDisplayOrderDetails #ddlGrpPlanej').val();
		var lblLocalInstalacao = $('#divDisplayOrderDetails #lblLocalInstalacao').text();
		var lblCodEquipamento = $('#divDisplayOrderDetails #lblCodEquipamento').text();
		var TxtInicioBase = InvertDDAndMM($('#divDisplayOrderDetails #TxtInicioBase').val()).replace("/", ".").replace("/", ".").replace("/", ".");
		var TxtFimBase = InvertDDAndMM($('#divDisplayOrderDetails #TxtFimBase').val()).replace("/", ".").replace("/", ".").replace("/", ".");
		var TxtBreveOrdem = $('#divDisplayOrderDetails #TxtBreveOrdem').val();

		var column = ['A', 'N', 'J', 'L', 'P', 'R', 'T', 'V', 'H', 'O', 'K', 'M', 'Q', 'S', 'U', 'W', 'I', 'C', 'D', 'E', 'F'];

		var row = [txtNOrdem, ddlCentroTrabalho, ddlTipoAtividadeManutencao, ddlGrpPlanej, lblLocalInstalacao, lblCodEquipamento, TxtInicioBase, TxtFimBase, TxtBreveOrdem, "X", "X", "X", "X", "X", "X", "X", "X", "000001", "HEADER", "CHANGE", txtNOrdem];
		var rowSave = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "000001", "", "SAVE", txtNOrdem];
		var temp = [];
		temp.push(column);
		temp.push(row);
		temp.push(rowSave);
		var temp2 = [];
		temp2.push(temp);

		var FooterData = temp2;
		//alert("FooterData: " + JSON.stringify(FooterData));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(HeaderData);
		jsonInformation.LoopData = JSON.stringify(FooterData);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) {
			//alert(JSON.stringify(jsonRecordWithResult.ResultObject));

			var result = jsonRecordWithResult.ResultObject.ReturnTableCollection;

			var message = "";
			var contemErro = false;

			result[0][1].forEach(item => {
				message += item[0] + "\t\t" + item[1] + "\r\n";
				if(item[0] == "E")
					contemErro = true;
			});

			message += "\r\n\r\n" + result[0][0][0];

			alert(message);
			
			if(!contemErro){
				
				divDisplayOrderDetails_btnCancel();
				var oNumber = $('#Form20181016150505334 #txtNrOrder').val();
				call_GET_ORDER_DETAILS(oNumber);
			}
		}

	} catch (e) {
		alert(JSON.stringify(e));
	}
}


function modalMaterialDetailBtnNew(){
	$('#modalMaterialDetail').show();
	$('#divDisplayOrderDetails').hide();
	$('#modalMaterialDetail #btnOk').show();
	$('#modalMaterialDetail #btnCancel').show();
	$('#modalMaterialDetail #hdfModalMaterialDetailAcao').val("NEW");
	$('#modalMaterialDetail #myModalLabel').text("Novo Material");
	$('#modalMaterialDetail input[type="text"]').removeAttr('readonly');
	$('#modalMaterialDetail input[type="text"]').val('');
	$('#tblDataMateriais tbody tr').css('background-color', '');
	$('#divDisplayOrderDetails #divMateriais #btnEdit').hide();
	$('#divDisplayOrderDetails #divMateriais #btnDelete').hide();

}
function modalMaterialDetailBtnEdit() {
	$('#modalMaterialDetail #myModalLabel').text("Alterar Material");

	$('#modalMaterialDetail').show();
	$('#divDisplayOrderDetails').hide();
	$('#modalMaterialDetail #btnOk').show();
	$('#modalMaterialDetail #btnCancel').show();
	$('#modalMaterialDetail #hdfModalMaterialDetailAcao').val("UPDATE");
	$('#modalMaterialDetail input[type="text"]').removeAttr('readonly');
}
function modalMaterialDetailBtnDelete(){
	$('#modalMaterialDetail #myModalLabel').text("Realmente deseja apagar o material?");

	$('#modalMaterialDetail').show();
	$('#divDisplayOrderDetails').hide();
	$('#modalMaterialDetail #btnOk').show();
	$('#modalMaterialDetail #btnCancel').show();
	$('#modalMaterialDetail #hdfModalMaterialDetailAcao').val("DELETE");
	$('#modalMaterialDetail input[type="text"]').attr('readonly', 'readonly');
}
function modalMaterialDetailCancelar() {
	$('#modalMaterialDetail').hide();
	$('#divDisplayOrderDetails').show();
}
function modalMaterialDetailBtnConfirmar() {
	if($('#modalMaterialDetail #hdfModalMaterialDetailAcao').val() == "NEW")
		call_IW32_MODIFY_ORDER_COMPONENT_CREATE();
	else if($('#modalMaterialDetail #hdfModalMaterialDetailAcao').val() == "UPDATE")
		call_IW32_MODIFY_ORDER_COMPONENT();
	else if($('#modalMaterialDetail #hdfModalMaterialDetailAcao').val() == "DELETE")
		call_IW32_MODIFY_ORDER_COMPONENT_DELETE();
			
}
function call_IW32_MODIFY_ORDER_COMPONENT_CREATE(){
	//Form20181205143255152

	try {
		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181205143255152";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;
		var headerTemp = [];
		var headerHeader = [];
		var headerItem = []
		headerTemp.push(headerHeader);
		headerTemp.push(headerItem);

		var HeaderData = headerTemp;

		var footerIndice0 = [];
		var footerIndice1 = [];
		var footerCampos = ["BD", "BC", "AV", "AY", "BE", "AT", "AQ", "BA", "AX", "AW", "AZ", "BF", "AS", "AU", "AR", "BB", "C", "D", "E", "F"];

		var txtNOrdem = "000000000000" + $('#divDisplayOrderDetails #txtNOrdem').val();
		var txtNReserva = "000000000000" + $('#modalMaterialDetail #txtNReserva').val();
		var txtNItemReserva = "000000000000" + $('#modalMaterialDetail #txtNItemReserva').val();
		var txtCentro = $('#modalMaterialDetail #txtCentro').val();
		var txtDeposito = $('#modalMaterialDetail #txtDeposito').val();
		var txtNOperacao = $('#modalMaterialDetail #txtNOperacao').val();
		var txtQuantidade = $('#modalMaterialDetail #txtQuantidade').val();
		var txtItem = $('#modalMaterialDetail #txtItem').val();
		var txtMaterial = $('#modalMaterialDetail #txtMaterial').val();


		txtNOrdem = txtNOrdem.substring(txtNOrdem.length - 12, txtNOrdem.length);
		txtNReserva = txtNReserva.substring(txtNReserva.length - 10, txtNReserva.length);
		txtNItemReserva = txtNItemReserva.substring(txtNItemReserva.length - 4, txtNItemReserva.length);

		var OBJECTKEY = txtNOrdem;
		OBJECTKEY += txtNReserva;
		OBJECTKEY += txtNItemReserva;
		OBJECTKEY += txtNItemReserva;
		var footerValores = [txtNReserva, txtNItemReserva, txtMaterial, txtCentro, txtDeposito, txtItem, txtNOperacao, txtQuantidade, "X", "X", "X", "X", "X", "X", "X", "X", "000001", "COMPONENT", "CREATE", txtNOrdem];
		var footerSave = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "000001", "", "SAVE", txtNOrdem];



		footerIndice1.push(footerCampos);
		footerIndice1.push(footerValores);
		footerIndice1.push(footerSave);

		footerIndice0.push(footerIndice1)

		var FooterData = footerIndice0;
		//alert("FooterData: " + JSON.stringify(FooterData));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(HeaderData);
		jsonInformation.LoopData = JSON.stringify(FooterData);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) {
			//alert(JSON.stringify(jsonRecordWithResult.ResultObject));

			var result = jsonRecordWithResult.ResultObject.ReturnTableCollection;

			var message = "";
			var contemErro = false;

			result[0][1].forEach(item => {
				message += item[0] + "\t\t" + item[1] + "\r\n";
				if(item[0] == "E")
					contemErro = true;
			});

			message += "\r\n\r\n" + result[0][0][0];

			alert(message);
			
			if(!contemErro){
				modalMaterialDetailCancelar();
				var oNumber = $('#Form20181016150505334 #txtNrOrder').val();
				call_GET_ORDER_DETAILS(oNumber, true);
			}
		}

	} catch (e) {
		alert(JSON.stringify(e));
	}
}
function call_IW32_MODIFY_ORDER_COMPONENT(){
	//Form20181205140208951

	try {
		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181205140208951";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;
		var headerTemp = [];
		var headerHeader = [];
		var headerItem = []
		headerTemp.push(headerHeader);
		headerTemp.push(headerItem);

		var HeaderData = headerTemp;

		var footerIndice0 = [];
		var footerIndice1 = [];
		var footerCampos = ["AP", "AQ", "AR", "AT", "AX", "AV", "AS", "AU", "AW", "C", "D", "E", "F"];

		var txtNOrdem = "000000000000" + $('#divDisplayOrderDetails #txtNOrdem').val();
		var txtNReserva = "000000000000" + $('#modalMaterialDetail #txtNReserva').val();
		var txtNItemReserva = "000000000000" + $('#modalMaterialDetail #txtNItemReserva').val();
		var txtCentro = $('#modalMaterialDetail #txtCentro').val();
		var txtDeposito = $('#modalMaterialDetail #txtDeposito').val();
		var txtNOperacao = $('#modalMaterialDetail #txtNOperacao').val();
		var txtQuantidade = $('#modalMaterialDetail #txtQuantidade').val();


		txtNOrdem = txtNOrdem.substring(txtNOrdem.length - 12, txtNOrdem.length);
		txtNReserva = txtNReserva.substring(txtNReserva.length - 10, txtNReserva.length);
		txtNItemReserva = txtNItemReserva.substring(txtNItemReserva.length - 4, txtNItemReserva.length);

		var OBJECTKEY = txtNOrdem;
		OBJECTKEY += txtNReserva;
		OBJECTKEY += txtNItemReserva;
		OBJECTKEY += txtNItemReserva;
		var footerValores = [txtNReserva, txtNItemReserva, txtCentro, txtDeposito, txtNOperacao, txtQuantidade, "X", "X", "X", "000001", "COMPONENT", "CHANGE", OBJECTKEY];
		var footerSave = ["", "", "", "", "", "", "", "", "", "000001", "", "SAVE", txtNOrdem];



		footerIndice1.push(footerCampos);
		footerIndice1.push(footerValores);
		footerIndice1.push(footerSave);

		footerIndice0.push(footerIndice1)

		var FooterData = footerIndice0;
		//alert("FooterData: " + JSON.stringify(FooterData));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(HeaderData);
		jsonInformation.LoopData = JSON.stringify(FooterData);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) {
			//alert(JSON.stringify(jsonRecordWithResult.ResultObject));

			var result = jsonRecordWithResult.ResultObject.ReturnTableCollection;

			var message = "";
			var contemErro = false;

			result[0][1].forEach(item => {
				message += item[0] + "\t\t" + item[1] + "\r\n";
				if(item[0] == "E")
					contemErro = true;
			});

			message += "\r\n\r\n" + result[0][0][0];

			alert(message);
			
			if(!contemErro){
				modalMaterialDetailCancelar();
				var oNumber = $('#Form20181016150505334 #txtNrOrder').val();
				call_GET_ORDER_DETAILS(oNumber, true);
			}
		}

	} catch (e) {
		alert(JSON.stringify(e));
	}
}
function call_IW32_MODIFY_ORDER_COMPONENT_DELETE(){
	//Form20181205161103070
	try {
		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181205161103070";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;
		var headerTemp = [];
		var headerHeader = [];
		var headerItem = []
		headerTemp.push(headerHeader);
		headerTemp.push(headerItem);

		var HeaderData = headerTemp;

		var footerIndice0 = [];
		var footerIndice1 = [];
		var footerCampos = ["H", "I", "J", "C", "D", "E", "F"];

		var txtNOrdem = "000000000000" + $('#divDisplayOrderDetails #txtNOrdem').val();
		var txtNReserva = "000000000000" + $('#modalMaterialDetail #txtNReserva').val();
		var txtNItemReserva = "000000000000" + $('#modalMaterialDetail #txtNItemReserva').val();
		var txtCentro = $('#modalMaterialDetail #txtCentro').val();
		var txtDeposito = $('#modalMaterialDetail #txtDeposito').val();
		var txtNOperacao = $('#modalMaterialDetail #txtNOperacao').val();
		var txtQuantidade = $('#modalMaterialDetail #txtQuantidade').val();


		txtNOrdem = txtNOrdem.substring(txtNOrdem.length - 12, txtNOrdem.length);
		txtNReserva = txtNReserva.substring(txtNReserva.length - 10, txtNReserva.length);
		txtNItemReserva = txtNItemReserva.substring(txtNItemReserva.length - 4, txtNItemReserva.length);

		var OBJECTKEY = txtNOrdem;
		OBJECTKEY += txtNReserva;
		OBJECTKEY += txtNItemReserva;
		OBJECTKEY += txtNItemReserva;
		var footerValores = [txtNReserva, txtNItemReserva, txtNOperacao, "000001", "COMPONENT", "DELETE", OBJECTKEY];
		var footerSave = ["", "", "", "000001", "", "SAVE", txtNReserva];



		footerIndice1.push(footerCampos);
		footerIndice1.push(footerValores);
		footerIndice1.push(footerSave);

		footerIndice0.push(footerIndice1)

		var FooterData = footerIndice0;
		//alert("FooterData: " + JSON.stringify(FooterData));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(HeaderData);
		jsonInformation.LoopData = JSON.stringify(FooterData);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) {
			//alert(JSON.stringify(jsonRecordWithResult.ResultObject));

			var result = jsonRecordWithResult.ResultObject.ReturnTableCollection;

			var message = "";
			var contemErro = false;

			result[0][1].forEach(item => {
				message += item[0] + "\t\t" + item[1] + "\r\n";
				if(item[0] == "E")
					contemErro = true;
			});

			message += "\r\n\r\n" + result[0][0][0];

			alert(message);
			
			if(!contemErro){
				modalMaterialDetailCancelar();
				var oNumber = $('#Form20181016150505334 #txtNrOrder').val();
				call_GET_ORDER_DETAILS(oNumber, true);
			}
		}

	} catch (e) {
		alert(JSON.stringify(e));
	}
}


function divConfirmacaoColetiva_btnAvancar(){
	
	try{
		var txtOrdem = $('#divConfirmacaoColetiva #divTelaCampos #txtOrdem').val();
		var txtOperacao = $('#divConfirmacaoColetiva #divTelaCampos #txtOperacao').val();
		var txtSub = $('#divConfirmacaoColetiva #divTelaCampos #txtSub').val();
		var txtCentro = $('#divConfirmacaoColetiva #divTelaCampos #txtCentro').val();
		var txtCentroTrabalho = $('#divConfirmacaoColetiva #divTelaCampos #txtCentroTrabalho').val();
		var txtNPessoal = $('#divConfirmacaoColetiva #divTelaCampos #txtNPessoal').val();
		var txtDtInicioExecucao = $('#divConfirmacaoColetiva #divTelaCampos #txtDtInicioExecucao').val();
		var txtHrInicioExecucao = $('#divConfirmacaoColetiva #divTelaCampos #txtHrInicioExecucao').val();
		var txtDtFimExecucao = $('#divConfirmacaoColetiva #divTelaCampos #txtDtFimExecucao').val();
		var txtHrFimExecucao = $('#divConfirmacaoColetiva #divTelaCampos #txtHrFimExecucao').val();
		var txtTrabalhoReal = $('#divConfirmacaoColetiva #divTelaCampos #txtTrabalhoReal').val();
		var txtUnidade = $('#divConfirmacaoColetiva #divTelaCampos #txtUnidade').val();
		var txtCausaDesvio = $('#divConfirmacaoColetiva #divTelaCampos #txtCausaDesvio').val();
		var txtTextoConfirmacao = $('#divConfirmacaoColetiva #divTelaCampos #txtTextoConfirmacao').val();

		var txtNPessoalSep = txtNPessoal.split(';');
		
		var linhas = '';
		for (let i = 0; i < txtNPessoalSep.length; i++) {
			const nPessoal = txtNPessoalSep[i];

			if(nPessoal.length > 0){
				linhas += '<tr>';
				linhas += '	<td style="display: none;">'+guid()+'</td>';//style="display: none;"
				linhas += '	<td><input type="text" id="txtOrdem" value="' + txtOrdem + '" style="width: 100px"/></td>';
				linhas += '	<td><input type="text" id="txtOperacao" value="' + txtOperacao + '" style="width: 50px"/></td>';
				linhas += '	<td><input type="text" id="txtSub" value="' + txtSub + '" style="width: 50px"/></td>';
				linhas += '	<td><input type="text" id="txtCentro" value="' + txtCentro + '" style="width: 50px"/></td>';
				linhas += '	<td><input type="text" id="txtCentroTrabalho" value="' + txtCentroTrabalho + '" style="width: 70px"/></td>';
				linhas += '	<td><input type="text" id="txtNPessoal" value="' + nPessoal + '" style="width: 90px"/></td>';
				linhas += '	<td><input type="text" id="txtDtInicioExecucao" value="' + txtDtInicioExecucao + '" style="width: 80px"/></td>';
				linhas += '	<td><input type="text" id="txtHrInicioExecucao" value="' + txtHrInicioExecucao + '" style="width: 80px"/></td>';
				linhas += '	<td><input type="text" id="txtDtFimExecucao" value="' + txtDtFimExecucao + '" style="width: 80px"/></td>';
				linhas += '	<td><input type="text" id="txtHrFimExecucao" value="' + txtHrFimExecucao + '" style="width: 80px"/></td>';
				linhas += '	<td><input type="text" id="txtTrabalhoReal" value="' + txtTrabalhoReal + '" style="width: 80px"/></td>';
				linhas += '	<td><input type="text" id="txtUnidade" value="' + txtUnidade + '" style="width: 20px"/></td>';
				linhas += '	<td><input type="text" id="txtCausaDesvio" value="' + txtCausaDesvio + '" style="width: 100px"/></td>';
				linhas += '	<td><input type="text" id="txtTextoConfirmacao" value="' + txtTextoConfirmacao + '" style="width: 200px"/></td>';
				linhas += '	<td><input type="checkbox" id="chbCF" style="width: 50px"/></td>';
				linhas += '</tr>';
			}
		}

		

		var tabela = $('#divConfirmacaoColetiva #divTelaListaConfirmacao table');

		$(tabela).find('tbody').empty();
		$(tabela).find('tbody').append(linhas);

		$(tabela).find('tbody tr').on('touchend', function(){
			$('#divConfirmacaoColetiva #divTelaListaConfirmacao #hdfLinhaSelecionada').val($(this).find('td')[0].innerText);
			$(tabela).find('tbody tr').css('background-color', '');

			$(this).css('background-color', 'silver');
		});

		$('#divConfirmacaoColetiva #divTelaListaConfirmacao').show();
		$('#divConfirmacaoColetiva #divTelaCampos').hide();
	} catch(e){
		alert('Erro: ' + JSON.stringify(e));
	}


}

function divConfirmacaoColetiva_btnDeletaLinha(){
	$('#divConfirmacaoColetiva #divTelaListaConfirmacao table').find('tbody tr').each(function(){
		if($(this).find('td')[0].innerText == $('#divConfirmacaoColetiva #divTelaListaConfirmacao #hdfLinhaSelecionada').val())
			$(this).remove();
		
	});
}

function divConfirmacaoColetiva_btnNovaLinha(){
	
	try{
		var txtOrdem = $('#divConfirmacaoColetiva #divTelaCampos #txtOrdem').val();
		var txtOperacao = $('#divConfirmacaoColetiva #divTelaCampos #txtOperacao').val();
		var txtSub = $('#divConfirmacaoColetiva #divTelaCampos #txtSub').val();
		var txtCentro = $('#divConfirmacaoColetiva #divTelaCampos #txtCentro').val();
		var txtCentroTrabalho = $('#divConfirmacaoColetiva #divTelaCampos #txtCentroTrabalho').val();
		var txtDtInicioExecucao = $('#divConfirmacaoColetiva #divTelaCampos #txtDtInicioExecucao').val();
		var txtHrInicioExecucao = $('#divConfirmacaoColetiva #divTelaCampos #txtHrInicioExecucao').val();
		var txtDtFimExecucao = $('#divConfirmacaoColetiva #divTelaCampos #txtDtFimExecucao').val();
		var txtHrFimExecucao = $('#divConfirmacaoColetiva #divTelaCampos #txtHrFimExecucao').val();
		var txtTrabalhoReal = $('#divConfirmacaoColetiva #divTelaCampos #txtTrabalhoReal').val();
		var txtUnidade = $('#divConfirmacaoColetiva #divTelaCampos #txtUnidade').val();
		var txtCausaDesvio = $('#divConfirmacaoColetiva #divTelaCampos #txtCausaDesvio').val();
		var txtTextoConfirmacao = $('#divConfirmacaoColetiva #divTelaCampos #txtTextoConfirmacao').val();

		
		var linhas = '<tr>';
		linhas += '	<td style="display: none;">'+guid()+'</td>';//
		linhas += '	<td><input type="text" id="txtOrdem" value="' + txtOrdem + '" style="width: 100px"/></td>';
		linhas += '	<td><input type="text" id="txtOperacao" value="' + txtOperacao + '" style="width: 50px"/></td>';
		linhas += '	<td><input type="text" id="txtSub" value="' + txtSub + '" style="width: 50px"/></td>';
		linhas += '	<td><input type="text" id="txtCentro" value="' + txtCentro + '" style="width: 50px"/></td>';
		linhas += '	<td><input type="text" id="txtCentroTrabalho" value="' + txtCentroTrabalho + '" style="width: 70px"/></td>';
		linhas += '	<td><input type="text" id="txtNPessoal" value="" style="width: 90px"/></td>';
		linhas += '	<td><input type="text" id="txtDtInicioExecucao" value="' + txtDtInicioExecucao + '" style="width: 80px"/></td>';
		linhas += '	<td><input type="text" id="txtHrInicioExecucao" value="' + txtHrInicioExecucao + '" style="width: 80px"/></td>';
		linhas += '	<td><input type="text" id="txtDtFimExecucao" value="' + txtDtFimExecucao + '" style="width: 80px"/></td>';
		linhas += '	<td><input type="text" id="txtHrFimExecucao" value="' + txtHrFimExecucao + '" style="width: 80px"/></td>';
		linhas += '	<td><input type="text" id="txtTrabalhoReal" value="' + txtTrabalhoReal + '" style="width: 80px"/></td>';
		linhas += '	<td><input type="text" id="txtUnidade" value="' + txtUnidade + '" style="width: 20px"/></td>';
		linhas += '	<td><input type="text" id="txtCausaDesvio" value="' + txtCausaDesvio + '" style="width: 100px"/></td>';
		linhas += '	<td><input type="text" id="txtTextoConfirmacao" value="' + txtTextoConfirmacao + '" style="width: 200px"/></td>';
		linhas += '	<td><input type="checkbox" id="chbCF" style="width: 50px"/></td>';
		linhas += '</tr>';


		var tabela = $('#divConfirmacaoColetiva #divTelaListaConfirmacao table');
		
		$(tabela).find('tbody').append(linhas);

		$(tabela).find('tbody tr').on('touchend', function(){
			$('#divConfirmacaoColetiva #divTelaListaConfirmacao #hdfLinhaSelecionada').val($(this).find('td')[0].innerText);
			$(tabela).find('tbody tr').css('background-color', '');

			$(this).css('background-color', 'silver');
		});
	} catch(e){
		alert('Erro: ' + JSON.stringify(e));
	}
}

function divConfirmacaoColetiva_btnConfirmar(){
	$('#divConfirmacaoColetiva #divTelaListaConfirmacao table tbody tr').each( function(){
		call_IW44_CONF_CREATE($(this));
	});
}

function call_IW44_CONF_CREATE(linha){
	try {
		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181205161103070";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;
		var headerTemp = [];
		var headerHeader = [];
		var headerItem = []
		headerTemp.push(headerHeader);
		headerTemp.push(headerItem);

		var HeaderData = headerTemp;

		var footerIndice0 = [];
		var footerIndice1 = [];
		var footerCampos = ["A","B","C","D","P","Q","N","O","E","F","L","M","H","I","J","K","G"];

		var txtOrdem = $(linha).find('#txtOrdem').val();
		var txtOperacao = $(linha).find('#txtOperacao').val();
		var txtSub = $(linha).find('#txtSub').val();
		var txtCentro = $(linha).find('#txtCentro').val();
		var txtCentroTrabalho = $(linha).find('#txtCentroTrabalho').val();
		var txtNPessoal = $(linha).find('#txtNPessoal').val();
		var txtDtInicioExecucao = $(linha).find('#txtDtInicioExecucao').val();
		var txtHrInicioExecucao = $(linha).find('#txtHrInicioExecucao').val();
		var txtDtFimExecucao = $(linha).find('#txtDtFimExecucao').val();
		var txtHrFimExecucao = $(linha).find('#txtHrFimExecucao').val();
		var txtTrabalhoReal = $(linha).find('#txtTrabalhoReal').val();
		var txtUnidade = $(linha).find('#txtUnidade').val();
		var txtCausaDesvio = $(linha).find('#txtCausaDesvio').val();
		var txtTextoConfirmacao = $(linha).find('#txtTextoConfirmacao').val();
		var chbCF= $(linha).find('#chbCF').val();
		var hdfConfirmacaoOperacao = $('#divConfirmacaoColetiva #hdfConfirmacaoOperacao').val();

		var now = new Date;
		var dtLancamento = now.getDate() + "." + now.getMonth()+1 + "." + now.getFullYear();

		var footerValores = [hdfConfirmacaoOperacao, txtOrdem, txtOperacao, txtSub, chbCF, dtLancamento, txtCausaDesvio
			, txtTextoConfirmacao, txtCentro, txtCentroTrabalho, txtTrabalhoReal, txtUnidade, txtDtInicioExecucao.replace('/', '.')
			, txtHrInicioExecucao, txtDtFimExecucao.replace('/', '.'), txtHrFimExecucao, txtNPessoal];

		footerIndice1.push(footerCampos);
		footerIndice1.push(footerValores);

		footerIndice0.push(footerIndice1)

		var FooterData = footerIndice0;
		alert("FooterData: " + JSON.stringify(FooterData));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(HeaderData);
		jsonInformation.LoopData = JSON.stringify(FooterData);

		//BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) {
			//alert(JSON.stringify(jsonRecordWithResult.ResultObject));

			var result = jsonRecordWithResult.ResultObject.ReturnTableCollection;

			var message = "";
			var contemErro = false;

			result[0][1].forEach(item => {
				message += item[0] + "\t\t" + item[1] + "\r\n";
				if(item[0] == "E")
					contemErro = true;
			});

			message += "\r\n\r\n" + result[0][0][0];

			alert(message);
			
			if(!contemErro){
				modalMaterialDetailCancelar();
				var oNumber = $('#Form20181016150505334 #txtNrOrder').val();
				call_GET_ORDER_DETAILS(oNumber, true);
			}
		}

	} catch (e) {
		alert(JSON.stringify(e));
	}
}

function divConfirmacaoColetiva_btnConsultaOrdem(){
	$("#divGET_ORDERS #hdfDivDestino").val("#divConfirmacaoColetiva");
	$("#divConfirmacaoColetiva").hide();
	$("#divDisplayOrders").show();
	$("#divConfirmacaoColetiva #btnVoltar").attr('readonly', 'readonly');
	$("#divConfirmacaoColetiva #btnAvancar").attr('readonly', 'readonly');
	$("#divConfirmacaoColetiva #btnListarConfirmacoes").attr('readonly', 'readonly');
	
}

function call_IW44_ORDER_GET_DETAIL() {
	try {

		//$('#modalOperacaoESub input[type="hidden"]').val('');

		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181207153435141";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		var txtOrdem = $('#divConfirmacaoColetiva #divTelaCampos #txtOrdem').val();

		var column = ['A'];
		var row = [txtOrdem];
		var temp = [];
		temp.push(column);
		temp.push(row);


		var arrHeader = temp;
		var arrFooter = "";

		 //alert("Header: " + JSON.stringify(arrHeader));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);
		//jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) {
			//alert(JSON.stringify(jsonRecordWithResult.ResultObject));
			var result = jsonRecordWithResult.ResultObject.ReturnTableCollection;
			
			
			var table = $('#modalOperacaoESub table[itable="tblMatchCode"]');

			DataBinding($(table), result[0], true, true);

			$(table).find('tbody tr').each(function(){
				var colunas = $(this).find('td');
				if(colunas[6].innerText == "X")
					$(this).remove();
				
				$($(this).find('td')[6]).hide();
			});


			$(table).find('tbody tr').on('touchend', function(e){
				var colunas = $(this).find('td');
				$('#modalOperacaoESub table tbody tr').css('background-color', '');

				$(this).css('background-color', 'silver');

				$('#modalOperacaoESub #btnConfirmar').show();

				$('#modalOperacaoESub #hdfOperacao').val(colunas[0].innerText);
				$('#modalOperacaoESub #hdfSub').val(colunas[1].innerText);
				$('#modalOperacaoESub #hdfCentroTrabalho').val(colunas[2].innerText);
				$('#modalOperacaoESub #hdfCentro').val(colunas[3].innerText);
				$('#modalOperacaoESub #hdfConfirmacaoOperacao').val(colunas[5].innerText);
			});

			
			showPanel('#modalOperacaoESub');
			
		}

	} catch (e) {
		alert(JSON.stringify(e));
	}
}

function call_MATCHCODE_NR_PESSOAL(centro, centroTrabalho){
	try {

		$('#modalNPessoal #hdfNrPessoal').val('');

		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181207153957344";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		var column = ['A', 'B'];
		var row = [centro, centroTrabalho];
		var temp = [];
		temp.push(column);
		temp.push(row);


		var arrHeader = temp;
		var arrFooter = "";

		 //alert("Header: " + JSON.stringify(arrHeader));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);
		//jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) {
			//alert(JSON.stringify(jsonRecordWithResult.ResultObject));
			var result = jsonRecordWithResult.ResultObject.ReturnTableCollection;
			
			
			var table = $('#modalNPessoal table[itable="tblMatchCode"]');

			DataBinding($(table), result[0], true, true);

			var hdfMultSelect = $('#Form20181207153957344 #hdfMultSelect').val();

                                                            
			if(hdfMultSelect == "true"){
				$(table).find('tbody tr').on('click touchend', function(e){
					var colunas = $(this).find('td');

					$('#modalNPessoal #btnConfirmar').show();

					var nrPessoal = $('#modalNPessoal #hdfNrPessoal').val();
					var nrPessoalSep = nrPessoal.split(';');
					
					if(nrPessoal.indexOf(colunas[0].innerText) != -1){
						nrPessoal = '';
						for (let i = 0; i < nrPessoalSep.length; i++) {
							const item = nrPessoalSep[i];
							if(item != colunas[0].innerText)
								nrPessoal += item + ';';
						}
					} else {
						nrPessoal += colunas[0].innerText + ';';
					}
					nrPessoal = nrPessoal.replace(";;", ";").replace(";;", ";").replace(";;", ";").replace(";;", ";");
					$('#modalNPessoal #hdfNrPessoal').val(nrPessoal);

					$(table).find('tbody tr').each(function(){
						var colunas = $(this).find('td');
						if(nrPessoal.indexOf(colunas[0].innerText) != -1){
							$(this).css('background-color', 'silver');
						} else {
							$(this).css('background-color', '');
						}
					});
				});
			} else {
				

				$(table).find('tbody tr').on('click touchend', function(e){
					$(table).find('tbody tr').each(function(){
						$(this).css('background-color', 'white');
					});
					$(this).css('background-color', 'silver');

					var colunas = $(this).find('td');
					$('#modalNPessoal #hdfNrPessoal').val(colunas[0].innerText);                               
				});
			}

			
			showPanel('#modalNPessoal');
			
		}

	} catch (e) {
		alert(JSON.stringify(e));
	}
}

function call_MATCHCODE_CAUSA_DESVIO(centro){
	try {

		$('#Form20181207154239694 #hdfCentro').val(centro);

		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181207154239694";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		var txtCentro = $('#Form20181207154239694 #hdfCentro').val()

		// var column = ['A'];
		// var row = [txtCentro];
		// var temp = [];
		// temp.push(column);
		// temp.push(row);


		//var arrHeader = temp;
		var arrHeader = 'A->'+txtCentro;
		var arrFooter = "";

		 //alert("Header: " + JSON.stringify(arrHeader));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);
		//jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) {
			
			var result = jsonRecordWithResult.ResultObject;
			
			var table = $('#modalCausaDesvio table[itable="tblMatchCode"]');

			//alert(JSON.stringify(jsonRecordWithResult.ResultObject));
			DataBinding($(table), ConvertFieldInTable(result.SapReturnTable), true, true);

			$(table).find('tbody tr').on('click touchend', function(e){
				$(table).find('tbody tr').each(function(){
					$(this).css('background-color', 'white');
				});
				$(this).css('background-color', 'silver');

				var colunas = $(this).find('td');
				$('#modalCausaDesvio #hdfCausaDesvio').val(colunas[0].innerText);                               
			});
			
			showPanel('#modalCausaDesvio');
			
		}

	} catch (e) {
		alert(JSON.stringify(e));
	}
}

function call_IW41_GET_ORDER_OPERATION(){
	try {

		

		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20190129152219835";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		var txtNOrdem =  $('#divIW41_GET_ORDER_OPERATION #txtNOrdem').val();

		$('#divIW41_GET_ORDER_OPERATION #hdfIWNOrdem').val(txtNOrdem);
    
		var column = ['A'];
		var row = [txtNOrdem];
		var temp = [];
		temp.push(column);
		temp.push(row);


		var arrHeader = temp;
		var arrFooter = "";

		 //alert("Header: " + JSON.stringify(arrHeader));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);
		//jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) {
			
			var result = jsonRecordWithResult.ResultObject;

			//alert(JSON.stringify(result.ReturnTableCollection[0]));

			DataBinding($('#divIW41_GET_ORDER_OPERATION #tblIW41_GET_ORDER_OPERATION'), result.ReturnTableCollection[0], true, true);
    
			$('#divIW41_GET_ORDER_OPERATION #tblIW41_GET_ORDER_OPERATION tbody tr').css('cursor', 'pointer');

			$('#divIW41_GET_ORDER_OPERATION #tblIW41_GET_ORDER_OPERATION tbody tr').each(function(i){
				$(this).on('click touchend', function(){

					$('#divIW41_GET_ORDER_OPERATION #tblIW41_GET_ORDER_OPERATION tbody tr').each(function(){
						$(this).css('background-color', 'white');
					}); 

					$('#divIW41_GET_ORDER_OPERATION #hdfIW41_GET_ORDER_OPERATION_n').val(-1);
					$('#divIW41_GET_ORDER_OPERATION #btnAvancar').hide();

					if($(this).find('td').eq(6).text() == "X")
						alert("Esta operação já possui confirmação final");
					else{
						$(this).css('background-color', 'silver');

						$('#divIW41_GET_ORDER_OPERATION #hdfIW41_GET_ORDER_OPERATION_n').val(i);
						$('#divIW41_GET_ORDER_OPERATION #btnAvancar').show();
					}
				});
			});			
		}

	} catch (e) {
		alert(JSON.stringify(e));
	}
}

function btnIW41_GET_ORDER_OPERATION_Ok(){
                                                            
	var colunas = $('#divIW41_GET_ORDER_OPERATION #tblIW41_GET_ORDER_OPERATION tbody tr').get($('#divIW41_GET_ORDER_OPERATION #hdfIW41_GET_ORDER_OPERATION_n').val());
	colunas = $(colunas).find('td');

	$('#divIW41_CONFIRM_ORDER #txtNOrdem').val($('#divIW41_GET_ORDER_OPERATION #hdfIWNOrdem').val());
	$('#divIW41_CONFIRM_ORDER #txtNOperacao').val(colunas[0].innerText);
	$('#divIW41_CONFIRM_ORDER #txtNSubOperacao').val(colunas[1].innerText);

	$('#divIW41_CONFIRM_ORDER #txtNCentroTrabalho').val(colunas[2].innerText);
	$('#divIW41_CONFIRM_ORDER #txtUnidadeTrabalho').val(colunas[5].innerText);
	$('#divIW41_CONFIRM_ORDER #txtNCentro').val(colunas[11].innerText);

	$('#divIW41_CONFIRM_ORDER').show();
	$('#divIW41_GET_ORDER_OPERATION').hide();
}

function call_divIW41_CONFIRM_ORDER(){
	try {

		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181211153344078";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		var txtNOrdem = $('#divIW41_CONFIRM_ORDER #txtNOrdem').val();
		var txtNOperacao = $('#divIW41_CONFIRM_ORDER #txtNOperacao').val();
		var txtNSubOperacao = $('#divIW41_CONFIRM_ORDER #txtNSubOperacao').val();
		var txtNCentroTrabalho = $('#divIW41_CONFIRM_ORDER #txtNCentroTrabalho').val();
		var txtNCentro = $('#divIW41_CONFIRM_ORDER #txtNCentro').val();
		var txtNPessoal = $('#divIW41_CONFIRM_ORDER #txtNPessoal').val();
		var txtTrabalhoReal = $('#divIW41_CONFIRM_ORDER #txtTrabalhoReal').val();
		var txtUnidadeTrabalho = $('#divIW41_CONFIRM_ORDER #txtUnidadeTrabalho').val();
		var cxbConfirmacaoParcialFinal = $('#divIW41_CONFIRM_ORDER #cxbConfirmacaoParcialFinal').attr('checked') == "on"? "X": "";
		var txtDtInicioConfirmada = $('#divIW41_CONFIRM_ORDER #txtDtInicioConfirmada').val();
		var txtHoraInicioConfirmada = $('#divIW41_CONFIRM_ORDER #txtHoraInicioConfirmada').val();
		var txtDtFimConfirmada = $('#divIW41_CONFIRM_ORDER #txtDtFimConfirmada').val();
		var txtHoraFimConfirmada = $('#divIW41_CONFIRM_ORDER #txtHoraFimConfirmada').val();
		var txtCausa = $('#divIW41_CONFIRM_ORDER #txtCausa').val();
		var txtTxtConfirmacao = $('#divIW41_CONFIRM_ORDER #txtTxtConfirmacao').val();
		
		var headerFields = ['A','B','C','E','F','G','N','H','I','J','K','L','M']
		var headerValues = [txtNOrdem,txtNOperacao,txtNSubOperacao,txtNPessoal,txtTrabalhoReal
			,txtUnidadeTrabalho,cxbConfirmacaoParcialFinal,txtDtInicioConfirmada,txtHoraInicioConfirmada
			,txtDtFimConfirmada,txtHoraFimConfirmada,txtCausa,txtTxtConfirmacao];

		var arrHeader = [];
		arrHeader.push(headerFields);
		arrHeader.push(headerValues);
		var arrFooter = "";

		 //alert("Header: " + JSON.stringify(arrHeader));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);
		//jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) 
		{
			//alert("Header: " + JSON.stringify(jsonRecordWithResult));

			var result = jsonRecordWithResult.ResultObject;
			
			

			var mensagem = "";
			var hasError = false;
			result.SapMessage.forEach(element => {
				mensagem += element.MsgText + "\r";
				if(element.MsgType == "E")
					hasError=true;
			});

			alert(mensagem);
			
		}

	} catch (e) {
		alert(e);
	}
}

function call_IE03_EXIBIR_EQUIPTO(){
	try {

		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20190117170150933";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		var txtNEquipamento =  $('#modalEquipamento #hdfCodEquipamento').val();

		var column = ['A'];
		var row = [txtNEquipamento];
		var temp = [];
		temp.push(column);
		temp.push(row);


		var arrHeader = temp;
		var arrFooter = "";

		 //alert("Header: " + JSON.stringify(arrHeader));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);
		//jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) 
		{

			
			var result = jsonRecordWithResult.ResultObject;
			
			$('#divExibirEquipamento input[type="text"]').attr('readonly', 'readonly');

			$('#divExibirEquipamento #txtEquipamento').val(result.SapReturnTable[0].B);
			$('#divExibirEquipamento #txtDescricaoEquipamento').val(result.SapReturnTable[0].C);
			$('#divExibirEquipamento #txtNInventario').val(result.SapReturnTable[0].D);
			$('#divExibirEquipamento #txtNImobilizado').val(result.SapReturnTable[0].E);

			$('#divExibirEquipamento #txtNIdentificacaoTecnica').val(result.SapReturnTable[0].F);
			$('#divExibirEquipamento #txtFabricante').val(result.SapReturnTable[0].G);
			$('#divExibirEquipamento #txtModelo').val(result.SapReturnTable[0].H);
			$('#divExibirEquipamento #txtSerie').val(result.SapReturnTable[0].I);
			$('#divExibirEquipamento #txtCentroCusto').val(result.SapReturnTable[0].J);
			$('#divExibirEquipamento #txtDescricaoCentroCusto').val(result.SapReturnTable[0].K);

			$('#divExibirEquipamento #txtLocalInstalacao').val(result.SapReturnTable[0].L);
			$('#divExibirEquipamento #txtDescricaoLocalInstalacao').val(result.SapReturnTable[0].M);

			
			$('#divExibirEquipamento #txtInicioGarantia').val('');
				$('#divExibirEquipamento #txtFimGarantia').val('');
				$('#divExibirEquipamento #txtGarantiaModelo').val('');
			if(result.ReturnTableCollection[2][1].length > 0){
				var inicioGarantia = result.ReturnTableCollection[2][1][0][0];
				var fimGarantia = result.ReturnTableCollection[2][1][0][1];
				inicioGarantia = inicioGarantia.substring(6, 8) + "/" + inicioGarantia.substring(4, 6) + "/" + inicioGarantia.substring(0, 4);
				fimGarantia = fimGarantia.substring(6, 8) + "/" + fimGarantia.substring(4, 6) + "/" + fimGarantia.substring(0, 4);

				$('#divExibirEquipamento #txtInicioGarantia').val(inicioGarantia);
				$('#divExibirEquipamento #txtFimGarantia').val(fimGarantia);
				$('#divExibirEquipamento #txtGarantiaModelo').val(result.ReturnTableCollection[2][1][0][2]);

				if(result.ReturnTableCollection[2][1][0][3] == "00")
					$('#divExibirEquipamento #imgGarantia').show();
			}
			$('#divExibirEquipamento #txtDescricaoGarantia').val(result.SapReturnTable[0].N);

			$('#divExibirEquipamento #txtEndereco').val(result.SapReturnTable[0].AL);
			$('#divExibirEquipamento #txtEnderecoNumero').val(result.SapReturnTable[0].AM);
			$('#divExibirEquipamento #txtBairro').val(result.SapReturnTable[0].AN);
			$('#divExibirEquipamento #txtCEP').val(result.SapReturnTable[0].AO);
			$('#divExibirEquipamento #txtCidade').val(result.SapReturnTable[0].AP);
			$('#divExibirEquipamento #txtPais').val(result.SapReturnTable[0].AQ);
			$('#divExibirEquipamento #txtRegiao').val(result.SapReturnTable[0].AT);


			{
				
				var table = $('#divExibirEquipamento #exibeEquipamentoCaracteristicas #tblExibeEquipamentoCaracteristicas tbody');    
				
				var linhaCaracteristicas = "";
				result.ReturnTableCollection[6][1].forEach(item => {
					
					linhaCaracteristicas += "<tr>";
					linhaCaracteristicas += "   <td>"+item[0]+"</td>";
					linhaCaracteristicas += "   <td>"+item[1]+"</td>";

					
					var tabelaMatchCodeCaracteristicas = [];
					var tabelaCaracteristicasTipo = [];
					for (let i = 0; i < result.ReturnTableCollection[1][1].length; i++) {
						const itemMatchCode = result.ReturnTableCollection[1][1][i];
						if(itemMatchCode[0] == item[2])
							tabelaMatchCodeCaracteristicas.push(itemMatchCode);
					}

					for (let i = 0; i < result.ReturnTableCollection[0][1].length; i++) {
						const itemMatchCode = result.ReturnTableCollection[0][1][i];
						if(itemMatchCode[0] == item[2])
							tabelaCaracteristicasTipo = itemMatchCode;
					}

					var CampoEdicao = "";
					if(tabelaCaracteristicasTipo[3] == "X"){
						CampoEdicao += '<select id="ddlCaracteristica" class="form-control" style="width:100%" >'
						for (let i = 0; i < tabelaMatchCodeCaracteristicas.length; i++) {
							const itemMatchCode = tabelaMatchCodeCaracteristicas[i];
							CampoEdicao += '<option value="'+itemMatchCode[1]+'">'+itemMatchCode[2]+'</option>';
						}
						CampoEdicao += '</select>';
					} else {
						CampoEdicao += '<input type="text" class="form-control" id="txtCaracteristica" value="' + item[1] + '"/>';
					}
					linhaCaracteristicas += "   <td style='display:none;'>"+CampoEdicao+"</td>";
					linhaCaracteristicas += "   <td style='display:none;'>"+tabelaCaracteristicasTipo[5]+"</td>";
					linhaCaracteristicas += "   <td style='display:none;'>"+item[2]+"</td>";
					linhaCaracteristicas += "</tr>";    
				});
				$(table).html(linhaCaracteristicas);
				
			}


			$('#divExibirEquipamento #exibeEquipamentoCaracteristicas #txtClasse').val(result.ReturnTableCollection[5][1][0][0])
			$('#divExibirEquipamento #exibeEquipamentoCaracteristicas #txtDescricaoClasse').val(result.ReturnTableCollection[5][1][0][1])
			
			
			var linhaPontoMedicao = "";
			for (let index = 0; index < result.ReturnTableCollection[4][1].length; index++) {
				const pontoMedicao = result.ReturnTableCollection[4][1][index];
				//linhaPontoMedicao += '<div  style="border: 1px solid darkblue; border-radius: 10px; padding: 10px; height:150px; width:100% ">';
				linhaPontoMedicao += '<tr>';
				linhaPontoMedicao += '	<td colspan="2" style="padding-top: 25px;">Ponto de Medição</td>';
				linhaPontoMedicao += '	<td colspan="2" style="padding-top: 25px;"><input type="text" class="form-control" style="width: 100%;" id="txtPontoMedicao" Value="'+pontoMedicao[0]+'" readonly="readonly"/></td>';
				linhaPontoMedicao += '	<td></td>';
				linhaPontoMedicao += '	<td colspan="6" style="padding-top: 25px;"><input type="text" class="form-control" style="width: 100%;" id="txtDescricaoPonto" Value="'+pontoMedicao[2]+'" readonly="readonly"></td>';
				linhaPontoMedicao += '</tr>';
				linhaPontoMedicao += '<tr>';
				linhaPontoMedicao += '	<td>Item</td>';
				linhaPontoMedicao += '	<td colspan="2"><input type="text" class="form-control" style="width: 100%;" id="txtItem" Value="'+pontoMedicao[1]+'" readonly="readonly"></td>';
				linhaPontoMedicao += '	<td colspan="3">Caracteristica</td>';
				linhaPontoMedicao += '	<td colspan="3"><input type="text" class="form-control" style="width: 100%;" id="txtCaracteristica" Value="'+pontoMedicao[4]+'" readonly="readonly"></td>';
				linhaPontoMedicao += '	<td>Tipo</td>';
				linhaPontoMedicao += '	<td><input type="text" id="txtTipo" class="form-control" readonly="readonly" Value="'+pontoMedicao[3]+'"></td>';
				linhaPontoMedicao += '</tr>';
				linhaPontoMedicao += '<tr>';
				linhaPontoMedicao += '	<td colspan="3"></td>';
				linhaPontoMedicao += '	<td colspan="3">Valor Teórico</td>';
				linhaPontoMedicao += '	<td><input type="text" id="txtValorTeorico" class="form-control" style="width: 100%;" Value="'+pontoMedicao[5]+'" readonly="readonly"></td>';
				linhaPontoMedicao += '	<td>Un.</td>';
				linhaPontoMedicao += '	<td><input type="text" id="txtUn" class="form-control" style="width: 100%;" Value="'+pontoMedicao[6]+'" readonly="readonly"></td>';
				linhaPontoMedicao += '	<td colspan="2"></td>';
				linhaPontoMedicao += '</tr>';

			}
			$('#divExibirEquipamento #exibeEquipamentoPontosMedicao #tblExibeEquipamentoPontoMedicao tbody').html(linhaPontoMedicao);
			DataBinding($('#divExibirEquipamento #exibeEquipamentoAnexo #tblExibeEquipamentoAnexo'), result.ReturnTableCollection[3], true, true);

			
		}

	} catch (e) {
		alert(JSON.stringify(e));
	}
}

function call_IE02_BAPI_EQUI_CHANGE(){
	try {

		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181227084000373";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		var txtEquipamento = $('#exibeEquipamentoDadosGerais #txtEquipamento').val();
		var txtDescricaoEquipamento = $('#exibeEquipamentoDadosGerais #txtDescricaoEquipamento').val();
		var txtNInventario = $('#exibeEquipamentoDadosGerais #txtNInventario').val();
		var txtNImobilizado = $('#exibeEquipamentoDadosGerais #txtNImobilizado').val();

		var txtNIdentificacaoTecnica = $('#exibeEquipamentoDadosGerais #txtNIdentificacaoTecnica').val();
		var txtFabricante = $('#exibeEquipamentoDadosGerais #txtFabricante').val();
		var txtModelo = $('#exibeEquipamentoDadosGerais #txtModelo').val();
		var txtSerie = $('#exibeEquipamentoDadosGerais #txtSerie').val();

		var txtCentroCusto = $('#exibeEquipamentoDadosGerais #txtCentroCusto').val();
		var txtDescricaoCentroCusto = $('#exibeEquipamentoDadosGerais #txtDescricaoCentroCusto').val();
		
		var date = new Date();
		var hoje = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
		var hhmm = date.getHours() + ":" + date.getMinutes();

		var arrayHeader = [];
		var header = ['F','L','P','N','D','R','H','J','A','B','C'];
		var item = [txtNInventario, txtFabricante, txtSerie, txtModelo, txtDescricaoEquipamento, txtCentroCusto, txtNImobilizado, txtNIdentificacaoTecnica, txtEquipamento,
		hoje, hhmm];

		arrayHeader.push(header);
		arrayHeader.push(item);

		var arrFooter = "";

		 //alert("Header: " + JSON.stringify(arrHeader));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrayHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);
		//jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) 
		{
			var result = jsonRecordWithResult.ResultObject;
			console.log('Form20181227084000373: ' + JSON.stringify(result));
			call_IE02_WARRANTY_ASSIGNMENT_RFC();
		}

	} catch (e) {
		alert(JSON.stringify(e));
	}
}

function call_IE02_WARRANTY_ASSIGNMENT_RFC(){
	try {

		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		
		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181227083733546";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		
		var arrHeader = [];
		var headerField = [];
		var headerItem = [];

		arrHeader.push(headerField);
		arrHeader.push(headerItem);

		var txtEquipamento = $('#exibeEquipamentoDadosGerais #txtEquipamento').val();
		var txtInicioGarantia = $('#exibeEquipamentoDadosGerais #txtInicioGarantia').val();
		var txtFimGarantia = $('#exibeEquipamentoDadosGerais #txtFimGarantia').val();
		var txtGarantiaModelo = $('#exibeEquipamentoDadosGerais #txtGarantiaModelo').val();

		
		var arrFooter = [];
		var arrFooter2 = [];
		var footerField = ["A","D","B","C"];
		var footerValue = ["IE"+txtEquipamento, txtGarantiaModelo, txtInicioGarantia, txtFimGarantia];

		arrFooter2.push(footerField);
		arrFooter2.push(footerValue);

		arrFooter.push(arrFooter2);
		//alert("arrHeader: " + JSON.stringify(arrHeader));
		alert("arrFooter: " + JSON.stringify(arrFooter));
		 //alert("Header: " + JSON.stringify(arrHeader));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);
		//jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) 
		{
			var result = jsonRecordWithResult.ResultObject;
			console.log('Form20181227083733546: ' + JSON.stringify(result));
			var mensagem = "";
			var hasError = false;
			result.SapMessage.forEach(element => {
				mensagem += element.MsgText + "\r";
				if(element.MsgType == "E")
					hasError=true;
			});

			alert(mensagem);
			
			if(!hasError)
				call_IE03_EXIBIR_EQUIPTO();
		}

	} catch (e) {
		alert(JSON.stringify(e));
	}
}

function call_IE02_BAPI_OBJCL_CHANGE(){
	try {

		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20190121092941341";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		var txtClasse = $('#exibeEquipamentoCaracteristicas #txtClasse').val();
		var txtDescricaoClasse = $('#exibeEquipamentoCaracteristicas #txtDescricaoClasse').val();
		var txtLocalInstalacao = $('#exibeEquipamentoDadosGerais #txtEquipamento').val();

		var date = new Date();
		var hoje = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();

		var arrHeader = [];
		var headerField = ['C', 'E', 'A'];
		var headerValue = [txtClasse, hoje, txtLocalInstalacao]
		arrHeader.push(headerField);
		arrHeader.push(headerValue);

		var arrFooter = [];
		var arrFooter2 = [];
		var FooterField = ['F', 'G'];
		
		arrFooter.push(arrFooter2);
		arrFooter2.push(FooterField)
		$('#divExibirEquipamento #exibeEquipamentoCaracteristicas #tblExibeEquipamentoCaracteristicas tbody tr').each(function(){
			var colunas = $(this).find('td');
			

			var ddlCaracteristica = $(this).find('#ddlCaracteristica').val();
			var txtCaracteristica = $(this).find('#txtCaracteristica').val();

			var valor = '';
			if(ddlCaracteristica == undefined)
				valor = txtCaracteristica;
			else
				valor = ddlCaracteristica;


				arrFooter2.push([colunas[4].innerText, valor]);


		});

		console.log("arrHeader: " + JSON.stringify(arrHeader));
		console.log("arrFooter: " + JSON.stringify(arrFooter));

		 //alert("Header: " + JSON.stringify(arrHeader));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);
		//jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) 
		{
			var result = jsonRecordWithResult.ResultObject;
			console.log('Form20190121092941341: ' + JSON.stringify(result));
			var mensagem = "";
			var hasError = false;
			result.SapMessage.forEach(element => {
				mensagem += element.MsgText + "\r";
				if(element.MsgType == "E")
					hasError=true;
			});

			alert(mensagem);
			
			if(!hasError)
				call_IE03_EXIBIR_EQUIPTO();
		}

	} catch (e) {
		alert(JSON.stringify(e));
	}
}

function call_ZPMF_IL03_EXIBIR_LOCAL(){
	try {

		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20190117170729126";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		var txtLocalInstalacao =  $('#divModalLocalInstalacao #hdfLocalInstalacao').val();

		var column = ['A'];
		var row = [txtLocalInstalacao];
		var temp = [];
		temp.push(column);
		temp.push(row);


		var arrHeader = temp;
		var arrFooter = '';

		 //alert("Header: " + JSON.stringify(arrHeader));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);
		//jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) 
		{
			var result = jsonRecordWithResult.ResultObject;
			$('#divExibeLocalInstalacao input[type="text"]').attr('readonly', 'readonly');
                                                                    
			$('#divExibeLocalInstalacao #txtLocalInstalacao').val(result.SapReturnTable[0].B);
			$('#divExibeLocalInstalacao #txtDescricaoLocalInstalacao').val(result.SapReturnTable[0].C);
			$('#divExibeLocalInstalacao #TxtGrpPlanej').val(result.SapReturnTable[0].D);
			$('#divExibeLocalInstalacao #txtDescricaoGrpPlanej').val(result.SapReturnTable[0].E);
			$('#divExibeLocalInstalacao #TxtCentroCusto').val(result.SapReturnTable[0].F);
			$('#divExibeLocalInstalacao #txtDescricaoCentroCusto').val(result.SapReturnTable[0].G);
			$('#divExibeLocalInstalacao #exibeLocalInstalacaoDadosGerais #txtSuperior').val(result.SapReturnTable[0].H);
			$('#divExibeLocalInstalacao #exibeLocalInstalacaoDadosGerais #txtDescricaoSuperior').val(result.SapReturnTable[0].I);

			$('#divExibeLocalInstalacao #txtEndereco').val(result.SapReturnTable[0].AJ);
			$('#divExibeLocalInstalacao #txtEnderecoNumero').val(result.SapReturnTable[0].AK);
			$('#divExibeLocalInstalacao #txtBairro').val(result.SapReturnTable[0].AL);
			$('#divExibeLocalInstalacao #txtCEP').val(result.SapReturnTable[0].AM);
			$('#divExibeLocalInstalacao #txtCidade').val(result.SapReturnTable[0].AN);
			$('#divExibeLocalInstalacao #txtPais').val(result.SapReturnTable[0].AP);
			$('#divExibeLocalInstalacao #txtRegiao').val(result.SapReturnTable[0].AR);

			$('#divExibeLocalInstalacao #txtClasse').val(result.ReturnTableCollection[4][1][0][0]);
			$('#divExibeLocalInstalacao #txtDescricaoClasse').val(result.ReturnTableCollection[4][1][0][1]);

			$('#divExibeLocalInstalacao #exibeLocalInstalacaoEstrutura #txtLocalInstalacaoSuperior').val(result.SapReturnTable[0].H);
			$('#divExibeLocalInstalacao #exibeLocalInstalacaoEstrutura #txtDescricaoLocalInstalacaoSuiperior').val(result.SapReturnTable[0].I);

			{

				var table = $('#divExibeLocalInstalacao #exibeLocalInstalacaoCaracteristicas #tblExibeLocalInstalacaoCaracteristicas tbody');    
				
				var linhaCaracteristicas = "";
				result.ReturnTableCollection[7][1].forEach(item => {
					
					linhaCaracteristicas += "<tr>";
					linhaCaracteristicas += "   <td>"+item[0]+"</td>";
					linhaCaracteristicas += "   <td>"+item[1]+"</td>";

					
					var tabelaMatchCodeCaracteristicas = [];
					// var tabelaCaracteristicasTipo = [];
					for (let i = 0; i < result.ReturnTableCollection[1][1].length; i++) {
						const itemMatchCode = result.ReturnTableCollection[1][1][i];
						if(itemMatchCode[0] == item[2])
							tabelaMatchCodeCaracteristicas.push(itemMatchCode);
					}

					// for (let i = 0; i < result.ReturnTableCollection[0][1].length; i++) {
					//     const itemMatchCode = result.ReturnTableCollection[0][1][i];
					//     if(itemMatchCode[0] == item[2])
					//         tabelaCaracteristicasTipo = itemMatchCode;
					// }

					var CampoEdicao = "";
					if(tabelaMatchCodeCaracteristicas.length > 0){
						CampoEdicao += '<select id="ddlCaracteristica" class="form-control" style="width: 100%;">'
						for (let i = 0; i < tabelaMatchCodeCaracteristicas.length; i++) {
							const itemMatchCode = tabelaMatchCodeCaracteristicas[i];
							CampoEdicao += '<option value="'+itemMatchCode[1]+'">'+itemMatchCode[2]+'</option>';
						}
						CampoEdicao += '</select>';
					} else {
						CampoEdicao += '<input type="text" class="form-control" id="txtCaracteristica" value="'+item[1]+'" />';
					}
					linhaCaracteristicas += "   <td style='display: none;'>"+CampoEdicao+"</td>";
					linhaCaracteristicas += "   <td style='display:none;'></td>";
					linhaCaracteristicas += "   <td style='display:none;'>"+item[2]+"</td>";
					linhaCaracteristicas += "</tr>";    
				});
				$(table).html(linhaCaracteristicas);
				
			}
		
		
			var linhaPontoMedicao = "";
			if(result.ReturnTableCollection[3][1].length == 0)
			linhaPontoMedicao = "<tr><td> Nenhum Ponto de Medição Encontrado</td></tr>"
			for (let index = 0; index < result.ReturnTableCollection[3][1].length; index++) {
				const pontoMedicao = result.ReturnTableCollection[3][1][index];
				//linhaPontoMedicao += '<div  style="border: 1px solid darkblue; border-radius: 10px; padding: 10px; height:150px; width:100% ">';
				linhaPontoMedicao += '<tr>';
				linhaPontoMedicao += '	<td colspan="2" style="padding-top: 25px;">Ponto de Medição</td>';
				linhaPontoMedicao += '	<td colspan="2" style="padding-top: 25px;"><input type="text" class="form-control" style="width: 100%;" id="txtPontoMedicao" Value="'+pontoMedicao[0]+'" readonly="readonly"/></td>';
				linhaPontoMedicao += '	<td></td>';
				linhaPontoMedicao += '	<td colspan="6" style="padding-top: 25px;"><input type="text" class="form-control" style="width: 100%;" id="txtDescricaoPonto" Value="'+pontoMedicao[2]+'" readonly="readonly"></td>';
				linhaPontoMedicao += '</tr>';
				linhaPontoMedicao += '<tr>';
				linhaPontoMedicao += '	<td>Item</td>';
				linhaPontoMedicao += '	<td colspan="2"><input type="text" class="form-control" style="width: 100%;" id="txtItem" Value="'+pontoMedicao[1]+'" readonly="readonly"></td>';
				linhaPontoMedicao += '	<td colspan="3">Caracteristica</td>';
				linhaPontoMedicao += '	<td colspan="3"><input type="text" class="form-control" style="width: 100%;" id="txtCaracteristica" Value="'+pontoMedicao[5]+'" readonly="readonly"></td>';
				linhaPontoMedicao += '	<td>Tipo</td>';
				linhaPontoMedicao += '	<td><input type="text" id="txtTipo" class="form-control" readonly="readonly" Value="'+pontoMedicao[3]+'"></td>';
				linhaPontoMedicao += '</tr>';
				linhaPontoMedicao += '<tr>';
				linhaPontoMedicao += '	<td colspan="3"></td>';
				linhaPontoMedicao += '	<td colspan="3">Valor Teórico</td>';
				linhaPontoMedicao += '	<td><input type="text" id="txtValorTeorico" class="form-control" style="width: 100%;" Value="'+pontoMedicao[4]+'" readonly="readonly"></td>';
				linhaPontoMedicao += '	<td>Un.</td>';
				linhaPontoMedicao += '	<td><input type="text" id="txtUn" class="form-control" style="width: 100%;" Value="'+pontoMedicao[6]+'" readonly="readonly"></td>';
				linhaPontoMedicao += '	<td colspan="2"></td>';
				linhaPontoMedicao += '</tr>';

			}
			$('#divExibeLocalInstalacao #exibeLocalInstalacaoPontosMedicao #tblExibeLocalInstalacaoPontoMedicao tbody').html(linhaPontoMedicao);
			DataBinding($('#divExibirLocalInstalacao #exibeLocalInstalacaoAnexo table'), result.ReturnTableCollection[2], true, true);

			
			var tblExibeLocalInstalacaoEstrutura = [];
			var tempArray = [];
			var header = result.ReturnTableCollection[6][0];
			header.push(result.ReturnTableCollection[5][0][0])
			tblExibeLocalInstalacaoEstrutura.push(header);

			tblExibeLocalInstalacaoEstrutura.push(tempArray);
			var fabricante= result.ReturnTableCollection[5][1][0][0];
			for (let i = 0; i < result.ReturnTableCollection[6][1].length;i++) {
				var temp = result.ReturnTableCollection[6][1][i];
				temp.push(fabricante)
				tblExibeLocalInstalacaoEstrutura[1].push(temp);
			}

			
			DataBinding($('#divExibeLocalInstalacao #exibeLocalInstalacaoEstrutura #tblExibeLocalInstalacaoEstrutura'), tblExibeLocalInstalacaoEstrutura, true, true);
		}

	} catch (e) {
		alert(JSON.stringify(e));
	}
}

function call_IL02_BAPI_FUNCLOC_CHANGE(){
	try {

		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20190117175506302";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		var txtDescricaoLocalInstalacao = $('#exibeLocalInstalacaoDadosGerais #txtDescricaoLocalInstalacao').val();
		var TxtGrpPlanej = $('#exibeLocalInstalacaoDadosGerais #TxtGrpPlanej').val();
		var TxtCentroCusto = $('#exibeLocalInstalacaoDadosGerais #TxtCentroCusto').val();
		var txtLocalInstalacao = $('#exibeLocalInstalacaoDadosGerais #txtLocalInstalacao').val();
		
		var arrayHeader = [];
		var header = ['D','B','F','A'];
		var item = [TxtGrpPlanej, txtDescricaoLocalInstalacao, TxtCentroCusto, txtLocalInstalacao];                                                            

		arrayHeader.push(header);
		arrayHeader.push(item)

		var arrFooter = '';

		 //alert("Header: " + JSON.stringify(arrHeader));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrayHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);
		//jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) 
		{
			var result = jsonRecordWithResult.ResultObject;
			$('#exibeLocalInstalacaoDadosGerais #txtDescricaoLocalInstalacao').attr('readonly', 'readonly');
			$('#exibeLocalInstalacaoDadosGerais #TxtGrpPlanej').attr('readonly', 'readonly');
			$('#exibeLocalInstalacaoDadosGerais #TxtCentroCusto').attr('readonly', 'readonly');
			$('#exibeLocalInstalacaoDadosGerais #btnEditar').show();
			$('#exibeLocalInstalacaoDadosGerais #btnSalvar').hide();
			$('#exibeLocalInstalacaoDadosGerais #btnCancelar').hide();
			call_ZPMF_IL03_EXIBIR_LOCAL();
		}

	} catch (e) {
		alert(JSON.stringify(e));
	}
}

function call_IL02_BAPI_OBJCL_CHANGE(){
	try {

		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20190117183314639";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		var txtClasse = $('#divExibeLocalInstalacao #txtClasse').val();
		var txtDescricaoClasse = $('#divExibeLocalInstalacao #txtDescricaoClasse').val();
		var txtLocalInstalacao = $('#divExibeLocalInstalacao #txtLocalInstalacao').val();

		var date = new Date();
		var hoje = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();

		var arrHeader = [];
		var headerField = ['C', 'E', 'A'];
		var headerValue = [txtClasse, hoje, txtLocalInstalacao]
		arrHeader.push(headerField);
		arrHeader.push(headerValue);

		var arrFooter = [];
		var arrFooter2 = [];
		var FooterField = ['F', 'G'];
		
		arrFooter.push(arrFooter2);
		arrFooter2.push(FooterField)
		$('#divExibeLocalInstalacao #exibeLocalInstalacaoCaracteristicas #tblExibeLocalInstalacaoCaracteristicas tbody tr').each(function(){
			var colunas = $(this).find('td');
			

			var ddlCaracteristica = $(this).find('#ddlCaracteristica').val();
			var txtCaracteristica = $(this).find('#txtCaracteristica').val();

			var valor = '';
			if(ddlCaracteristica == undefined)
				valor = txtCaracteristica;
			else
				valor = ddlCaracteristica;


				arrFooter2.push([colunas[4].innerText, valor]);


		});

		console.log("arrHeader: " + JSON.stringify(arrHeader));
		console.log("arrFooter: " + JSON.stringify(arrFooter));

		 //alert("Header: " + JSON.stringify(arrHeader));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);
		//jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) 
		{
			var result = jsonRecordWithResult.ResultObject;
			$('#exibeLocalInstalacaoDadosGerais #txtDescricaoLocalInstalacao').attr('readonly', 'readonly');
			$('#exibeLocalInstalacaoDadosGerais #TxtGrpPlanej').attr('readonly', 'readonly');
			$('#exibeLocalInstalacaoDadosGerais #TxtCentroCusto').attr('readonly', 'readonly');
			$('#exibeLocalInstalacaoDadosGerais #btnEditar').show();
			$('#exibeLocalInstalacaoDadosGerais #btnSalvar').hide();
			$('#exibeLocalInstalacaoDadosGerais #btnCancelar').hide();
			call_ZPMF_IL03_EXIBIR_LOCAL();
		}

	} catch (e) {
		alert(JSON.stringify(e));
	}
}

function call_ZPMF_IL03_EXIBIR_HIERARQUIA(){
	try {

		var IsTestRun = 0,
			IsSave = 0,
			IsDirectPost = 1,
			IsReview = 0,
			IsReset = 0;
		var strAction = "";
		var PostType = "SAP";

		switch (PostType) {
			case "SAP":
				IsDirectPost = 1;
				strAction = $("[itag='btnSendToSAP']").attr("data-mfb-label");
				break;
		}

		var UserNote = "";
		var FileType = "BAPI/RFM";

		if (PostType == "reset") {
			BLProcessFile.ResetForm();
			return;
		}

		var jsonInformation = {};
		jsonInformation.PostType = PostType;
		jsonInformation.ProcessType = FileType;
		jsonInformation.FormID = "Form20181227092454560";
		jsonInformation.Action = strAction;

		jsonInformation.IsTestRun = IsTestRun;
		jsonInformation.IsReviewData = IsReview; //IsReviewData
		jsonInformation.IsSave = IsSave;
		jsonInformation.IsDirectPost = IsDirectPost; //IsDirectPost

		jsonInformation.UserNote = UserNote;

		jsonInformation.UniqueID = CommonScripts.GetUniqueCode();
		jsonInformation.DataID = CommonScripts.GetGUID();

		jsonInformation.AdditionalData = [];
		jsonInformation.AutoShowresult = 0;
		jsonInformation.IsDoNotSaveInSentbox = 0;
		jsonInformation.IsUpdate = 0;
		jsonInformation.DoNotDisableForm = 1;
		//jsonInformation.MYSAPSSO2 = 0;

		var txtLocalInstalacao = $('#divModalHierarquia #txtLocalInstalacao').val();

		var arrHeader = [];
		var headerField = ['A'];
		var headerValue = [txtLocalInstalacao]
		arrHeader.push(headerField);
		arrHeader.push(headerValue);

		var arrFooter = '';

		 //alert("Header: " + JSON.stringify(arrHeader));
		/* Generate the object to be save or to send to IWMS  */
		jsonInformation.HeaderData = JSON.stringify(arrHeader);
		jsonInformation.LoopData = JSON.stringify(arrFooter);
		//jsonInformation.LoopData = JSON.stringify(arrFooter);

		BLProcessFile.ProcessOperation(jsonInformation, ProcessOperationError, ProcessOperationSuccess);

		function ProcessOperationError(jsonError) {
			CommonScripts.HideLoader();

			alert("Error: " + JSON.stringify(jsonError));
		}


		function ProcessOperationSuccess(jsonRecordWithResult) 
		{
			var result = jsonRecordWithResult.ResultObject;
			
			DataBinding($('#divModalHierarquia table[itable="tblDataHierarquia"]'),result.ReturnTableCollection[0]);//HierarquiaAdicionaColunasLink(result.ReturnTableCollection[0]));

			$('#divModalHierarquia table[itable="tblDataHierarquia"]').find('tbody tr').each(function(){
					$(this).css('cursor', 'pointer');
				});


			$('#divModalHierarquia table[itable="tblDataHierarquia"]').find('tbody tr').on('click', function(e){
				var colunas = $(this).find('td');
				
				$('#divModalHierarquia table[itable="tblDataHierarquia"] tbody tr').css('background-color', 'white');

				$(this).css('background-color', 'silver');

				$('#modalHierarquia #btnOk').show();
				
				$('#divModalLocalInstalacao #hdfLocalInstalacao').val(colunas[0].innerText);
				
			});
		}

	} catch (e) {
		alert(JSON.stringify(e));
	}
}

function showPanel(sel){
	zindex++;
	$(sel).css('z-index', zindex.toString());
	$(sel).show();
}

function resetConfirmacaoIndividual(){
	$('#divCondirmacaoIndividual #divIW41_GET_ORDER_OPERATION #txtNOrdem').val('');
	$('#divCondirmacaoIndividual #divIW41_GET_ORDER_OPERATION #tblIW41_GET_ORDER_OPERATION tbody').html('');
	$('#divCondirmacaoIndividual #divIW41_CONFIRM_ORDER input[type="text"]').val('');
	$('#divCondirmacaoIndividual #divIW41_CONFIRM_ORDER input[type="date"]').val('');
}


// function modalResult(modalName){
// 	try{
// 		var auxSep = $(modalName).find('#hdfResult').val().split(';');
// 		for (let i = 0; i < auxSep.length; i++) {
// 			const item = auxSep[i];
			
// 			var destino = item.split('=')[0];
// 			var origem = item.split('=')[1];

// 			$(destino).val($(origem).val());
// 		}
// 	} catch(e){
// 		alert(e);
// 	}
// }

function modalResult(modalName){
            
	try{
		
		var auxSep = $(modalName).find('#hdfResult').val().split(';');
		for (let i = 0; i < auxSep.length; i++) {
			const item = auxSep[i];
			
			var destino = item.split('=')[0];
			var origem = item.split('=')[1];

			$(destino).val($(origem).val());
		}
	} catch(e){
		alert(e);
	}
}


function modalExecuteCommand(ExecuteCommand){
	try{
		var auxSep = $(ExecuteCommand).find('#hdfExecuteCommand').val().split(';');
		for (let i = 0; i < auxSep.length; i++) {
			const theInstructions = auxSep[i];

			var F = new Function (theInstructions);

			return(F());
		}
	} catch(e){
		alert(e);
	}

	$(ExecuteCommand).find('#hdfExecuteCommand').val('');
}


/* Added for call process file _Check_Order by Ali Hassan on 2018-11-01 */
/* Function to Binding DataTable */
function ConvertFieldInTable(data) {
	var retorno = [];
	var header = Object.keys(data[0]);
	retorno.push(header);


	var dados = [];
	for (let l = 0; l < data.length; l++) {
		dados.push(Object.values(data[l]));
	}
	retorno.push(dados);


	return retorno;
}

function DataBinding(jqueryTableElement, data) {
	return DataBinding(jqueryTableElement, data, false, false);
}

function DataBinding(jqueryTableElement, data, withoutPage, withoutSearche) {
	if ($(jqueryTableElement).parent().find("#887999283-pagination").length > 0)
		$(jqueryTableElement).parent().find("#887999283-pagination").remove();

	var totalPage = Math.trunc(data[1].length / 10);
	if (data[1].length / 10 - Math.trunc(data[1].length / 10) > 0)
		totalPage++;

	if ($(jqueryTableElement).attr("DataFont") != "filtered")
		localStorage.setItem($(jqueryTableElement).selector, JSON.stringify(data))


	$(jqueryTableElement).attr("pageIndex", 0);
	$(jqueryTableElement).attr("totalPage", totalPage);

	if(!withoutSearche)
		if ($(jqueryTableElement).parent().find("#887999283-searche").length == 0) {
			$(
				'<div id="887999283-searche">Localizar: <input type="text" id="txtSearche" style="margin:20px 0px 20px 0px;" uuid="' +
				$(jqueryTableElement).selector + '"></div>').insertBefore($(
					jqueryTableElement));
			$(jqueryTableElement).parent().find('#txtSearche').on("change paste keyup",
				function () {
					filter(this);
				});
		}

	var paginationVar =
		'<div id="887999283-pagination" class="row" style="padding-left: 20px;"><div class="col-sm-4" style="height: 70px;line-height: 70px;">Exibindo <span id="lblBeginIndex"></span> até <span id="lblEndIndex"></span> de ' +
		data[1].length +
		' registros</div> <div class="col-sm-8" style="text-align: right"><ul class="pagination"><li class="fg-button ui-button ui-state-default first " id="btnFirst" uuid="' +
		$(jqueryTableElement).selector +
		'"><a href="#">Primeiro</a></li><li class="fg-button ui-button ui-state-default previous " id="BtnPrevious" uuid="' +
		$(jqueryTableElement).selector + '"><a href="#">Anterior</a></li>';
	for (let ipage = 0; ipage < totalPage; ipage++) {
		var activeVar = ipage == 0 ? 'active' : '';
		var pageHidden = ipage > 4 ? 'hidden' : '';
		paginationVar += '<li class="fg-button ui-button ui-state-default ' + activeVar +
			' ' + pageHidden + '" id="liPage' + ipage +
			'"><a href="#" aria-controls="btnPage" id="btnPage' + ipage + '" iPage="' +
			ipage + '" uuid="' + $(jqueryTableElement).selector + '">' + (ipage + 1) +
			'</a></li>';
	}
	paginationVar +=
		'<li class="fg-button ui-button ui-state-default next" id="BtnNext" uuid="' + $(
			jqueryTableElement).selector +
		'" ><a href="#">Proximo</a></li><li class="fg-button ui-button ui-state-default last " id="BtnLast" uuid="' +
		$(jqueryTableElement).selector + '"><a href="#">Ultimo</a></li></ul></div></div>'
	
	if(!withoutPage)
		$(paginationVar).insertAfter($(jqueryTableElement));

	var table = $(jqueryTableElement);

	if(!withoutPage){
		$(jqueryTableElement).parent().find('[aria-controls="btnPage"]').on("click touchend", function () {
			switchPage(this);
		});

		$(jqueryTableElement).parent().find('#btnFirst').on("click touchend", function () {

			var pageCurrentIndex = $(jqueryTableElement).attr("pageIndex") * 1;
			var elementAux = $(jqueryTableElement).parent().find('#btnPage0');
			switchPage(elementAux);
		});
		$(jqueryTableElement).parent().find('#BtnPrevious').on("click touchend", function () {

			var pageCurrentIndex = $(jqueryTableElement).attr("pageIndex") * 1 - 1;
			var elementAux = $(jqueryTableElement).parent().find('#btnPage' +
				pageCurrentIndex);
			switchPage(elementAux);
		});
		$(jqueryTableElement).parent().find('#BtnNext').on("click touchend", function () {

			var pageCurrentIndex = $(jqueryTableElement).attr("pageIndex") * 1 + 1;
			var elementAux = $(jqueryTableElement).parent().find('#btnPage' +
				pageCurrentIndex);
			switchPage(elementAux);
		});
		$(jqueryTableElement).parent().find('#BtnLast').on("click touchend", function () {

			var pageCurrentIndex = $(jqueryTableElement).attr("totalpage") * 1 - 1;
			var elementAux = $(jqueryTableElement).parent().find('#btnPage' +
				pageCurrentIndex);
			switchPage(elementAux);
		});
	}


	createRows(jqueryTableElement, 0, withoutPage);

}

var filterValueBefore = "";

function filter(elementInput) {

	if (filterValueBefore != $(elementInput).val()) {
		var tableName = $(elementInput).attr("uuid");
		var filterValueAfter = $(elementInput).val();


		if ($(elementInput).val().length > 0) {
			var DataBefore = JSON.parse(localStorage.getItem($(tableName).selector));
			var DataAfter = [DataBefore[0],
			[]
			];
			$($(tableName).selector).attr("DataFont", "filtered");



			for (let iLine = 0; iLine < DataBefore[1].length; iLine++) {
				const item = DataBefore[1][iLine];

				if (item.toString().indexOf(filterValueAfter) > 0)
					DataAfter[1].push(item);
			}


			localStorage.setItem($(tableName).selector + "_Filtered", JSON.stringify(
				DataAfter))
			DataBinding($(tableName), DataAfter);
		} else {
			$($(tableName).selector).attr("DataFont", "original");
			localStorage.removeItem($(tableName).selector + "_Filtered");
			DataBinding($(tableName), JSON.parse(localStorage.getItem($(tableName).selector)));
		}
		filterValueBefore = $(elementInput).val();
	}

}

function createRows(jqueryTableElement, iPage, withoutPage) {
	


	var data = null;
	var limit = iPage * 10 + 10;

	if(withoutPage)
	{
		ipage = 0;
		limit = 999999999999;
	}

	if ($(jqueryTableElement).attr("DataFont") == "filtered")
		data = JSON.parse(localStorage.getItem($(jqueryTableElement).selector +
			"_Filtered"));
	else
		data = JSON.parse(localStorage.getItem($(jqueryTableElement).selector));

	var imatnoIndex = returnImatno(jqueryTableElement, data);
	var imatnoStyle = returnStyleRow(jqueryTableElement, data);
	var formats = returnDataTypeFormats(jqueryTableElement, data);

	

	var strLine = "";
	var lastIndex = 0;
	for (let iLine = iPage * 10; iLine < limit && iLine < data[1].length; iLine++) {

		strLine += "<tr>";
		for (let iColumn = 0; iColumn < imatnoIndex.length; iColumn++) {
			const columnIndex = imatnoIndex[iColumn];

			var style = imatnoStyle[iColumn];

			if(style != ""){
				style = "style=\"" + style + "\"";
			}

			if (columnIndex >= 0)
				strLine += "<td "+style+">" + formatValue(data[1][iLine][columnIndex], formats[iColumn]) + "</td>";
			else
				strLine += "<td "+style+"></td>";
		}
		strLine += "</tr>";
		lastIndex = iLine;
	}
	//alert(strLine);
	$(jqueryTableElement).parent().find("#lblBeginIndex").text(iPage * 10 + 1);
	$(jqueryTableElement).parent().find("#lblEndIndex").text(lastIndex + 1);

	$(jqueryTableElement).find(' tbody').html(strLine);
}

function switchPage(jqueryElement) {
	var jqueryTableElement = $($(jqueryElement).attr("uuid"));


	var iPage = $(jqueryElement).attr("iPage") * 1;
	$(jqueryTableElement).attr("pageIndex", iPage);
	var totalPage = $(jqueryTableElement).attr("totalpage");

	$(jqueryTableElement).parent().find('[aria-controls="btnPage"]').parent('li').addClass(
		"hidden");
	$(jqueryTableElement).parent().find('li').removeClass("active");
	$(jqueryElement).parent('li').addClass("active");

	for (let iLi = iPage - 2; iLi < totalPage && iLi <= iPage + 2; iLi++) {
		$(jqueryTableElement).parent().find('#liPage' + iLi).removeClass("hidden");
	}

	if (iPage <= 2) {
		$(jqueryTableElement).parent().find('#liPage3').removeClass("hidden");
		$(jqueryTableElement).parent().find('#liPage4').removeClass("hidden");
	}

	createRows(jqueryTableElement, iPage, false);
}

function formatValue(value, type) {

	if (type == "hh:mm:ss"){
		if(value.indexOf(':') >= 0){
			var hora = value.split(':');
			return hora[0] + ':' + hora[1] + ':' + hora[2];
		} else {
			return value.substring(0, 2) + ":" + value.substring(2, 4) + ":" + value.substring(4, 6);
		}
	}

	if (type == "int") {
		return parseInt(value);
	}

	if (type == "dd/MM/yyyy") {
		if(value.indexOf('/') >= 0 || value.indexOf('-') >= 0){
			var date = new Date(value);
			return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
		} else {
			return value.substring(6, 8) + "/" + value.substring(4, 6) + "/" + value.substring(0, 4)
		}
	} else
		return value;
	}

function returnStyleRow(jqueryTableElement, data){
	var formats = [];


	$(jqueryTableElement).find(' thead tr th').each(function () {

		var dateFormat = $(this).attr('style');

		if (dateFormat != undefined) {

			formats.push(dateFormat);
		}
		else
			formats.push("");

	});
	return formats;
}

function returnImatno(jqueryTableElement, data) {
	var imatnoIndex = [];


	$(jqueryTableElement).find(' thead tr th').each(function () {

		var finded = false;

		var columnName = $(this).attr('imatno');
		for (let iColumn = 0; iColumn < data[0].length; iColumn++) {
			const element = data[0][iColumn];
			if (element == columnName) {
				imatnoIndex.push(iColumn);
				finded = true;
				continue;
			}
		}

		if (!finded)
			imatnoIndex.push(-1);
	});
	return imatnoIndex;
}

function returnDataTypeFormats(jqueryTableElement) {

	var formats = [];


	$(jqueryTableElement).find(' thead tr th').each(function () {

		var dateFormat = $(this).attr('dateFormat');

		if (dateFormat != undefined) {

			formats.push(dateFormat);
		}
		else
			formats.push("");

	});
	return formats;
}

function guid() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}








// Set constraints for the video stream
var constraints = { video: { facingMode: "user" }, audio: false };
// Define constants
const cameraView = document.querySelector("#camera--view"),
	cameraOutput = document.querySelector("#camera--output"),
	cameraSensor = document.querySelector("#camera--sensor"),
	cameraTrigger = document.querySelector("#camera--trigger")
// Access the device camera and stream to cameraView
function cameraStart() {
	navigator.mediaDevices
		.getUserMedia(constraints)
		.then(function (stream) {
			track = stream.getTracks()[0];
			cameraView.srcObject = stream;
		})
		.catch(function (error) {
			console.error("Oops. Something is broken.", error);
		});
}
// Take a picture when cameraTrigger is tapped
cameraTrigger.onclick = function () {
	cameraSensor.width = cameraView.videoWidth;
	cameraSensor.height = cameraView.videoHeight;
	cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
	cameraOutput.src = cameraSensor.toDataURL("image/webp");
	cameraOutput.classList.add("taken");
};
// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);

function InvertDDAndMM(date) {
	if(date == null)
		return "";
	var aux = date.split('/');

	return aux[1] + "/" + aux[0] + "/" + aux[2];
}

function Convert_yyyyMMdd(date) {
	var aux = date.toString().split('-');

	return aux[2] + "/" + aux[1] + "/" + aux[0];
}