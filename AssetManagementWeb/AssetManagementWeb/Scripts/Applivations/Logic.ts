/// <reference path="../typings/jquery/jquery.d.ts" />

 class AssignLocationModel {
    public AssetCode: string;
    public LocationCode: string;
    }

function initAssetAssigment() {
    $("#AssignAssetButton").click(function () {

        var locationCode: string = ("#LocationCOde").valueOf();
        var assetCode: string = ("#AssetCode").valueOf();

        alert(":L " + locationCode + ", A:" + assetCode);
        var data: AssignLocationModel = new AssignLocationModel();
        data.LocationCode = locationCode;
        data.AssetCode = assetCode;

        $.ajax({
            type: "POST",
            url: "Asset/AssignLocation",
            success: function (data) {
                if (data.success == true) {
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