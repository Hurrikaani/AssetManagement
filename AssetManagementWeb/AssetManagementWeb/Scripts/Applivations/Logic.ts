/// <reference path="../typings/jquery/jquery.d.ts" />

 class AssignLocationModel {
    public AssetCode: string;
    public LocationCode: string;
    }

function initAssetAssigment() {
    $("#AssignAssetButton").click(function () {

        var locationCode: string = $("#LocationCode").val();
        var assetCode: string = $("#AssetCode").val();

        alert("L: " + locationCode + ", A:" + assetCode);
        var data: AssignLocationModel = new AssignLocationModel();
        data.LocationCode = locationCode;
        data.AssetCode = assetCode;

        $.ajax({
            type: "POST",
            url: "/Asset/AssignLocation",
            data: JSON.stringify(data),
            contentType: "applivations/json",
            success: function (data) {
                if (data.success === true) {
                    alert("Asset succesfully assigned");
                }
                else {
                    alert("there was an error" + data.error);
                }
            },
            dataType: "json"
        });

      
    });
}