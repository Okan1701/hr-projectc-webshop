using System;
using Microsoft.AspNetCore.Mvc;
using klaas.Models;
using Microsoft.AspNetCore.Authorization;

namespace klaas.Controllers{
    [Authorize]
    public class PrivateProfileController : Controller{

        public IActionResult index (){
           
                return View();
            
        }

        public IActionResult AccessGranted (){
            return View();

        }

    }
}