/// <reference path="../typings/jquery/jquery.d.ts" />
var AssignLocationModel = /** @class */ (function () {
    function AssignLocationModel() {
    }
    return AssignLocationModel;
}());
function initAssetAssigment() {
    $("#AssignAssetButton").click(function () {
        var locationCode = $("#LocationCode").val();
        var assetCode = $("#AssetCode").val();
        alert("L: " + locationCode + ", A:" + assetCode);
        var data = new AssignLocationModel();
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
//# sourceMappingURL=Logic.js.map