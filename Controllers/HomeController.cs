using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using klaas.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace klaas.Controllers
{
    public class HomeController : Controller
    {
        protected UserManager<Users> mUserManager;
        protected SignInManager<Users> mSignInManager;
        private readonly WebshopContext _context;
       

         public HomeController(
            
            UserManager<Users> userManager,
            SignInManager<Users> signInManager, WebshopContext context)
            {
            
            mUserManager = userManager;
            mSignInManager = signInManager;
             _context = context;
        }
        public IActionResult Index()
        {
            var result =  from m in _context.Productwaarde select m;
            return View("Mainpage",result);
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

          public IActionResult Mainpage()
        {
            var result =  from m in _context.Productwaarde select m;
            return View(result);
        }

        [HttpPost]
         
         public IActionResult Mainpage(string hi)
        {
            
            var result =  from m in _context.Productwaarde select m;
            return View(result);
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }
        public IActionResult Signin()
        {
            ViewData["Message"] = "LogIn.";

            return RedirectToAction("Login", "Account");
        }
        public IActionResult signup()
        {
            ViewData["Message"] = "Sign Up.";

            return RedirectToAction("Register", "Account");
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        // [Route ("signup")]
        // public async Task<IActionResult> CreatUserAsync(){
        //     var result = await mUserManager.CreateAsync(new Users{
        //         UserName = "halim",
        //         Email = "halim@gmail.com"
        //     }, "1.Password");
        //     if (result.Succeeded)
        //         return Content("user was created", "text/html");
            
        //     return Content ("user creation faild", "text/html");
        // }

        [Authorize]
        [Route("profile")]
        public IActionResult userProfile(){
            return Content($"Welcome {HttpContext.User.Identity.Name} this is your profile.", "text/html");
        }

        // [Route("login")]
        // public async Task <IActionResult> login(string returnUrl){
        //    await HttpContext.SignOutAsync(IdentityConstants.ApplicationScheme);
        //    var result = await mSignInManager.PasswordSignInAsync("halim", "1.Password", true, false);
        //    if (result.Succeeded){
        //        if (string.IsNullOrEmpty(returnUrl))
        //             return RedirectToAction(nameof(Index));
        //     return Redirect (returnUrl);
        //    }
        //    return Content("Faild to login", "text/html");
        // }
        [HttpPost, ValidateAntiForgeryToken]
        public async Task<IActionResult> Registersign(register vm){
            if (ModelState.IsValid){
            
            var user = new Users {UserName = vm.email, Email = vm.email};
            var result = await mUserManager.CreateAsync(user, vm.password);
            if (result.Succeeded){
                await mSignInManager.SignInAsync(user, false);
                return RedirectToAction("Index", "Home");
            }else{
                    foreach (var error in result.Errors){
                    ModelState.AddModelError("", error.Description);
                    }               
                }
            }
            return Content("vm");  
        }
        
        [HttpGet]
        [Route("logout")]
        public async Task <IActionResult> logout(){
            await HttpContext.SignOutAsync(IdentityConstants.ApplicationScheme);
            return Content ("Logged out.", "text/html");
        }
    }
}
