using Microsoft.AspNetCore.Identity;

namespace klaas.Configuration
{
    public class UserRole 
    {
        private readonly RoleManager <IdentityRole> _roleManager;
        public UserRole ( RoleManager<IdentityRole> roleManager){
            _roleManager = roleManager;
        }

        public async void Seed(){
            if ((await _roleManager.FindByNameAsync("Member")) == null){
                await _roleManager.CreateAsync(new IdentityRole{Name = "Member"});
            }
            if ((await _roleManager.FindByNameAsync("Admin")) == null){
                await _roleManager.CreateAsync(new IdentityRole{Name = "Admin"});
            }
        }
    }
}