using System.Threading.Tasks;
using klaas.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace klaas.Controllers{
    public class AccountController : Controller{
        private UserManager<Users> _userManager;
        private SignInManager<Users> _signInManager;
        public AccountController(UserManager<Users> userManager, SignInManager<Users> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }
        [HttpGet]
        public IActionResult Register(){
            return View();
        }
       
        [HttpPost]
        public async Task<IActionResult> Register(register vm){
            if (ModelState.IsValid){
            
            var user = new Users {UserName = vm.email, Email = vm.email};
            var result = await _userManager.CreateAsync(user, vm.password);
            if (result.Succeeded){
                await _signInManager.SignInAsync(user, false);
                return RedirectToAction("Index", "Home");
            }else{
                    foreach (var error in result.Errors){
                    ModelState.AddModelError("", error.Description);
                    }               
                }
            }
            return View(vm);  
        }

        [HttpGet]
        public IActionResult Login(){
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(login vm){
             if (ModelState.IsValid){
            var result = await _signInManager.PasswordSignInAsync(vm.Email, vm.Password, vm.RememberMe, false );
            if (result.Succeeded){
                // await _signInManager.SignInAsync(user, false);
                return RedirectToAction("Profile", "Account");
                // Content($"Welcome {vm.Email}, you are now logged in.");
            }else{                  
                    ModelState.AddModelError("", "Invalid Login Attempt.");           
                }
            }
            return View(vm);  
        }

        [HttpGet]
        [Authorize]
        public IActionResult Profile (){
           
                return View();
            
        }
        [HttpGet]
        [Route ("Admin")]
        [Authorize (Roles = "Admin")]
        public IActionResult AdminProfile(){
            return View();
        }
    }
}