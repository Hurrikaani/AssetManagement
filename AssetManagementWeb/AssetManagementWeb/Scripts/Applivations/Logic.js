/// <reference path="../typings/jquery/jquery.d.ts" />
var AssignLocationModel = /** @class */ (function () {
    function AssignLocationModel() {
    }
    return AssignLocationModel;
}());
function initAssetAssigment() {
    $("#AssignAssetButton").click(function () {
        var locationCode = ("#LocationCOde").valueOf();
        var assetCode = ("#AssetCode").valueOf();
        alert(":L " + locationCode + ", A:" + assetCode);
        var data = new AssignLocationModel();
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
//# sourceMappingURL=Logic.js.map