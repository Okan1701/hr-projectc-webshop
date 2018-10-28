using Microsoft.AspNetCore.Mvc.Rendering;

namespace klaas.Models
{
    public class UserManagementAddRole
    {
        public string UserId { get; set; }
        public string NewRole { get; set; }
        public SelectList Roles { get; set; }
        public string Email { get; set; }
    }
}
