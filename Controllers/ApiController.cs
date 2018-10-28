using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using klaas.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace klaas.Controllers{
    public class ApiController : Controller{

        public class AuthorizeTokenAttribute : AuthorizeAttribute{
            public AuthorizeTokenAttribute (){
                AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme;
            }
        }

        [Route("api/login")]
        public IActionResult Login(){
            // var username = "halim";
            // var email = "halim@gmail.com";
            var claims = new []
            {
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString("N")),
                // new Claim(ClaimsIdentity.DefaultNameClaimType, username),
                // new Claim(JwtRegisteredClaimNames.Email, email),
                new Claim ("my key" , "my value"),
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(IoCContainer.Configuration["jwt:SecretKey"]));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                issuer:IoCContainer.Configuration["jwt:Issuer"],
                audience:IoCContainer.Configuration["jwt:Audience"],
                claims: claims,
                signingCredentials: credentials,
                expires: DateTime.Now.AddMonths(4)
            );
            return Ok(new {
                token = new JwtSecurityTokenHandler().WriteToken(token)
            });
        }

        [AuthorizeToken]
        [Route("api/profile")]        
        public IActionResult profile(){
            var user = HttpContext.User;
            return Ok (new {privateData = $"The private data of the{User.Identity.Name} user profile"});
        }
    }

        
}