using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AssetManagementWeb.Models
{
    public class AssignLocationModel
    {
        public string AssetCode { get; set; }
        public string LocationCode { get; set; }
        public int Id { get; set; }
        public string LastSeen { get; set; }
        public int? AssetId { get; set; }
        public int? LocationId { get; set; }
    }
}
